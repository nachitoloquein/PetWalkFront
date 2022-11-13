import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPage } from './tabnav.page';

const routes: Routes = [
  {
    path: '',
    component: TabnavPage,
    children : [
    {
      path: 'perfilP',
      loadChildren: () => import('.././perfil-paseador/perfil-paseador.module').then( m => m.PerfilPaseadorPageModule)
    },
    {
      path : 'solicitudes',
      loadChildren: () => import('../solicitudes/solicitudes.module').then(m => m.SolicitudesPageModule)
    }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
