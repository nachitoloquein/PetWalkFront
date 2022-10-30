import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarpagoPage } from './confirmarpago.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarpagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarpagoPageRoutingModule {}
