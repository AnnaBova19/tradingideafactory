import { Component, OnInit, AfterViewInit, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { SpreadTrade, Stock } from '../../models/index';
import { LoaderService, SpreadTradeService, StockService } from '../../_services/index';


@Component({
  selector: 'dialog-new-spread-trade',
  templateUrl: './dialog-new-spread-trade.component.html',
  styleUrls: ['./dialog-new-spread-trade.component.scss']
})
export class DialogNewSpreadTradeComponent implements OnInit {
  createSpreadTradeForm: FormGroup;
  spreadTrades: SpreadTrade[] = [];
  stocks: Stock[] = [];
  filteredLongs: Observable<Stock[]>;
  filteredShorts: Observable<Stock[]>;

  constructor(
    private load: LoaderService,
    public dialogRef: MatDialogRef<DialogNewSpreadTradeComponent>,
    private spreadTradeService: SpreadTradeService,
    private stockService: StockService,
    private fb: FormBuilder) {
    this.createSpreadTradeForm = fb.group({
      'longs': [ null, Validators.required],
      'shorts' : [null, Validators.required],
      'long_entry' : [null, Validators.required],
      'short_entry': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.getListOfStocks();
    this.filteredLongs = this.createSpreadTradeForm.controls.longs.valueChanges
    .pipe(
      startWith(''),
      map(value => this.filterStocks(value))
    );
    this.filteredShorts = this.createSpreadTradeForm.controls.shorts.valueChanges
    .pipe(
      startWith(''),
      map(value => this.filterStocks(value))
    );
  }

  getListOfStocks(){
    this.stockService.getStocks()
    .subscribe(stocks => this.stocks = stocks);     
  }

  filterStocks(value: string): Stock[] {
    return this.stocks.filter(stock =>
      stock.name.toLowerCase().indexOf(value.toLowerCase()) === 0 || stock.symbol.toLowerCase().indexOf(value.toLowerCase()) === 0)
      .slice(0, 30);
  }

  createNewSpreadTrade(spreadTrade: SpreadTrade){
    this.load.start();
    spreadTrade.longs = this.stocks.find(stock => stock.symbol == spreadTrade.longs).id.toString();
    spreadTrade.shorts = this.stocks.find(stock => stock.symbol == spreadTrade.shorts).id.toString();
    this.spreadTradeService.createSpreadTrade(spreadTrade)
    .subscribe(spreadTrade => {
      this.spreadTrades.push(spreadTrade);
      this.spreadTradeService.getSpreadTrades();
      this.dialogRef.close();
      this.load.success('The spread trade was successfully created'); 
    }, error => {
      this.load.end();
      this.dialogRef.close();
    });
  }


}