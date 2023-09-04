import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Service1RoutingModule } from './service1-routing.module';
import { Service1Component } from './service1.component';

@NgModule({
  declarations: [Service1Component],
  imports: [CommonModule, Service1RoutingModule],
})
export class Service1Module {}
