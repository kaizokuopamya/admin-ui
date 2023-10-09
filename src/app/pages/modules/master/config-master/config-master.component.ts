import { Component } from '@angular/core';
import { AppConstants } from 'src/app/app.constant';
import { CommonMethods } from 'src/app/services/common-method';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';

@Component({
  selector: 'app-config-master',
  templateUrl: './config-master.component.html',
  styleUrls: ['./config-master.component.css'],
})
export class ConfigMasterComponent {
  showForm: boolean = true;

  //feild parameters
  configMasters: any = [];
  constructor(
    public commonMethod: CommonMethods,
    private httpService: HttpRestApiService,
    private constant: AppConstants
  ) {
    this.fetchConfigMaster();
  }

  fetchConfigMaster(): void {
    const getConfigMaster = this.constant.serviceName_GETCONFIGMASTER;
    this.httpService.apiCall(getConfigMaster, {}).subscribe(
      (data) => {
        console.log('Response:', data.result);
        // Assign the response data to your configMasters
        this.configMasters = data.result;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }


  cancel() {
    this.showForm = !this.showForm;
  }
}
