import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './/app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutModule } from './/layouts/layout.module';

import { 
  LoaderService,
  AssetService,
  AuthService,
  ExistingPortfolioGuard,
  NewPortfolioGuard,
  PortfolioService,
  ScriptLoaderService,
  SpreadTradeService,
  StockService,
  TradeService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [
    LoaderService,
    AssetService,
    AuthService,
    ExistingPortfolioGuard,
    NewPortfolioGuard,
    PortfolioService,
    ScriptLoaderService,
    SpreadTradeService,
    StockService,
    TradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
