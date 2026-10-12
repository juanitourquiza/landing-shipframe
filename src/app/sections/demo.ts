import { Component, inject } from '@angular/core';
import { I18nService } from '../core/i18n/i18n.service';

@Component({
  selector: 'app-demo',
  template: `
    <section id="demo" class="bg-bg-subtle border-border-soft scroll-mt-20 border-y py-16 sm:py-20">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <p
            class="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-widest uppercase"
          >
            {{ demo().eyebrow }}
          </p>
          <h2 class="text-fg mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {{ demo().title }}
          </h2>
          <p class="text-fg-muted mt-4 text-lg text-pretty">{{ demo().subtitle }}</p>
        </div>

        <figure
          class="border-border-soft bg-surface mt-10 overflow-hidden rounded-2xl border shadow-xl"
        >
          <video
            class="aspect-video w-full bg-slate-950 object-contain"
            controls
            playsinline
            preload="metadata"
            [poster]="poster"
            [attr.aria-label]="demo().playerLabel"
            aria-describedby="demo-transcript"
          >
            <source [src]="video" type="video/mp4" />
            <a [href]="video">{{ demo().playerLabel }}</a>
          </video>
          <figcaption class="text-fg-muted border-border-soft border-t px-5 py-4 text-sm">
            <details id="demo-transcript">
              <summary
                class="text-fg cursor-pointer font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {{ demo().transcriptLabel }}
              </summary>
              <p class="mt-4">{{ demo().transcriptNotice }}</p>
              <ol class="mt-4 space-y-3 pl-5">
                @for (entry of demo().transcript; track entry) {
                  <li>{{ entry }}</li>
                }
              </ol>
            </details>
          </figcaption>
        </figure>
        <figure
          class="border-border-soft bg-surface mt-8 overflow-hidden rounded-2xl border shadow-xl"
        >
          <h3 class="text-fg px-5 pt-5 text-xl font-semibold">
            {{ demo().simulationTitle }}
          </h3>
          <div class="text-fg-muted px-5 pt-3 text-sm font-semibold">
            {{ demo().simulationCaptionLabel }}
          </div>
          <video
            class="aspect-video w-full bg-slate-950 object-contain"
            controls
            playsinline
            preload="metadata"
            [poster]="simulationPoster"
            [attr.aria-label]="demo().simulationPlayerLabel"
            aria-describedby="simulation-transcript"
          >
            <source [src]="simulationVideo" type="video/mp4" />
            <a [href]="simulationVideo">{{ demo().simulationPlayerLabel }}</a>
          </video>
          <figcaption class="text-fg-muted border-border-soft border-t px-5 py-4 text-sm">
            <p>{{ demo().simulationSubtitle }}</p>
            <details id="simulation-transcript" class="mt-4">
              <summary
                class="text-fg cursor-pointer font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {{ demo().simulationTranscriptLabel }}
              </summary>
              <ol class="mt-4 space-y-3 pl-5">
                @for (entry of demo().simulationTranscript; track entry) {
                  <li>{{ entry }}</li>
                }
              </ol>
            </details>
          </figcaption>
        </figure>
      </div>
    </section>
  `,
})
export class DemoComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly demo = () => this.i18n.content().demo;
  protected readonly video = '/videos/Shipframe.mp4';
  protected readonly poster = '/videos/shipframe-poster.jpg';
  protected readonly simulationVideo = '/videos/Shipframe-simulation.mp4';
  protected readonly simulationPoster = '/videos/shipframe-simulation-poster.png';
}
