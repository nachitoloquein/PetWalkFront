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
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
