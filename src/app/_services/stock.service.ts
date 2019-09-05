import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Stock } from '../models/index';
import { LoaderService } from './loader.service';
import { AuthService } from './auth.service';

const baseUrl = 'http://ec2-18-218-156-253.us-east-2.compute.amazonaws.com:8000';
// const baseUrl = 'http://192.168.88.73:8000';

@Injectable()
export class StockService {

  private stockUrl = '/api/stocks/';
  private stocks: BehaviorSubject<Stock[]> = new BehaviorSubject<Stock[]>([]);
  private isLoaded: boolean = false;

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

  public getStocks(): Observable<Stock[]> {
    if (!this.isLoaded){
      this.http.get<Stock[]>(`${baseUrl}${this.stockUrl}`, this.getHeaders())
      .pipe(
        tap(stocks => this.stocks.next(stocks)),
        catchError(this.handleError('getStocks', []))
      )
      .subscribe();
      this.isLoaded = true;
    }
    return this.stocks;
  }

  public getStock(id: number): Observable<Stock> {
    return this.http.get<Stock>(`${baseUrl}${this.stockUrl}${id}`, this.getHeaders())
    .pipe(
      catchError(this.handleError<Stock>(`getStock id=${id}`))
    );
  }

  public updateStock(id: number, stock: Stock): Observable<Stock> {
    return this.http.patch<Stock>(`${baseUrl}${this.stockUrl}${id}/`, stock, this.getHeaders())
      .pipe(
        catchError(this.handleError('updateStock', stock))
      );
  }

  public createStock(stock: Stock): Observable<Stock>{
    return this.http.post<Stock>(`${baseUrl}${this.stockUrl}`, stock, this.getHeaders())
    .pipe(
      catchError(this.handleError<Stock>('createStock'))
    );
  }

  public deleteStock(id: number): Observable<{}> {
    return this.http.delete(`${baseUrl}${this.stockUrl}${id}`, this.getHeaders())
      .pipe(
        catchError(this.handleError<Stock>('deleteStock'))
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