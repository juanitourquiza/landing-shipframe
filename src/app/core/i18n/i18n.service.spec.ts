import { describe, expect, it } from 'vitest';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  it('keeps section anchors on the active localized route', () => {
    const service = new I18nService();

    expect(service.sectionPath('install')).toBe('/#install');

    service.setLang('es');

    expect(service.sectionPath('install')).toBe('/es#install');
    expect(service.sectionPath('faq')).toBe('/es#faq');
  });
});
