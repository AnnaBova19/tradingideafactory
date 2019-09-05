import { Injectable } from '@angular/core';
import { Helpers } from '../helpers';
declare let alertify: any;

@Injectable()
export class LoaderService{
  constructor(){}

  confirm(message: string, okCallback:() => any){
    alertify.confirm((message, e) => {
      if (e){
        okCallback();
      }
    });
  }

  start(){
    Helpers.setLoading(true);
  }

  end(){
    Helpers.setLoading(false);
  }

  success(message: string){
    Helpers.setLoading(false);
    alertify.success(message);
  }

  error(message: string){
    Helpers.setLoading(false);
    alertify.error(message);
  }

  warning(message: string){
    Helpers.setLoading(false);
    alertify.warning(message);
  }

  message(message: string){
    Helpers.setLoading(false);
    alertify.message(message);
  }

}