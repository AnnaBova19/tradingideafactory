from decimal import Decimal

import datetime

import requests

from django.db import models

from backend.settings import API_KEY


class User(models.Model):
    user_id = models.CharField(max_length=80, null=False, blank=True)
    username = models.CharField(max_length=80, null=True, blank=True)
    picture = models.CharField(max_length=300, null=True, blank=True)
    token = models.CharField(max_length=40, null=True, blank=True)

    def __str__(self):
        return self.username


class Portfolio(models.Model):
    CURRENCY_TYPES = (
        ('USD', 'USD'),
        ('EUR', 'EUR'),
        ('GBP', 'GBP')
    )

    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=80, null=True, blank=True)
    account_balance = models.FloatField(null=True, blank=True)
    currency = models.CharField(max_length=3, choices=CURRENCY_TYPES, null=True, blank=True)

    def __str__(self):
        return self.name


class Trade(models.Model):
    SIGNAL_TYPES = (
        ('BUY', 'BUY'),
        ('SHORT', 'SHORT')
    )

    DIRECTION_TYPES = (
        ('Long', 'Long'),
        ('Short', 'Short')
    )

    STATUS_TYPES = (
        ('Open', 'Open'),
        ('Closed', 'Closed')
    )

    TRADING_TYPES = (
        ('Long-Term', 'Long-Term'),
        ('Short-Term', 'Short-Term')
    )

    CURRENCY_TYPES = (
        ('USD', 'USD'),
        ('EUR', 'EUR'),
        ('GBP', 'GBP')
    )

    portfolio = models.ForeignKey(Portfolio, null=True, blank=False, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True, null=True, blank=True)
    asset_name = models.CharField(max_length=80, null=True, blank=True)
    asset_symbol = models.CharField(max_length=10, null=True, blank=True)
    signal = models.CharField(max_length=5, choices=SIGNAL_TYPES, null=True, blank=True)
    direction = models.CharField(max_length=5, choices=DIRECTION_TYPES, null=True, blank=True)
    currency = models.CharField(max_length=3, choices=CURRENCY_TYPES, null=True, blank=True)
    position_size = models.FloatField(null=True, blank=True)
    current_price = models.FloatField(null=True, blank=True)
    open_price = models.FloatField(null=True, blank=True)
    stop_target = models.FloatField(null=True, blank=True)
    stop_loss = models.IntegerField(null=True, blank=True)
    soft_profit_target = models.FloatField(null=True, blank=True)
    close_price = models.FloatField(null=True, blank=True)
    exposure = models.FloatField(null=True, blank=True)
    take_profit = models.FloatField(null=True, blank=True)
    risk = models.IntegerField(null=True, blank=True)
    profit = models.FloatField(null=True, blank=True)
    gain = models.FloatField(null=True, blank=True)
    status = models.CharField(max_length=6, choices=STATUS_TYPES, null=True, blank=True)
    trading = models.CharField(max_length=10, choices=TRADING_TYPES, null=True, blank=True)
    # analysis

    def __str__(self):
        return str(self.date)


class Stock(models.Model):
    symbol = models.CharField(unique=True, max_length=30, null=False, blank=False)
    name = models.CharField(max_length=300, null=False, blank=False)
    sector = models.CharField(max_length=300, null=True, blank=True)
    industry = models.CharField(max_length=300, null=True, blank=True)

    def __str__(self):
        return self.name


class SpreadTrade(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    # name of first active
    longs = models.OneToOneField(Stock, related_name='first_active', null=False, blank=False, on_delete=models.CASCADE)
    # name of second active
    shorts = models.OneToOneField(Stock, related_name='second_active', null=False, blank=False, on_delete=models.CASCADE)
    # entered values for each active
    long_entry = models.DecimalField(decimal_places=2, max_digits=50, null=False, blank=False)
    short_entry = models.DecimalField(decimal_places=2, max_digits=50, null=False, blank=False)

    spread = models.DecimalField(decimal_places=2, max_digits=50, null=True, blank=True)

    # sync values from Yahoo Finance for each active (Mon-Fri)
    long = models.DecimalField(decimal_places=2, max_digits=50, null=True, blank=True)
    short = models.DecimalField(decimal_places=2, max_digits=50, null=True, blank=True)

    current_spread = models.DecimalField(decimal_places=2, max_digits=50, null=True, blank=True)
    percentage = models.DecimalField(decimal_places=4, max_digits=50, null=True, blank=True)

    created = models.DateTimeField(null=True, blank=False)

    def calculate_spread(self):
        return Decimal(self.long_entry) / Decimal(self.short_entry)

    def get_current_values(self):
        """
        Get current close prices from API calls when creating/updating spreadtrades
        """
        longs_current_response = requests.get(
            'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={}&interval=1min&apikey={}'.format(
                self.longs.symbol, API_KEY))
        longs_last_refreshed = longs_current_response.json()["Meta Data"]["3. Last Refreshed"]
        self.long = longs_current_response.json()["Time Series (1min)"][longs_last_refreshed]["4. close"]

        shorts_current_response = requests.get(
            'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={}&interval=1min&apikey={}'.format(
                self.shorts.symbol, API_KEY))
        shorts_last_refreshed = shorts_current_response.json()["Meta Data"]["3. Last Refreshed"]
        self.short = shorts_current_response.json()["Time Series (1min)"][shorts_last_refreshed]["4. close"]

        # calculate related values
        self.current_spread = Decimal(self.long) / Decimal(self.short)

        self.percentage = (self.current_spread - Decimal(self.spread)) / Decimal(self.spread)
        return self.long, self.short, self.current_spread, self.percentage

    def save(self, *args, **kwargs):
        # if the objects is not in the database yet
        # otherwise it would have pk
        if not self.id:
            self.created = datetime.datetime.utcnow()
        self.spread = self.calculate_spread()
        self.long, self.short, self.current_spread, self.percentage = self.get_current_values()
        super(SpreadTrade, self).save(*args, **kwargs)

    def __str__(self):
        return str(self.longs) + '/' + str(self.shorts)


class History(models.Model):
    spreadtrade = models.ForeignKey(SpreadTrade, related_name='history', null=True, blank=True, on_delete=models.CASCADE)
    end_week_date = models.DateTimeField(null=True, blank=False)
    end_week_percentage = models.DecimalField(decimal_places=4, max_digits=50, null=True, blank=True)

    def __str__(self):
        return datetime.datetime.strftime(self.end_week_date, '%d/%m/%Y')
