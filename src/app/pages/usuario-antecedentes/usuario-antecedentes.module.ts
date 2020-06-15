import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioAntecedentesPageRoutingModule } from './usuario-antecedentes-routing.module';

import { UsuarioAntecedentesPage } from './usuario-antecedentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UsuarioAntecedentesPageRoutingModule
  ],
  declarations: [UsuarioAntecedentesPage]
})
export class UsuarioAntecedentesPageModule {}
