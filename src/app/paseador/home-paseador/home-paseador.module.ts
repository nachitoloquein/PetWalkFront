import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePaseadorPageRoutingModule } from './home-paseador-routing.module';

import { HomePaseadorPage } from './home-paseador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePaseadorPageRoutingModule,

  ],
  declarations: [HomePaseadorPage]
})
export class HomePaseadorPageModule {}
