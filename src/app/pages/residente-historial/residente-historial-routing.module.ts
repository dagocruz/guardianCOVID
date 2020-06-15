import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidenteHistorialPage } from './residente-historial.page';

const routes: Routes = [
  {
    path: '',
    component: ResidenteHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidenteHistorialPageRoutingModule {}
