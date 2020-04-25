import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NamestePageRoutingModule } from './nameste-routing.module';

import { NamestePage } from './nameste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NamestePageRoutingModule
  ],
  declarations: [NamestePage]
})
export class NamestePageModule {}
