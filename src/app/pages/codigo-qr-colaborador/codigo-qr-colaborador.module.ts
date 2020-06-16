import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QRCodeModule } from 'angularx-qrcode';

import { IonicModule } from '@ionic/angular';

import { CodigoQrColaboradorPageRoutingModule } from './codigo-qr-colaborador-routing.module';

import { CodigoQrColaboradorPage } from './codigo-qr-colaborador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    ReactiveFormsModule,
    CodigoQrColaboradorPageRoutingModule
  ],
  declarations: [CodigoQrColaboradorPage]
})
export class CodigoQrColaboradorPageModule {}
