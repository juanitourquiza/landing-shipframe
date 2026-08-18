import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  {
    path: 'en',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    data: { lang: 'en' },
  },
  {
    path: 'es',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    data: { lang: 'es' },
  },
  { path: '**', redirectTo: 'en' },
];
