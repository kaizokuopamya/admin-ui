import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { faClose, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-page-element',
  templateUrl: './page-element.component.html',
  styleUrls: ['./page-element.component.css'],
})
export class PageElementComponent {
  @ViewChild('type') type!: ElementRef;
  @ViewChild('selectElement') selectElement!: ElementRef;

  //icons
  faGripHorizontal = faGripHorizontal;
  faClose = faClose;

  response: [] = [];
  elements: any[] = [];
  selectedElements: any[] = []; // Array to hold selected elements
  error: string = '';

  constructor(
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    private dataService: DataService,
    private storage: LocalStorageService
  ) { }

  ngOnInit() { }

  getDropDown(event: any) {
    event.preventDefault();
    let inputData = {
      ...this.dataService.commonInputData(),
      ...{
        [this.constant.key_type]: this.type.nativeElement.value,
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

  addElement() {
    const selectedValue = this.selectElement.nativeElement.value;

    console.log("elements :: ", JSON.stringify(this.elements));
    if (selectedValue && !this.selectedElements.find(each => each.DROPDOWNNAME === selectedValue)?.DROPDOWNNAME) {
      this.selectedElements = [...this.selectedElements, this.elements.find((elem) => elem.DROPDOWNNAME === selectedValue)];
      console.log(this.selectedElements);
      this.selectElement.nativeElement.value = '';
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

  createPageElements() {
    console.log(JSON.stringify(this.selectedElements));
    const ID = this.storage.getLocalStorage('pageId');
    const formattedArray: string = this.selectedElements
      .map((element, index) => {
        const INDEX = (index + 1).toString();
        const DROPDOWNNAME = element.DROPDOWNNAME;
        const ID = element.ID;
        const DESCRIPTION = element.DESCRIPTION;

        return [INDEX, DROPDOWNNAME, ID, DESCRIPTION].join('#');
      })
      .join('~');
    console.log('formatted array:: ', formattedArray);
    let inputData = {
      ...this.dataService.commonInputData(),
      ...{
        [this.constant.key_ID]: ID,
        [this.constant.key_value]: formattedArray,
      },
    };
    const CREATEPAGEELEMENTS = this.constant.serviceName_CREATEPAGEELEMENTS;
    this.httpService.callApiServices(CREATEPAGEELEMENTS, inputData).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error) => console.log(error),
    });
  }
}
