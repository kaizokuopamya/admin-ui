import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetchartReportsComponent } from './getchart-reports.component';

const routes: Routes = [{
  path: '',
  component: GetchartReportsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetchartReportsRoutingModule { }
