import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarperfilPageRoutingModule } from './mostrarperfil-routing.module';

import { MostrarperfilPage } from './mostrarperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarperfilPageRoutingModule
  ],
  declarations: [MostrarperfilPage]
})
export class MostrarperfilPageModule {}
