import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeResidentesPageRoutingModule } from './home-residentes-routing.module';

import { HomeResidentesPage } from './home-residentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeResidentesPageRoutingModule
  ],
  declarations: [HomeResidentesPage]
})
export class HomeResidentesPageModule {}
