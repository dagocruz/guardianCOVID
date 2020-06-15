import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidenteMedidasPageRoutingModule } from './residente-medidas-routing.module';

import { ResidenteMedidasPage } from './residente-medidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ResidenteMedidasPageRoutingModule
  ],
  declarations: [ResidenteMedidasPage]
})
export class ResidenteMedidasPageModule {}
