import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownDataServerComponent } from './dropdown-data-server.component';

const routes: Routes = [{
  path: '',
  component: DropdownDataServerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownDataServerRoutingModule { }
