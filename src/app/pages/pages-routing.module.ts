import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: 'home', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
      { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
    ]
  }];

export const PagesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
