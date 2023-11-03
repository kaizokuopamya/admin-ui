import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigMasterRoutingModule } from './config-master-routing.module';
import { ConfigMasterComponent } from './config-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConfigMasterComponent],
  imports: [
    CommonModule,
    ConfigMasterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ConfigMasterModule {}
