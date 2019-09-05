import { Directive, ElementRef, Input } from '@angular/core';
declare var moment: any;
declare var Morris: any;

@Directive({
  selector:"[morrisLineChart]"
})

export class MorrisLineChartDirective{
  @Input() morrisData:any = [];

  constructor(
    private el: ElementRef) {
    setTimeout(() => {
      Morris.Line({
        element: el.nativeElement,
          // data: this.morrisData,
          data: [
            { month: '2017-01', value: 25 },
            { month: '2017-02', value: 40 },
            { month: '2017-03', value: 30 },
            { month: '2017-04', value: 55 },
            { month: '2017-05', value: 100 },
            { month: '2017-06', value: 120 },  
            { month: '2017-07', value: 70 },
            { month: '2017-08', value: 90 },
            { month: '2017-09', value: 145 },
            { month: '2017-10', value: 150 },
            { month: '2017-11', value: 130 },
            { month: '2017-12', value: 80 },
            { month: '2018-01', value: 65 },
            { month: '2018-02', value: 100 },
            { month: '2018-03', value: 110 },
            { month: '2018-04', value: 100 },
            { month: '2018-05', value: 140 }
          ],
          xkey: 'month',
          xLabelFormat: function(date){
            return moment(date).format('MMM YYYY');
          },
          xLabelAngle: 45,
          ykeys: ['value'],
          yLabelFormat: function(value){
            return value + '%';
          },
          resize: true,
          lineWidth:4,
          labels: ['Value'],
          lineColors: ['#18C5A9'],
          pointSize:5
      });
    }, 0);
  }

}