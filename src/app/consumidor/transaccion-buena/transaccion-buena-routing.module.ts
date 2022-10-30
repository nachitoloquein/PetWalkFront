import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransaccionBuenaPage } from './transaccion-buena.page';

const routes: Routes = [
  {
    path: '',
    component: TransaccionBuenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaccionBuenaPageRoutingModule {}
