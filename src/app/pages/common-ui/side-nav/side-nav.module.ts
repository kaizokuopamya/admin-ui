import { NgModule } from '@angular/core';
import { SideNavComponent } from './side-nav.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [SideNavComponent],
})
export class SideNavModule { }
