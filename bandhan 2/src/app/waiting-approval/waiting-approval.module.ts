import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingApprovalPageRoutingModule } from './waiting-approval-routing.module';

import { WaitingApprovalPage } from './waiting-approval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingApprovalPageRoutingModule
  ],
  declarations: [WaitingApprovalPage]
})
export class WaitingApprovalPageModule {}
