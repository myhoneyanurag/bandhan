import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankDetailsPageRoutingModule } from './bank-details-routing.module';

import { BankDetailsPage } from './bank-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BankDetailsPageRoutingModule
  ],
  declarations: [BankDetailsPage]
})
export class BankDetailsPageModule { }
