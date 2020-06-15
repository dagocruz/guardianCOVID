import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidenteSintomasPageRoutingModule } from './residente-sintomas-routing.module';

import { ResidenteSintomasPage } from './residente-sintomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ResidenteSintomasPageRoutingModule
  ],
  declarations: [ResidenteSintomasPage]
})
export class ResidenteSintomasPageModule {}
