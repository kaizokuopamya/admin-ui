import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, finalize, timeout } from 'rxjs/operators';
import { AppConstants } from '../app.constant';
import { IRequest, IStatus } from '../interface/app-interface';
import { DataService } from './data.service';
import { pageLoaderService } from './pageloader.service';

@Injectable({
  providedIn: 'root',
})
export class HttpRestApiService {
  STATUS: IStatus;
  constructor(
    private constants: AppConstants,
    private http: HttpClient,
    private dataService: DataService,
    private loader: pageLoaderService
  ) {
    this.STATUS = this.constants.Status;
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      deviceid: '9',
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
    this.loader.showLoader();
    const requestObj: IRequest = <IRequest>{
      sourceIp: this.dataService.ipAddress,
      prefered_Language: this.constants.val_prefered_Language,
      entityId: this.constants.val_entityIDDesk,
      deviceId: this.constants.val_DeviceID,
      map: request,
    };
    console.log(JSON.stringify(request));
    /**** request Param ***/
    const url = this.constants.publicURL1.serviceURL;
    console.log('SERVICE URL => ', url);
    console.log('Request object: ', JSON.stringify(requestObj));
    // return this.http.post(`${url}${endpoint}`, JSON.stringify(requestObj), this.httpOptions)
    return this.http.post(`${url}${endpoint}`, JSON.stringify(requestObj), this.httpOptions).pipe(
      timeout(30000),
      catchError((error) => {
        this.handleError(endpoint)(error);
        throw error;
      }),
      finalize(() => {
        // This block will be executed whether the request completes successfully or with an error
        this.loader.hideLoader();
      })
    );
  }

  /**
   * For handling http error this function is invoked
   * @param operation
   * @param result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('Error in http-rest-api ===> ', error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      switch (error.status) {
        case this.STATUS.ERR_CODE_SERVER_UNAVAILABLE:
          console.log(this.constants.SERVICE_UNAVAILABLE_MSG);
          break;
        case this.STATUS.ERR_CODE_TIMEOUT:
          // showToastMessage(this.constants.SERVICE_TIMEOUT_MSG);
          console.log(this.constants.SERVICE_TIMEOUT_MSG);
          break;
        //don't add toast msg from here
        case this.STATUS.ERR_CODE_SERVER_ERROR:
          // showToastMessage(this.constants.SERVICE_SERVER_ERROR_MSG);
          console.log(this.constants.SERVICE_SERVER_ERROR_MSG);
          break;
        case this.STATUS.ERR_CODE_BAD_REQUEST:
          console.log(this.constants.SERVICE_BAD_REQ_MSG);
          break;
        case this.STATUS.ERR_CODE_UNAUTHORIZED:
          console.log(this.constants.SERVICE_UNAUTHORIZED_MSG);
          break;
        case this.STATUS.ERR_CODE_NOT_FOUND:
          console.log(this.constants.SERVICE_NOT_FOUND_MSG);
          break;
        case this.STATUS.ERR_CODE_METHOD_NOT_ALLOWED:
          console.log(this.constants.SERVICE_METHOD_NOT_ALLOWED_MSG);
          break;
        case this.STATUS.ERR_CODE_UNKNOWN:
          console.log(this.constants.SERVICE_METHOD_UNKNOWN_ERR_MSG);
          break;
        default:
          break;
      }
      return of(result as T);
    };
  }

  /* This function is invoked to get ipAddress */
  public getIPAddress() {
    return this.http.get('https://jsonip.com');
  }
}
