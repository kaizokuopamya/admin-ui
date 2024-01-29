import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetchartreportDataComponent } from './getchartreport-data.component';

const routes: Routes = [{
  path: '',
  component: GetchartreportDataComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetchartreportDataRoutingModule { }
