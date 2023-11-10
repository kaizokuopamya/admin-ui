import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { ExportAsConfig, ExportAsService, SupportedExtensions } from 'ngx-export-as';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';

@Component({
  selector: 'app-getsaved-data',
  templateUrl: './getsaved-data.component.html',
  styleUrls: ['./getsaved-data.component.css'],
})
export class GetsavedDataComponent {

  @ViewChild('pageId') pageId!: ElementRef;

  // id: string = '68';
  header: any = [];
  maplist: any = [];
  rows: any = [];
  content: any = [];
  columns: any = [];
  pages: any = [];
  showDataTable: boolean = false;

  // ngx-datatable variables
  loadingIndicator: boolean = false
  selectedTemplate: string = '';
  selectedTemplateClass: string = 'material expanded';

  constructor(
    private constant: AppConstants,
    private dataService: DataService,
    private httpService: HttpRestApiService,
    private exportAsService: ExportAsService
  ) {
    this.fetchPagesCreated();
  }

  // Update the filter
  updateFilter(event: any): void {
    const filterValue = (event || '').toLowerCase();
    this.rows = filterValue
      ? this.content.filter((row: any) =>
        Object.values(row as any).some((value: any) =>
          (value || '').toLowerCase().startsWith(filterValue)
        )
      )
      : this.content;
  }

  // Fetch saved data from the API
  fetchSavedData(): void {
    this.loadingIndicator = true;
    const GETSAVEDATA = this.constant.serviceName_GETSAVEDATA;
    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_ID]: this.pageId?.nativeElement?.value,
    };

    this.httpService.callApiServices(GETSAVEDATA, inputData).subscribe({
      next: (data) => {
        console.log("getsave data response::", data);
        // Hide loading indicator after a delay
        const records = data.set.records;
        const opstatus = data.responseParameter.opstatus
        this.showDataTable = opstatus == '00' ? true : false;
        if (records) {
          // Process and filter header data
          this.header = JSON.parse(records[1].header)
            .filter((entry) => entry !== null)
            .sort((a, b) => a.seqno - b.seqno)
            .map((labelInfo) => labelInfo.labelname);

          // Process and filter maplist data
          this.content = JSON.parse(records[0].mapList)
            .filter((mapEntry) => mapEntry !== null)
            .map((mapEntry) => {
              const rowData: { [key: string]: any } = {};
              this.header.forEach((key, index) => {
                rowData[key] = mapEntry['field' + (index + 1)] || '';
              });
              return rowData;
            });
          // Populate rows and columns for the data table
          this.rows = [...this.content];
          console.log(this.rows);

          this.columns = this.header.map((name) => ({ name, prop: name }));
          console.log(this.columns);
        }
        setTimeout(() => (this.loadingIndicator = false), 1000)
      }
    });
  }

  fetchPagesCreated() {
    const GETPAGESCREATED = this.constant.serviceName_GETPAGESCREATED;
    const inputData = {
      ...this.dataService.commonInputData(),
    };
    this.httpService.callApiServices(GETPAGESCREATED, inputData).subscribe({
      next: (data) => {
        this.pages = data.set.records;
        console.log(data.set.records);
        this.fetchSavedData();
      }
    })
  }

  applyTemplate(template: string) {
    this.selectedTemplateClass = template;
  }

}
