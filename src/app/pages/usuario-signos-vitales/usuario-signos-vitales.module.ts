import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioSignosVitalesPageRoutingModule } from './usuario-signos-vitales-routing.module';

import { UsuarioSignosVitalesPage } from './usuario-signos-vitales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UsuarioSignosVitalesPageRoutingModule
  ],
  declarations: [UsuarioSignosVitalesPage]
})
export class UsuarioSignosVitalesPageModule {}
