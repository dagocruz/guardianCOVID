import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeResidentesPage } from './home-residentes.page';

const routes: Routes = [
  {
    path: '',
    component: HomeResidentesPage,
    children: [
      {
        path: 'lista',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../lista-residentes/lista-residentes.module').then(m => m.ListaResidentesPageModule)
          }
        ]
      },
      {
        path: 'nuevo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../nuevo-residente/nuevo-residente.module').then(m => m.NuevoResidentePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home-residentes/lista',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeResidentesPageRoutingModule {}
