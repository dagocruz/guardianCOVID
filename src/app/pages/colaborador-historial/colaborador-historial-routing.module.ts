import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColaboradorHistorialPage } from './colaborador-historial.page';

const routes: Routes = [
  {
    path: '',
    component: ColaboradorHistorialPage,
    children:[
      {
        path:'qr',
        loadChildren: () => import('../codigo-qr-colaborador/codigo-qr-colaborador.module').then(m => m.CodigoQrColaboradorPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColaboradorHistorialPageRoutingModule {}
