import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './pages/layouts/layouts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dynamicInput' },
  {
    path: '',
    component: LayoutsComponent,
    data: {
      layout: 'classic',
      name: 'NoAuthGuard',
    },
    children: [
      { path: 'dynamic', loadChildren: () => import('./pages/modules/dashboard/dashboard.module').then((mod) => mod.DashboardModule) },
      { path: 'masterConfig', loadChildren: () => import('./pages/modules/master/config-master/config-master.module').then((mod) => mod.ConfigMasterModule) },
      { path: 'dynamicInput', loadChildren: () => import('./pages/modules/dynamic/dynamic-textinput/dynamic-textinput.module').then((mod) => mod.DynamicTextinputModule) },
      { path: 'dropdownData', loadChildren: () => import('./pages/modules/dynamic/dropdown-data/dropdown-data.module').then((mod) => mod.DropdownDataModule) },
      { path: 'dropdownDatawithServer', loadChildren: () => import('./pages/modules/dynamic/dropdown-data-server/dropdown-data-server.module').then((mod) => mod.DropdownDataServerModule) },
      { path: 'createPage', loadChildren: () => import('./pages/modules/dynamic/page/create-page/create-page.module').then((mod) => mod.CreatePageModule) },
      { path: 'pageElement', loadChildren: () => import('./pages/modules/dynamic/page/page-element/page-element.module').then((mod) => mod.PageElementModule) },
      { path: 'dynamicPage', loadChildren: () => import('./pages/modules/dynamic/dynamic-page/dynamic-page.module').then((mod) => mod.DynamicPageModule) },
      { path: 'getsavedData', loadChildren: () => import('./pages/modules/dynamic/getsaved-data/getsaved-data.module').then((mod) => mod.GetsavedDataModule) },
      { path: 'createPageVersions', loadChildren: () => import('./pages/modules/dynamic/page/create-page-versions/create-page-versions.module').then((mod) => mod.CreatePageVersionsModule) },
      { path: 'createMasterReport', loadChildren: () => import('./pages/modules/dynamic/master-report/create-master-report/create-master-report.module').then((mod) => mod.CreateMasterReportModule) },
      { path: 'generateMasterReport', loadChildren: () => import('./pages/modules/dynamic/master-report/generate-master-report/generate-master-report.module').then((mod) => mod.GenerateMasterReportModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
