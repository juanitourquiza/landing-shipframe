import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'en', renderMode: RenderMode.Prerender },
  { path: 'es', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender },
];
