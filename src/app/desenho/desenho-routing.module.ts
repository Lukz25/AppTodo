import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesenhoPage } from './desenho.page';

const routes: Routes = [
  {
    path: '',
    component: DesenhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesenhoPageRoutingModule {}
