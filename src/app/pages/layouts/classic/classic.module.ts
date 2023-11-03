import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassicRoutingModule } from './classic-routing.module';
import { ClassicComponent } from './classic.component';
import { HeaderModule } from '../../common-ui/header/header.module';
import { FooterModule } from '../../common-ui/footer/footer.module';
import { SideNavModule } from '../../common-ui/side-nav/side-nav.module';

@NgModule({
  declarations: [ClassicComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    SideNavModule,
    ClassicRoutingModule,
  ],
  exports: [ClassicComponent],
})
export class ClassicModule { }
