import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaseadorPage } from './paseador.page';

const routes: Routes = [
  {
    path: '',
    component: PaseadorPage
  },  {
    path: 'tutorial-paseador',
    loadChildren: () => import('./tutorial-paseador/tutorial-paseador.module').then( m => m.TutorialPaseadorPageModule)
  },

  

  

  
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaseadorPageRoutingModule {}
