import { Component } from '@angular/core';
import { dynamicInput } from './dynamic-textinput.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-dynamic-textinput',
  templateUrl: './dynamic-textinput.component.html',
  styleUrls: ['./dynamic-textinput.component.css'],
})
export class DynamicTextinputComponent {
  //icons
  faEye = faEye;

  //custom declarations
  dynamicInput: dynamicInput[] = [];
  masterElementList: any[] = [];
  dynamicInputForm!: FormGroup;
  showCustomField: boolean = true;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    private dataService: DataService,
    private router: Router,
    private storage: LocalStorageService
  ) {}

  ngOnInit() {
    this.dynamicInputForm = this.fb.group({
      dropDownName: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.dynamicInput = JSON.parse(
      this.storage.getLocalStorage('masterelementlist')
    );
  }

  isIconVisible(type: string): boolean {
    return ['checkbox', 'dropdown', 'radio'].includes(type);
  }

  viewValues(index: number) {
    this.storage.setLocalStorage(
      'input',
      JSON.stringify(this.dataService.dynamicInput[index])
    );
    this.dataService.goToPage('dynamicData');
  }

  createElement() {
    const result = this.dynamicInputForm.value;
    this.dynamicInputForm.reset();
    const CREATEDROPDOWN = this.constant.serviceName_CREATEDROPDOWN;
    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_dropDownName]: result.dropDownName,
      [this.constant.key_type]: result.type,
      [this.constant.key_DESCRIPTION]: result.description,
    };

    this.httpService.callApiServices(CREATEDROPDOWN, inputData).subscribe({
      next: (data: any) => {
        const responseData = data.responseParameter;
        if (responseData.opstatus === '01') {
          this.error = responseData.Result;
        }
        const id = responseData.ID;
        if (responseData.opstatus === '00') {
          this.masterElementList.push({ ...result, id });
          this.dataService.dynamicInput = this.masterElementList;
          console.log(this.masterElementList);
          this.storage.setLocalStorage(
            'masterelementlist',
            JSON.stringify(this.masterElementList)
          );
          const data = this.storage.getLocalStorage('masterelementlist');
          this.dynamicInput = JSON.parse(data);
          console.log(this.dynamicInput);
        }
      },
      error: (error) => console.log(error),
    });
  }
}
