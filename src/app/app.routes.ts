import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    data: { lang: 'en' },
    pathMatch: 'full',
  },
  {
    path: 'es',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    data: { lang: 'es' },
  },
  // English lives at the root; keep /en working for any legacy links.
  { path: 'en', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
