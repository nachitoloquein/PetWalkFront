import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumidorPage } from './consumidor.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumidorPage
  },
  {
    path: 'registerconsum',
    loadChildren: () => import('./registerconsum/registerconsum.module').then( m => m.RegisterconsumPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'billetera',
    loadChildren: () => import('./billetera/billetera.module').then( m => m.BilleteraPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumidorPageRoutingModule {}
