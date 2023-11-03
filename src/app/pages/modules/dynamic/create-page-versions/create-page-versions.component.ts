import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
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

  type: string = ''
  today: string = ''
  error: string = ''
  selectedElement: string = ''
  showAddElement: boolean = false;
  pages: any = []
  selectedElements: any = []
  elements: any = [];
  pageName: string = ''
  newPageName: string = ''
  pageDescription: string = ''
  isEncrypted: string =''
  encryption: string[] = ['static', 'dynamic', 'rsa']
  
  constructor(
    private constant: AppConstants,
    private dataService: DataService,
    private httpService: HttpRestApiService,
    private storage: LocalStorageService,
    private datePipe: DatePipe
  ) {
    this.fetchPagesCreated()
    this.today = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
  }

  ngOnInit() {
  }

  fetchPagesCreated() {
    const GETPAGESCREATED = this.constant.serviceName_GETPAGESCREATED;
    const inputData = {
      ...this.dataService.commonInputData(),
    };
    this.httpService.callApiServices(GETPAGESCREATED, inputData).subscribe({
      next: (data) => {
        this.pages = data.set.records;
        console.log(data.set.records);
      }
    })
  }

  addElement() {
    const selectedValue = this.selectedElement;
    console.log("selected Element::", this.selectedElement);
    console.log("elements :: ", JSON.stringify(this.elements));
    if (selectedValue && !this.selectedElements.find(each => each.DESCRIPTION === selectedValue)?.DESCRIPTION) {
      this.selectedElements = [...this.selectedElements, this.elements.find((elem) => elem.DESCRIPTION === selectedValue)];
      console.log(this.selectedElements);
      this.selectedElement = '';
    }
  }

  deleteElement(element: any) {
    const index = this.selectedElements.findIndex((selectedElement) => selectedElement.ID === element.ID);
    if (index !== -1) {
      this.selectedElements.splice(index, 1);
    }
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  getDropDown() {
    let inputData = {
      ...this.dataService.commonInputData(),
      ...{
        [this.constant.key_type]: this.type,
      },
    };
    const GETDROPDOWN = this.constant.serviceName_GETDROPDOWN;
    this.httpService.callApiServices(GETDROPDOWN, inputData).subscribe({
      next: (data: any) => {
        console.log(data);
        const response = data.responseParameter;
        if (response.opstatus == '01') {
          this.error = response.Result;
        }
        const result: any = data.set.records;
        this.elements = result;
        console.log(this.elements);
      },
    });
  }

  searchPage() {
    console.log("dattaaaa", this.pageName)
    const GETDYNAMICPAGE = this.constant.serviceName_GETDYNAMICPAGE
    let inputData = {
      ...this.dataService.commonInputData(),
      ...{
        [this.constant.key_pageName]: this.pageName,
      },
    };
    this.httpService.callApiServices(GETDYNAMICPAGE, inputData).subscribe(
      (data) => {
        this.selectedElements = data.set.records
        console.log(data.set.records);
      }
    )
  }

  createPageElements() {
    console.log(JSON.stringify(this.selectedElements));
    const formattedArray: string = this.selectedElements
      .map((element, index) => {
        const INDEX = (index + 1).toString();
        const DROPDOWNNAME = element.DROPDOWNNAME || element.LABELNAME;
        const ID = element.ID;
        const DESCRIPTION = element.DESCRIPTION;

        return [INDEX, DROPDOWNNAME, ID, DESCRIPTION].join('#');
      })
      .join('~');
    console.log('formatted array:: ', formattedArray);
    // let inputData = {
    //   ...this.dataService.commonInputData(),
    //   ...{
    //     [this.constant.key_ID]: ,
    //     [this.constant.key_value]: formattedArray,
    //   },
    // };
    // const CREATEPAGEELEMENTS = this.constant.serviceName_CREATEPAGEELEMENTS;
    // this.httpService.callApiServices(CREATEPAGEELEMENTS, inputData).subscribe({
    //   next: (data: any) => {
    //     console.log(data);
    //   },
    //   error: (error) => console.log(error),
    // });
  }

}
