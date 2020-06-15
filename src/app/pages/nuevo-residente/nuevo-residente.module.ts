import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoResidentePageRoutingModule } from './nuevo-residente-routing.module';

import { NuevoResidentePage } from './nuevo-residente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NuevoResidentePageRoutingModule
  ],
  declarations: [NuevoResidentePage]
})
export class NuevoResidentePageModule {}
