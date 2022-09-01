import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaseadorPageRoutingModule } from './paseador-routing.module';

import { PaseadorPage } from './paseador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaseadorPageRoutingModule
  ],
  declarations: [PaseadorPage]
})
export class PaseadorPageModule {}
