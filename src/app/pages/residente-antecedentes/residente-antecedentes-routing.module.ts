import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidenteAntecedentesPage } from './residente-antecedentes.page';

const routes: Routes = [
  {
    path: '',
    component: ResidenteAntecedentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidenteAntecedentesPageRoutingModule {}
