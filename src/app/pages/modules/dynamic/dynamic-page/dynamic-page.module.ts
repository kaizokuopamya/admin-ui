import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicPageRoutingModule } from './dynamic-page-routing.module';
import { DynamicPageComponent } from './dynamic-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicPageComponent],
  imports: [
    CommonModule,
    DynamicPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DynamicPageModule {}
