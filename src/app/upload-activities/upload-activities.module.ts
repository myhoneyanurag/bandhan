import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UploadActivitiesPageRoutingModule } from './upload-activities-routing.module';

import { UploadActivitiesPage } from './upload-activities.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UploadActivitiesPageRoutingModule
  ],
  declarations: [UploadActivitiesPage]
})
export class UploadActivitiesPageModule { }
