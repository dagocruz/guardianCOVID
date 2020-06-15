import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioSignosVitalesPage } from './usuario-signos-vitales.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioSignosVitalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioSignosVitalesPageRoutingModule {}
