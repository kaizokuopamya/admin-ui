import { Injectable } from '@angular/core';

declare var $: any;
@Injectable({
  providedIn: 'root',
})
export class CommonMethods {
  constructor() {}

  /**
   * Close Popup name by class name
   * @param popupName
   */
  closePopup(popupName: string) {
    $(popupName).removeClass('popup-active');
    $('div.ios-nav-overlay').fadeOut(400);
  }

  /**
   * close all popup
   */
  closeAllPopup() {
    $('.popup-bottom').removeClass('popup-active');
    $('div.ios-nav-overlay').fadeOut(400);
  }

  /**
   * Open Modal Popup By Class name
   */
  openPopup(popupName: string, checkExisting?) {
    if (checkExisting) {
      $(popupName).addClass('popup-active');
      $('div.ios-nav-overlay').fadeIn(400);
    } else {
      if (!$(popupName).hasClass('popup-active')) {
        setTimeout(() => {
          $(popupName).addClass('popup-active');
          $('div.ios-nav-overlay').fadeIn(400);
        }, 100);
      } else {
        $(popupName).removeClass('popup-active');
        $('div.ios-nav-overlay').fadeOut();
      }
    }
  }

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

  toggleExportChevron() {
    $('.dt-exports').click(function () {
      // Toggle visibility of export options within the .dt-exports element
      $(this).siblings('.linkbutton').toggle();

      // Toggle the class expdrop-showing on the .dt-exports element
      $(this).closest('.dt-exports').toggleClass('expdrop-showing');
    });
  }

  /**
   * @function genRandomDigit
   * @param {int} - length of random number to be generated.
   * description - This function returns the random number of specified length.
   */

  genRandomDigit(length: number) {
    var minValue = '1';
    var maxValue = '9';
    for (var i = 0; i < length - 1; i++) {
      minValue = minValue + '0';
      maxValue = maxValue + '9';
    }
    return Math.floor(Math.random() * parseInt(maxValue) + parseInt(minValue));
  }
}
