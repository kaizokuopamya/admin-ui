import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageElementComponent } from './page-element.component';

const routes: Routes = [
  {
    path: '',
    component: PageElementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageElementRoutingModule {}
