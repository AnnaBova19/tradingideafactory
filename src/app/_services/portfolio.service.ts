import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Portfolio } from '../models/index';
import { LoaderService } from './loader.service';
import { AuthService } from './auth.service';

const baseUrl = 'http://ec2-18-218-156-253.us-east-2.compute.amazonaws.com:8000';
// const baseUrl = 'http://192.168.88.73:8000';

@Injectable()
export class PortfolioService { 

  private portfolioUrl = '/api/portfolios/';

  constructor(
    private load: LoaderService,
    private auth: AuthService,
    private http: HttpClient,
    public router: Router) {
  }

  public getHeaders(){
    const accessToken = localStorage.getItem('access_token');
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': 'Bearer ' +  accessToken })
    };    
  }

  public getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(`${baseUrl}${this.portfolioUrl}`, this.getHeaders())
    .pipe(
      catchError(this.handleError('getPortfolios', []))
    );
  }

  public getPortfolio(id: number): Observable<Portfolio> {
    return this.http.get<Portfolio>(`${baseUrl}${this.portfolioUrl}${id}`, this.getHeaders())
    .pipe(
      catchError(this.handleError<Portfolio>(`getPortfolio id=${id}`))
    );
  }

  public updatePortfolio(id: number, portfolio: Portfolio): Observable<Portfolio> {
    return this.http.patch<Portfolio>(`${baseUrl}${this.portfolioUrl}${id}/`, portfolio, this.getHeaders())
      .pipe(
        catchError(this.handleError('updatePortfolio', portfolio))
      );
  }

  public createPortfolio(portfolio: Portfolio): Observable<Portfolio>{
    return this.http.post<Portfolio>(`${baseUrl}${this.portfolioUrl}`, portfolio, this.getHeaders())
    .pipe(
      catchError(this.handleError<Portfolio>('createPortfolio'))
    );
  }

  public deletePortfolio(id: number): Observable<{}> {
    return this.http.delete(`${baseUrl}${this.portfolioUrl}${id}`, this.getHeaders())
      .pipe(
        catchError(this.handleError<Portfolio>('deletePortfolio'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.load.error('Something went wrong'); 
      console.error(error);
      if (error.status <= 0){
        this.router.navigate(['/error_500']);
      }
      if (error.status == 403){
        this.auth.logout();
      }
      return Observable.throw(error);
    };
  }


} 