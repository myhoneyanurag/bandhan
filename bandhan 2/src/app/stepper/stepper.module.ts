import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepperPageRoutingModule } from './stepper-routing.module';

import { StepperPage } from './stepper.page';
import { MatStepperModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    IonicModule,
    StepperPageRoutingModule
  ],
  declarations: [StepperPage]
})
export class StepperPageModule {}
