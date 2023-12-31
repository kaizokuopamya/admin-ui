import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetsavedDataRoutingModule } from './getsaved-data-routing.module';
import { GetsavedDataComponent } from './getsaved-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatatableModule } from '../datatable/datatable.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [GetsavedDataComponent],
  imports: [
    CommonModule,
    GetsavedDataRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    FontAwesomeModule,
    DatatableModule,
    NgSelectModule
  ]
})
export class GetsavedDataModule { }
