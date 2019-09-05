import { Directive, ElementRef, Input, OnChanges, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';
declare var $:any;

@Directive({
  selector:"[dataTable]"
})

export class DataTableDirective implements OnChanges, OnDestroy{
  @Input() tableData: any;
  @Input() responsive: boolean = true;
  @Input() scrollX: boolean = false;
  table: any;

  constructor(private el: ElementRef) {}

  ngOnDestroy(): any {
    if(this.table) {
      this.table.destroy();
    }
  }

  ngOnChanges(changes: SimpleChanges){
    if ($.fn.dataTable.isDataTable(this.el.nativeElement)) {
      let table = $(this.el.nativeElement).DataTable();
      if(table) {
        table.destroy();
      }
    }
    this.ngAfterViewInit();  
  }

  ngAfterViewInit(){
    setTimeout(() => {
      if(!$.fn.dataTable.isDataTable(this.el.nativeElement)){
        this.table = $(this.el.nativeElement).DataTable({
          pageLength: 10,
          fixedHeader: true,
          responsive: this.responsive,
          scrollX: this.scrollX,
          "sDom": 'rtip',
          columnDefs: [{
              targets: 'no-sort',
              orderable: false
          }]
        });
      }
    }, 1000);
  }

}