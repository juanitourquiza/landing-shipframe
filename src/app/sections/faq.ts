import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { IconComponent } from '../shared/icon';
import { I18nService } from '../core/i18n/i18n.service';

@Component({
  selector: 'app-faq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, IconComponent],
  template: `
    <section id="faq" class="bg-bg-subtle border-border-soft scroll-mt-20 border-y py-20 sm:py-28">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div class="text-center" appReveal>
          <p class="text-brand-500 text-sm font-semibold tracking-widest uppercase">
            {{ c().eyebrow }}
          </p>
          <h2 class="text-fg mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {{ c().title }}
          </h2>
          <p class="text-fg-muted mt-4 text-lg text-pretty">{{ c().subtitle }}</p>
        </div>

        <div class="mt-12 space-y-3">
          @for (item of c().items; track item.q) {
            <details
              class="group border-border-soft bg-surface/60 overflow-hidden rounded-xl border"
              appReveal
            >
              <summary
                class="text-fg flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold"
              >
                <span>{{ item.q }}</span>
                <span
                  class="text-fg-subtle group-open:text-brand-400 shrink-0 transition-transform duration-300 group-open:rotate-180"
                >
                  <app-icon name="chevron" [size]="20" />
                </span>
              </summary>
              <div class="text-fg-muted px-5 pb-5 text-sm leading-relaxed">{{ item.a }}</div>
            </details>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      summary::-webkit-details-marker {
        display: none;
      }
    `,
  ],
})
export class FaqComponent {
  private readonly i18n = inject(I18nService);
  protected readonly c = () => this.i18n.content().faq;
}
