import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-generate-master-report',
  templateUrl: './generate-master-report.component.html',
  styleUrls: ['./generate-master-report.component.css']
})
export class GenerateMasterReportComponent {
  generateForm: FormGroup
  content: any = [];
  rows: any = [];
  columns: any = [];
  reports: any = [];
  responseData: any;
  message: string = "";

  // ngx-datatable variables
  ColumnMode = ColumnMode;
  SortType = SortType;
  reorderable = true;
  loadingIndicator: boolean = true;
  showDataTable: boolean = false;
  selectedTemplateClass: string = 'material expanded';

  constructor(
    private fb: FormBuilder,
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    private dataService: DataService,
    public router: Router
  ) {
    this.generateForm = this.fb.group({
      reportType: ['', Validators.required],
      userQuery: ['', Validators.required],
      dataPlainTextRequied: ['Y', Validators.required],
      ID: ['', Validators.required],
      queryType: ['', Validators.required]
    });
  }

  generateReport() {
    const result = this.generateForm.value;
    const GETREPORTSBYFILTER = this.constant.serviceName_GETREPORTSBYFILTER
    // Define common properties for both query types
    const commonData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_createdBy]: "1",
      [this.constant.key_queryType]: result.reportType,
      [this.constant.key_dataPlainTextRequied]: result.dataPlainTextRequied
    };

    // Create a variable for additional query-specific properties
    let querySpecificData = {};

    // Determine additional properties based on the reportType
    if (result.reportType === 'UserQuery') {
      querySpecificData = {
        [this.constant.key_statusId]: "3",
        [this.constant.key_userQuery]: result.userQuery
      };
    } else if (result.reportType === 'SystemQuery') {
      querySpecificData = {
        [this.constant.key_ID]: result.ID
      };
    }

    // Combine commonData and query-specific data
    const inputData = {
      ...commonData,
      ...querySpecificData
    };

    // Make the HTTP service call
    this.httpService.callApiServices(GETREPORTSBYFILTER, inputData).subscribe({
      next: (data) => {
        this.responseData = data.responseParameter;
        this.message = this.responseData.opstatus == "01" ? data.responseParameter.Result + ' Please Check Your SQL Query' : data.responseParameter.Result
        setTimeout(() => (this.message = ''), 2000);
        this.showDataTable = data.responseParameter.opstatus == '00' ? true : false;
        setTimeout(() => (this.loadingIndicator = false), 1000);
        this.rows = data.set.records;
        this.content = [...this.rows];
        this.columns = Object.keys(this.rows[0]).map((name) => ({ name, prop: name }));
        console.log(this.rows);
        console.log(this.columns);
      },
      error: () => this.message = 'Unable to fetch Data'
    });
  }

  fetchReports() {
    let inputData = {
      ...this.dataService.commonInputData()
    }
    const GETALLREPORTS = this.constant.serviceName_GETALLREPORTS
    this.httpService.callApiServices(GETALLREPORTS, inputData).subscribe({
      next: (data) => {
        this.reports = data.set.records;
        console.log(this.reports)
      }
    })
  }

  applyTemplate(template: string) {
    this.selectedTemplateClass = template;
  }

  // Update the filter
  updateFilter(event: any): void {
    const filterValue = (event || '').toLowerCase();
    this.rows = filterValue ? this.content.filter((row: any) =>
      Object.values(row as any).some((value: any) =>
        (value || '').toLowerCase().startsWith(filterValue)
      )
    ) : this.content
  }
}