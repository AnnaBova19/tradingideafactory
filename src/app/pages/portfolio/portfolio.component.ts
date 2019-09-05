import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { MatDialog } from '@angular/material';
import { DialogNewTradeComponent } from '../../components/index';

import { Trade } from '../../models/index';
import { AuthService, TradeService } from '../../_services/index';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls:['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  activePortfolioTab: string = 'growth';
  activeTradeTab: string = 'openTrades';
  trades: Trade[] = [];

  constructor(
    private _script: ScriptLoaderService,
    private auth: AuthService,
    public dialog: MatDialog,
    private tradeService: TradeService
  ) {}


  ngOnInit() {
    this.tradeService.getTrades()
    .subscribe(trades => this.trades = trades); 
  }

  ngAfterViewInit() {}
  
  setPortfolioTab(value:string){
    this.activePortfolioTab = value;
  }  
  setTradeTab(value:string){
    this.activeTradeTab = value;
  }
  isAuth(){
    return this.auth.isAuthenticated();
  }

  openNewTradeDialog(){
    const dialogRef = this.dialog.open( DialogNewTradeComponent, {
      height: 'auto'
    });
  }

}