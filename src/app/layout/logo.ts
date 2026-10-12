import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [NgOptimizedImage],
  template: `
    <span class="inline-flex items-center gap-2.5 font-semibold tracking-tight">
      <img
        ngSrc="/brand/shipframe-mark.svg"
        [width]="size()"
        [height]="size()"
        alt=""
        aria-hidden="true"
      />
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
