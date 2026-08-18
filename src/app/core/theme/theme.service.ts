import { DOCUMENT, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'shipframe-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly theme = signal<Theme>('dark');

  init(): void {
    if (!this.isBrowser) {
      return;
    }
    const override = new URLSearchParams(window.location.search).get('theme');
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial: Theme =
      override === 'dark' || override === 'light'
        ? override
        : (stored ?? (prefersDark ? 'dark' : 'light'));
    this.apply(initial);
  }

  toggle(): void {
    this.apply(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private apply(theme: Theme): void {
    this.theme.set(theme);
    if (!this.isBrowser) {
      return;
    }
    const root = this.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(STORAGE_KEY, theme);
  }
}
