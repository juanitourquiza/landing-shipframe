import { describe, expect, it } from 'vitest';

describe('static SEO assets', () => {
  it('keeps llms and sitemap assets in the Angular public asset list', async () => {
    const angularConfig = await import('../../../angular.json');
    const assets = angularConfig.default.projects['landing-shipframe'].architect.build.options.assets;
    expect(JSON.stringify(assets)).toContain('public');
  });

  it('keeps the production route contract documented in public assets', async () => {
    const { SITE } = await import('./site.config');
    expect(SITE.url).toBe('https://shipframe.hackeruna.com');
    expect(SITE.version).toBe('0.6.1');
  });

  it('keeps the public crawler summary aligned with the structured site version', async () => {
    const { SITE } = await import('./site.config');
    const fs = await import('node:fs/promises');
    const crawlerSummary = await fs.readFile('public/llms.txt', 'utf8');
    expect(crawlerSummary).toContain(`Current version: v${SITE.version}`);
    const shortCrawlerSummary = await fs.readFile('public/llm.txt', 'utf8');
    for (const summary of [crawlerSummary, shortCrawlerSummary]) {
      expect(summary).toContain('Homebrew installs this immutable tagged release');
      for (const technology of ['JavaScript', 'TypeScript', 'PHP', 'Node.js', 'Python', 'Go', 'Rust', 'Angular', 'Laravel', 'React/Vite', 'Next.js', 'NestJS', 'FastAPI']) {
        expect(summary).toContain(technology);
      }
    }
  });
});
