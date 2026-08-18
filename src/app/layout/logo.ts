import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="inline-flex items-center gap-2.5 font-semibold tracking-tight">
      <svg
        [attr.width]="size()"
        [attr.height]="size()"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sf-logo" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stop-color="#818cf8" />
            <stop offset="0.55" stop-color="#6366f1" />
            <stop offset="1" stop-color="#22d3ee" />
          </linearGradient>
        </defs>
        <rect x="1.5" y="1.5" width="29" height="29" rx="8" fill="url(#sf-logo)" />
        <path
          d="M10 20.5 16 9l6 11.5"
          stroke="white"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <path d="M12.4 16.2h7.2" stroke="white" stroke-width="2.2" stroke-linecap="round" />
      </svg>
      @if (showWordmark()) {
        <span class="text-fg text-lg">ShipFrame</span>
      }
    </span>
  `,
})
export class LogoComponent {
  readonly size = input<number>(32);
  readonly showWordmark = input<boolean>(true);
}
