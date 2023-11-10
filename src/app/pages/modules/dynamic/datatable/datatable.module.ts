import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ExportAsModule } from 'ngx-export-as';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatatableComponent } from './datatable.component';

@NgModule({
  declarations: [DatatableComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ExportAsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [DatatableComponent]
})
export class DatatableModule { }
