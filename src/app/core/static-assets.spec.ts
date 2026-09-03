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
    expect(SITE.reachSnapshot.repos.reduce((sum, repo) => sum + repo.clones, 0)).toBe(193);
    expect(SITE.reachSnapshot.repos.reduce((sum, repo) => sum + repo.views, 0)).toBe(86);
  });
});
