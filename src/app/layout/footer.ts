import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { I18nService } from '../core/i18n/i18n.service';
import { IconComponent } from '../shared/icon';
import { LogoComponent } from './logo';

const REPO_URL = 'https://github.com/juanitourquiza/shipframe';
const CONTACT_EMAIL = 'j@hackeruna.com';
const HACKERUNA_URL = 'https://hackeruna.com';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, LogoComponent],
  template: `
    <footer class="bg-bg-subtle border-t">
      <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div class="lg:col-span-2">
            <app-logo />
            <p class="text-fg-muted mt-4 max-w-sm text-sm leading-relaxed">
              {{ footer().tagline }}
            </p>
            <div class="mt-5 flex flex-wrap items-center gap-3">
              <a
                [href]="repo"
                target="_blank"
                rel="noopener noreferrer"
                class="border-border-soft text-fg-muted hover:text-fg hover:border-brand-400/60 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors"
              >
                <app-icon name="github" [size]="16" />
                GitHub
              </a>
              <a
                [href]="'mailto:' + email"
                class="border-border-soft text-fg-muted hover:text-fg hover:border-brand-400/60 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors"
              >
                <app-icon name="mail" [size]="16" />
                {{ email }}
              </a>
            </div>
          </div>

          @for (col of footer().columns; track col.title) {
            <div>
              <h3 class="text-fg text-sm font-semibold">{{ col.title }}</h3>
              <ul class="mt-4 space-y-3">
                @for (link of col.links; track link.label) {
                  <li>
                    <a
                      [href]="link.href"
                      [attr.target]="link.external ? '_blank' : null"
                      [attr.rel]="link.external ? 'noopener noreferrer' : null"
                      class="text-fg-muted hover:text-fg text-sm transition-colors"
                    >
                      {{ link.label }}
                    </a>
                  </li>
                }
              </ul>
            </div>
          }
        </div>

        <div
          class="border-border-soft text-fg-subtle mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm sm:flex-row"
        >
          <p>© {{ year }} ShipFrame · {{ footer().license }}</p>
          <p class="flex items-center gap-1.5">
            {{ footer().madeBy }}
            <a
              [href]="hackeruna"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gradient font-semibold"
            >
              {{ footer().madeByName }}
            </a>
            ·
            <a [href]="'mailto:' + email" class="hover:text-fg transition-colors">{{ email }}</a>
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  private readonly i18n = inject(I18nService);

  protected readonly repo = REPO_URL;
  protected readonly email = CONTACT_EMAIL;
  protected readonly hackeruna = HACKERUNA_URL;
  protected readonly year = new Date().getFullYear();

  protected readonly footer = () => this.i18n.content().footer;
}
