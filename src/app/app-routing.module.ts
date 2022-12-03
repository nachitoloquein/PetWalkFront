import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthConsumidorGuard } from './guards/auth-consumidor.guard';
import { AuthTrabajadorGuard } from './guards/auth-trabajador.guard';
import { NoAuthConsumidorGuard } from './guards/no-auth-consumidor.guard';
import { NoAuthTrabajadorGuard } from './guards/no-auth-trabajador.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [NoAuthConsumidorGuard,NoAuthTrabajadorGuard],
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
   path : 'mostrarperfil/:id', 
   loadChildren : () => import('./consumidor/buscar/mostrarperfil/mostrarperfil.module').then(m => m.MostrarperfilPageModule),
   canActivate: [AuthConsumidorGuard]
  },
  {
    path: 'tutorialConsumidor',
    loadChildren: ()=> import('./consumidor/tutorial-consumidor/tutorial-consumidor.module').then(m=>m.TutorialConsumidorPageModule),
    canActivate: [AuthConsumidorGuard]
  },
  {
    path : 'tutorialPaseador',
    loadChildren: () => import('./paseador/tutorial-paseador/tutorial-paseador.module').then(m => m.TutorialPaseadorPageModule),
    canActivate : [AuthTrabajadorGuard]
  },
  {
    path : 'transaccionBuena', 
    loadChildren : () => import('./consumidor/transaccion-buena/transaccion-buena.module').then(m => m.TransaccionBuenaPageModule),
    canActivate: [AuthConsumidorGuard]
   },
   {
    path : 'transaccionMala',
    loadChildren : () => import('./consumidor/transaccion-mala/transaccion-mala.module').then(m => m.TransaccionMalaPageModule),
    canActivate: [AuthConsumidorGuard]
   },
   {
    path : 'tab',
    loadChildren : () => import('./consumidor/tabnav/tabnav.module').then(m => m.TabnavPageModule),
    canActivate: [AuthConsumidorGuard]
   },
   {
    path : 'tabPaseador',
    loadChildren : () => import('./paseador/tabnav/tabnav.module').then(m => m.TabnavPageModule),
    canActivate: [AuthTrabajadorGuard]
   },
   {
    path: 'perfilP',
    loadChildren: () => import('./paseador/perfil-paseador/perfil-paseador.module').then( m => m.PerfilPaseadorPageModule),
    canActivate : [AuthTrabajadorGuard]
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./paseador/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule),
    canActivate : [AuthTrabajadorGuard]
  },
  {
    path: 'historial-paseador',
    loadChildren: () => import('./paseador/historial-paseador/historial-paseador.module').then( m => m.HistorialPaseadorPageModule),
    canActivate : [AuthTrabajadorGuard]
  },
  {
    path: 'cartera',
    loadChildren: () => import('./paseador/cartera/cartera.module').then( m => m.CarteraPageModule),
    canActivate : [AuthTrabajadorGuard]
  },
  {
    path: 'fin',
    loadChildren: () => import('./paseador/fin/fin.module').then( m => m.FinPageModule),
    canActivate : [AuthTrabajadorGuard]
  },
  {
    path: 'paseando',
    loadChildren: () => import('./paseador/paseando/paseando.module').then( m => m.PaseandoPageModule),
    canActivate : [AuthTrabajadorGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
