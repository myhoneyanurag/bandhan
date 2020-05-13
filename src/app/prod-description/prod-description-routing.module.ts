import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdDescriptionPage } from './prod-description.page';

const routes: Routes = [
  {
    path: '',
    component: ProdDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdDescriptionPageRoutingModule {}
