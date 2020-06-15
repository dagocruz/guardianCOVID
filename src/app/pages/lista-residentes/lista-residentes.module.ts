import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaResidentesPageRoutingModule } from './lista-residentes-routing.module';

import { ListaResidentesPage } from './lista-residentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaResidentesPageRoutingModule
  ],
  declarations: [ListaResidentesPage]
})
export class ListaResidentesPageModule {}
