import { Component, computed, inject } from '@angular/core';
import { SITE } from '../core/site.config';
import { I18nService } from '../core/i18n/i18n.service';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-current-reach',
  imports: [RevealDirective],
  template: `
    <section id="reach" class="scroll-mt-20 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center" appReveal>
          <p class="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-widest uppercase">
            {{ c().eyebrow }}
          </p>
          <h2 class="text-fg mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {{ c().title }}
          </h2>
          <p class="text-fg-muted mt-4 text-lg text-pretty">{{ c().subtitle }}</p>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-3" appReveal="80">
          @for (metric of c().metrics; track metric.label) {
            <article class="border-border-soft bg-surface/70 rounded-2xl border p-6">
              <p class="text-fg text-3xl font-bold tracking-tight">{{ metric.value }}</p>
              <h3 class="text-fg mt-2 text-sm font-semibold">{{ metric.label }}</h3>
              <p class="text-fg-muted mt-2 text-sm leading-relaxed">{{ metric.note }}</p>
            </article>
          }
        </div>

        <div class="mt-8 grid gap-4 lg:grid-cols-3" appReveal="120">
          @for (category of c().categories; track category.title) {
            <article class="border-border-soft bg-bg/60 rounded-2xl border p-5">
              <h3 class="text-fg text-base font-semibold">{{ category.title }}</h3>
              <p class="text-fg-muted mt-2 text-sm leading-relaxed">{{ category.desc }}</p>
            </article>
          }
        </div>

        <div
          class="border-border-soft bg-surface/70 mt-8 rounded-2xl border p-5 text-sm leading-relaxed sm:flex sm:items-start sm:justify-between sm:gap-6"
          appReveal="160"
        >
          <div class="text-fg-muted">
            <p>
              <span class="text-fg font-semibold">{{ c().snapshotLabel }}:</span>
              {{ snapshotDate() }}
            </p>
            <p class="mt-1">
              <span class="text-fg font-semibold">{{ c().sourceLabel }}:</span>
              {{ source() }}
            </p>
          </div>
          <p class="text-fg-muted mt-4 max-w-2xl sm:mt-0">{{ c().disclaimer }}</p>
        </div>
      </div>
    </section>
  `,
})
export class CurrentReachComponent {
  private readonly i18n = inject(I18nService);
  protected readonly c = () => this.i18n.content().reach;
  protected readonly snapshotDate = computed(() => SITE.reachSnapshot.date);
  protected readonly source = computed(() => SITE.reachSnapshot.source);
}
