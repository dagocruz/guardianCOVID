import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuiasCuidadoPageRoutingModule } from './guias-cuidado-routing.module';

import { GuiasCuidadoPage } from './guias-cuidado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuiasCuidadoPageRoutingModule
  ],
  declarations: [GuiasCuidadoPage]
})
export class GuiasCuidadoPageModule {}
