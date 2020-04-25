import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsManagerPageRoutingModule } from './settings-manager-routing.module';

import { SettingsManagerPage } from './settings-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsManagerPageRoutingModule
  ],
  declarations: [SettingsManagerPage]
})
export class SettingsManagerPageModule {}
