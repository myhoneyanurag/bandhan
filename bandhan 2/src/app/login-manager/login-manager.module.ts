import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginManagerPageRoutingModule } from './login-manager-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginManagerPage } from './login-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginManagerPageRoutingModule
  ],
  declarations: [LoginManagerPage]
})
export class LoginManagerPageModule { }
