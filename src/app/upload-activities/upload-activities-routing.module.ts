import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadActivitiesPage } from './upload-activities.page';

const routes: Routes = [
  {
    path: '',
    component: UploadActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadActivitiesPageRoutingModule {}
