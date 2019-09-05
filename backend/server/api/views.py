from django.db.models import Count
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from server.api.serializers import TradeSerializer, PortfolioSerializer, SpreadTradeSerializer, HistorySerializer, \
    StockSerializer
from server.models import Trade, Portfolio, User, SpreadTrade, History, Stock


class TradeList(APIView):
    """
    get:
    Return a list of all existing trades related to portfolio created by authorized user.
    GET /api/trades/

    post:
    Create a new trade instance for portfolio related to authorized user.
    POST /api/trades/
    """
    def get(self, request):
        portfolio = Portfolio.objects.get(user_id=request.session['user_id'])
        trades = Trade.objects.filter(portfolio_id=portfolio.id)
        serializer = TradeSerializer(trades, many=True)
        return Response(serializer.data)

    def post(self, request):
        portfolio_id = (Portfolio.objects.get(user_id=request.session['user_id'])).id
        request.data['portfolio'] = portfolio_id
        serializer = TradeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TradeDetail(APIView):
    """
    get:
    Retrieve the given trade instance from portfolio related to authorized user.
    GET /api/trades/:id/

    patch:
    Update the given trade instance from portfolio related to authorized user.
    PATCH /api/trades/:id/

    delete:
    Delete the trade instance from portfolio related to authorized user.
    DELETE /api/trades/:id/
    """
    def get_object(self, pk, portfolio_id):
        try:
            return Trade.objects.get(pk=pk, portfolio_id=portfolio_id)
        except Trade.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        trade = self.get_object(pk, portfolio_id=(Portfolio.objects.get(user_id=request.session['user_id'])).id)
        serializer = TradeSerializer(trade)
        return Response(serializer.data)

    def patch(self, request, pk):
        trade = self.get_object(pk, portfolio_id=(Portfolio.objects.get(user_id=request.session['user_id'])).id)
        serializer = TradeSerializer(trade, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        trade = self.get_object(pk, portfolio_id=(Portfolio.objects.get(user_id=request.session['user_id'])).id)
        trade.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PortfolioList(APIView):
    """
    get:
    Return a list of all existing portfolios for authorized user.
    GET /api/portfolios/

    post:
    Create a new portfolio instance to authorized user.
    POST /api/portfolios/
    """
    def get(self, request):
        user = User.objects.get(id=request.session['user_id'])
        portfolios = Portfolio.objects.filter(user_id=user.id)
        serializer = PortfolioSerializer(portfolios, many=True)
        return Response(serializer.data)

    def post(self, request):
        user_id = request.session['user_id']
        request.data['user'] = user_id
        serializer = PortfolioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PortfolioDetail(APIView):
    """
    get:
    Retrieve the given portfolio instance for authorized user.
    GET /api/portfolios/:id/

    patch:
    Update the given portfolio instance to authorized user.
    PATCH /api/portfolios/:id/

    delete:
    Delete the portfolio instance to authorized user.
    DELETE /api/portfolios/:id/
    """
    def get_object(self, pk, user_id):
        try:
            return Portfolio.objects.get(pk=pk, user_id=user_id)
        except Portfolio.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        portfolio = self.get_object(pk, request.session['user_id'])
        serializer = PortfolioSerializer(portfolio)
        return Response(serializer.data)

    def patch(self, request, pk):
        portfolio = self.get_object(pk, request.session['user_id'])
        serializer = PortfolioSerializer(portfolio, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        portfolio = self.get_object(pk, request.session['user_id'])
        portfolio.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class StockList(APIView):
    """
    get:
    Return a list of all stocks instances.
    GET /api/stocks/
    """
    def get(self, request):
        stocks = Stock.objects.all()
        serializer = StockSerializer(stocks, many=True)
        return Response(serializer.data)


class StockDetail(APIView):
    """
    get:
    Retrieve the given stock instance.
    GET /api/stocks/:id/
    """
    def get_object(self, pk):
        try:
            return Stock.objects.get(pk=pk)
        except Stock.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        stock = self.get_object(pk)
        serializer = StockSerializer(stock)
        return Response(serializer.data)


class SpreadTradeList(APIView):
    """
    get:
    Return a list of all existing spreadTrades for authorized user.
    GET /api/spreadTrades/

    post:
    Create a new spreadTrade instance to authorized user.
    POST /api/spreadTrades/
    """
    def get(self, request):
        user = User.objects.get(id=request.session['user_id'])
        # retrieve all spreadtrades ordered by quantity of histories desc
        spreadtrades = SpreadTrade.objects.filter(user_id=user.id).annotate(
            history_count=Count('history')).order_by('-history_count')
        serializer = SpreadTradeSerializer(spreadtrades, many=True)
        return Response(serializer.data)

    def post(self, request):
        user_id = request.session['user_id']
        request.data['user'] = user_id
        serializer = SpreadTradeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SpreadTradeDetail(APIView):
    """
    get:
    Retrieve the given spreadTrade instance for authorized user.
    GET /api/spreadTrades/:id/

    patch:
    Update the given spreadTrade instance to authorized user.
    PATCH /api/spreadTrades/:id/

    delete:
    Delete the spreadTrade instance to authorized user.
    DELETE /api/spreadTrades/:id/
    """

    def get_object(self, pk, user_id):
        try:
            return SpreadTrade.objects.get(pk=pk, user_id=user_id)
        except SpreadTrade.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        spreadtrade = self.get_object(pk, request.session['user_id'])
        serializer = SpreadTradeSerializer(spreadtrade)
        return Response(serializer.data)

    def patch(self, request, pk):
        spreadtrade = self.get_object(pk, request.session['user_id'])
        serializer = SpreadTradeSerializer(spreadtrade, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        spreadtrade = self.get_object(pk, request.session['user_id'])
        spreadtrade.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

