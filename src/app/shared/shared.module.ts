import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavModule } from '../pages/common-ui/side-nav/side-nav.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SideNavModule],
  exports: [SideNavModule]
})
export class SharedModule {}
