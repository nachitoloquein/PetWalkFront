import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransaccionBuenaPageRoutingModule } from './transaccion-buena-routing.module';

import { TransaccionBuenaPage } from './transaccion-buena.page';
import { BilleteraPageModule } from '../billetera/billetera.module';
import { BilleteraPage } from '../billetera/billetera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransaccionBuenaPageRoutingModule,
    BilleteraPageModule
    
  ],
  declarations: [TransaccionBuenaPage]
})
export class TransaccionBuenaPageModule {}
