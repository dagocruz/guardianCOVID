import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioAntecedentesPage } from './usuario-antecedentes.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioAntecedentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioAntecedentesPageRoutingModule {}
