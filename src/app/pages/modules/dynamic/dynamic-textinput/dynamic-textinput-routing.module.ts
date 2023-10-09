import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTextinputComponent } from './dynamic-textinput.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicTextinputComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicTextinputRoutingModule {}
