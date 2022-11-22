import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaseandoPageRoutingModule } from './paseando-routing.module';

import { PaseandoPage } from './paseando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaseandoPageRoutingModule
  ],
  declarations: [PaseandoPage]
})
export class PaseandoPageModule {}
