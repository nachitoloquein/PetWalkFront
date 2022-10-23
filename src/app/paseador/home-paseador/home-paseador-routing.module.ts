import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePaseadorPage } from './home-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: HomePaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePaseadorPageRoutingModule {}
