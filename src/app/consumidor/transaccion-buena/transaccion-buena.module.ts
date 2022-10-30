import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransaccionBuenaPageRoutingModule } from './transaccion-buena-routing.module';

import { TransaccionBuenaPage } from './transaccion-buena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransaccionBuenaPageRoutingModule
  ],
  declarations: [TransaccionBuenaPage]
})
export class TransaccionBuenaPageModule {}
