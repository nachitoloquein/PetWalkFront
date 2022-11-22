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
  {
    path: 'historial-paseador',
    loadChildren: () => import('./historial-paseador/historial-paseador.module').then( m => m.HistorialPaseadorPageModule)
  },
  {
    path: 'cartera',
    loadChildren: () => import('./cartera/cartera.module').then( m => m.CarteraPageModule)
  },
  {
    path: 'paseando',
    loadChildren: () => import('./paseando/paseando.module').then( m => m.PaseandoPageModule)
  },
  {
    path: 'fin',
    loadChildren: () => import('./fin/fin.module').then( m => m.FinPageModule)
  },

  

  
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaseadorPageRoutingModule {}
