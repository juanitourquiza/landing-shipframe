import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { I18nService } from '../core/i18n/i18n.service';
import { DemoComponent } from './demo';

describe('DemoComponent simulated explainer', () => {
  it('provides a localized transcript for the silent explainer without broken caption tracks', async () => {
    await TestBed.configureTestingModule({ imports: [DemoComponent] }).compileComponents();
    const fixture = TestBed.createComponent(DemoComponent);
    fixture.detectChanges();

    const simulation = fixture.nativeElement.querySelectorAll('video')[1] as HTMLVideoElement;
    expect(simulation.querySelector('track[kind="captions"]')).toBeNull();
    expect(fixture.nativeElement.textContent).toContain(
      'Silent animation · English transcript below',
    );
    expect(fixture.nativeElement.textContent).toContain('Read the English transcript');

    TestBed.inject(I18nService).setLang('es');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(
      'Animación sin audio · transcripción en español abajo',
    );
    expect(fixture.nativeElement.textContent).toContain('Leer la transcripción en español');
    fixture.destroy();
  });
});
