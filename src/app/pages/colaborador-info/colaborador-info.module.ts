import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColaboradorInfoPageRoutingModule } from './colaborador-info-routing.module';

import { ColaboradorInfoPage } from './colaborador-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColaboradorInfoPageRoutingModule
  ],
  declarations: [ColaboradorInfoPage]
})
export class ColaboradorInfoPageModule {}
