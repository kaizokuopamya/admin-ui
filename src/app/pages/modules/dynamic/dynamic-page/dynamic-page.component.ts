import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { each } from 'jquery';
import { AppConstants } from 'src/app/app.constant';
import { dynamicForm } from 'src/app/model/common.model';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css'],
})
export class DynamicPageComponent {
  dynamicForm: dynamicForm[] = [];
  testForm!: FormGroup;
  pageName: string = 'CHEQUESTATUS';

  constructor(
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    private dataService: DataService
  ) {}

  ngOnInit() {
    // this.apicall();
    this.buildForm();
  }

  buildForm() {
    this.dynamicForm = this.getResponse().set.records;
    this.dynamicForm.forEach((x) => {
      if (x.hasOwnProperty('options')) x.options = JSON.parse(x.options);
    });
    console.log(this.dynamicForm);

    const formControls = {};
    // const formArray = {}
    this.dynamicForm.forEach((x) => {
      formControls[x.elementName] = new FormControl('', Validators.required);
    });
    this.testForm = new FormGroup(formControls);
  }

  saveForm() {
    console.log(this.testForm.value);
  }

  getResponse() {
    var resp = {
      set: {
        setname: 'DYNAMICPAGE',
        records: [
          {
            elementName: 'EnterName',
            SEQNO: '1',
            STATUSID: '3',
            LABELNAME: 'EnterName',
            DESCRIPTION: 'Enter Name',
            ID: '1',
            DYNAMICID: '5',
            elementDescription: 'TextBox',
            elementType: 'text',
          },
          {
            elementName: 'GenderSelect',
            SEQNO: '2',
            STATUSID: '3',
            LABELNAME: 'SelectGender',
            DESCRIPTION: 'Select Gender',
            options:
              '[ {\r\n  "id" : 13,\r\n  "createdby" : 1,\r\n  "createdon" : 1695787947000,\r\n  "futureuse1" : null,\r\n  "description" : "Mens",\r\n  "futureuse3" : null,\r\n  "futureuse4" : null,\r\n  "statusid" : 3,\r\n  "futureuse2" : null,\r\n  "value" : "Male",\r\n  "futureuse5" : null,\r\n  "key" : "M",\r\n  "masterid" : 1\r\n}, {\r\n  "id" : 14,\r\n  "createdby" : 1,\r\n  "createdon" : 1695787955000,\r\n  "futureuse1" : null,\r\n  "description" : "Womens",\r\n  "futureuse3" : null,\r\n  "futureuse4" : null,\r\n  "statusid" : 3,\r\n  "futureuse2" : null,\r\n  "value" : "Female",\r\n  "futureuse5" : null,\r\n  "key" : "F",\r\n  "masterid" : 1\r\n}, {\r\n  "id" : 15,\r\n  "createdby" : 1,\r\n  "createdon" : 1695787961000,\r\n  "futureuse1" : null,\r\n  "description" : "TransGender/Other",\r\n  "futureuse3" : null,\r\n  "futureuse4" : null,\r\n  "statusid" : 3,\r\n  "futureuse2" : null,\r\n  "value" : "TransGender",\r\n  "futureuse5" : null,\r\n  "key" : "T",\r\n  "masterid" : 1\r\n} ]',
            ID: '2',
            DYNAMICID: '1',
            elementDescription: 'Types of Gender',
            elementType: 'dropdown',
          },
          {
            elementName: 'LanguageSelect',
            SEQNO: '3',
            STATUSID: '3',
            LABELNAME: 'SelectLanguages',
            DESCRIPTION: 'Select Languages',
            options:
              '[ {\r\n  "id" : 22,\r\n  "createdby" : 1,\r\n  "createdon" : 1695790904000,\r\n  "futureuse1" : null,\r\n  "description" : "Marathi",\r\n  "futureuse3" : null,\r\n  "futureuse4" : null,\r\n  "statusid" : 3,\r\n  "futureuse2" : null,\r\n  "value" : "Marathi",\r\n  "futureuse5" : null,\r\n  "key" : "M",\r\n  "masterid" : 4\r\n}, {\r\n  "id" : 24,\r\n  "createdby" : 1,\r\n  "createdon" : 1695790905000,\r\n  "futureuse1" : null,\r\n  "description" : "Hindi",\r\n  "futureuse3" : null,\r\n  "futureuse4" : null,\r\n  "statusid" : 3,\r\n  "futureuse2" : null,\r\n  "value" : "Hindi",\r\n  "futureuse5" : null,\r\n  "key" : "H",\r\n  "masterid" : 4\r\n}, {\r\n  "id" : 23,\r\n  "createdby" : 1,\r\n  "createdon" : 1695790905000,\r\n  "futureuse1" : null,\r\n  "description" : "English",\r\n  "futureuse3" : null,\r\n  "futureuse4" : null,\r\n  "statusid" : 3,\r\n  "futureuse2" : null,\r\n  "value" : "English",\r\n  "futureuse5" : null,\r\n  "key" : "E",\r\n  "masterid" : 4\r\n} ]',
            ID: '3',
            DYNAMICID: '4',
            elementDescription: 'Types of Language',
            elementType: 'checkbox',
          },
          {
            elementName: 'Occupation',
            SEQNO: '4',
            STATUSID: '3',
            LABELNAME: 'SelectOccupation',
            DESCRIPTION: 'Select Occupation',
            options:
              '[ {\r\n  "id" : 20,\r\n  "createdby" : 1,\r\n  "createdon" : 1695789439000,\r\n  "futureuse1" : null,\r\n  "description" : "Computer Engineer Degree",\r\n  "futureuse3" : null,\r\n  "futureuse4" : null,\r\n  "statusid" : 3,\r\n  "futureuse2" : null,\r\n  "value" : "Computer Engineer",\r\n  "futureuse5" : null,\r\n  "key" : "C",\r\n  "masterid" : 3\r\n}, {\r\n  "id" : 19,\r\n  "createdby" : 1,\r\n  "createdon" : 1695789439000,\r\n  "futureuse1" : null,\r\n  "description" : "Engineer Degree",\r\n  "futureuse3" : null,\r\n  "futureuse4" : null,\r\n  "statusid" : 3,\r\n  "futureuse2" : null,\r\n  "value" : "Engineer",\r\n  "futureuse5" : null,\r\n  "key" : "E",\r\n  "masterid" : 3\r\n}, {\r\n  "id" : 21,\r\n  "createdby" : 1,\r\n  "createdon" : 1695789439000,\r\n  "futureuse1" : null,\r\n  "description" : "Mechanical Engineer",\r\n  "futureuse3" : null,\r\n  "futureuse4" : null,\r\n  "statusid" : 3,\r\n  "futureuse2" : null,\r\n  "value" : "Mechanical Engineer",\r\n  "futureuse5" : null,\r\n  "key" : "M",\r\n  "masterid" : 3\r\n} ]',
            ID: '4',
            DYNAMICID: '3',
            elementDescription: 'Types of Occupation',
            elementType: 'radio',
          },
        ],
      },
      responseParameter: {
        opstatus: '00',
        Result: 'Success',
      },
    };
    return resp;
  }

  isTextInputType(elementType: string): boolean {
    return ['password', 'text', 'tel', 'date'].includes(elementType);
  }

  // apicall() {
  //   const GETDYNAMICPAGE = this.constant.serviceName_GETDYNAMICPAGE;
  //   const inputData = {
  //     ...this.dataService.commonInputData(),
  //     [this.constant.key_pageName]: this.pageName,
  //   };

  //   this.httpService.callApiServices(GETDYNAMICPAGE, inputData).subscribe({
  //     next: (data) => {
  //       console.log("getdynamicpage ===== >", data);
  //     },
  //     error: (error) => console.log(error),
  //   });
  // }
}
