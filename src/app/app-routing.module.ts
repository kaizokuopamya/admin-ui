import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/modules/dashboard/dashboard.module').then(
        (mod) => mod.DashboardModule
      ),
  },
  {
    path: 'masterConfig',
    loadChildren: () =>
      import('./pages/modules/master/config-master/config-master.module').then(
        (mod) => mod.ConfigMasterModule
      ),
  },
  {
    path: 'dynamicInput',
    loadChildren: () =>
      import(
        './pages/modules/dynamic/dynamic-textinput/dynamic-textinput.module'
      ).then((mod) => mod.DynamicTextinputModule),
  },
  {
    path: 'dynamicData',
    loadChildren: () =>
      import('./pages/modules/dynamic/dynamic-data/dynamic-data.module').then(
        (mod) => mod.DynamicDataModule
      ),
  },
  {
    path: 'createPage',
    loadChildren: () =>
      import('./pages/modules/dynamic/create-page/create-page.module').then(
        (mod) => mod.CreatePageModule
      ),
  },
  {
    path: 'pageElement',
    loadChildren: () =>
      import('./pages/modules/dynamic/page-element/page-element.module').then(
        (mod) => mod.PageElementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
