import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { Promise } from "q";

import { Portfolio } from '../models/index';
import { PortfolioService } from './portfolio.service';

@Injectable()
export class NewPortfolioGuard implements CanActivate { 
  portfolios: Portfolio[] = [];

  constructor(
    private portfolioService: PortfolioService,
    public router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    return this.portfolioService.getPortfolios()
    .pipe(
      map(portfolios => {
        this.portfolios = portfolios;
        if (this.portfolios.length > 0){
          this.router.navigate(['/portfolio']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}