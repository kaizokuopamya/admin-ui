import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { ExportAsConfig, ExportAsService, SupportedExtensions } from 'ngx-export-as';
import { CommonMethods } from 'src/app/services/common-method';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  config: ExportAsConfig = {
    type: 'xlsx',
    elementIdOrContent: 'myDataTable',
    options: {
      jsPDF: {
        orientation: 'landscape'
      },
      pdfCallbackFn: this.pdfCallbackFn // to add header and footer
    }
  }
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

  constructor(private exportAsService: ExportAsService, public commonMethod: CommonMethods) { }

  onSearch(event: any) {
    this.search.emit(event.target.value);
  }

  onTemplateChange(template: string) {
    this.changeTemplate.emit(template);
  }

  exportAs(type: SupportedExtensions, opt?: string) {
    console.log("clicked export");
    // download the file using old school javascript method
    let that = this;

    this.config.type = type;
    if (opt) {
      this.config.options.jsPDF.orientation = opt;
    }
    this.exportAsService.save(this.config, 'Report').subscribe(() => {
      // save started
    });

  }

  pdfCallbackFn(pdf: any) {
    // example to add page number as footer to every page of pdf
    const noOfPages = pdf.internal.getNumberOfPages();
    for (let i = 1; i <= noOfPages; i++) {
      pdf.setPage(i);
      pdf.text('Page ' + i + ' of ' + noOfPages, pdf.internal.pageSize.getWidth() - 100, pdf.internal.pageSize.getHeight() - 30);
    }
  }
}
