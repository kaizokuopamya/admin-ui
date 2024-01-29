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
import { CommonMethods } from 'src/app/services/common-method';
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
  values: FormArray;
  masterName: string = '';
  //this refers to resultset of getdropdowndetails api
  resultSet: any = [];

  constructor(
    private fb: FormBuilder,
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    private commonMethod: CommonMethods,
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
    this.setInitialData();
    this.getDropDownDetails();
  }

  setInitialData() {
    const input: any = this.storage.getLocalStorage('input');
    if (input) {
      const parsedInput = JSON.parse(input);
      this.masterName = parsedInput.dropDownName;
      this.ID = parsedInput.id;
      this.storage.setLocalStorage('id', this.ID);
    }
  }

  getDropDownDetails() {
    const GETDROPDOWNDETAILS = this.constant.serviceName_GETROPDOWNDETAILS;
    let inputData = this.createInputData();
    this.httpService.callApiServices(GETDROPDOWNDETAILS, inputData).subscribe({
      next: (data) => {
        this.resultSet = data.set.records || [];
      },
      error: (error) => console.log(error),
    });
  }

  createValues(): FormGroup {
    return this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addValue() {
    this.values.push(this.createValues());
  }

  resetValue() {
    this.values.reset();
  }

  //remove value from formgroup
  removeValue(index: number) {
    const values = this.dynamicValuesForm.get('values') as FormArray
    if (values.length > 1) {
      values.removeAt(index);
    }else{
      values.reset()
    }
  }

  editValues() {
    console.log('edit clicked');
  }

  createInputData() {
    return {
      ...this.dataService.commonInputData(),
      [this.constant.key_ID]: this.storage.getLocalStorage('id'),
    };
  }

  saveValues() {
    // console.log(this.dynamicValuesForm.value);
    //format array
    const formattedArray: string = this.values.controls
      .map((control) => {
        const getControlValueFromKey = (key: string) => control.get(key)?.value;
        return ['key', 'value', 'description']
          .map(getControlValueFromKey)
          .join('#');
      })
      .join('~');
    // console.log('formatted String of array: ', formattedArray);

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
          // console.log(data);
          const responseData = data.responseParameter;
          if (responseData.opstatus === '00') {
            this.commonMethod.openPopup('div.popup-bottom.success-popup');
            this.dataService.information = responseData.Result;
            this.ngOnInit();
          } else {
            this.commonMethod.openPopup('div.popup-bottom.error-popup');
            this.dataService.information = 'Unable to Save Values';
            this.dataService.informationLabel =  responseData.Result;
          }
        },
        error: (error) => console.log(error),
      });
  }
}
