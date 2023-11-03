import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePageVersionsRoutingModule } from './create-page-versions-routing.module';
import { CreatePageVersionsComponent } from './create-page-versions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [CreatePageVersionsComponent],
  imports: [
    CommonModule,
    CreatePageVersionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    FontAwesomeModule,
  ],
  exports: [CreatePageVersionsComponent]
})
export class CreatePageVersionsModule { }
