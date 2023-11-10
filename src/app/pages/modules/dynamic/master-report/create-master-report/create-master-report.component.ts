import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  styleUrls: ['./create-master-report.component.css']
})
export class CreateMasterReportComponent {
  //icons
  faPlus = faPlus;
  faRotate = faRotate;

  masterReportForm: FormGroup
  columnGroups: FormGroup[] = [];
  databases: any = []
  tables: any = []
  columns: any = []
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
      columns: [[], Validators.required],
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
    this.masterReportForm.value.database = '';
  }

  fetchDatabases() {
    let inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_requestType]: "getOwners"
    };

    this.getDBDetails(inputData).subscribe((databases) => {
      this.databases = databases;
    });
  }

  fetchTables() {
    const result = this.masterReportForm.value;
    let inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_requestType]: "getTables",
      [this.constant.key_name]: result.database,
    };

    this.getDBDetails(inputData).subscribe((tables) => {
      this.tables = tables;
    });
  }

  fetchColumns() {
    const result = this.masterReportForm.value;
    let inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_requestType]: "getColumns",
      [this.constant.key_name]: result.tableName || result.multiTable,
    };

    this.getDBDetails(inputData).subscribe((columns) => {
      this.columns = columns
    });
  }

  getDBDetails(inputData) {
    const GETDBDETAILS = this.constant.serviceName_GETDBDETAILS;
    return this.httpService.callApiServices(GETDBDETAILS, inputData)
      .pipe(
        map(data => data.set.records)
      );
  }

  createMasterReport() {
    const result = this.masterReportForm.value;
    const columns = result.columns.join(",")
    console.log(columns);
    const CREATEREPORT = this.constant.serviceName_CREATEREPORT;
    let inputData = {
      ...this.dataService.commonInputData(),
      ...{
        [this.constant.key_name]: result.name,
        [this.constant.key_tableName]: result.tableName,
        [this.constant.key_queryType]: "select",
        [this.constant.key_columnName]: columns
      }
    }
    this.httpService.callApiServices(CREATEREPORT, inputData).subscribe({
      next: (data) => {
        console.log(data)
        this.dataService.goToPage('generateMasterReport')
      }
    })
  }

  getQueryMultipleTables() {
    const result = this.masterReportForm.value;
    const GETQUERYMULTIPLETABLES = this.constant.serviceName_GETQUERYMULTIPLETABLES
    let inputData = {
      ...this.dataService.commonInputData(),
      ...{
        [this.constant.key_tableName]: result.multiTable,
        [this.constant.key_ownerName]: result.database,
        [this.constant.key_columnName]: result.multiColumn
      }
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

