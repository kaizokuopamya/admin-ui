import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { event } from 'jquery';
import { map } from 'rxjs';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';

@Injectable({
  providedIn: 'root',
})
export class MasterReportService {
  constructor(
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    private dataService: DataService,
    public router: Router
  ) {}

  getDBDetails(requestType: string, additionalParams = {}) {
    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_requestType]: requestType,
      ...additionalParams,
    };
    const GETDBDETAILS = this.constant.serviceName_GETDBDETAILS;
    return this.httpService
      .callApiServices(GETDBDETAILS, inputData)
      .pipe(map((data) => data.set.records));
  }

  fetchDatabases() {
    this.getDBDetails('getOwners').subscribe(
      (databases) => (this.dataService.databases = databases)
    );
  }

  fetchTables(database: string) {
    this.getDBDetails('getTables', {
      [this.constant.key_name]: database,
    }).subscribe((tables) => (this.dataService.tables = tables));
  }

  fetchColumns(tableName: string) {
    this.getDBDetails('getColumns', {
      [this.constant.key_name]: tableName,
    }).subscribe((columns) => (this.dataService.columns = columns));
  }

  getSingleTableReportData(
    reportName: string,
    tableName: string,
    columns: Array<string>
  ) {
    let inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_name]: reportName,
      [this.constant.key_tableName]: tableName,
      [this.constant.key_queryType]: 'select',
      [this.constant.key_columnName]: columns.join(','),
    };
    return inputData;
  }
}
