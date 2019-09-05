import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { Asset, Trade } from '../../models/index';
import { LoaderService, AssetService, TradeService } from '../../_services/index';
import { SIGNAL, DIRECTION, STATUS, TRADING } from '../../models/selects';

declare var $:any;
declare var moment: any;

@Component({
  selector: 'dialog-new-trade',
  templateUrl: './dialog-new-trade.component.html',
  styleUrls: ['./dialog-new-trade.component.scss']
})
export class DialogNewTradeComponent implements OnInit {
  createTradeForm: FormGroup;
  signals = SIGNAL;
  directions = DIRECTION;
  status = STATUS;
  tradings = TRADING;
  assets: Asset[] = [];
  trades: Trade[] = [];

  constructor(
    private load: LoaderService,
    private assetService: AssetService,
    public dialogRef: MatDialogRef<DialogNewTradeComponent>,
    private tradeService: TradeService,
    private fb: FormBuilder) {
    this.createTradeForm = fb.group({
      'date': [ new Date(), Validators.required],
      'asset_name' : [null, Validators.required],
      'direction' : [null, Validators.required],
      'position_size': [null, Validators.compose([Validators.required, Validators.pattern("[0-9]+")])],
      'current_price': [null, Validators.compose([Validators.required, Validators.pattern("[0-9]+")])],
      'open_price': [null, Validators.compose([Validators.required, Validators.pattern("[0-9]+")])],    
      'stop_target': [null, Validators.required],
      'soft_profit_target': [null, Validators.required],
      'exposure': [null, Validators.required],
      'profit': [null, Validators.required],
      'status' : [null, Validators.required],
      'trading' : [null, Validators.required]
    });
  }

  ngOnInit() {
    // this.assetService.getAssets()
    // .subscribe(assets => {
    //   this.assets = assets;
    // })
  }

  createNewTrade(trade: Trade){
    this.load.start();
    trade.date = moment(trade.date).format('YYYY-MM-DD');
    this.tradeService.createTrade(trade)
    .subscribe(trade => {
      this.trades.push(trade);
      this.tradeService.getTrades();
      this.dialogRef.close();
      this.load.success('The trade was successfully created'); 
    }, error => {
      this.load.end();
      this.dialogRef.close();
    });
  }


}