import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumidorPage } from './consumidor.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumidorPage
  },
  {
    path: 'transaccion-buena',
    loadChildren: () => import('./transaccion-buena/transaccion-buena.module').then( m => m.TransaccionBuenaPageModule)
  },
  {
    path: 'transaccion-mala',
    loadChildren: () => import('./transaccion-mala/transaccion-mala.module').then( m => m.TransaccionMalaPageModule)
  },  {
    path: 'tutorial-consumidor',
    loadChildren: () => import('./tutorial-consumidor/tutorial-consumidor.module').then( m => m.TutorialConsumidorPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumidorPageRoutingModule {}
