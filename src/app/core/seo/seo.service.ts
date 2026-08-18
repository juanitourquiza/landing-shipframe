import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Content, Lang } from '../i18n/content.model';

export const SITE_URL = 'https://shipframe.hackeruna.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(lang: Lang, content: Content): void {
    const { seo } = content;
    const url = `${SITE_URL}/${lang}/`;

    this.title.setTitle(seo.title);
    this.document.documentElement.setAttribute('lang', lang);

    this.setName('description', seo.description);
    this.setName('keywords', seo.keywords);
    this.setName('author', 'hackeruna');
    this.setName('robots', 'index, follow, max-image-preview:large');

    // Open Graph
    this.setProperty('og:type', 'website');
    this.setProperty('og:site_name', 'ShipFrame');
    this.setProperty('og:title', seo.title);
    this.setProperty('og:description', seo.description);
    this.setProperty('og:url', url);
    this.setProperty('og:image', OG_IMAGE);
    this.setProperty('og:image:alt', seo.ogAlt);
    this.setProperty('og:locale', lang === 'es' ? 'es_ES' : 'en_US');
    this.setProperty('og:locale:alternate', lang === 'es' ? 'en_US' : 'es_ES');

    // Twitter
    this.setName('twitter:card', 'summary_large_image');
    this.setName('twitter:title', seo.title);
    this.setName('twitter:description', seo.description);
    this.setName('twitter:image', OG_IMAGE);
    this.setName('twitter:image:alt', seo.ogAlt);

    this.setCanonical(url);
    this.setAlternates();
    this.setJsonLd(lang, content);
  }

  private setName(name: string, contentValue: string): void {
    this.meta.updateTag({ name, content: contentValue });
  }

  private setProperty(property: string, contentValue: string): void {
    this.meta.updateTag({ property, content: contentValue });
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setAlternates(): void {
    this.document.head
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());

    const alternates: { hreflang: string; href: string }[] = [
      { hreflang: 'en', href: `${SITE_URL}/en/` },
      { hreflang: 'es', href: `${SITE_URL}/es/` },
      { hreflang: 'x-default', href: `${SITE_URL}/en/` },
    ];

    for (const alt of alternates) {
      const link = this.document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', alt.hreflang);
      link.setAttribute('href', alt.href);
      this.document.head.appendChild(link);
    }
  }

  private setJsonLd(lang: Lang, content: Content): void {
    const url = `${SITE_URL}/${lang}/`;

    const softwareApp = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ShipFrame',
      description: content.seo.description,
      url,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'macOS, Linux',
      softwareVersion: '0.2.0',
      license: 'https://opensource.org/licenses/MIT',
      author: {
        '@type': 'Organization',
        name: 'hackeruna',
        url: 'https://hackeruna.com',
        email: 'j@hackeruna.com',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      codeRepository: 'https://github.com/juanitourquiza/shipframe',
    };

    const faqPage = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: lang,
      mainEntity: content.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    };

    this.writeJsonLd('ld-app', softwareApp);
    this.writeJsonLd('ld-faq', faqPage);
  }

  private writeJsonLd(id: string, data: unknown): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
