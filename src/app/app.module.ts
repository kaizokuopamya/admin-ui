import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/common-ui/footer/footer.component';
import { HeaderComponent } from './pages/common-ui/header/header.component';
import { SideNavComponent } from './pages/common-ui/side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigMasterComponent } from './pages/modules/master/config-master/config-master.component';
import { DynamicTextinputComponent } from './pages/modules/dynamic/dynamic-textinput/dynamic-textinput.component';
import { DropdownDataComponent } from './pages/modules/dynamic/dropdown-data/dropdown-data.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreatePageComponent } from './pages/modules/dynamic/create-page/create-page.component';
import { PageElementComponent } from './pages/modules/dynamic/page-element/page-element.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DynamicPageComponent } from './pages/modules/dynamic/dynamic-page/dynamic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    ConfigMasterComponent,
    DynamicTextinputComponent,
    DropdownDataComponent,
    CreatePageComponent,
    PageElementComponent,
    DynamicPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DragDropModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
