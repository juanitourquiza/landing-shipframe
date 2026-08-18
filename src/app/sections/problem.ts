import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { IconComponent } from '../shared/icon';
import { I18nService } from '../core/i18n/i18n.service';

@Component({
  selector: 'app-problem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, IconComponent],
  template: `
    <section class="bg-bg-subtle border-border-soft border-y py-20 sm:py-28">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center" appReveal>
          <p class="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-widest uppercase">
            {{ c().eyebrow }}
          </p>
          <h2 class="text-fg mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {{ c().title }}
          </h2>
          <p class="text-fg-muted mt-4 text-lg text-pretty">{{ c().lead }}</p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-2">
          <div class="border-border-soft bg-surface/40 rounded-2xl border p-7" appReveal>
            <h3 class="text-fg-muted flex items-center gap-2 text-lg font-semibold">
              <span class="grid size-7 place-items-center rounded-full bg-red-500/10 text-red-400">
                ✕
              </span>
              {{ c().before.title }}
            </h3>
            <ul class="mt-5 space-y-3">
              @for (p of c().before.points; track p) {
                <li class="text-fg-muted flex items-start gap-3 text-sm leading-relaxed">
                  <span class="mt-1 text-red-400/70">—</span>
                  <span>{{ p }}</span>
                </li>
              }
            </ul>
          </div>

          <div
            class="border-brand-400/40 from-brand-500/[0.07] to-accent-400/[0.07] relative rounded-2xl border bg-gradient-to-br p-7"
            [appReveal]="80"
          >
            <h3 class="text-fg flex items-center gap-2 text-lg font-semibold">
              <span
                class="bg-brand-500/15 text-brand-400 grid size-7 place-items-center rounded-full"
              >
                <app-icon name="check" [size]="16" />
              </span>
              {{ c().after.title }}
            </h3>
            <ul class="mt-5 space-y-3">
              @for (p of c().after.points; track p) {
                <li class="text-fg flex items-start gap-3 text-sm leading-relaxed">
                  <span class="text-accent-400 mt-0.5"><app-icon name="check" [size]="16" /></span>
                  <span>{{ p }}</span>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProblemComponent {
  private readonly i18n = inject(I18nService);
  protected readonly c = () => this.i18n.content().problem;
}
