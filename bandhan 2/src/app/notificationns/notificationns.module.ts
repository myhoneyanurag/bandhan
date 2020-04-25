import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationnsPageRoutingModule } from './notificationns-routing.module';

import { NotificationnsPage } from './notificationns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationnsPageRoutingModule
  ],
  declarations: [NotificationnsPage]
})
export class NotificationnsPageModule {}
