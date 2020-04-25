import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginManagerPage } from './login-manager.page';

const routes: Routes = [
  {
    path: '',
    component: LoginManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginManagerPageRoutingModule { }
