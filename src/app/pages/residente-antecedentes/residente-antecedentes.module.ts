import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidenteAntecedentesPageRoutingModule } from './residente-antecedentes-routing.module';

import { ResidenteAntecedentesPage } from './residente-antecedentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ResidenteAntecedentesPageRoutingModule
  ],
  declarations: [ResidenteAntecedentesPage]
})
export class ResidenteAntecedentesPageModule {}
