import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app.constant';
import { IRequest } from '../interface/app-interface';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class HttpRestApiService {
  constructor(
    private constants: AppConstants,
    private http: HttpClient,
    private dataService: DataService
  ) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'deviceid': '9',
    }),
  };
  /**
   * This function is invoked whenever api call is made
   * @param endpoint
   * @param request
   */
  apiCall(endpoint: string, request: any): Observable<any> {
    console.log(JSON.stringify(request));
    /**** request Param ***/
   
    var url = this.constants.publicURL.serviceURL;
    console.log('SERVICE URL => ', url);
    return this.http.post(
      `${url}${endpoint}`,
      JSON.stringify(request),
      this.httpOptions
    );
  }

  /**
   * This function is invoked whenever apiservices call is made
   * @param endpoint
   * @param request
   */
  callApiServices(endpoint: string, request: any): Observable<any> {
    const requestObj: IRequest = <IRequest>{
      sourceIp: this.dataService.ipAddress,
      prefered_Language: this.constants.val_prefered_Language,
      entityId: this.constants.val_entityIDDesk,
      deviceId: this.constants.val_DeviceID,
      map: request,
    };
    console.log(JSON.stringify(request));
    /**** request Param ***/
    var url = this.constants.publicURL1.serviceURL;
    console.log('SERVICE URL => ', url);
    console.log("request object: " ,JSON.stringify(requestObj));
    return this.http.post(`${url}${endpoint}`, JSON.stringify(requestObj), this.httpOptions);
  }

  /* This function is invoked to get ipAddress */
  public getIPAddress() {
    return this.http.get('https://jsonip.com');
  }
}
