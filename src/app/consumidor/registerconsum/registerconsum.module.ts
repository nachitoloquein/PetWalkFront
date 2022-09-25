import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterconsumPageRoutingModule } from './registerconsum-routing.module';

import { RegisterconsumPage } from './registerconsum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterconsumPageRoutingModule
  ],
  declarations: [RegisterconsumPage]
})
export class RegisterconsumPageModule {}
