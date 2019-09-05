import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

import { Portfolio } from '../../models/index';
import { LoaderService, PortfolioService } from '../../_services/index';
import { CURRENCY } from '../../models/index';

declare var $:any;

@Component({
  selector: 'dialog-new-portfolio',
  templateUrl: './dialog-new-portfolio.component.html',
  styleUrls: ['./dialog-new-portfolio.component.scss']
})
export class DialogNewPortfolioComponent implements OnInit {
  createPortfolioForm: FormGroup;
  currencies = CURRENCY;
 
  constructor(
    private load: LoaderService,
    public dialogRef: MatDialogRef<DialogNewPortfolioComponent>,
    private portfolioService: PortfolioService,
    private router: Router,
    private fb: FormBuilder) {
    this.createPortfolioForm = fb.group({
      'name' : [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'account_balance' : [null, Validators.compose([Validators.required, Validators.pattern("[0-9]+")])],
      'currency': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  createNewPortfolio(portfolio: Portfolio){
    this.load.start();
    let self = this;
    this.portfolioService.createPortfolio(portfolio)
    .subscribe(portfolio => {
      this.dialogRef.close();
      this.load.success('The portfolio was successfully created'); 
      this.router.navigate(['/portfolio']);
    }, error => {
      this.load.start();
      this.dialogRef.close();
    });
  }


}