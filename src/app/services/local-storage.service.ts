import { Inject, Injectable, Injector } from '@angular/core';
import {
  LOCAL_STORAGE,
  StorageService,
  SESSION_STORAGE,
} from 'ngx-webstorage-service';
import { AppConstants } from '../app.constant';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(
    @Inject(LOCAL_STORAGE) private localStorage: StorageService,
    @Inject(SESSION_STORAGE) private sessionStorage: StorageService,
    private constant: AppConstants,
    private injector: Injector
  ) {}

  setLocalStorage(key: string, value: string) {
    this.localStorage.set(key, value);
  }

  getLocalStorage(key: string) {
    return this.localStorage.get(key);
  }

  removeFromLocalStorage(key: string) {
    this.localStorage.remove(key);
  }

  clearLocalStorage() {
    this.localStorage.clear();
  }

  hasKeyLocalStorage(key: string) {
    return this.localStorage.has(key);
  }

  setSessionStorage(key: string, value: string) {
    this.sessionStorage.set(key, value);
  }

  getSessionStorage(key: string) {
    return this.sessionStorage.get(key);
  }

  hasKeySessionStorage(key: string) {
    return this.sessionStorage.has(key);
  }

  removeFromSessionStorage(key: string) {
    this.sessionStorage.remove(key);
  }

  clearSessionStorage() {
    this.sessionStorage.clear();
  }
}
