import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarPage } from './buscar.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPage
  },
  {
    path: 'mostrarperfil/:id',
    loadChildren: () => import('./mostrarperfil/mostrarperfil.module').then( m => m.MostrarperfilPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarPageRoutingModule {}
