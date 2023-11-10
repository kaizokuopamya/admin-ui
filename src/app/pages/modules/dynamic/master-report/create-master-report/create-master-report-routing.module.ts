import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMasterReportComponent } from './create-master-report.component';

const routes: Routes = [{
  path: '', component: CreateMasterReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateMasterReportRoutingModule { }
