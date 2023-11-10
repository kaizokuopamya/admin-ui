import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateMasterReportComponent } from './generate-master-report.component';

const routes: Routes = [{
  path: '', component: GenerateMasterReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateMasterReportRoutingModule { }
