import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { IconComponent } from '../shared/icon';
import { I18nService } from '../core/i18n/i18n.service';

@Component({
  selector: 'app-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, IconComponent],
  template: `
    <section id="features" class="scroll-mt-20 py-20 sm:py-28">
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

        <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          @for (group of c().groups; track group.title; let i = $index) {
            <article
              class="group border-border-soft bg-surface/50 hover:border-brand-400/60 hover:shadow-brand-500/5 relative overflow-hidden rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
              [appReveal]="(i % 3) * 70"
            >
              <div
                class="from-brand-500/15 to-accent-400/15 text-brand-400 grid size-12 place-items-center rounded-xl bg-gradient-to-br"
              >
                <app-icon [name]="group.icon" [size]="24" />
              </div>
              <h3 class="text-fg mt-5 text-lg font-semibold">{{ group.title }}</h3>
              <p class="text-fg-muted mt-1.5 text-sm leading-relaxed">{{ group.desc }}</p>
              <ul class="mt-5 space-y-2.5">
                @for (item of group.items; track item) {
                  <li class="text-fg-muted flex items-start gap-2.5 text-sm">
                    <span class="text-brand-400 mt-0.5 shrink-0"
                      ><app-icon name="check" [size]="15"
                    /></span>
                    <code class="font-mono text-[13px]">{{ item }}</code>
                  </li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class FeaturesComponent {
  private readonly i18n = inject(I18nService);
  protected readonly c = () => this.i18n.content().features;
}
