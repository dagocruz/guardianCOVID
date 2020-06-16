import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaColaboradoresPage } from './lista-colaboradores.page';

const routes: Routes = [
  {
    path: '',
    component: ListaColaboradoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaColaboradoresPageRoutingModule {}
