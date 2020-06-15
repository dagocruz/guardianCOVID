import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioMedidasPageRoutingModule } from './usuario-medidas-routing.module';

import { UsuarioMedidasPage } from './usuario-medidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UsuarioMedidasPageRoutingModule
  ],
  declarations: [UsuarioMedidasPage]
})
export class UsuarioMedidasPageModule {}
