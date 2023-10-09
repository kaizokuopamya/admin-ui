import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRestApiService } from './services/http-rest-api.service';
import { DataService } from './services/data.service';
declare var device: any;

@Injectable({
  providedIn: 'root',
})
export class AppConstants {
  /** public URL Api configuration */

  publicURL = {
    serviceURL: environment.serviceURL,
  };

  publicURL1 = {
    serviceURL: environment.serviceURL1,
  };

  // common keys
  key_sourceIp: string = 'sourceIp';
  key_prefered_Language: string = 'prefered_Language';
  key_entityId: string = 'entityId';
  key_deviceId: string = 'deviceId';
  key_cbsType: string = 'cbsType';
  key_mobPlatform: string = 'mobPlatform';
  key_mobileAppVersion: string = 'mobileAppVersion';
  key_clientAppver: string = 'clientAppVer';
  key_latitude: string = 'latitude';
  key_longitude: string = 'longitude';
  key_RRN: string = 'RRN';

  //dynamic input keys
  key_dropDownName: string = 'dropDownName';
  key_type: string = 'type';
  key_DESCRIPTION: string = 'DESCRIPTION';
  key_ID: string = 'ID';
  key_value: string = 'value';
  key_pageName: string = 'pageName';

  // values
  val_prefered_Language = 'en';
  val_entityIDMob = 'RMOB';
  val_entityId_UMOB = 'UMOB';
  val_entityIDDesk = 'RIB';
  val_cbsType = 'flexcube';
  val_cbsTypeTcs = 'TCS';
  val_cbsTypeFinacle = 'Finacle';
  val_mobPlatform = 'web';
  val_mobileAppVersion = '0.1.40';
  val_mobileAppVersion_android = '2.0';
  val_mobileAppVersion_ios = '2.0';
  val_DeviceID = '9';
  val_clientAppVersion = '1.0.0';
  val_latitude = '';
  val_longitude = '';

  /** Below are the constants for http status success and error code */
  Status = {
    SUCCESS: 200,
    ERR_CODE_BAD_REQUEST: 401,
    ERR_CODE_UNAUTHORIZED: 401,
    ERR_CODE_FORBIDDEN: 403,
    ERR_CODE_NOT_FOUND: 404,
    ERR_CODE_METHOD_NOT_ALLOWED: 405,
    ERR_CODE_SERVER_ERROR: 500,
    ERR_CODE_SERVER_UNAVAILABLE: 503,
    ERR_CODE_TIMEOUT: 408,
    ERR_CODE_UNKNOWN: 0,
  };

  //Service name all constants
  serviceName_FINDALLLEFTMENU = 'menu/findAllLeftMenu';

  serviceName_GETCONFIGMASTER = 'masterconfig/getConfigMaster';
  serviceName_GETDROPDOWN = 'DYNAMICMASTER/GETROPDOWN';
  serviceName_CREATEDROPDOWN = 'DYNAMICMASTER/CREATEDROPDOWN';
  serviceName_CREATEDROPDOWNDETAILS = 'DYNAMICMASTER/CREATEDROPDOWNDETAILS';
  serviceName_GETROPDOWNDETAILS = 'DYNAMICMASTER/GETROPDOWNDETAILS';
  serviceName_CREATEPAGE = 'DYNAMICMASTER/CREATEPAGE';
  serviceName_CREATEPAGEELEMENTS = 'DYNAMICMASTER/CREATEPAGEELEMENTS';
}
