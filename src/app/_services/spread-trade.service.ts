import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { SpreadTrade } from '../models/index';
import { LoaderService } from './loader.service';
import { AuthService } from './auth.service';

const baseUrl = 'http://ec2-18-218-156-253.us-east-2.compute.amazonaws.com:8000';
// const baseUrl = 'http://192.168.88.73:8000';

@Injectable()
export class SpreadTradeService {
  private spreadTrades: BehaviorSubject<SpreadTrade[]> = new BehaviorSubject<SpreadTrade[]>([]);
  private spreadTradeUrl = '/api/spreadTrades/';

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

  public getSpreadTrades(): Observable<SpreadTrade[]> {
    this.http.get<SpreadTrade[]>(`${baseUrl}${this.spreadTradeUrl}`, this.getHeaders())
    .pipe(
      tap(spreadTrades => this.spreadTrades.next(spreadTrades)),
      catchError(this.handleError('getSpreadTrades', []))
    )
    .subscribe();
    return this.spreadTrades;
  }

  public getSpreadTrade(id: number): Observable<SpreadTrade> {
    return this.http.get<SpreadTrade>(`${baseUrl}${this.spreadTradeUrl}${id}`, this.getHeaders())
    .pipe(
      catchError(this.handleError<SpreadTrade>(`getSpreadTrade id=${id}`))
    );
  }

  public updateSpreadTrade(id: number, spreadTrade: SpreadTrade): Observable<SpreadTrade> {
    return this.http.patch<SpreadTrade>(`${baseUrl}${this.spreadTradeUrl}${id}/`, spreadTrade, this.getHeaders())
      .pipe(
        catchError(this.handleError('updateSpreadTrade', spreadTrade))
      );
  }

  public createSpreadTrade(spreadTrade: SpreadTrade): Observable<SpreadTrade>{
    return this.http.post<SpreadTrade>(`${baseUrl}${this.spreadTradeUrl}`, spreadTrade, this.getHeaders())
    .pipe(
      catchError(this.handleError<SpreadTrade>('createSpreadTrade'))
    );
  }

  public deleteSpreadTrade(id: number): Observable<{}> {
    return this.http.delete(`${baseUrl}${this.spreadTradeUrl}${id}`, this.getHeaders())
      .pipe(
        catchError(this.handleError<SpreadTrade>('deleteSpreadTrade'))
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