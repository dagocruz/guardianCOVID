import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeColaboradoresPage } from './home-colaboradores.page';

const routes: Routes = [
  {
    path: '',
    component: HomeColaboradoresPage,
    children: [
      {
        path: 'lista',
        children:[
          {
            path: '',
            loadChildren: () => import('../lista-colaboradores/lista-colaboradores.module').then(m => m.ListaColaboradoresPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo:'/home-colaboradores/lista',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeColaboradoresPageRoutingModule {}
