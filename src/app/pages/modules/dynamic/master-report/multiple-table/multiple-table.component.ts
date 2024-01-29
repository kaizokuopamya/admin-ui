import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faChevronDown,
  faChevronUp,
  faPlus,
  faRotate,
} from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data.service';
import { MasterReportService } from '../master-report.service';
import { AppConstants } from 'src/app/app.constant';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';

@Component({
  selector: 'app-multiple-table',
  templateUrl: './multiple-table.component.html',
  styleUrls: ['./multiple-table.component.css'],
})
export class MultipleTableComponent {
  @Input() name: string;

  //icon
  faPlus = faPlus;
  faRotate = faRotate;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  multipleTableForm: FormGroup;
  innerJoinTable: FormArray;
  joinTables: any = [];
  selectedTableColumns: any = [];
  toggleStates: boolean[] = [];

  constructor(
    public dataService: DataService,
    public masterService: MasterReportService,
    private fb: FormBuilder,
    private constant: AppConstants,
    private httpService: HttpRestApiService
  ) {
    this.masterService.fetchDatabases();
    this.multipleTableForm = this.fb.group({
      database: ['', Validators.required],
      innerJoinTable: this.fb.array([this.createInnerJoinTable()]),
    });
    this.innerJoinTable = this.multipleTableForm.get(
      'innerJoinTable'
    ) as FormArray;
  }

  ngOnInit() {
    this.innerJoinTable.controls.forEach(() => {
      this.toggleStates.push(false);
    });
  }

  toggleIcon(index: number): void {
    this.toggleStates[index] = !this.toggleStates[index];
  }

  createInnerJoinTable(): FormGroup {
    return this.fb.group({
      multiTable: ['', Validators.required],
      multiColumn: ['', Validators.required],
      joinTable: ['', Validators.required],
      joinColumn: ['', Validators.required],
    });
  }

  fetchColumnsForJoinTable(tableName: string, index: number) {
    const selectedTable = this.joinTables[index].find(
      (table) => table.table_name === tableName
    );
    this.selectedTableColumns[index] = selectedTable
      ? [selectedTable.column_name]
      : [];
    // console.log(this.selectedTableColumns);
  }

  addInnerJoinTable() {
    this.innerJoinTable.push(this.createInnerJoinTable());
    // console.log(this.multipleTableForm.value);
  }

  getQueryMultipleTables(index: number) {
    const innerJoin = this.innerJoinTable.at(index);
    const { database } = this.multipleTableForm.value;
    const { multiTable, multiColumn } = innerJoin.value;

    const GETQUERYMULTIPLETABLES =
      this.constant.serviceName_GETQUERYMULTIPLETABLES;
    let inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_tableName]: multiTable,
      [this.constant.key_ownerName]: database,
      [this.constant.key_columnName]: multiColumn,
    };

    this.httpService
      .callApiServices(GETQUERYMULTIPLETABLES, inputData)
      .subscribe({
        next: (data) => {
          this.joinTables[index] = data.set.records;
          // console.log(this.joinTables);
        },
      });
  }

  createMasterReport() {
    let multipleTables = '';
    let multipleWhere = '';
    this.innerJoinTable.controls.forEach((control, index) => {
      if (this.innerJoinTable.length == 1) {
        const { multiTable, multiColumn, joinTable, joinColumn } =
          control.value;
        multipleTables = `${multiTable} INNER JOIN ${joinTable}`;
        multipleWhere = `${multiTable}.${multiColumn} = ${joinTable}.${joinColumn}`;
      } else if (this.innerJoinTable.length > 1) {
      }
    });

    // Set inputData object based on the generated strings
    let inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_name]: this.name,
      [this.constant.key_queryType]: 'multiple',
      [this.constant.key_multipleSelect]: '*',
      [this.constant.key_multipleTables]: multipleTables,
      [this.constant.key_multipleWhere]: multipleWhere,
    };

    console.log(inputData);
    // const CREATEREPORT = this.constant.serviceName_CREATEREPORT;
    // this.httpService.callApiServices(CREATEREPORT, inputData).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    // });
  }
}
