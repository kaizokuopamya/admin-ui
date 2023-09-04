import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SIDEMENU } from 'src/app/model/common.model';
import { CommonMethods } from 'src/app/services/common-method';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  @ViewChild('globalNav') globalNav!: ElementRef;
  mainMenuList: any = [];
  constructor(public router: Router, private commonMethod: CommonMethods) {}

  ngOnInit(): void {
    this.mainMenuList = SIDEMENU;
  }

  goToPage(routeName: string) {
    if (routeName && routeName != 'null') {
      this.commonMethod.closeSideNavOmni();
      this.router.navigate(['/' + routeName]);
    }
  }
}
