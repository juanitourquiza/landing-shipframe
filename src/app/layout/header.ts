import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

import { I18nService } from '../core/i18n/i18n.service';
import { ThemeService } from '../core/theme/theme.service';
import { IconComponent } from '../shared/icon';
import { LogoComponent } from './logo';

const REPO_URL = 'https://github.com/juanitourquiza/shipframe';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent, LogoComponent],
  styles: [
    `
      .site-header.is-scrolled {
        background: color-mix(in srgb, var(--bg) 82%, transparent);
        backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--border-soft);
      }
    `,
  ],
  template: `
    <header
      class="site-header fixed inset-x-0 top-0 z-50 transition-all duration-300"
      [class.is-scrolled]="scrolled()"
    >
      <div
        class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <a [routerLink]="'/' + lang()" class="shrink-0" aria-label="ShipFrame home">
          <app-logo />
        </a>

        <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
          @for (link of nav().links; track link.id) {
            <a
              [href]="'#' + link.id"
              class="text-fg-muted hover:text-fg rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            >
              {{ link.label }}
            </a>
          }
        </nav>

        <div class="flex items-center gap-1.5">
          <a
            [routerLink]="'/' + i18n.otherLang()"
            class="text-fg-muted hover:text-fg hover:border-brand-400/60 rounded-lg border border-transparent px-2.5 py-1.5 text-sm font-semibold uppercase transition-colors"
            [attr.aria-label]="'Switch language to ' + i18n.otherLang()"
          >
            {{ i18n.otherLang() }}
          </a>

          <button
            type="button"
            (click)="theme.toggle()"
            class="text-fg-muted hover:text-fg hover:bg-surface-2 grid size-9 place-items-center rounded-lg transition-colors"
            [attr.aria-label]="theme.theme() === 'dark' ? nav().themeLight : nav().themeDark"
          >
            <app-icon [name]="theme.theme() === 'dark' ? 'sun' : 'moon'" [size]="18" />
          </button>

          <a
            [href]="repo"
            target="_blank"
            rel="noopener noreferrer"
            class="text-fg-muted hover:text-fg hover:bg-surface-2 hidden size-9 place-items-center rounded-lg transition-colors sm:grid"
            aria-label="ShipFrame on GitHub"
          >
            <app-icon name="github" [size]="18" />
          </a>

          <a
            [href]="'#install'"
            class="from-brand-500 to-brand-600 shadow-brand-500/25 hover:shadow-brand-500/40 ml-1 hidden rounded-lg bg-gradient-to-b px-4 py-2 text-sm font-semibold text-white shadow-lg transition-shadow sm:inline-block"
          >
            {{ nav().install }}
          </a>

          <button
            type="button"
            (click)="menuOpen.set(!menuOpen())"
            class="text-fg-muted hover:bg-surface-2 grid size-9 place-items-center rounded-lg transition-colors lg:hidden"
            [attr.aria-expanded]="menuOpen()"
            aria-label="Toggle menu"
          >
            <app-icon [name]="menuOpen() ? 'arrow' : 'chevron'" [size]="18" />
          </button>
        </div>
      </div>

      @if (menuOpen()) {
        <div class="bg-bg/95 border-b backdrop-blur-xl lg:hidden">
          <nav class="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            @for (link of nav().links; track link.id) {
              <a
                [href]="'#' + link.id"
                (click)="menuOpen.set(false)"
                class="text-fg hover:bg-surface-2 rounded-lg px-3 py-2.5 text-sm font-medium"
              >
                {{ link.label }}
              </a>
            }
            <a
              [href]="'#install'"
              (click)="menuOpen.set(false)"
              class="from-brand-500 to-brand-600 mt-2 rounded-lg bg-gradient-to-b px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              {{ nav().install }}
            </a>
          </nav>
        </div>
      }
    </header>
  `,
})
export class HeaderComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly theme = inject(ThemeService);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected readonly repo = REPO_URL;
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly lang = this.i18n.lang;
  protected readonly nav = () => this.i18n.content().nav;

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.isBrowser) {
      this.scrolled.set(window.scrollY > 8);
    }
  }
}
