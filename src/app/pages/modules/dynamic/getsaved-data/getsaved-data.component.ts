import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { AppConstants } from 'src/app/app.constant';
import { CommonMethods } from 'src/app/services/common-method';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';

@Component({
  selector: 'app-getsaved-data',
  templateUrl: './getsaved-data.component.html',
  styleUrls: ['./getsaved-data.component.css'],
})
export class GetsavedDataComponent {
  @ViewChild('pageId') pageId!: NgSelectComponent;

  // id: string = '68';
  header: any = [];
  maplist: any = [];
  rows: any = [];
  content: any = [];
  columns: any = [];
  pages: any = [];
  showDataTable: boolean = false;

  // ngx-datatable variables
  loadingIndicator: boolean = false;
  selectedTemplate: string = '';
  selectedTemplateClass: string = 'material expanded';

  constructor(
    private constant: AppConstants,
    private dataService: DataService,
    private httpService: HttpRestApiService,
    private commonMethod: CommonMethods
  ) {}

  ngOnInit() {
    this.fetchPagesCreated();
  }

  // Fetch saved data from the API
  fetchSavedData(): void {
    const selectedValue = this.pageId.selectedValues[0];
    this.loadingIndicator = true;
    const GETSAVEDATA = this.constant.serviceName_GETSAVEDATA;
    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_ID]: selectedValue,
    };

    this.httpService.callApiServices(GETSAVEDATA, inputData).subscribe({
      next: (data) => {
        console.log('getsave data response::', data);
        const responseData = data.responseParameter;
        if (responseData.opstatus === '00') {
          this.showDataTable = true;
          this.commonMethod.openPopup('div.popup-bottom.success-popup');
          this.dataService.information = 'Records Found';
        } else {
          this.showDataTable = false;
          this.commonMethod.openPopup('div.popup-bottom.error-popup');
          this.dataService.information = 'Not Found';
          this.dataService.informationLabel = responseData.Result;
        }
        // Hide loading indicator after a delay
        const records = data.set.records;
        if (records) {
          // Process and filter header data
          this.header = JSON.parse(records[1].header)
            .filter((entry) => entry !== null)
            .sort((a, b) => a.seqno - b.seqno)
            .map((labelInfo) => labelInfo.labelname);

          // Process and filter maplist data
          this.rows = JSON.parse(records[0].mapList)
            .filter((mapEntry) => mapEntry !== null)
            .map((mapEntry) => {
              const rowData: { [key: string]: any } = {};
              this.header.forEach((key, index) => {
                rowData[key] = mapEntry['field' + (index + 1)] || '';
              });
              return rowData;
            });
          // Populate rows and columns for the data table
          this.content = [...this.rows];
          // console.log(this.rows);

          this.columns = this.header.map((name) => ({ name, prop: name }));
          // console.log(this.columns);
        }
        setTimeout(() => (this.loadingIndicator = false), 1000);
      },
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
      },
    });
  }

  applyTemplate(template: string) {
    this.selectedTemplateClass = template;
  }

  // Update the filter
  updateFilter(event: any): void {
    const filterValue = (event || '').toLowerCase();
    this.rows = filterValue
      ? this.content.filter((row: any) =>
          Object.values(row as any).some((value: any) =>
            (value || '').toLowerCase().includes(filterValue)
          )
        )
      : this.content;
  }
}
