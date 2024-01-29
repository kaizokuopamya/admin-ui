import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateMasterReportRoutingModule } from './create-master-report-routing.module';
import { CreateMasterReportComponent } from './create-master-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { SingleTableModule } from '../single-table/single-table.module';
import { MultipleTableModule } from '../multiple-table/multiple-table.module';


@NgModule({
  declarations: [CreateMasterReportComponent],
  imports: [
    CommonModule,
    CreateMasterReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgSelectModule,
    SingleTableModule,
    MultipleTableModule
  ],
  exports: [CreateMasterReportComponent]
})
export class CreateMasterReportModule { }
