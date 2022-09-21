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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumidorPageRoutingModule {}
