import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GuideFormComponent } from './components/guide-form/guide-form.component';
import { GuidePreviewComponent } from './components/guide-preview/guide-preview.component';
import { GuideListComponent } from './components/guide-list/guide-list.component';
import { GuideTableComponent } from './components/guide-table/guide-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GuideFormComponent,
    GuidePreviewComponent,
    GuideListComponent,
    GuideTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
