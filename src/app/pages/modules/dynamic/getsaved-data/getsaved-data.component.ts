import { Component, ElementRef, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
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
  // Icons
  faSearch = faSearch;

  // id: string = '68';
  header: any = [];
  maplist: any = [];
  rows: any = [];
  content: any = [];
  columns: any = [];
  pages: any = [];
  showDataTable: boolean = false

  // ngx-datatable variables
  ColumnMode = ColumnMode;
  SortType = SortType;
  reorderable = true;
  loadingIndicator = true;

  constructor(
    private constant: AppConstants,
    private dataService: DataService,
    private httpService: HttpRestApiService
  ) {
    this.fetchPagesCreated();
    this.fetchSavedData();
  }

  // Update the filter
  updateFilter(event: any): void {
    const filterValue = (event.target.value || '').toLowerCase();
    this.rows = filterValue
      ? this.content.filter((row: any) =>
        // Check if any value in the row starts with the filter value
        Object.values(row as any).some((value: any) =>
          (value || '').toLowerCase().startsWith(filterValue)
        )
      )
      : this.content;
  }

  // Fetch saved data from the API
  fetchSavedData(): void {
    const GETSAVEDATA = this.constant.serviceName_GETSAVEDATA;
    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_ID]: this.pageId?.nativeElement?.value,
    };

    this.httpService.callApiServices(GETSAVEDATA, inputData).subscribe({
      next: (data) => {
        // Hide loading indicator after a delay
        setTimeout(() => (this.loadingIndicator = false), 1000);
        const records = data.set.records;
        if (records) {
          this.showDataTable = true;
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
          this.columns = this.header.map((name) => ({ name, prop: name }));
        }
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
        console.log(data.set.records);
        this.fetchSavedData();
      }
    })
  }


}
