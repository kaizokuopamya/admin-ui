import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constant';
import { CommonMethods } from './common-method';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  showSideNav: boolean = false;

  dynamicInput: any = [];
  isCompact: boolean = false;
  ipAddress: string = '';
  latitude: string = '19.4437422';
  longitude: string = '72.805889';
  RRN: string = '129914272';
  constructor(
    private constant: AppConstants,
    private commonMethod: CommonMethods,
    private router : Router
  ) {}

  commonInputData() {
    return {
      [this.constant.key_entityId]: this.constant.val_entityIDDesk,
      [this.constant.key_cbsType]: this.constant.val_cbsTypeTcs,
      [this.constant.key_mobPlatform]: this.constant.val_mobPlatform,
      [this.constant.key_mobileAppVersion]: this.constant.val_mobileAppVersion,
      [this.constant.key_deviceId]: this.constant.val_DeviceID,
      [this.constant.key_clientAppver]: this.constant.val_clientAppVersion,
      [this.constant.key_latitude]: this.latitude,
      [this.constant.key_longitude]: this.longitude,
      [this.constant.key_RRN]: this.RRN,
    };
  }

  goToPage(routeName: string) {
    if (routeName && routeName != 'null') {
      this.router.navigate(['/' + routeName]);
    }
  }

  toggleSideNav(){
    console.log('current value of showcompact: ', this.showSideNav);
    this.showSideNav = !this.showSideNav;
    console.log('after change value of showcompact: ', this.showSideNav);
  }
}
