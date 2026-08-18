import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconComponent } from '../shared/icon';
import { CopyButtonComponent } from '../shared/copy-button';
import { I18nService } from '../core/i18n/i18n.service';

const REPO_URL = 'https://github.com/juanitourquiza/shipframe';
const INSTALL_CMD =
  'curl -fsSL https://raw.githubusercontent.com/juanitourquiza/shipframe/main/install.sh | bash';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CopyButtonComponent],
  template: `
    <section class="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <!-- Background: grid + glow -->
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
        <div class="hero-grid absolute inset-0"></div>
        <div class="hero-glow absolute top-[-20%] left-1/2 h-[560px] w-[880px] -translate-x-1/2"></div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div class="text-center lg:text-left">
            <span
              class="border-border-soft bg-surface/60 text-fg-muted inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium backdrop-blur"
            >
              <span class="bg-accent-400 size-1.5 animate-pulse rounded-full"></span>
              {{ hero().badge }}
            </span>

            <h1
              class="text-fg mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              {{ hero().titleLead }}<span class="text-gradient">{{ hero().titleHighlight }}</span
              >{{ hero().titleTail }}
            </h1>

            <p
              class="text-fg-muted mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty lg:mx-0"
            >
              {{ hero().subtitle }}
            </p>

            <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                [href]="'#install'"
                class="from-brand-500 to-brand-600 shadow-brand-500/30 hover:shadow-brand-500/50 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                {{ hero().ctaPrimary }}
                <app-icon name="arrow" [size]="18" />
              </a>
              <a
                [href]="repo"
                target="_blank"
                rel="noopener noreferrer"
                class="border-border-soft text-fg hover:bg-surface-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-base font-semibold transition-colors sm:w-auto"
              >
                <app-icon name="github" [size]="18" />
                {{ hero().ctaSecondary }}
              </a>
            </div>

            <dl class="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              @for (m of hero().metrics; track m.label) {
                <div class="text-center lg:text-left">
                  <dt class="sr-only">{{ m.label }}</dt>
                  <dd class="text-gradient text-3xl font-bold tracking-tight">{{ m.value }}</dd>
                  <p class="text-fg-subtle mt-1 text-xs font-medium">{{ m.label }}</p>
                </div>
              }
            </dl>
          </div>

          <!-- Terminal card -->
          <div class="relative">
            <div
              class="from-brand-500/20 to-accent-400/20 absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br blur-2xl"
              aria-hidden="true"
            ></div>
            <div
              class="border-border-soft bg-surface/90 overflow-hidden rounded-2xl border shadow-2xl backdrop-blur"
            >
              <div class="border-border-soft flex items-center gap-2 border-b px-4 py-3">
                <span class="size-3 rounded-full bg-red-400/80"></span>
                <span class="size-3 rounded-full bg-yellow-400/80"></span>
                <span class="size-3 rounded-full bg-green-400/80"></span>
                <span class="text-fg-subtle ml-3 flex items-center gap-1.5 text-xs font-medium">
                  <app-icon name="terminal" [size]="13" /> shipframe — install
                </span>
                <span class="ml-auto">
                  <app-copy-button
                    [text]="cmd"
                    [label]="hero().copy"
                    [copiedLabel]="hero().copied"
                  />
                </span>
              </div>
              <div class="overflow-x-auto p-5 font-mono text-xs leading-relaxed sm:text-sm">
                <p class="text-fg-subtle">
                  <span class="text-accent-400">$</span> curl -fsSL
                  <span class="text-brand-300">shipframe/install.sh</span> | bash
                </p>
                <div class="mt-3 space-y-1.5">
                  @for (line of logLines; track line.text) {
                    <p [class]="line.cls">{{ line.text }}</p>
                  }
                </div>
                <p class="mt-3 flex items-center gap-2">
                  <span class="text-accent-400">➜</span>
                  <span class="text-fg">ShipFrame ready.</span>
                  <span class="bg-fg inline-block h-4 w-2 animate-pulse"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero-grid {
        background-image:
          linear-gradient(var(--grid-line) 1px, transparent 1px),
          linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
        background-size: 48px 48px;
        mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%);
      }
      .hero-glow {
        background: radial-gradient(ellipse at center, var(--glow), transparent 65%);
      }
    `,
  ],
})
export class HeroComponent {
  private readonly i18n = inject(I18nService);
  protected readonly hero = () => this.i18n.content().hero;
  protected readonly repo = REPO_URL;
  protected readonly cmd = INSTALL_CMD;

  protected readonly logLines = [
    { text: '✔ Detected Claude Code, Codex CLI, OpenCode', cls: 'text-green-400/90' },
    { text: '✔ Linked 30+ skills', cls: 'text-green-400/90' },
    { text: '✔ Configured agents + hooks', cls: 'text-green-400/90' },
    { text: 'ℹ Add a project profile to customize per repo', cls: 'text-fg-subtle' },
  ];
}
