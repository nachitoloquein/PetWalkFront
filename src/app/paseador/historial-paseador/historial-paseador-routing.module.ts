import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialPaseadorPage } from './historial-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialPaseadorPageRoutingModule {}
