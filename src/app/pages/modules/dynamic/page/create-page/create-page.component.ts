import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constant';
import { CommonMethods } from 'src/app/services/common-method';
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
  encryption: string[] = ['static', 'dynamic', 'rsa'];

  constructor(
    private fb: FormBuilder,
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    private dataService: DataService,
    public router: Router,
    private commonMethod: CommonMethods,
    private storage: LocalStorageService
  ) {
    this.createPageForm = this.fb.group({
      pageName: ['', Validators.required],
      description: ['', Validators.required],
      isEncrypted: ['S', Validators.required],
    });
  }

  createPage() {
    const result = this.createPageForm.value;
    const CREATEPAGE = this.constant.serviceName_CREATEPAGE;
    let inputData = {
      ...this.dataService.commonInputData(),
      ...{
        [this.constant.key_pageName]: result.pageName,
        [this.constant.key_DESCRIPTION]: result.description,
        [this.constant.key_isEncrypted]: result.isEncrypted,
      },
    };

    this.httpService.callApiServices(CREATEPAGE, inputData).subscribe({
      next: (data: any) => {
        const responseData = data.responseParameter;
        if (responseData.opstatus === '00') {
          this.dataService.information = `${result.pageName} created  Successfully`;
          this.commonMethod.openPopup('div.popup-bottom.success-popup');
          this.storage.setLocalStorage('pageId', responseData.ID);
          setTimeout(() => {
            this.dataService.goToPage('pageElement');
          }, 2000);
        } else {
          this.dataService.information ='Unable to Create Page';
          this.dataService.informationLabel = responseData.Result;
          this.commonMethod.openPopup('div.popup-bottom.error-popup');
        }
      },
      error: (error) => console.log(error),
    });
  }
}
