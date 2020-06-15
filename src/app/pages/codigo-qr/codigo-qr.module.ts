import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { QRCodeModule } from 'angularx-qrcode';

import { IonicModule } from '@ionic/angular';

import { CodigoQrPageRoutingModule } from './codigo-qr-routing.module';

import { CodigoQrPage } from './codigo-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    ReactiveFormsModule,
    CodigoQrPageRoutingModule
  ],
  declarations: [CodigoQrPage],
  bootstrap: [CodigoQrPage]
})
export class CodigoQrPageModule {}
