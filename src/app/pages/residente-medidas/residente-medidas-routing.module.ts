import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidenteMedidasPage } from './residente-medidas.page';

const routes: Routes = [
  {
    path: '',
    component: ResidenteMedidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidenteMedidasPageRoutingModule {}
