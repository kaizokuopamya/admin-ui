import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePageVersionsComponent } from './create-page-versions.component';
import { CreatePageVersionsRoutingModule } from './create-page-versions-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [CreatePageVersionsComponent],
  imports: [
    CommonModule,
    CreatePageVersionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    NgSelectModule,
    FontAwesomeModule,
  ],
  exports: [CreatePageVersionsComponent],
})
export class CreatePageVersionsModule {}
