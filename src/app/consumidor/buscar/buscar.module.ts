import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPageRoutingModule } from './buscar-routing.module';

import { TabsComponent } from '../tabs/tabs.component';

import { BuscarPage } from './buscar.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [BuscarPage, TabsComponent]
})
export class BuscarPageModule {}
