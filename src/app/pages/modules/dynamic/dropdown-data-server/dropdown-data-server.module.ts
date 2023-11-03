import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDataServerRoutingModule } from './dropdown-data-server-routing.module';
import { DropdownDataServerComponent } from './dropdown-data-server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DropdownDataServerComponent],
  imports: [
    CommonModule,
    DropdownDataServerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DropdownDataServerComponent]
})
export class DropdownDataServerModule { }
