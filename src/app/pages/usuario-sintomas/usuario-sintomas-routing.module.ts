import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioSintomasPage } from './usuario-sintomas.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioSintomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioSintomasPageRoutingModule {}
