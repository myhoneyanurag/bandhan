import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsManagerPage } from './settings-manager.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsManagerPageRoutingModule {}
