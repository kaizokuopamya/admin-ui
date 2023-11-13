import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlus, faRotate } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-create-master-report',
  templateUrl: './create-master-report.component.html',
  styleUrls: ['./create-master-report.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateMasterReportComponent {
  //icons
  faPlus = faPlus;
  faRotate = faRotate;

  masterReportForm: FormGroup
  columnGroups: FormGroup[] = [];
  databases: any = []
  tables: any = []
  columns: any = [];
  joinTables: any = []
  isSingleTable: boolean = true;
  errroMessage: string = ''

  constructor(
    private fb: FormBuilder,
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    private dataService: DataService,
    public router: Router,
    private storage: LocalStorageService
  ) {
    this.masterReportForm = this.fb.group({
      name: ['', Validators.required],
      database: ['', Validators.required],
      tableName: ['', Validators.required],
      multiTable: ['', Validators.required],
      joinTable: ['', Validators.required],
      queryType: ['single', Validators.required],
      columns: [[]],
      multiColumn: ['', Validators.required],
      joinColumn: ['', Validators.required]
    });
    this.fetchDatabases();
  }

  addMoreColumn() {
    const newGroup = this.fb.group({
      columns: ['', Validators.required],
    });
    this.columnGroups.push(newGroup);
  }

  toggleTableType(tableType: 'single' | 'multiple') {
    this.isSingleTable = tableType === 'single';
    this.masterReportForm.get('database').setValue('');
  }

  fetchDatabases() {
    this.getDBDetails("getOwners").subscribe(databases => this.databases = databases);
  }

  fetchTables() {
    const dbName = this.masterReportForm.value.database;
    this.getDBDetails("getTables", { [this.constant.key_name]: dbName }).subscribe(tables => this.tables = tables);
  }

  fetchColumns() {
    const tableName = this.masterReportForm.value.tableName || this.masterReportForm.value.multiTable;
    this.getDBDetails("getColumns", { [this.constant.key_name]: tableName }).subscribe(columns => this.columns = columns);
  }

  getDBDetails(requestType: string, additionalParams = {}) {
    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_requestType]: requestType,
      ...additionalParams
    };

    const GETDBDETAILS = this.constant.serviceName_GETDBDETAILS;
    return this.httpService.callApiServices(GETDBDETAILS, inputData).pipe(
      map(data => data.set.records)
    );
  }

  createMasterReport() {
    const { name, tableName, columns } = this.masterReportForm.value;
    const CREATEREPORT = this.constant.serviceName_CREATEREPORT;
    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_name]: name,
      [this.constant.key_tableName]: tableName,
      [this.constant.key_queryType]: "select",
      [this.constant.key_columnName]: columns.join(",")
    };

    this.httpService.callApiServices(CREATEREPORT, inputData).subscribe({
      next: (data) => {
        this.dataService.goToPage('generateMasterReport')
        console.log(data)
      }
    });
  }

  getQueryMultipleTables() {
    const { multiTable, database, multiColumn } = this.masterReportForm.value;
    const GETQUERYMULTIPLETABLES = this.constant.serviceName_GETQUERYMULTIPLETABLES
    let inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_tableName]: multiTable,
      [this.constant.key_ownerName]: database,
      [this.constant.key_columnName]: multiColumn
    }

    this.httpService.callApiServices(GETQUERYMULTIPLETABLES, inputData).subscribe({
      next: (data) => {
        if (data.responseParameter.opstatus === "01") {
          setTimeout(() => this.errroMessage = this.errroMessage = data.responseParameter.Result, 2000)
        }
        this.joinTables = data.set.records;
        console.log(this.joinTables);
      },
    })
  }
}

