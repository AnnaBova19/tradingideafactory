import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { SpreadTrade } from '../../models/index';

declare var $:any;

@Component({
  selector: 'app-spread-trade-table',
  templateUrl: './spread-trade-table.component.html',
  styleUrls: ['./spread-trade-table.component.scss']
})
export class SpreadTradeTableComponent implements OnInit {
  @Input() spreadTrades: SpreadTrade[] = [];
  @Input() weeksNumber: number;

  constructor(){}
 
  ngOnInit(){}

  getWeeksColumn(num: number): Array<null>{
    return new Array(num); 
  }

  getWeekPercentage(spreadTrade: SpreadTrade, index: number){
    return spreadTrade.history[index] || {end_week_percentage: '0.00'};
  }

  getColorClass(value){
    if (value > 0){
      return 'positive';
    } else if (value < 0){
      return 'negative';
    } else {
      return 'null';
    }
  }
}