import { describe, expect, it } from 'vitest';
import { EN } from './i18n/content.en';
import { ES } from './i18n/content.es';
import { SITE } from './site.config';

describe('ShipFrame landing content', () => {
  it('keeps structured-data version on the single site constant', () => {
    expect(SITE.version).toBe('0.4.3');
  });

  it('documents honest reach metrics without claiming installs or active users', () => {
    for (const content of [EN, ES]) {
      expect(content.nav.links.some((link) => link.id === 'reach')).toBe(true);
      expect(content.reach.metrics).toHaveLength(3);
      expect(content.reach.categories.map((category) => category.title)).toEqual([
        'Reach',
        'Possible usage signal',
        'Not measured',
      ]);
      expect(content.reach.disclaimer.toLowerCase()).toContain('telemetry');
    }
  });

  it('keeps CTA and SEO copy wired for both localized routes', () => {
    expect(EN.cta.primary).toBeTruthy();
    expect(ES.cta.primary).toBeTruthy();
    expect(EN.seo.description).toContain('release evidence');
    expect(ES.seo.description).toContain('evidencia real de release');
  });
});
