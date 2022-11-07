import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransaccionMalaPage } from './transaccion-mala.page';

const routes: Routes = [
  {
    path: '',
    component: TransaccionMalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaccionMalaPageRoutingModule {}
