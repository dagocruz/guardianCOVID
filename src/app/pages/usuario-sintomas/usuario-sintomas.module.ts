import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioSintomasPageRoutingModule } from './usuario-sintomas-routing.module';

import { UsuarioSintomasPage } from './usuario-sintomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UsuarioSintomasPageRoutingModule
  ],
  declarations: [UsuarioSintomasPage]
})
export class UsuarioSintomasPageModule {}
