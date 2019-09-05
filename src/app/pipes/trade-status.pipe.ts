import { Pipe, PipeTransform } from '@angular/core';
import { Trade } from '../models/index';

@Pipe({name: 'tradeStatus'})
export class TradeStatusPipe implements PipeTransform {
  transform(items: Trade[], status: string): Array<Trade> {
  	if (!items) {
  		return [];
    }
    if(!status){
      return items;
    }

    return items.filter(item => item.status === status);
  }
}