import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntaFakePageRoutingModule } from './inta-fake-routing.module';

import { IntaFakePage } from './inta-fake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntaFakePageRoutingModule
  ],
  declarations: [IntaFakePage]
})
export class IntaFakePageModule {}
