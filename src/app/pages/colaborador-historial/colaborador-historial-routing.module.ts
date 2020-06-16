import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColaboradorHistorialPage } from './colaborador-historial.page';

const routes: Routes = [
  {
    path: '',
    component: ColaboradorHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColaboradorHistorialPageRoutingModule {}
