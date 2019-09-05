import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { AuthService } from '../../_services/index';
import { MatDialog } from '@angular/material';
import { DialogNewPortfolioComponent } from '../../components/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private _script: ScriptLoaderService,
    private auth: AuthService,
    public dialog: MatDialog
  ) {}


  ngOnInit() {}

  ngAfterViewInit() {}
  
  isAuth(){
    return this.auth.isAuthenticated();
  }

  openNewPortfolioDialog(){
    const dialogRef = this.dialog.open( DialogNewPortfolioComponent, {
      height: 'auto'
    });
  }

}