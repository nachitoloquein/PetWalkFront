import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPaseadorPage } from './perfil-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPaseadorPageRoutingModule {}
