import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarperfilPage } from './mostrarperfil.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarperfilPageRoutingModule {}
