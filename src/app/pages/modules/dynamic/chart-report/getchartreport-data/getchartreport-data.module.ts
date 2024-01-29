import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetchartreportDataRoutingModule } from './getchartreport-data-routing.module';
import { GetchartreportDataComponent } from './getchartreport-data.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GetchartreportDataComponent],
  imports: [
    CommonModule,
    GetchartreportDataRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [GetchartreportDataComponent],
})
export class GetchartreportDataModule {}
