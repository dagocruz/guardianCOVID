
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ColaboradorHistorialPageRoutingModule } from './colaborador-historial-routing.module';

import { ColaboradorHistorialPage } from './colaborador-historial.page';

import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgApexchartsModule,
    ColaboradorHistorialPageRoutingModule
  ],
  declarations: [ColaboradorHistorialPage]
})
export class ColaboradorHistorialPageModule {}
