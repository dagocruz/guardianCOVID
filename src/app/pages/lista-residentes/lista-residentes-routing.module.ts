import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaResidentesPage } from './lista-residentes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaResidentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaResidentesPageRoutingModule {}
