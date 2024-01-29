import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  pageName: string;
  pages: any = [];
  showPage: boolean = false;

  constructor(
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.fetchPagesCreated();
  }

  buildForm() {
    this.dynamicForm.forEach((x) => {
      if (x.hasOwnProperty('options')) x.options = JSON.parse(x.options);
    });

    const formControls = {};
    this.dynamicForm.forEach((x) => {
      formControls[x.elementName] = new FormControl('', Validators.required);
    });

    this.testForm = new FormGroup(formControls);
  }

  saveForm() {
    console.log(this.testForm.value);
    this.showPage = false;
  }

  isTextInputType(elementType: string): boolean {
    return ['password', 'text', 'tel', 'date'].includes(elementType);
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

  apicall() {
    const GETDYNAMICPAGE = this.constant.serviceName_GETDYNAMICPAGE;
    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_pageName]: this.pageName,
    };

    this.httpService.callApiServices(GETDYNAMICPAGE, inputData).subscribe({
      next: (data) => {
        this.showPage = true;
        this.dynamicForm = data.set.records;
        this.buildForm();
      },
      error: (error) => console.log(error),
    });
  }
}
