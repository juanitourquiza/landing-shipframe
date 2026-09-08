import { Component, inject } from '@angular/core';
import { I18nService } from '../core/i18n/i18n.service';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-proof',
  imports: [RevealDirective],
  template: `
    <section id="proof" class="scroll-mt-20 py-20 sm:py-28">
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

        <div class="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article class="border-border-soft bg-surface/70 rounded-3xl border p-6 sm:p-8" appReveal="80">
            <h3 class="text-fg text-xl font-semibold">{{ c().commandsTitle }}</h3>
            <div class="mt-6 grid gap-4">
              @for (command of c().commands; track command.title) {
                <div class="border-border-soft bg-bg/60 rounded-2xl border p-5">
                  <h4 class="text-fg text-base font-semibold">{{ command.title }}</h4>
                  <p class="text-fg-muted mt-2 text-sm leading-relaxed">{{ command.desc }}</p>
                </div>
              }
            </div>
          </article>

          <article class="border-border-soft bg-bg/60 rounded-3xl border p-6 sm:p-8" appReveal="120">
            <h3 class="text-fg text-xl font-semibold">{{ c().useCasesTitle }}</h3>
            <div class="mt-6 grid gap-4">
              @for (useCase of c().useCases; track useCase.title) {
                <div>
                  <h4 class="text-fg text-base font-semibold">{{ useCase.title }}</h4>
                  <p class="text-fg-muted mt-2 text-sm leading-relaxed">{{ useCase.desc }}</p>
                </div>
              }
            </div>
          </article>
        </div>

        <p class="text-fg-muted border-border-soft bg-surface/70 mt-8 rounded-2xl border p-5 text-sm leading-relaxed" appReveal="160">
          {{ c().disclaimer }}
        </p>
      </div>
    </section>
  `,
})
export class ProofComponent {
  private readonly i18n = inject(I18nService);
  protected readonly c = () => this.i18n.content().proof;
}
