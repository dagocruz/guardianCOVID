import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiasCuidadoPage } from './guias-cuidado.page';

const routes: Routes = [
  {
    path: '',
    component: GuiasCuidadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuiasCuidadoPageRoutingModule {}
