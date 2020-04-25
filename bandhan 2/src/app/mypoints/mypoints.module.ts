import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypointsPageRoutingModule } from './mypoints-routing.module';

import { MypointsPage } from './mypoints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MypointsPageRoutingModule
  ],
  declarations: [MypointsPage]
})
export class MypointsPageModule {}
