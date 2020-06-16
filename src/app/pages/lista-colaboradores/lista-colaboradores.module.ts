import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaColaboradoresPageRoutingModule } from './lista-colaboradores-routing.module';

import { ListaColaboradoresPage } from './lista-colaboradores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaColaboradoresPageRoutingModule
  ],
  declarations: [ListaColaboradoresPage]
})
export class ListaColaboradoresPageModule {}
