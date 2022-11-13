import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaseadorPage } from './paseador.page';

const routes: Routes = [
  {
    path: '',
    component: PaseadorPage
  },  {
    path: 'solicitudes',
    loadChildren: () => import('./solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  },

  

  
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaseadorPageRoutingModule {}
