import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { I18nService } from '../core/i18n/i18n.service';

@Component({
  selector: 'app-lifecycle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="lifecycle" class="scroll-mt-20 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center" appReveal>
          <p class="text-brand-500 text-sm font-semibold tracking-widest uppercase">
            {{ c().eyebrow }}
          </p>
          <h2 class="text-fg mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {{ c().title }}
          </h2>
          <p class="text-fg-muted mt-4 text-lg text-pretty">{{ c().subtitle }}</p>
        </div>

        <ol class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          @for (step of c().steps; track step.title; let i = $index) {
            <li
              class="group border-border-soft bg-surface/50 hover:border-brand-400/60 relative rounded-2xl border p-6 transition-all hover:-translate-y-1"
              [appReveal]="i * 60"
            >
              <span
                class="from-brand-500 to-brand-600 text-sm shadow-brand-500/25 grid size-9 place-items-center rounded-xl bg-gradient-to-br font-bold text-white shadow-lg"
              >
                {{ i + 1 }}
              </span>
              <h3 class="text-fg mt-4 font-semibold">{{ step.title }}</h3>
              <p class="text-fg-muted mt-1.5 text-sm leading-relaxed">{{ step.desc }}</p>
              @if (i < c().steps.length - 1) {
                <span
                  class="text-border-soft group-hover:text-brand-400 absolute top-8 -right-2 hidden text-xl transition-colors lg:block"
                  aria-hidden="true"
                  >→</span
                >
              }
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class LifecycleComponent {
  private readonly i18n = inject(I18nService);
  protected readonly c = () => this.i18n.content().lifecycle;
}
