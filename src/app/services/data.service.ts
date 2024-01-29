import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constant';
import { CommonMethods } from './common-method';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  showSideNav: boolean = false;
  public disableBack: boolean;
  dynamicInput: any = [];
  isCompact: boolean = false;
  ipAddress: string = '';
  latitude: string = '19.4437422';
  longitude: string = '72.805889';
  RRN: string = '129914272';
  information: string | any = '';
  informationLabel = '';
  primaryBtnText = '';
  databases: any = [];
  tables: any = [];
  columns: any = [];
  placeholderVisible: boolean = true;

  constructor(private constant: AppConstants, private router: Router) {}

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

  toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }

  hidePlaceholder() {
    this.placeholderVisible = false;
  }
}
