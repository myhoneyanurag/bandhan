import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypointsPageRoutingModule } from './mypoints-routing.module';

import { MypointsPage } from './mypoints.page';
import { ChartsModule } from 'ng2-charts'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MypointsPageRoutingModule,
    ChartsModule
  ],
  declarations: [MypointsPage]
})
export class MypointsPageModule { }
