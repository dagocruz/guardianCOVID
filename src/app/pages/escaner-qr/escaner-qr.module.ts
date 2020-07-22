import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanerQrPageRoutingModule } from './escaner-qr-routing.module';

import { EscanerQrPage } from './escaner-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanerQrPageRoutingModule
  ],
  declarations: [EscanerQrPage]
})
export class EscanerQrPageModule {}
