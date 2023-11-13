import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateMasterReportRoutingModule } from './create-master-report-routing.module';
import { CreateMasterReportComponent } from './create-master-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [CreateMasterReportComponent],
  imports: [
    CommonModule,
    CreateMasterReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgSelectModule
  ],
  exports: [CreateMasterReportComponent]
})
export class CreateMasterReportModule { }
