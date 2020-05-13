import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MypointsPage } from './mypoints.page';

const routes: Routes = [
  {
    path: '',
    component: MypointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypointsPageRoutingModule {}
