import { AfterViewInit, Component, Input} from '@angular/core';
import { AuthService } from '../../_services/index';

@Component({
  selector: '[app-header]',
  templateUrl: './app-header.component.html',
})
export class AppHeader implements AfterViewInit {
  @Input() profile: any = {};
  constructor(
    private auth: AuthService
  ) { }

  ngAfterViewInit()  {}
  
  logout(){
    this.auth.logout();
  }

}
