import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetsavedDataComponent } from './getsaved-data.component';

const routes: Routes = [
  {
    path: '',
    component: GetsavedDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetsavedDataRoutingModule {}
