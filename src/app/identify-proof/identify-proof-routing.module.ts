import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdentifyProofPage } from './identify-proof.page';

const routes: Routes = [
  {
    path: '',
    component: IdentifyProofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentifyProofPageRoutingModule {}
