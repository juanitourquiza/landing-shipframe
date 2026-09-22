import { describe, expect, it } from 'vitest';
import { EN } from './i18n/content.en';
import { ES } from './i18n/content.es';
import { SITE } from './site.config';

describe('ShipFrame landing content', () => {
  it('keeps structured-data version on the single site constant', () => {
    expect(SITE.version).toBe('0.4.5');
  });

  it('documents proof before claims without public reach metrics', () => {
    for (const content of [EN, ES]) {
      expect(content.nav.links.some((link) => link.id === 'proof')).toBe(true);
      expect(content.nav.links.some((link) => link.id === 'reach')).toBe(false);
      expect(content.proof.commands).toHaveLength(3);
      expect(content.proof.useCases).toHaveLength(3);
      expect(content.proof.disclaimer.toLowerCase()).toContain('telemetry');
      expect(content.install.tabs.some((tab) => tab.id === 'herdr')).toBe(true);
      expect(content.install.tabs.find((tab) => tab.id === 'herdr')?.code).toContain('herdr plugin install juanitourquiza/shipframe/herdr-plugin --yes');
      expect(content.install.tabs.find((tab) => tab.id === 'brew')?.code).toContain('--sync-docs');
      expect(content.features.groups.flatMap((group) => group.items).join(' ')).toContain('live-docs');
    }

    expect(EN.proof.eyebrow).toBe('Proof before claims');
    expect(ES.proof.eyebrow).toBe('Pruebas antes de prometer');
  });

  it('keeps CTA and SEO copy wired for both localized routes', () => {
    expect(EN.cta.primary).toBeTruthy();
    expect(ES.cta.primary).toBeTruthy();
    expect(EN.seo.description).toContain('release evidence');
    expect(ES.seo.description).toContain('evidencia real de release');
  });
});
