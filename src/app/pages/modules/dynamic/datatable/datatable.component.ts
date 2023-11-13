import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { CommonMethods } from 'src/app/services/common-method';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  @Input() rows: any[] = [];
  @Input() columns: any[] = [];
  @Input() selectedTemplateClass: string = 'material expanded';
  @Input() loadingIndicator: boolean = true

  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() changeTemplate: EventEmitter<string> = new EventEmitter<string>();

  ColumnMode = ColumnMode;
  SortType = SortType;
  reorderable = true;

  faSearch = faSearch

  constructor(public commonMethod: CommonMethods) { }

  onSearch(event: any) {
    this.search.emit(event.target.value);
  }

  onTemplateChange(template: string) {
    this.changeTemplate.emit(template);
  }

  exportData(exportType: string): void {
    const data = this.rows;
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    switch (exportType) {

      case 'csv':
        XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');
        XLSX.writeFile(workbook, `Report.csv`);
        break;

      case 'excel':
        console.log("download as excel");
        XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');
        XLSX.writeFile(workbook, `Report.xlsx`);
        break;

      // Other export cases...

      default:
        console.error('Invalid export type');
        break;
    }
  }

}
