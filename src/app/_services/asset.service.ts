import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Asset } from '../models/index';
import { LoaderService } from './loader.service';

const baseUrl = 'http://ec2-18-218-156-253.us-east-2.compute.amazonaws.com:8000';

@Injectable()
export class AssetService { 

  private assetUrl = '/api/assets/';

  constructor(
    private load: LoaderService,
    private http: HttpClient,
    public router: Router) {
  }

  public getHeaders(){
    const accessToken = localStorage.getItem('access_token');
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': 'Bearer ' +  accessToken })
    };    
  }

  public getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(`${baseUrl}${this.assetUrl}`, this.getHeaders())
    .pipe(
      catchError(this.handleError('getAssets', []))
    );
  }

  public getAsset(id: number): Observable<Asset> {
    return this.http.get<Asset>(`${baseUrl}${this.assetUrl}/${id}`, this.getHeaders())
    .pipe(
      catchError(this.handleError<Asset>(`getTAsset id=${id}`))
    );
  }

  public updateAsset(asset: Asset): Observable<Asset> {
    return this.http.put<Asset>(`${baseUrl}${this.assetUrl}`, asset, this.getHeaders())
      .pipe(
        catchError(this.handleError('updateAsset', asset))
      );
  }

  public createAsset(asset: Asset): Observable<Asset>{
    return this.http.post<Asset>(`${baseUrl}${this.assetUrl}`, asset, this.getHeaders())
    .pipe(
      catchError(this.handleError<Asset>('createAsset'))
    );
  }

  public deleteAsset(id: number): Observable<{}> {
    return this.http.delete(`${baseUrl}${this.assetUrl}/${id}`, this.getHeaders())
      .pipe(
        catchError(this.handleError<Asset>('deleteAsset'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.load.error('Something went wrong'); 
      console.error(error);
      if (error.status <= 0){
        this.router.navigate(['/error_500']);
      }
      return Observable.throw(error);
    };
  }


}