import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterconsumPage } from './registerconsum.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterconsumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterconsumPageRoutingModule {}
