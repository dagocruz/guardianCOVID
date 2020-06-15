import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidenteInfoPage } from './residente-info.page';

const routes: Routes = [
  {
    path: '',
    component: ResidenteInfoPage,
    children: [
      {
        path: 'valoracion',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../residente-valoracion/residente-valoracion.module').then(m => m.ResidenteValoracionPageModule)
          }
        ]
      },
      {
        path: 'sintomas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../residente-sintomas/residente-sintomas.module').then(m => m.ResidenteSintomasPageModule)
          }
        ]
      },
      {
        path: 'historial',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../residente-historial/residente-historial.module').then(m => m.ResidenteHistorialPageModule)
          }
        ]
      },
      {
        path: 'antecedentes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../residente-antecedentes/residente-antecedentes.module').then(m => m.ResidenteAntecedentesPageModule)
          }
        ]
      },
      {
        path: 'medidas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../residente-medidas/residente-medidas.module').then(m => m.ResidenteMedidasPageModule)
          }
        ]
      }
      /*{
        path: '',
        redirectTo: '/residentes',
        pathMatch: 'full'
      }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidenteInfoPageRoutingModule {}
