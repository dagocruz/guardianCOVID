import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoResidentePage } from './nuevo-residente.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoResidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoResidentePageRoutingModule {}
