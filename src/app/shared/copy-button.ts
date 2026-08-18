import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  inject,
  input,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IconComponent } from './icon';

@Component({
  selector: 'app-copy-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  template: `
    <button
      type="button"
      (click)="copy()"
      class="border-border-soft text-fg-muted hover:text-fg hover:border-brand-400/60 hover:bg-surface-2 inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors"
      [attr.aria-label]="copied() ? copiedLabel() : label()"
    >
      <app-icon [name]="copied() ? 'check' : 'copy'" [size]="14" />
      {{ copied() ? copiedLabel() : label() }}
    </button>
    <span aria-live="polite" class="sr-only">{{ copied() ? copiedLabel() : '' }}</span>
  `,
})
export class CopyButtonComponent {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly text = input.required<string>();
  readonly label = input<string>('Copy');
  readonly copiedLabel = input<string>('Copied!');

  protected readonly copied = signal(false);

  protected async copy(): Promise<void> {
    if (!this.isBrowser) {
      return;
    }
    try {
      await navigator.clipboard.writeText(this.text());
    } catch {
      const area = document.createElement('textarea');
      area.value = this.text();
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }
}
