import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleTableComponent } from './single-table.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SingleTableComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  exports: [SingleTableComponent]
})
export class SingleTableModule { }
