import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicDataComponent } from './dynamic-data.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicDataRoutingModule {}
