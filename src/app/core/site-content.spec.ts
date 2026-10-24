import { describe, expect, it } from 'vitest';
import { EN } from './i18n/content.en';
import { ES } from './i18n/content.es';
import { SITE } from './site.config';

describe('ShipFrame landing content', () => {
  it('keeps structured-data version on the single site constant', () => {
    expect(SITE.version).toBe('1.0.0');
    expect(EN.demo.title).toBeTruthy();
    expect(ES.demo.title).toBeTruthy();
    expect(EN.demo.transcript).toHaveLength(6);
    expect(ES.demo.transcript).toHaveLength(6);
    expect(EN.demo.simulationTranscript).toHaveLength(4);
    expect(ES.demo.simulationTranscript).toHaveLength(4);
    expect(EN.demo.simulationSubtitle).toContain('not a screen recording');
    expect(ES.demo.simulationSubtitle).toContain('no es una grabación de pantalla');
    expect(EN.demo.simulationSubtitle).toContain('silent');
    expect(EN.demo.simulationSubtitle).toContain('full English transcript is available below');
    expect(ES.demo.simulationSubtitle).toContain('sin audio');
    expect(ES.demo.simulationSubtitle).toContain(
      'transcripción completa en español está disponible abajo',
    );
    expect(EN.demo.transcriptNotice).toContain('not a verbatim transcript');
    expect(ES.demo.transcriptNotice).toContain('no es una transcripción literal');
  });

  it('documents proof before claims without public reach metrics', () => {
    for (const content of [EN, ES]) {
      expect(content.nav.links.some((link) => link.id === 'proof')).toBe(true);
      expect(content.nav.links.some((link) => link.id === 'reach')).toBe(false);
      expect(content.proof.commands).toHaveLength(3);
      expect(content.proof.useCases).toHaveLength(3);
      expect(content.proof.disclaimer.toLowerCase()).toContain('telemetry');
      expect(content.install.tabs.some((tab) => tab.id === 'herdr')).toBe(true);
      expect(content.install.tabs.find((tab) => tab.id === 'herdr')?.code).toContain(
        'herdr plugin install juanitourquiza/shipframe/herdr-plugin --yes',
      );
      expect(content.install.tabs.find((tab) => tab.id === 'brew')?.code).toContain(
        'shipframe install --doctor',
      );
      expect(content.install.tabs.find((tab) => tab.id === 'brew')?.code).toContain(
        'shipframe install --codex --codex-agents',
      );
      expect(content.install.tabs.find((tab) => tab.id === 'brew')?.code).not.toContain(
        'shipframe install --sync-docs',
      );
      expect(content.features.groups.flatMap((group) => group.items).join(' ')).toContain(
        'Live Docs',
      );
      const featureCopy = content.features.groups.flatMap((group) => group.items).join(' ');
      for (const technology of [
        'JavaScript',
        'TypeScript',
        'PHP',
        'Node.js',
        'Python',
        'Go',
        'Rust',
        'Angular',
        'Laravel',
        'React/Vite',
        'Next.js',
        'NestJS',
        'FastAPI',
      ]) {
        expect(featureCopy).toContain(technology);
      }
      expect(
        content.faq.items.find(
          (item) => item.q.includes('Live Docs') || item.q.includes('Live Docs'),
        )?.a,
      ).toContain('Context MCP');
      const memoryFaq = content.faq.items.find(
        (item) => item.q.includes('memory') || item.q.includes('memoria'),
      );
      expect(memoryFaq?.a).toBeTruthy();
      expect(memoryFaq?.a).not.toContain('v0.8.0');
      expect(memoryFaq?.a).toContain('Engram');
      expect(content.install.note).toContain('lockfile');
    }

    expect(EN.proof.eyebrow).toBe('Proof before claims');
    expect(ES.proof.eyebrow).toBe('Pruebas antes de prometer');
  });

  it('keeps CTA and SEO copy wired for both localized routes', () => {
    expect(EN.hero.ctaPrimary).toBe('Install with Homebrew');
    expect(EN.hero.ctaSecondary).toBe('Visit & star on GitHub');
    expect(ES.hero.ctaPrimary).toBe('Instalar con Homebrew');
    expect(ES.hero.ctaSecondary).toBe('Visitar y dar estrella en GitHub');
    expect(EN.cta.primary).toBeTruthy();
    expect(ES.cta.primary).toBeTruthy();
    expect(EN.seo.description).toContain('release evidence');
    expect(ES.seo.description).toContain('evidencia real de release');
  });

  it('explains how to enable the optional AI PR reviewer in both locales', async () => {
    for (const content of [EN, ES]) {
      const guide = content.faq.items.find(
        (item) =>
          item.q.toLowerCase().includes('reviewer') || item.q.toLowerCase().includes('revisor'),
      );
      expect(guide).toBeTruthy();
      const guideCopy = `${guide?.a} ${guide?.links?.map((link) => link.href).join(' ')}`;
      for (const detail of [
        'shipframe install --codex --pr-review nan-builders',
        'SF_REVIEW_API_KEY',
        '--codex',
        'fork',
        'SF_REVIEW_GITLAB_TOKEN',
        'github|gitlab',
        'pr-review-platform',
        'pr-review-model',
        'github.com/juanitourquiza/shipframe/blob/main/.github/workflows/shipframe-review.yml',
        'github.com/juanitourquiza/shipframe/blob/main/templates/pr-review/shipframe-review.gitlab.yml.tmpl',
        'github.com/juanitourquiza/shipframe#ai-prmr-reviewer-opt-in',
      ]) {
        expect(guideCopy.toLowerCase()).toContain(detail.toLowerCase());
      }
      expect(guide?.a).not.toContain('PULSAI');
      expect(guideCopy.toLowerCase()).toMatch(/trusted|confianza/);
    }

    const fs = await import('node:fs/promises');
    for (const path of ['public/llms.txt', 'public/llm.txt']) {
      const summary = await fs.readFile(path, 'utf8');
      expect(summary).toContain('shipframe install --codex --pr-review nan-builders');
      expect(summary).toContain('SF_REVIEW_API_KEY');
      expect(summary).not.toContain('PULSAI');
    }
  });

  it('prominently explains the opt-in AI PR/MR reviewer and setup steps in both locales', () => {
    for (const content of [EN, ES]) {
      expect(content.install.reviewGuide.steps).toHaveLength(4);
      expect(content.install.reviewGuide.steps.map((step) => step.code ?? '').join(' ')).toContain(
        'shipframe install --codex --pr-review nan-builders',
      );
      expect(content.install.reviewGuide.steps.map((step) => step.desc).join(' ')).toContain(
        'SF_REVIEW_API_KEY',
      );
      expect(content.install.reviewGuide.steps.map((step) => step.desc).join(' ')).toContain(
        'SF_REVIEW_GITLAB_TOKEN',
      );
      expect(content.features.groups.some((group) => group.title.includes('PR/MR'))).toBe(true);
    }
    expect(EN.install.reviewGuide.title).toContain('PR/MR');
    expect(EN.install.reviewGuide.steps[0].desc).toContain('origin');
    expect(EN.install.reviewGuide.steps[1].desc).toContain('model');
    expect(ES.install.reviewGuide.title).toContain('PR/MR');
    expect(ES.install.reviewGuide.steps[0].desc).toContain('origin');
    expect(ES.install.reviewGuide.steps[1].desc).toContain('modelo');
  });
});
