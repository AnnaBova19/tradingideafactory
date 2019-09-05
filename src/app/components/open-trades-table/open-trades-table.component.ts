import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Trade } from '../../models/index';
import { MatDialog } from '@angular/material';
import { DialogClosePriceComponent } from '../../components/dialog-close-price/dialog-close-price.component';

@Component({
  selector: 'app-open-trades-table',
  templateUrl: './open-trades-table.component.html',
  styleUrls: ['./open-trades-table.component.scss']
})
export class OpenTradesTableComponent implements OnInit {
  @Input() trades: Trade[] = [];
  status: string = 'Open';

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openCloseTradeDialog(trade: Trade){
    const dialogRef = this.dialog.open( DialogClosePriceComponent, {
      height: 'auto'
    });
    dialogRef.componentInstance.trade = trade;
  }
}