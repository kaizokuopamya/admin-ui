import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faTrash,
  faPlus,
  faPen,
  faCirclePlus,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-dropdown-data',
  templateUrl: './dropdown-data.component.html',
  styleUrls: ['./dropdown-data.component.css'],
})
export class DropdownDataComponent {
  //icons
  faTrash = faTrash;
  faPlus = faPlus;
  faPen = faPen;
  faCirclePlus = faCirclePlus;
  faArrowLeft = faArrowLeft;

  //formInput
  dynamicValuesForm!: FormGroup;
  ID: string = '';
  values!: FormArray;
  masterName: string = '';
  responseData: any = [];
  //this refers to resultset of getdropdowndetails api
  resultSet: any = [];

  constructor(
    private fb: FormBuilder,
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    private dataService: DataService,
    private storage: LocalStorageService,
    public router: Router
  ) {
    this.dynamicValuesForm = this.fb.group({
      values: this.fb.array([this.createValues()]),
    });
    this.values = this.dynamicValuesForm.get('values') as FormArray;
  }

  ngOnInit() {
    const input: any = this.storage.getLocalStorage('input');
    if (input != null) {
      const parsedInput = JSON.parse(input);
      this.masterName = parsedInput.dropDownName;
      this.ID = parsedInput.id;
    }

    this.getDropDownDetails();
  }

  getDropDownDetails() {
    const GETDROPDOWNDETAILS = this.constant.serviceName_GETROPDOWNDETAILS;
    let inputData = this.createInputData();
    this.httpService.callApiServices(GETDROPDOWNDETAILS, inputData).subscribe({
      next: (data) => {
        this.resultSet = data.set.records;
        console.log(this.resultSet);
      },
      error: (error) => console.log(error),
    });
  }

  createInputData() {
    return {
      ...this.dataService.commonInputData(),
      [this.constant.key_ID]: this.ID,
    };
  }

  createValues(): FormGroup {
    return this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addValue() {
    console.log(this.values.length);
    this.values.push(this.createValues());
  }

  resetValue() {
    this.values.reset();
  }

  //remove value from formgroup
  removeValue(index: number) {
    if (index > 0) {
      this.values.removeAt(index);
    }
  }

  editValues() {
    console.log('edit clicked');
  }

  saveValues() {
    console.log(this.dynamicValuesForm.value);

    //format array
    const formattedArray: string = this.values.controls
      .map((control) => {
        const getControlValueFromKey = (key: string) => control.get(key)?.value;
        return ['key', 'value', 'description']
          .map(getControlValueFromKey)
          .join('#');
      })
      .join('~');
    console.log('formatted String of array: ', formattedArray);

    const CREATEDROPDOWNDETAILS =
      this.constant.serviceName_CREATEDROPDOWNDETAILS;
    let inputData = {
      ...this.createInputData(),
      [this.constant.key_value]: formattedArray,
    };
    this.httpService
      .callApiServices(CREATEDROPDOWNDETAILS, inputData)
      .subscribe({
        next: (data: any) => {
          this.responseData = data.responseParameter;
          console.log(data.responseParameter);
        },
        error: (error) => console.log(error),
      });
    this.getDropDownDetails();
  }
}
