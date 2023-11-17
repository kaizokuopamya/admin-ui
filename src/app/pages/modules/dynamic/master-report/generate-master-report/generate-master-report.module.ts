import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateMasterReportRoutingModule } from './generate-master-report-routing.module';
import { GenerateMasterReportComponent } from './generate-master-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatatableModule } from '../../datatable/datatable.module';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [GenerateMasterReportComponent],
  imports: [
    CommonModule,
    GenerateMasterReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    DatatableModule,
    NgSelectModule
  ],
  exports: [GenerateMasterReportComponent]
})
export class GenerateMasterReportModule { }
