import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Trade } from '../../models/index';

@Component({
  selector: 'app-trade-history-table',
  templateUrl: './trade-history-table.component.html',
})
export class TradeHistoryTableComponent implements OnInit {
  @Input() trades: Trade[] = [];
  status: string = 'Closed';

  constructor() { }
 
  ngOnInit() {
  } 
}