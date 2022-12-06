import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialPaseadorPageRoutingModule } from './tutorial-paseador-routing.module';

import { TutorialPaseadorPage } from './tutorial-paseador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialPaseadorPageRoutingModule
  ],
  declarations: [TutorialPaseadorPage]
})
export class TutorialPaseadorPageModule {}
