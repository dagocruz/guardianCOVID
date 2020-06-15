import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioHistorialPage } from './usuario-historial.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioHistorialPageRoutingModule {}
