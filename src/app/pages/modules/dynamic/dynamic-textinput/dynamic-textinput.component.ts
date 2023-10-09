import { Component } from '@angular/core';
import { dynamicInput } from './dynamic-textinput.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

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
  dynamicInputForm!: FormGroup;
  showCustomField: boolean = false;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    private dataService: DataService,
    public router: Router
  ) {
    this.dynamicInputForm = this.fb.group({
      dropDownName: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  viewValues(index: number) {
    localStorage.setItem(
      'input',
      JSON.stringify(this.dataService.dynamicInput[index])
    );
    this.dataService.goToPage('dynamicData');
  }

  createElement() {
    this.showCustomField = true;
    const result = this.dynamicInputForm.value;
    this.dynamicInputForm.reset();
    console.log(JSON.stringify(result));

    const CREATEDROPDOWN = this.constant.serviceName_CREATEDROPDOWN;
    let inputData = {
      ...this.dataService.commonInputData(),
      ...{
        [this.constant.key_dropDownName]: result.dropDownName,
        [this.constant.key_type]: result.type,
        [this.constant.key_DESCRIPTION]: result.description,
      },
    };
    console.log(inputData);

    this.httpService.callApiServices(CREATEDROPDOWN, inputData).subscribe({
      next: (data: any) => {
        const responseData = data.responseParameter;
        console.log(responseData);
        if (responseData.opstatus == '01') {
          this.error = responseData.Result;
        }
        console.log(this.dynamicInput);
        const id = responseData.ID;
        if (responseData.opstatus == '00') {
          this.dynamicInput.push({ ...result, id });
          this.dataService.dynamicInput = this.dynamicInput;
        }
      },
      error: (error) => console.log(error),
    });
  }
}
