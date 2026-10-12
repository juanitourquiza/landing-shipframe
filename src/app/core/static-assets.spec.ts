import { describe, expect, it } from 'vitest';

describe('static SEO assets', () => {
  it('ships small, light-surface, and dark-surface logo variants', async () => {
    const fs = await import('node:fs/promises');
    for (const asset of [
      'public/brand/shipframe-mark.svg',
      'public/brand/shipframe-lockup.svg',
      'public/brand/shipframe-lockup-dark.svg',
    ]) {
      const svg = await fs.readFile(asset, 'utf8');
      expect(svg).toContain('<svg');
      expect(svg).toContain('linearGradient');
      expect(svg).toContain('ShipFrame');
    }
  });
  it('includes both demo videos and their posters without unusable WebVTT assets', async () => {
    const fs = await import('node:fs/promises');
    const video = await fs.stat('public/videos/Shipframe.mp4');
    const poster = await fs.stat('public/videos/shipframe-poster.jpg');
    const simulation = await fs.stat('public/videos/Shipframe-simulation.mp4');
    const simulationPoster = await fs.stat('public/videos/shipframe-simulation-poster.png');
    expect(video.size).toBeGreaterThan(1_000_000);
    expect(poster.size).toBeGreaterThan(1_000);
    expect(simulation.size).toBeGreaterThan(100_000);
    expect(simulationPoster.size).toBeGreaterThan(1_000);
    await expect(fs.stat('public/videos/shipframe-simulation.en.vtt')).rejects.toThrow();
    await expect(fs.stat('public/videos/shipframe-simulation.es.vtt')).rejects.toThrow();
  });

  it('keeps llms and sitemap assets in the Angular public asset list', async () => {
    const angularConfig = await import('../../../angular.json');
    const assets =
      angularConfig.default.projects['landing-shipframe'].architect.build.options.assets;
    expect(JSON.stringify(assets)).toContain('public');
  });

  it('keeps the production route contract documented in public assets', async () => {
    const { SITE } = await import('./site.config');
    expect(SITE.url).toBe('https://shipframe.hackeruna.com');
    expect(SITE.version).toBe('0.8.4');
  });

  it('keeps the public crawler summary aligned with the structured site version', async () => {
    const { SITE } = await import('./site.config');
    const fs = await import('node:fs/promises');
    const crawlerSummary = await fs.readFile('public/llms.txt', 'utf8');
    expect(crawlerSummary).toContain(`Current version: v${SITE.version}`);
    const shortCrawlerSummary = await fs.readFile('public/llm.txt', 'utf8');
    for (const summary of [crawlerSummary, shortCrawlerSummary]) {
      expect(summary).toContain('ShipFrame v0.8.4 raises code-review quality');
      expect(summary).toContain('shipframe install --codex --codex-agents');
      expect(summary).toContain('Homebrew installs this immutable tagged release');
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
        expect(summary).toContain(technology);
      }
    }
  });
});
