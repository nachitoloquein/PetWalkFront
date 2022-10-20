import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loginPaseador',
    loadChildren: () => import('./paseador/paseador.module').then( m => m.PaseadorPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./paseador/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'consumidor',
    loadChildren: () => import('./consumidor/consumidor.module').then( m => m.ConsumidorPageModule)
  },
  {
    path: 'registerconsum',
    loadChildren: () => import('./consumidor/registerconsum/registerconsum.module').then(m => m.RegisterconsumPageModule) 
  },
  {
    path: 'perfil',
    loadChildren: () => import('./consumidor/perfil/perfil.module').then( m => m.PerfilPageModule)
  },{
    path: 'buscar',
    loadChildren: () => import('./consumidor/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'billetera',
    loadChildren: () => import('./consumidor/billetera/billetera.module').then( m => m.BilleteraPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./consumidor/historial/historial.module').then( m => m.HistorialPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
