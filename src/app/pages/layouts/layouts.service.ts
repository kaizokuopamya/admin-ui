import { Injectable } from '@angular/core';
// import { AppConstants } from 'src/app/app.constant';
// import { DataService } from 'src/app/services/data.service';
// import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutsService {

  constructor(
    // private constant: AppConstants,
    // private localStorage: LocalStorageService,
    // private dataService: DataService,
  ) { }

  // getLogoutParams(){
  //   var inputData = {...this.dataService.commonInputData(), ...{
  //     [this.constant.key_mobileNumber]:this.localStorage.getLocalStorage(this.constant.storage_mobileNo)
  //   }}
  //   let encryptData = this.encryptDecryptService.encryptText(this.localStorage.getSessionStorage(this.constant.val_sessionKey), JSON.stringify(inputData));
  //   return encryptData;
  // }
}

