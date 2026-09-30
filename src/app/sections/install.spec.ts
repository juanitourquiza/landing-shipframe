import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { InstallComponent } from './install';

describe('InstallComponent tabs', () => {
  beforeEach(async () => {
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        observe(): void {
          return;
        }
        disconnect(): void {
          return;
        }
        unobserve(): void {
          return;
        }
      },
    );
    await TestBed.configureTestingModule({ imports: [InstallComponent] }).compileComponents();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
    vi.unstubAllGlobals();
  });

  it('exposes a labelled tablist and tab panel with matching relationships', () => {
    const fixture = TestBed.createComponent(InstallComponent);
    fixture.detectChanges();

    const tablist = fixture.nativeElement.querySelector('[role="tablist"]');
    const tabs = fixture.nativeElement.querySelectorAll('[role="tab"]');
    const panel = fixture.nativeElement.querySelector('[role="tabpanel"]');

    expect(tablist.getAttribute('aria-label')).toBeTruthy();
    expect(tabs.length).toBeGreaterThan(1);
    expect(tabs[0].getAttribute('aria-controls')).toBe(panel.id);
    expect(panel.getAttribute('aria-labelledby')).toBe(tabs[0].id);
    expect(tabs[0].getAttribute('tabindex')).toBe('0');
    expect(tabs[1].getAttribute('tabindex')).toBe('-1');
  });

  it('moves selection and focus with the arrow keys', () => {
    const fixture = TestBed.createComponent(InstallComponent);
    fixture.detectChanges();
    const tabs = fixture.nativeElement.querySelectorAll('[role="tab"]');

    tabs[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    fixture.detectChanges();

    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    expect(tabs[1].getAttribute('tabindex')).toBe('0');
    expect(fixture.nativeElement.ownerDocument.activeElement).toBe(tabs[1]);
  });
});
