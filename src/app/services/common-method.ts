import { Injectable } from '@angular/core';

declare var $: any;
@Injectable({
  providedIn: 'root',
})
export class CommonMethods {
  constructor() {}

  /**
   * close all popup
   */
  // closeAllPopup() {
  //   $('.popup-bottom').removeClass('popup-active');
  //   $('div.ios-nav-overlay').fadeOut(400);
  // }

  closeSideNavUPI() {
    $('nav.global-nav').removeClass('nav-showing');
    $('div.nav-overlay').fadeOut(300);
    $('body').css('overflow', 'inherit');
  }

  closeSideNavOmni() {
    $('nav.global-nav').removeClass('nav-showing');
    $('div.ios-nav-overlay').fadeOut(400);
    $('body').css('overflow', 'inherit');
  }
}
