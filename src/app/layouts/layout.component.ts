import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from "../helpers";
import { AuthService } from '../_services/index';

@Component({
  selector: '.page-wrapper',
  templateUrl: './layout.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class LayoutComponent implements OnInit, AfterViewInit {
  profile:any = {};
	constructor(
    private auth: AuthService
  ) { }

  ngOnInit(){
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  ngAfterViewInit() {
    // initialize layout: handlers, menu ...
    Helpers.initLayout();
  }

}
