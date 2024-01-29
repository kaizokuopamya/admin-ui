import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleTableComponent } from './multiple-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MultipleTableComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MultipleTableComponent]
})
export class MultipleTableModule { }
