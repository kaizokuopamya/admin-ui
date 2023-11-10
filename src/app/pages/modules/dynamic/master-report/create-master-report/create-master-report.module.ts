import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateMasterReportRoutingModule } from './create-master-report-routing.module';
import { CreateMasterReportComponent } from './create-master-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [CreateMasterReportComponent],
  imports: [
    CommonModule,
    CreateMasterReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [CreateMasterReportComponent]
})
export class CreateMasterReportModule { }
