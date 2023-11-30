import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntaFakePage } from './inta-fake.page';

const routes: Routes = [
  {
    path: '',
    component: IntaFakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntaFakePageRoutingModule {}
