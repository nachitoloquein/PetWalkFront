import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaseadorPage } from './paseador.page';

const routes: Routes = [
  {
    path: '',
    component: PaseadorPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaseadorPageRoutingModule {}
