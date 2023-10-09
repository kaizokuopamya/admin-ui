import { Component } from '@angular/core';
import { HttpRestApiService } from './services/http-rest-api.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'admin-ui';

  constructor(
    private httpService: HttpRestApiService,
    private dataService: DataService
  ) {
    this.getIP();
  }

  getIP() {
    //we are
    this.httpService.getIPAddress().subscribe(
      (res: any) => {
        console.log('IP Address Details', res);
        if (res?.hasOwnProperty('ip')) {
          let splitIp = res.ip.split(',');
          this.dataService.ipAddress = splitIp[0];
          console.log('this.clientIp inside ip ', this.dataService.ipAddress);
        } else {
          this.dataService.ipAddress = '';
          console.log('this.clientIp blank ', this.dataService.ipAddress);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
