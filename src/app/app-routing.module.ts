import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthConsumidorGuard } from './guards/auth-consumidor.guard';
import { NoAuthConsumidorGuard } from './guards/no-auth-consumidor.guard';
import { NoAuthTrabajadorGuard } from './guards/no-auth-trabajador.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [NoAuthConsumidorGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loginPaseador',
    loadChildren: () => import('./paseador/paseador.module').then( m => m.PaseadorPageModule),
    canActivate: [NoAuthTrabajadorGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./paseador/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [NoAuthTrabajadorGuard]
  },
  {
    path: 'consumidor',
    loadChildren: () => import('./consumidor/consumidor.module').then( m => m.ConsumidorPageModule),
    canActivate: [NoAuthConsumidorGuard]
  },
  {
    path: 'registerconsum',
    loadChildren: () => import('./consumidor/registerconsum/registerconsum.module').then(m => m.RegisterconsumPageModule),
    canActivate: [NoAuthConsumidorGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./consumidor/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AuthConsumidorGuard]
  },{
    path: 'buscar',
    loadChildren: () => import('./consumidor/buscar/buscar.module').then( m => m.BuscarPageModule),
    canActivate: [AuthConsumidorGuard]
  },
  {
    path: 'billetera',
    loadChildren: () => import('./consumidor/billetera/billetera.module').then( m => m.BilleteraPageModule),
    canActivate: [AuthConsumidorGuard]
  },
  {
    path: 'historial',
    loadChildren: () => import('./consumidor/historial/historial.module').then( m => m.HistorialPageModule),
    canActivate: [AuthConsumidorGuard]
  },

  {
    path: 'home-paseador',
    loadChildren: () => import('./paseador/home-paseador/home-paseador.module').then( m => m.HomePaseadorPageModule)
  },
  {
   path : 'mostrarperfil/:id', 
   loadChildren : () => import('./consumidor/buscar/mostrarperfil/mostrarperfil.module').then(m => m.MostrarperfilPageModule) 
  },
  {
    path : 'transaccionBuena', 
    loadChildren : () => import('./consumidor/transaccion-buena/transaccion-buena.module').then(m => m.TransaccionBuenaPageModule) 
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
