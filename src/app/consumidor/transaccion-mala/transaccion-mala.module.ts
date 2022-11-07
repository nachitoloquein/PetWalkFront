import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransaccionMalaPageRoutingModule } from './transaccion-mala-routing.module';

import { TransaccionMalaPage } from './transaccion-mala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransaccionMalaPageRoutingModule
  ],
  declarations: [TransaccionMalaPage]
})
export class TransaccionMalaPageModule {}
