import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaseadorPageRoutingModule } from './paseador-routing.module';

import { PaseadorPage } from './paseador.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaseadorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PaseadorPage]
})
export class PaseadorPageModule {}
