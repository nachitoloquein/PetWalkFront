import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarpagoPageRoutingModule } from './confirmarpago-routing.module';

import { ConfirmarpagoPage } from './confirmarpago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarpagoPageRoutingModule
  ],
  declarations: [ConfirmarpagoPage]
})
export class ConfirmarpagoPageModule {}
