import datetime

import requests
from celery.task import task
from decimal import Decimal
from django.core.exceptions import ObjectDoesNotExist, FieldDoesNotExist

from backend.settings import API_KEY
from server.models import Stock, History, SpreadTrade


@task(bind=True)
def sync_values(self):
    """
    Updating existing spreadtrades with current close prices from API calls every 15 mins
    """
    try:
        for pair in SpreadTrade.objects.all():
            # get first and second stock symbols
            longs_stock_symbol = Stock.objects.get(id=pair.longs_id).symbol
            shorts_stock_symbol = Stock.objects.get(id=pair.shorts_id).symbol

            # get current prices from API calls
            long_current_response = requests.get(
                'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={}&interval=1min&apikey={}'.format(
                    longs_stock_symbol, API_KEY))
            longs_last_refreshed = long_current_response.json()["Meta Data"]["3. Last Refreshed"]
            longs_current_price = long_current_response.json()["Time Series (1min)"][longs_last_refreshed]["4. close"]

            shorts_current_response = requests.get(
                'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={}&interval=1min&apikey={}'.format(
                    shorts_stock_symbol, API_KEY))
            shorts_last_refreshed = shorts_current_response.json()["Meta Data"]["3. Last Refreshed"]
            shorts_current_price = shorts_current_response.json()["Time Series (1min)"][shorts_last_refreshed]["4. close"]

            # calculate related values
            current_spread = Decimal(longs_current_price) / Decimal(shorts_current_price)

            spread = SpreadTrade.objects.get(id=pair.id).spread
            percentage = (current_spread - Decimal(spread)) / Decimal(spread)

            # update db table SpreadTrade with current values
            SpreadTrade.objects.filter(id=pair.id).update(long=longs_current_price,
                                                          short=shorts_current_price,
                                                          current_spread=current_spread,
                                                          percentage=percentage)
    except ObjectDoesNotExist as e:
        print("Either the SpreadTrade or Stock does not exist.")
        raise self.retry(exc=e)
    except FieldDoesNotExist as e:
        print("Some or one of the fields are not exist.")
        raise self.retry(exc=e)
    except Exception as exc:
        raise exc


@task(bind=True)
def change_history(self):
    # At the end of each week (Fri), we add a new record to the db table with current percentage
    date = datetime.datetime.utcnow()
    try:
        for pair in SpreadTrade.objects.all():
            history = History.objects.filter(spreadtrade_id=pair.id)
            if history.count() > 16:
                # delete the first record
                History.objects.filter(end_week_date__exact=date - datetime.timedelta(weeks=16)).delete()
            History.objects.create(end_week_date=date, end_week_percentage=pair.percentage, spreadtrade_id=pair.id)
    except ObjectDoesNotExist as e:
        print("Either the SpreadTrade or History does not exist.")
        raise self.retry(exc=e)
    except FieldDoesNotExist as e:
        print("Some or one of the fields are not exist.")
        raise self.retry(exc=e)
    except Exception as exc:
        raise exc
