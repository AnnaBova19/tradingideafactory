from django.conf.urls import url

from .views import TradeList, TradeDetail, \
    PortfolioList, PortfolioDetail, \
    SpreadTradeList, SpreadTradeDetail, \
    StockList, StockDetail

app_name = 'backend'

urlpatterns = [
    url(r'^trades/$', TradeList.as_view(), name='trade-list_create'),
    url(r'^trades/(?P<pk>[0-9]+)/$', TradeDetail.as_view(), name='trade-search_edit_delete'),

    url(r'^portfolios/$', PortfolioList.as_view(), name='portfolio-list_create'),
    url(r'^portfolios/(?P<pk>[0-9]+)/$', PortfolioDetail.as_view(), name='portfolio-search_edit_delete'),

    url(r'^stocks/$', StockList.as_view(), name='stock-list'),
    url(r'^stocks/(?P<pk>[0-9]+)/$', StockDetail.as_view(), name='stock-search'),

    url(r'^spreadTrades/$', SpreadTradeList.as_view(), name='spreadTrade-list_create'),
    url(r'^spreadTrades/(?P<pk>[0-9]+)/$', SpreadTradeDetail.as_view(), name='spreadTrade-search_edit-delete'),

]
