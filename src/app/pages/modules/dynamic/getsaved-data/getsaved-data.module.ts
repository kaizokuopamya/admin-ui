import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetsavedDataRoutingModule } from './getsaved-data-routing.module';
import { GetsavedDataComponent } from './getsaved-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [GetsavedDataComponent],
  imports: [
    CommonModule,
    GetsavedDataRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    FontAwesomeModule,
  ],
})
export class GetsavedDataModule {}
