import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidenteHistorialPageRoutingModule } from './residente-historial-routing.module';

import { ResidenteHistorialPage } from './residente-historial.page';

import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgApexchartsModule,
    ResidenteHistorialPageRoutingModule
  ],
  declarations: [ResidenteHistorialPage]
})
export class ResidenteHistorialPageModule {}
