import { Component } from '@angular/core';
import { HttpRestApiService } from './services/http-rest-api.service';
import { DataService } from './services/data.service';
import { CommonMethods } from './services/common-method';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'admin-ui';

  constructor(
    private httpService: HttpRestApiService,
    public dataService: DataService,
    public commonMethod: CommonMethods
  ) {
    this.getIP();
  }

  getIP() {
    this.httpService.getIPAddress().subscribe(
      (res: any) => {
        if (res?.hasOwnProperty('ip')) {
          let splitIp = res.ip.split(',');
          this.dataService.ipAddress = splitIp[0];
        } else {
          this.dataService.ipAddress = '';
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
