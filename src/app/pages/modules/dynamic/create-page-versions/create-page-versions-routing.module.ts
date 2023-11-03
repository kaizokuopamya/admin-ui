import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePageVersionsComponent } from './create-page-versions.component';

const routes: Routes = [{ path: '', component: CreatePageVersionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePageVersionsRoutingModule { }
