import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Trade } from '../models/index';
import { LoaderService } from './loader.service';
import { AuthService } from './auth.service';

const baseUrl = 'http://ec2-18-218-156-253.us-east-2.compute.amazonaws.com:8000';
// const baseUrl = 'http://192.168.88.73:8000';

@Injectable()
export class TradeService {
  private trades: BehaviorSubject<Trade[]> = new BehaviorSubject<Trade[]>([]);
  private tradeUrl = '/api/trades/';

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

  public getTrades(): Observable<Trade[]> {
    this.http.get<Trade[]>(`${baseUrl}${this.tradeUrl}`, this.getHeaders())
    .pipe(
      tap(trades => this.trades.next(trades)),
      catchError(this.handleError('getTrades', []))
    )
    .subscribe();
    return this.trades;
  }

  public getTrade(id: number): Observable<Trade> {
    return this.http.get<Trade>(`${baseUrl}${this.tradeUrl}${id}`, this.getHeaders())
    .pipe(
      catchError(this.handleError<Trade>(`getTrade id=${id}`))
    );
  }

  public updateTrade(id: number, trade: Trade): Observable<Trade> {
    return this.http.patch<Trade>(`${baseUrl}${this.tradeUrl}${id}/`, trade, this.getHeaders())
      .pipe(
        catchError(this.handleError('updateTrade', trade))
      );
  }

  public createTrade(trade: Trade): Observable<Trade>{
    return this.http.post<Trade>(`${baseUrl}${this.tradeUrl}`, trade, this.getHeaders())
    .pipe(
      catchError(this.handleError<Trade>('createTrade'))
    );
  }

  public deleteTrade(id: number): Observable<{}> {
    return this.http.delete(`${baseUrl}${this.tradeUrl}${id}`, this.getHeaders())
      .pipe(
        catchError(this.handleError<Trade>('deleteTrade'))
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