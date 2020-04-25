import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationnsPage } from './notificationns.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationnsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationnsPageRoutingModule {}
