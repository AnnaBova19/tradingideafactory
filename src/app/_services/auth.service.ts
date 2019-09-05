import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import * as auth0 from 'auth0-js';
import { Promise } from "q";

@Injectable()
export class AuthService implements CanActivate { 

  auth0 = new auth0.WebAuth({
    clientID: 'F1EwbdwIyN1NXDUPopKSPmsKuY2kK1dk',
    domain: 'vtlstsff.auth0.com',
    responseType: 'token id_token',
    audience: 'https://vtlstsff.auth0.com/userinfo',
    redirectUri: window.location.href.split('/').slice(0,3).join('/') + '/index',
    scope: 'openid profile'
  });
  userProfile: any;

  constructor(public router: Router) {}
  
    public login(): void {
      this.auth0.authorize();
    }

    public handleAuthentication(): Promise<boolean> {
      return Promise((resolve) => { 
        this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            window.location.hash = '';
            this.setSession(authResult);
            this.router.navigate(['/']);
          } else if (err) {
            this.router.navigate(['/']);
            console.log(err);
          }
          resolve(true);
        });
      });
    }
  
    private setSession(authResult): void {
      // Set the time that the access token will expire at
      const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
    }
  
    public logout(): void {
      // Remove tokens and expiry time from localStorage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      // Go back to the home route
      this.login();
    }
  
    public isAuthenticated(): boolean {
      // Check whether the current time is past the
      // access token's expiry time
      const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }

    public canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): any {
      return this.handleAuthentication()
      .then(() => {
        let isAuthenticated = this.isAuthenticated();
        if(!isAuthenticated){
          this.login();
        }
        return isAuthenticated;
      });
    }

    public getProfile(cb): void {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('Access token must exist to fetch profile');
      }
      const self = this;
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (profile) {
          self.userProfile = profile;
        }
        cb(err, profile);
      });
    }  

}