import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { IconComponent } from '../shared/icon';
import { I18nService } from '../core/i18n/i18n.service';

@Component({
  selector: 'app-audience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, IconComponent],
  template: `
    <section class="py-20 sm:py-28">
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

        <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          @for (item of c().items; track item.title; let i = $index) {
            <div
              class="border-border-soft bg-surface/50 rounded-2xl border p-6 text-center"
              [appReveal]="i * 60"
            >
              <div
                class="from-brand-500/15 to-accent-400/15 text-brand-400 mx-auto grid size-12 place-items-center rounded-xl bg-gradient-to-br"
              >
                <app-icon [name]="item.icon" [size]="24" />
              </div>
              <h3 class="text-fg mt-4 font-semibold">{{ item.title }}</h3>
              <p class="text-fg-muted mt-1.5 text-sm leading-relaxed">{{ item.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AudienceComponent {
  private readonly i18n = inject(I18nService);
  protected readonly c = () => this.i18n.content().audience;
}
