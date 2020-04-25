import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitingApprovalPage } from './waiting-approval.page';

const routes: Routes = [
  {
    path: '',
    component: WaitingApprovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingApprovalPageRoutingModule {}
