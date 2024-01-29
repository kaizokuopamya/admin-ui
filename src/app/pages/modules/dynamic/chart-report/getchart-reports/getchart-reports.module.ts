import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetchartReportsRoutingModule } from './getchart-reports-routing.module';
import { GetchartReportsComponent } from './getchart-reports.component';


@NgModule({
  declarations: [GetchartReportsComponent],
  imports: [
    CommonModule,
    GetchartReportsRoutingModule
  ],
  exports: [GetchartReportsComponent]
})
export class GetchartReportsModule { }
