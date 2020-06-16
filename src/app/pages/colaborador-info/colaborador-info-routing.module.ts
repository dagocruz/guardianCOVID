import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColaboradorInfoPage } from './colaborador-info.page';

const routes: Routes = [
  {
    path: '',
    component: ColaboradorInfoPage,
    children: [
      {
        path:'historial',
        children: [
          {
            path:'',
            loadChildren: () =>
              import('../colaborador-historial/colaborador-historial.module').then(m => m.ColaboradorHistorialPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColaboradorInfoPageRoutingModule {}
