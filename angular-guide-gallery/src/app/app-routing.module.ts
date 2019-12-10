import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuideListComponent } from "./components/guide-list/guide-list.component";
import { GuideFormComponent } from "./components/guide-form/guide-form.component";
import { GuidePreviewComponent } from "./components/guide-preview/guide-preview.component";
import { GuideTableComponent } from './components/guide-table/guide-table.component';

const routes: Routes = [
  {
    path: 'guides',
    // component: GuideListComponent
    component: GuideTableComponent
  },
  {
    path: 'guides/new',
    component: GuideFormComponent
  },
  {
    path: 'guides/:id',
    component: GuidePreviewComponent
  },
  {
    path: '',
    redirectTo: '/guides',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
