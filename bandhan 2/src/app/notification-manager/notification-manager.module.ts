import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationManagerPageRoutingModule } from './notification-manager-routing.module';

import { NotificationManagerPage } from './notification-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationManagerPageRoutingModule
  ],
  declarations: [NotificationManagerPage]
})
export class NotificationManagerPageModule {}
