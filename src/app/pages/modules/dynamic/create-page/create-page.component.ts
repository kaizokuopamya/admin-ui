import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css'],
})
export class CreatePageComponent {
  createPageForm: FormGroup;
  message: string = '';
  isErrorMessage: boolean = false;
  responseData: any = [];
  encryption: string[] = ['static', 'dynamic', 'rsa']

  constructor(
    private fb: FormBuilder,
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    private dataService: DataService,
    public router: Router,
    private storage: LocalStorageService
  ) {
    this.createPageForm = this.fb.group({
      pageName: ['', Validators.required],
      description: ['', Validators.required],
      isEncrypted: ['S', Validators.required]
    });
  }

  createPage() {
    const result = this.createPageForm.value;
    this.createPageForm.reset();
    console.log(JSON.stringify(result));

    const CREATEPAGE = this.constant.serviceName_CREATEPAGE;
    let inputData = {
      ...this.dataService.commonInputData(),
      ...{
        [this.constant.key_pageName]: result.pageName,
        [this.constant.key_DESCRIPTION]: result.description,
        [this.constant.key_isEncrypted]: result.isEncrypted
      },
    };
    console.log(inputData);

    this.httpService.callApiServices(CREATEPAGE, inputData).subscribe({
      next: (data: any) => {
        this.responseData = data.responseParameter;
        console.log(this.responseData);
        this.message = this.responseData.Result;
        this.storage.setLocalStorage('pageId', this.responseData.ID);
        this.dataService.goToPage('pageElement');
      },
      error: (error) => console.log(error),
    });
    
  }
}
