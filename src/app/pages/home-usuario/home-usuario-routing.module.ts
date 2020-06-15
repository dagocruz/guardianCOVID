import { UsuarioMedidasPageModule } from './../usuario-medidas/usuario-medidas.module';
import { UsuarioMedidasPage } from './../usuario-medidas/usuario-medidas.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeUsuarioPage } from './home-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: HomeUsuarioPage,
    children:[
      {
        path: 'historial',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../usuario-historial/usuario-historial.module').then(m => m.UsuarioHistorialPageModule)
          }
        ]
      },
      {
        path: 'signos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../usuario-signos-vitales/usuario-signos-vitales.module').then(m => m.UsuarioSignosVitalesPageModule)
          }
        ]
      },
      {
        path: 'sintomas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../usuario-sintomas/usuario-sintomas.module').then(m => m.UsuarioSintomasPageModule)
          }
        ]
      },
      {
        path: 'antecedentes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../usuario-antecedentes/usuario-antecedentes.module').then(m => m.UsuarioAntecedentesPageModule)
          }
        ]
      },
      {
        path: 'medidas',
        children: [
          {
            path:'',
            loadChildren: () =>
              import('../usuario-medidas/usuario-medidas.module').then(m => m.UsuarioMedidasPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home-usuario/historial',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeUsuarioPageRoutingModule {}
