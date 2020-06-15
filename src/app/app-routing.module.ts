import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from "./services/auth-guard.service";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    //canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'home-residentes',
    loadChildren: () => import('./pages/home-residentes/home-residentes.module').then( m => m.HomeResidentesPageModule),
    //canActivate: [AuthGuardService]
  },
  {
    path: 'lista-residentes',
    loadChildren: () => import('./pages/lista-residentes/lista-residentes.module').then( m => m.ListaResidentesPageModule),
    //canActivate: [AuthGuardService]
  },
  {
    path: 'nuevo-residente',
    loadChildren: () => import('./pages/nuevo-residente/nuevo-residente.module').then( m => m.NuevoResidentePageModule),
    //canActivate: [AuthGuardService]
  },
  {
    path: 'residentes/:id',
    //path: 'residentes',
    loadChildren: () => import('./pages/residente-info/residente-info.module').then( m => m.ResidenteInfoPageModule)
  },
  {
    path: 'residente-valoracion',
    loadChildren: () => import('./pages/residente-valoracion/residente-valoracion.module').then( m => m.ResidenteValoracionPageModule)
  },
  {
    path: 'residente-sintomas',
    loadChildren: () => import('./pages/residente-sintomas/residente-sintomas.module').then( m => m.ResidenteSintomasPageModule)
  },
  {
    path: 'guias-cuidado',
    loadChildren: () => import('./pages/guias-cuidado/guias-cuidado.module').then( m => m.GuiasCuidadoPageModule)
  },
  {
    path: 'residente-historial',
    loadChildren: () => import('./pages/residente-historial/residente-historial.module').then( m => m.ResidenteHistorialPageModule)
  },
  {
    path: 'home-usuario',
    loadChildren: () => import('./pages/home-usuario/home-usuario.module').then( m => m.HomeUsuarioPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'usuario-historial',
    loadChildren: () => import('./pages/usuario-historial/usuario-historial.module').then( m => m.UsuarioHistorialPageModule)
  },
  {
    path: 'usuario-signos-vitales',
    loadChildren: () => import('./pages/usuario-signos-vitales/usuario-signos-vitales.module').then( m => m.UsuarioSignosVitalesPageModule)
  },
  {
    path: 'usuario-sintomas',
    loadChildren: () => import('./pages/usuario-sintomas/usuario-sintomas.module').then( m => m.UsuarioSintomasPageModule)
  },
  {
    path: 'usuario-antecedentes',
    loadChildren: () => import('./pages/usuario-antecedentes/usuario-antecedentes.module').then( m => m.UsuarioAntecedentesPageModule)
  },
  {
    path: 'residente-antecedentes',
    loadChildren: () => import('./pages/residente-antecedentes/residente-antecedentes.module').then( m => m.ResidenteAntecedentesPageModule)
  },
  {
    path: 'usuario-medidas',
    loadChildren: () => import('./pages/usuario-medidas/usuario-medidas.module').then( m => m.UsuarioMedidasPageModule)
  },
  {
    path: 'residente-medidas',
    loadChildren: () => import('./pages/residente-medidas/residente-medidas.module').then( m => m.ResidenteMedidasPageModule)
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./pages/codigo-qr/codigo-qr.module').then( m => m.CodigoQrPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
