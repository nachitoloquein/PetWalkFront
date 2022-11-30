import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialConsumidorPageRoutingModule } from './tutorial-consumidor-routing.module';

import { TutorialConsumidorPage } from './tutorial-consumidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialConsumidorPageRoutingModule
  ],
  declarations: [TutorialConsumidorPage]
})
export class TutorialConsumidorPageModule {}
