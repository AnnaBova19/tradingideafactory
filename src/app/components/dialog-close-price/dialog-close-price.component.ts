import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { Trade } from '../../models/index';
import { LoaderService, TradeService } from '../../_services/index';
import { CURRENCY } from '../../models/index';

declare var $:any;

@Component({
  selector: 'dialog-close-price',
  templateUrl: './dialog-close-price.component.html',
  styleUrls: ['./dialog-close-price.component.scss']
})
export class DialogClosePriceComponent implements OnInit {
  closeTradeForm: FormGroup;
  currencies = CURRENCY;
  trade: Trade;
 
  constructor(
    private load: LoaderService,
    private tradeService: TradeService,
    public dialogRef: MatDialogRef<DialogClosePriceComponent>,
    private fb: FormBuilder) {
    this.closeTradeForm = fb.group({
      'close_price' : [null, Validators.compose([Validators.required, Validators.pattern("[0-9]+")])],
      'currency': [null, Validators.required],
      'status': 'Closed'
    });
  }

  ngOnInit() {
  }

  closeTrade(trade: Trade){
    this.load.start();
    this.tradeService.updateTrade(this.trade.id, trade)
    .subscribe(trade => {
      this.tradeService.getTrades();
      this.dialogRef.close();
      this.load.success('The close price was successfully added');       
    }, error => {
      this.load.end();
      this.dialogRef.close();
    });
  }


}