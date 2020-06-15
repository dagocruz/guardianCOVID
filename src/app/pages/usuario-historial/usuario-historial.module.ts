
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { UsuarioHistorialPageRoutingModule } from './usuario-historial-routing.module';

import { UsuarioHistorialPage } from './usuario-historial.page';

import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgApexchartsModule,
    //NgxQRCodeModule,
    UsuarioHistorialPageRoutingModule
  ],
  declarations: [UsuarioHistorialPage]
})
export class UsuarioHistorialPageModule {}
