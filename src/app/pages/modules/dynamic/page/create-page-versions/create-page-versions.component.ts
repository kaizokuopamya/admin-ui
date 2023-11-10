import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faClose, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-create-page-versions',
  templateUrl: './create-page-versions.component.html',
  styleUrls: ['./create-page-versions.component.css']
})
export class CreatePageVersionsComponent {

  //icons
  faGripHorizontal = faGripHorizontal;
  faClose = faClose;

  today: string = ''
  error: string = ''
  showAddElement: boolean = false;
  isPageCreated: boolean = false
  pages: any = []
  selectedElements: any = []
  elements: any = [];
  errorMessage: string = ''
  pageId: string = ''
  encryption: string[] = ['static', 'dynamic', 'rsa']
  pageVersionForm: FormGroup

  constructor(
    private constant: AppConstants,
    private dataService: DataService,
    private httpService: HttpRestApiService,
    private storage: LocalStorageService,
    private datePipe: DatePipe,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.initForm();
    this.fetchPagesCreated();
    this.today = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
  }

  private initForm() {
    this.pageVersionForm = this.fb.group({
      pageName: ['', Validators.required],
      newPageName: ['', Validators.required],
      pageDescription: ['', Validators.required],
      isEncrypted: ['S', Validators.required],
      type: [''],
      selectedElement: [''],
    })
    this.pageVersionForm.get('pageName').valueChanges.subscribe((pageName) => {
      if (pageName != null) {
        this.pageVersionForm.get('newPageName').setValue(pageName + this.today);
      }
    });
  }

  fetchPagesCreated() {
    this.httpService.callApiServices(this.constant.serviceName_GETPAGESCREATED, this.dataService.commonInputData())
      .subscribe((data) => this.pages = data.set.records);
  }

  addElement() {
    const result = this.pageVersionForm.value;
    const selectedValue = result.selectedElement;
    console.log("selected Element::", result.selectedElement);
    console.log("elements :: ", JSON.stringify(this.elements));
    if (selectedValue && !this.selectedElements.find(each => each.DESCRIPTION === selectedValue)?.DESCRIPTION) {
      this.selectedElements = [...this.selectedElements, this.elements.find((elem) => elem.DESCRIPTION === selectedValue)];
      console.log(this.selectedElements);
      result.selectedElement = '';
    }
    this.createPage()
  }

  deleteElement(element: any) {
    const index = this.selectedElements.findIndex((selectedElement) => selectedElement.ID === element.ID);
    if (index !== -1) {
      this.selectedElements.splice(index, 1);
    }
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  getDropDown() {
    const result = this.pageVersionForm.value;
    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_type]: result.type,
    };
    const GETDROPDOWN = this.constant.serviceName_GETDROPDOWN;
    this.httpService.callApiServices(GETDROPDOWN, inputData)
      .subscribe((data: any) => {
        const response = data.responseParameter;
        if (response.opstatus === '01') {
          this.error = response.Result;
        }
        this.elements = data.set.records;
      });
  }

  searchPage() {
    const result = this.pageVersionForm.value;
    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_pageName]: result.pageName,
    };
    const GETDYNAMICPAGE = this.constant.serviceName_GETDYNAMICPAGE
    this.httpService.callApiServices(GETDYNAMICPAGE, inputData)
      .subscribe((data) => this.selectedElements = data.set.records);
  }

  createPage() {
    const result = this.pageVersionForm.value;
    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_pageName]: result.newPageName,
      [this.constant.key_DESCRIPTION]: result.pageDescription,
      [this.constant.key_isEncrypted]: result.isEncrypted,
    };

    const CREATEPAGE = this.constant.serviceName_CREATEPAGE
    if (!this.isPageCreated) {
      this.httpService.callApiServices(CREATEPAGE, inputData)
        .subscribe((data: any) => {
          const response = data.responseParameter;
          console.log(response);
          this.errorMessage = response.Result;
          this.pageId = response.ID;
          console.log("pageID of new page created:: ", this.pageId)
        });
      this.isPageCreated = true;
    }
  }

  createPageElements() {
    const formattedArray = this.selectedElements.map((element, index) => {
      const INDEX = (index + 1).toString();
      const DROPDOWNNAME = element.DROPDOWNNAME || element.LABELNAME;
      const ID = element.ID;
      const DESCRIPTION = element.DESCRIPTION;
      return [INDEX, DROPDOWNNAME, ID, DESCRIPTION].join('#');
    }).join('~');

    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_ID]: this.pageId,
      [this.constant.key_value]: formattedArray,
    };
    const CREATEPAGEELEMENTS = this.constant.serviceName_CREATEPAGEELEMENTS
    this.httpService.callApiServices(CREATEPAGEELEMENTS, inputData)
      .subscribe((data: any) => {
        console.log(data);
      });

    this.pageVersionForm.reset()
    this.dataService.goToPage('dashboard')
  }

}
