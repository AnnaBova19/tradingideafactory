import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { 
  MatAutocompleteModule,
  MatDatepickerModule,
  MatDialogModule,
  MatInputModule,
  MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { LayoutComponent } from './/layouts/layout.component';

import { HomeComponent } from './pages/home/home.component';

import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SearchComponent } from './pages/search/search.component';
import { LockscreenComponent } from './pages/lockscreen/lockscreen.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { Error4042Component } from './pages/error-404-2/error-404-2.component';
import { Error403Component } from './pages/error-403/error-403.component';
import { Error500Component } from './pages/error-500/error-500.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TradingJournalComponent } from './pages/trading-journal/trading-journal.component';
import { BondViewsComponent } from './pages/idea-generation/bond-views/bond-views.component';
import { CurrencyViewsComponent } from './pages/idea-generation/currency-views/currency-views.component';
import { CommoditiesViewsComponent } from './pages/idea-generation/commodities-views/commodities-views.component';
import { CnStocksComponent } from './pages/idea-generation/stock-views/cn-stocks/cn-stocks.component';
import { EuStocksComponent } from './pages/idea-generation/stock-views/eu-stocks/eu-stocks.component';
import { UsStocksComponent } from './pages/idea-generation/stock-views/us-stocks/us-stocks.component';
import { CnIndustriesComponent } from './pages/idea-generation/industry-views/cn-industries/cn-industries.component';
import { EuIndustriesComponent } from './pages/idea-generation/industry-views/eu-industries/eu-industries.component';
import { UsIndustriesComponent } from './pages/idea-generation/industry-views/us-industries/us-industries.component';
import { BuildingPermitsHousingComponent } from './pages/idea-generation/world-views/building-permits-housing/building-permits-housing.component';
import { ConsumersComponent } from './pages/idea-generation/world-views/consumers/consumers.component';
import { DurableGoodsComponent } from './pages/idea-generation/world-views/durable-goods/durable-goods.component';
import { GdpPredictionComponent } from './pages/idea-generation/world-views/gdp-prediction/gdp-prediction.component';
import { GoodsProducedComponent } from './pages/idea-generation/world-views/goods-produced/goods-produced.component';
import { MajorIndustryGroupsComponent } from './pages/idea-generation/world-views/major-industry-groups/major-industry-groups.component';
import { MajorMarketGroupsComponent } from './pages/idea-generation/world-views/major-market-groups/major-market-groups.component';
import { ManufactoringComponent } from './pages/idea-generation/world-views/manufactoring/manufactoring.component';
import { NonFarmPayrollsComponent } from './pages/idea-generation/world-views/non-farm-payrolls/non-farm-payrolls.component';
import { ServicesComponent } from './pages/idea-generation/world-views/services/services.component';
import { ServicesProducedComponent } from './pages/idea-generation/world-views/services-produced/services-produced.component';
import { TotalPrivateComponent } from './pages/idea-generation/world-views/total-private/total-private.component';
import { UnemploymentClaimsComponent } from './pages/idea-generation/world-views/unemployment-claims/unemployment-claims.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { ManualDataComponent } from './pages/manual-data/manual-data.component';
import { TechnicalAnalysisComponent } from './pages/gate-keeping/technical-analysis/technical-analysis.component';
import { PriceActionComponent } from './pages/gate-keeping/price-action/price-action.component';
import { ATRComponent } from './pages/risk-management/atr/atr.component';
import { DistributionOddsCalculationComponent } from './pages/risk-management/distribution-odds-calculation/distribution-odds-calculation.component';
import { ImpliedVolatilityAssessmentComponent } from './pages/risk-management/implied-volatility-assessment/implied-volatility-assessment.component';

import { 
  DialogClosePriceComponent,
  DialogNewPortfolioComponent,
  DialogNewTradeComponent,
  DialogNewSpreadTradeComponent} from './components/index';

import { AppDeclarations } from './declarations';
import { CommonModule } from '@angular/common';
import { 
  AuthService,
  ExistingPortfolioGuard,
  NewPortfolioGuard
 } from './_services/index';

import { 
  DataTableDirective,
  MorrisLineChartDirective, 
  EasypieDirective } from './directives/index';

const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},   
    { 
      path: "",
      component: LayoutComponent,
      "children": [
          {
            path: "index",
            component: HomeComponent,
            canActivate: [NewPortfolioGuard]
          }, 
          {
            path: "portfolio",
            component: PortfolioComponent,
            canActivate: [ExistingPortfolioGuard]
          },                   
          {
            path: "search",
            component: SearchComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "profile",
            component: ProfileComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "watchlist",
            component: WatchlistComponent,
            canActivate: [ExistingPortfolioGuard]
          },   
          {
            path: "trading-journal",
            component: TradingJournalComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/bond-views",
            component: BondViewsComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/currency-views",
            component: CurrencyViewsComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/commodities-views",
            component: CommoditiesViewsComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/stock-views/cn-stocks",
            component: CnStocksComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/stock-views/eu-stocks",
            component: EuStocksComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/stock-views/us-stocks",
            component: UsStocksComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/industry-views/cn-undustries",
            component: CnIndustriesComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/industry-views/eu-undustries",
            component: EuIndustriesComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/industry-views/us-undustries",
            component: UsIndustriesComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/world-views/building-permits-housing",
            component: BuildingPermitsHousingComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/world-views/consumers",
            component: ConsumersComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/world-views/durable-goods", 
            component: DurableGoodsComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/world-views/gdp-prediction",
            component: GdpPredictionComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/world-views/goods-produced",
            component: GoodsProducedComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/world-views/major-industry-groups",
            component: MajorIndustryGroupsComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/world-views/major-market-groups",
            component: MajorMarketGroupsComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/world-views/manufactoring",
            component: ManufactoringComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/world-views/non-farm-payrolls",
            component: NonFarmPayrollsComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/world-views/services",
            component: ServicesComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/world-views/services-produced",
            component: ServicesProducedComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/world-views/total-private",
            component: TotalPrivateComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "idea-generation/world-views/unemployment-claims",
            component: UnemploymentClaimsComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "risk-management/atr",
            component: UnemploymentClaimsComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "risk-management/distribution-odds-calculation",
            component: ATRComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "risk-management/implied-volatility-assessment",
            component: ImpliedVolatilityAssessmentComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "gate-keeping/technical-analysis",
            component: TechnicalAnalysisComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "gate-keeping/price-action",
            component: PriceActionComponent,
            canActivate: [ExistingPortfolioGuard]
          },
          {
            path: "manual-data",
            component: ManualDataComponent,
            canActivate: [ExistingPortfolioGuard]
          }
      ],
      canActivate: [AuthService]
    },
    {
        "path": "lockscreen",
        "component": LockscreenComponent
    },
    {
        "path": "forgot_password",
        "component": ForgotPasswordComponent
    },
    {
        "path": "error_404",
        "component": Error404Component
    },
    {
        "path": "error_404-2",
        "component": Error4042Component
    },
    {
        "path": "error_403",
        "component": Error403Component
    },
    {
        "path": "error_500",
        "component": Error500Component
    },
    {
        "path": "maintenance",
        "component": MaintenanceComponent
    },
    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
];

@NgModule({
  declarations: [
    AppDeclarations,
    HomeComponent,
    PortfolioComponent,
    SearchComponent,
    LockscreenComponent,
    ForgotPasswordComponent,
    Error404Component,
    Error4042Component,
    Error403Component,
    Error500Component,
    MaintenanceComponent,
    ProfileComponent,
    TradingJournalComponent,
    BondViewsComponent,
    CurrencyViewsComponent,
    CommoditiesViewsComponent,
    CnStocksComponent,
    EuStocksComponent,
    UsStocksComponent,
    CnIndustriesComponent,
    EuIndustriesComponent,
    UsIndustriesComponent,
    BuildingPermitsHousingComponent,
    ConsumersComponent,
    DurableGoodsComponent,
    GdpPredictionComponent,
    GoodsProducedComponent,
    MajorIndustryGroupsComponent,
    MajorMarketGroupsComponent,
    ManufactoringComponent,
    NonFarmPayrollsComponent,
    ServicesComponent,
    ServicesProducedComponent,
    TotalPrivateComponent,
    UnemploymentClaimsComponent,
    WatchlistComponent,
    ATRComponent,
    DistributionOddsCalculationComponent,
    ImpliedVolatilityAssessmentComponent,
    TechnicalAnalysisComponent,
    PriceActionComponent,
    ManualDataComponent,
    DialogClosePriceComponent,
    DialogNewPortfolioComponent,
    DialogNewTradeComponent,
    DialogNewSpreadTradeComponent,
    DataTableDirective,
    MorrisLineChartDirective,
    EasypieDirective
  ],
  imports: [ 
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CommonModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ 
    RouterModule,
  ],
  entryComponents:[ 
    DialogClosePriceComponent,
    DialogNewPortfolioComponent,
    DialogNewTradeComponent,
    DialogNewSpreadTradeComponent
  ]
})

export class AppRoutingModule { }
