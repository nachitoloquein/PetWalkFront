import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPaseadorPageRoutingModule } from './perfil-paseador-routing.module';

import { PerfilPaseadorPage } from './perfil-paseador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPaseadorPageRoutingModule
  ],
  declarations: [PerfilPaseadorPage]
})
export class PerfilPaseadorPageModule {}
