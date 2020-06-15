import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidenteValoracionPageRoutingModule } from './residente-valoracion-routing.module';

import { ResidenteValoracionPage } from './residente-valoracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ResidenteValoracionPageRoutingModule
  ],
  declarations: [ResidenteValoracionPage]
})
export class ResidenteValoracionPageModule {}
