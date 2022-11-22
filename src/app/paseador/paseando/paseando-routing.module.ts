import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaseandoPage } from './paseando.page';

const routes: Routes = [
  {
    path: '',
    component: PaseandoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaseandoPageRoutingModule {}
