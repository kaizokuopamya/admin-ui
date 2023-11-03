import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDataRoutingModule } from './dropdown-data-routing.module';
import { DropdownDataComponent } from './dropdown-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DropdownDataComponent],
  imports: [
    CommonModule,
    DropdownDataRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DropdownDataModule {}
