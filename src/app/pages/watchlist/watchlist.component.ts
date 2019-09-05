import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { MatDialog } from '@angular/material';
import { DialogNewSpreadTradeComponent } from '../../components/index';

import { SpreadTrade, Stock } from '../../models/index';
import { SpreadTradeService, StockService } from '../../_services/index';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
})
export class WatchlistComponent implements OnInit {
  spreadTrades: SpreadTrade[] = [];
  stocks: Stock[] = [];
  weeksNumber: number = 0;

  constructor(
    private _script: ScriptLoaderService,
    public dialog: MatDialog,
    private spreadTradeService: SpreadTradeService,
    private stockService: StockService
  ) {}


  ngOnInit() {
    this.stockService.getStocks()
    .subscribe(stocks => {
      this.stocks = stocks;
      this.spreadTradeService.getSpreadTrades()
      .subscribe(spreadTrades => {
        this.spreadTrades = spreadTrades;
        return this.spreadTrades.forEach(el => {
          let longs = this.stocks.find(stock => stock.id.toString() == el.longs);
          el.longs = (longs) ? longs.symbol : el.longs;
          let shorts = this.stocks.find(stock => stock.id.toString() == el.shorts);
          el.shorts = (shorts) ? shorts.symbol : el.shorts;
          if (el.history.length > this.weeksNumber){
            this.weeksNumber = el.history.length;
          }
        });
      }); 
    });
  }

  openNewSpreadTradeDialog(){
    const dialogRef = this.dialog.open( DialogNewSpreadTradeComponent, {
      height: 'auto'
    });
  }
}