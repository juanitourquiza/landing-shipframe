import { Injectable, computed, signal } from '@angular/core';
import { Content } from './content.model';
import { EN } from './content.en';
import { ES } from './content.es';
import { Lang } from './content.model';

const DICTIONARIES: Record<Lang, Content> = { en: EN, es: ES };

export const SUPPORTED_LANGS: Lang[] = ['en', 'es'];
export const DEFAULT_LANG: Lang = 'en';

export function isLang(value: string | null | undefined): value is Lang {
  return value === 'en' || value === 'es';
}

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(DEFAULT_LANG);
  readonly content = computed<Content>(() => DICTIONARIES[this.lang()]);

  /** The "other" language, for the language toggle. */
  readonly otherLang = computed<Lang>(() => (this.lang() === 'en' ? 'es' : 'en'));

  /** Router path for a locale. English is served at the root; Spanish at /es. */
  static pathFor(lang: Lang): string {
    return lang === 'es' ? '/es' : '/';
  }

  /** Router path for the current language's home. */
  readonly homePath = computed<string>(() => I18nService.pathFor(this.lang()));

  /** Router path for the other language (language toggle target). */
  readonly otherPath = computed<string>(() => I18nService.pathFor(this.otherLang()));

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }
}
