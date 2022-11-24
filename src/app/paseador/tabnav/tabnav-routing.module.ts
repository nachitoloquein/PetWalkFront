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
    },
    {
      path : 'historial-paseador',
      loadChildren: () => import('../historial-paseador/historial-paseador.module').then(m => m.HistorialPaseadorPageModule)
    },
    {
      path : 'cartera',
      loadChildren: () => import('../cartera/cartera.module').then(m => m.CarteraPageModule)
    }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
