import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { IconComponent } from '../shared/icon';
import { CopyButtonComponent } from '../shared/copy-button';
import { I18nService } from '../core/i18n/i18n.service';

@Component({
  selector: 'app-install',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, IconComponent, CopyButtonComponent],
  template: `
    <section id="install" class="bg-bg-subtle border-border-soft scroll-mt-20 border-y py-20 sm:py-28">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center" appReveal>
          <p class="text-brand-500 text-sm font-semibold tracking-widest uppercase">
            {{ c().eyebrow }}
          </p>
          <h2 class="text-fg mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {{ c().title }}
          </h2>
          <p class="text-fg-muted mt-4 text-lg text-pretty">{{ c().subtitle }}</p>
        </div>

        <div class="mx-auto mt-12 max-w-3xl" appReveal>
          <div
            class="border-border-soft bg-surface overflow-hidden rounded-2xl border shadow-xl"
          >
            <div class="border-border-soft flex items-center gap-1 border-b px-2 py-2" role="tablist">
              @for (tab of c().tabs; track tab.id) {
                <button
                  type="button"
                  role="tab"
                  [attr.aria-selected]="active() === tab.id"
                  (click)="active.set(tab.id)"
                  class="rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
                  [class]="
                    active() === tab.id
                      ? 'bg-brand-500/10 text-brand-500'
                      : 'text-fg-muted hover:text-fg hover:bg-surface-2'
                  "
                >
                  {{ tab.label }}
                </button>
              }
            </div>
            <div class="relative">
              <div class="absolute top-3 right-3 z-10">
                <app-copy-button
                  [text]="activeCode()"
                  [label]="c().copy"
                  [copiedLabel]="c().copied"
                />
              </div>
              <pre
                class="text-fg overflow-x-auto p-5 pt-4 font-mono text-sm leading-relaxed"
              ><code>{{ activeCode() }}</code></pre>
            </div>
          </div>
        </div>

        <div class="mx-auto mt-12 max-w-3xl" appReveal>
          <h3 class="text-fg text-center text-lg font-semibold">{{ c().targetsTitle }}</h3>
          <div
            class="border-border-soft bg-surface mt-5 overflow-hidden rounded-2xl border"
          >
            <table class="w-full text-left text-sm">
              <thead class="border-border-soft text-fg-subtle border-b text-xs uppercase tracking-wider">
                <tr>
                  <th class="px-5 py-3 font-semibold">{{ c().targetsHead.tool }}</th>
                  <th class="px-5 py-3 font-semibold">{{ c().targetsHead.skills }}</th>
                  <th class="hidden px-5 py-3 font-semibold sm:table-cell">
                    {{ c().targetsHead.orchestration }}
                  </th>
                </tr>
              </thead>
              <tbody>
                @for (row of c().targets; track row.tool) {
                  <tr class="border-border-soft border-b last:border-0">
                    <td class="text-fg px-5 py-4 font-semibold">{{ row.tool }}</td>
                    <td class="text-fg-muted px-5 py-4">{{ row.skills }}</td>
                    <td class="text-fg-muted hidden px-5 py-4 sm:table-cell">
                      {{ row.orchestration }}
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
          <p
            class="text-fg-muted mt-5 flex items-start justify-center gap-2 text-center text-sm"
          >
            <span class="text-brand-400 mt-0.5 shrink-0"><app-icon name="spark" [size]="16" /></span>
            <span>{{ c().note }}</span>
          </p>
        </div>
      </div>
    </section>
  `,
})
export class InstallComponent {
  private readonly i18n = inject(I18nService);
  protected readonly c = () => this.i18n.content().install;

  protected readonly active = signal<string>('curl');
  protected readonly activeCode = computed(() => {
    const tabs = this.i18n.content().install.tabs;
    return tabs.find((t) => t.id === this.active())?.code ?? tabs[0].code;
  });
}
