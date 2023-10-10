import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constant';
import { CommonMethods } from 'src/app/services/common-method';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  @ViewChild('globalNav') globalNav!: ElementRef;
  mainMenuList: any = [];
  constructor(
    public router: Router,
    private commonMethod: CommonMethods,
    private dataService: DataService,
    private httpService: HttpRestApiService,
    private constant: AppConstants
  ) {}

  ngOnInit(): void {
    this.fetchSideMenu();
  }

  fetchSideMenu() {
    const requestPayload: any = { id1: '4' };
    const findLeftMenu: string = this.constant.serviceName_FINDALLLEFTMENU;

    this.httpService.apiCall(findLeftMenu, requestPayload).subscribe({
      next: (data) => {
        console.log('Response:', data.result);
        // Assign the response data to your mainMenuList
        this.mainMenuList = data.result;
      },
      error: (error) => console.log('Error:', error),
    });
  }

  goToPage(routeName: string) {
    if (routeName && routeName != 'null') {
      this.commonMethod.closeSideNavOmni();
      this.router.navigate(['/' + routeName]);
    }
  }

  expandSubmenu(menu: any) {
    menu.isSubMenuOpen = !menu.isSubMenuOpen;
  }
}
