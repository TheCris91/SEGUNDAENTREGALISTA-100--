import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redireccionarLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },  
  {
    path: '',
    redirectTo: 'menu-pri',
    pathMatch: 'full'
  },
  {
    path: 'menu-pri',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin}, 
    loadChildren: () => import('./pages/menu-pri/menu-pri.module').then( m => m.MenuPriPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: ':num2/recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: ':num/registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'informacion',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin}, 
    loadChildren: () => import('./modals/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'perfil',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin}, 
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'form-auto',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin}, 
    loadChildren: () => import('./modals/form-auto/form-auto.module').then( m => m.FormAutoPageModule)
  },
  {
    path: 'info-page',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin},
    loadChildren: () => import('./pages/info-page/info-page.module').then( m => m.InfoPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
