import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeColaboradoresPageRoutingModule } from './home-colaboradores-routing.module';

import { HomeColaboradoresPage } from './home-colaboradores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeColaboradoresPageRoutingModule
  ],
  declarations: [HomeColaboradoresPage]
})
export class HomeColaboradoresPageModule {}
