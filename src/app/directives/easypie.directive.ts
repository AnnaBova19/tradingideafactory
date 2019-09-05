import { Directive, ElementRef, Input } from '@angular/core';
declare var $:any;

@Directive({
  selector:"[easypie]"
})

export class EasypieDirective{

  constructor(
    private el: ElementRef) {
      setTimeout(() => {
        $('.easypie').each(function(){
          $(this).easyPieChart({
            trackColor: $(this).attr('data-trackColor') || '#f2f2f2',
            scaleColor: false,
          });
      }); 
    }, 0);
  }

}