import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageElementRoutingModule } from './page-element-routing.module';
import { PageElementComponent } from './page-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [PageElementComponent],
  imports: [
    CommonModule,
    PageElementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    DragDropModule,
    NgSelectModule
  ],
})
export class PageElementModule { }
