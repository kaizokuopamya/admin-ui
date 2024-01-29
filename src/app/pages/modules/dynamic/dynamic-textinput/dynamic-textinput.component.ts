import { Component } from '@angular/core';
import { dynamicInput } from './dynamic-textinput.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faEye, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CommonMethods } from 'src/app/services/common-method';

@Component({
  selector: 'app-dynamic-textinput',
  templateUrl: './dynamic-textinput.component.html',
  styleUrls: ['./dynamic-textinput.component.css'],
})
export class DynamicTextinputComponent {
  //icons
  faEye = faEye;
  faLocationArrow = faLocationArrow;

  //custom declarations
  dynamicInputForm: FormGroup;
  dynamicInput: dynamicInput[] = [];
  error: string = '';
  types: any = this.constant.typeOptions;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    private commonMethod: CommonMethods,
    public dataService: DataService,
    private storage: LocalStorageService
  ) {
    this.dynamicInputForm = this.fb.group({
      dropDownName: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      class: ['', Validators.required],
      regex: ['', Validators.required],
      mandatory: ['', Validators.required],
      validation: ['', Validators.required],
    });
  }

  ngOnInit() {
    const storedList = this.storage.getLocalStorage('masterelementlist');
    this.dynamicInput = storedList ? JSON.parse(storedList) : [];
  }

  isIconVisible(type: string): boolean {
    return ['checkbox', 'dropdown', 'radio'].includes(type);
  }

  viewValues(index: number) {
    const masterlist = JSON.parse(
      this.storage.getLocalStorage('masterelementlist')
    );
    this.storage.setLocalStorage('input', JSON.stringify(masterlist[index]));
    this.dataService.goToPage('dropdownData');
  }

  viewValuesviaServer(index: number) {
    this.dataService.goToPage('dropdownDatawithServer');
  }

  createElement() {
    const result = this.dynamicInputForm.value;
    const CREATEDROPDOWN = this.constant.serviceName_CREATEDROPDOWN;
    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_dropDownName]: result.dropDownName,
      [this.constant.key_type]: result.type,
      [this.constant.key_DESCRIPTION]: result.description,
      [this.constant.key_class]: result.class,
      [this.constant.key_functionalities]: result.regex,
      [this.constant.key_mandatory]: result.mandatory ? 'Y' : 'N',
      [this.constant.key_errorMessage]: result.validationMessage,
      [this.constant.key_typeofreq]: 'M',
    };
      this.httpService.callApiServices(CREATEDROPDOWN, inputData).subscribe({
        next: (data: any) => {
          const responseData = data.responseParameter;
          if (responseData.opstatus === '00') {
            this.commonMethod.openPopup('div.popup-bottom.success-popup');
            this.dataService.information = responseData.Result;
            // Retain existing elements from 'masterelementlist' in local storage
            const storedList = JSON.parse(
              this.storage.getLocalStorage('masterelementlist') || '[]'
            );
            const updatedList = [
              ...storedList,
              { ...result, id: responseData.ID },
            ];
            this.storage.setLocalStorage(
              'masterelementlist',
              JSON.stringify(updatedList)
            );
            this.dynamicInput = updatedList;
          } else {
            this.commonMethod.openPopup('div.popup-bottom.error-popup');
            this.dataService.information = 'Unable to Create Element';
            this.dataService.informationLabel = responseData.Result;
          }
        },
        error: (err) => console.log(err),
        complete: () => this.dynamicInputForm.reset(),
      });
  }
}
