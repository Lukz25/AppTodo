import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesenhoPageRoutingModule } from './desenho-routing.module';

import { DesenhoPage } from './desenho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesenhoPageRoutingModule
  ],
  declarations: [DesenhoPage]
})
export class DesenhoPageModule {}
