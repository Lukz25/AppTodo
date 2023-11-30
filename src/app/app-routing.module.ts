import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'inta-fake',
    loadChildren: () => import('./inta-fake/inta-fake.module').then( m => m.IntaFakePageModule)
  },
  {
    path: 'temp',
    loadChildren: () => import('./temp/temp.module').then( m => m.TempPageModule)
  },
  {
    path: 'desenho',
    loadChildren: () => import('./desenho/desenho.module').then( m => m.DesenhoPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
