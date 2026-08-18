import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { IconComponent } from '../shared/icon';
import { I18nService } from '../core/i18n/i18n.service';

const REPO_URL = 'https://github.com/juanitourquiza/shipframe';
const DOCS_URL = 'https://github.com/juanitourquiza/shipframe#readme';

@Component({
  selector: 'app-cta',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, IconComponent],
  template: `
    <section class="py-20 sm:py-28">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          class="border-brand-400/30 relative overflow-hidden rounded-4xl border px-6 py-16 text-center sm:px-16"
          appReveal
        >
          <div
            class="from-brand-500/15 via-brand-500/5 to-accent-400/15 absolute inset-0 -z-10 bg-gradient-to-br"
            aria-hidden="true"
          ></div>
          <div
            class="bg-brand-500/20 absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full blur-3xl"
            aria-hidden="true"
          ></div>

          <h2 class="text-fg mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {{ c().title }}
          </h2>
          <p class="text-fg-muted mx-auto mt-4 max-w-xl text-lg text-pretty">{{ c().subtitle }}</p>

          <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              [href]="'#install'"
              class="from-brand-500 to-brand-600 shadow-brand-500/30 hover:shadow-brand-500/50 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 sm:w-auto"
            >
              {{ c().primary }}
              <app-icon name="arrow" [size]="18" />
            </a>
            <a
              [href]="docs"
              target="_blank"
              rel="noopener noreferrer"
              class="border-border-soft text-fg hover:bg-surface-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-base font-semibold transition-colors sm:w-auto"
            >
              {{ c().secondary }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaComponent {
  private readonly i18n = inject(I18nService);
  protected readonly c = () => this.i18n.content().cta;
  protected readonly repo = REPO_URL;
  protected readonly docs = DOCS_URL;
}
