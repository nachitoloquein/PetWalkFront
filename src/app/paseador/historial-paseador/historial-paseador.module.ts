import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPaseadorPageRoutingModule } from './historial-paseador-routing.module';

import { HistorialPaseadorPage } from './historial-paseador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPaseadorPageRoutingModule
  ],
  declarations: [HistorialPaseadorPage]
})
export class HistorialPaseadorPageModule {}
