import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialPaseadorPage } from './tutorial-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialPaseadorPageRoutingModule {}
