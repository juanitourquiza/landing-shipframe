import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../core/i18n/i18n.service';

@Component({
  selector: 'app-trust',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="border-border-soft border-y">
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p class="text-fg-subtle text-center text-xs font-semibold tracking-widest uppercase">
          {{ runsWith() }}
        </p>
        <ul
          class="text-fg-muted mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12"
        >
          @for (tool of tools; track tool) {
            <li class="text-base font-semibold tracking-tight opacity-80">{{ tool }}</li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class TrustComponent {
  private readonly i18n = inject(I18nService);
  protected readonly runsWith = () => this.i18n.content().hero.runsWith;
  protected readonly tools = ['Claude Code', 'Codex CLI', 'OpenCode', 'GitHub', 'GitLab', 'ClickUp'];
}
