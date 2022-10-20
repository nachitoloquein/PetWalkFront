import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthConsumidorGuard } from './guards/auth-consumidor.guard';
import { NoAuthConsumidorGuard } from './guards/no-auth-consumidor.guard';
import { AuthTrabajadorGuard } from './guards/auth-trabajador.guard';
import { NoAuthTrabajadorGuard } from './guards/no-auth-trabajador.guard';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthConsumidorGuard, NoAuthConsumidorGuard, AuthTrabajadorGuard, AuthTrabajadorGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
