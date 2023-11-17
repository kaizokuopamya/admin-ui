import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTextinputRoutingModule } from './dynamic-textinput-routing.module';
import { DynamicTextinputComponent } from './dynamic-textinput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [DynamicTextinputComponent],
  imports: [
    CommonModule,
    DynamicTextinputRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgSelectModule
  ],
})
export class DynamicTextinputModule { }
