import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationManagerPage } from './notification-manager.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationManagerPageRoutingModule {}
