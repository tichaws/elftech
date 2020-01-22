import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: "pages" ,pathMatch: "full" },
  { path: 'pages',loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: '**', redirectTo:"error",pathMatch: "full" },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {
  // preloadingStrategy: PreloadAllModules,  // <- uncomment this line for disable lazy load
  // useHash: true
});

