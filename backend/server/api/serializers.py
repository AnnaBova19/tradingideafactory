from rest_framework import serializers

from server.models import Trade, Portfolio, User, History, SpreadTrade, Stock


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ['id']


class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = '__all__'
        read_only_fields = ['id']


class TradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trade
        fields = '__all__'
        read_only_fields = ['id']


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = '__all__'
        read_only_fields = ['id']


class HistorySerializer(serializers.ModelSerializer):

    class Meta:
        model = History
        fields = '__all__'
        read_only_fields = ['id']


class SpreadTradeSerializer(serializers.ModelSerializer):
    history = HistorySerializer(many=True, read_only=True)

    class Meta:
        model = SpreadTrade
        fields = '__all__'
        read_only_fields = ['id']




