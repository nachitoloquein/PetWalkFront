import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialConsumidorPage } from './tutorial-consumidor.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialConsumidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialConsumidorPageRoutingModule {}
