import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NamestePage } from './nameste.page';

const routes: Routes = [
  {
    path: '',
    component: NamestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamestePageRoutingModule {}
