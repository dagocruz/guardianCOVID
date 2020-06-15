import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioMedidasPage } from './usuario-medidas.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioMedidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioMedidasPageRoutingModule {}
