/** Single source of truth for site-wide constants (URLs, contact, commands). */
export const SITE = {
  url: 'https://shipframe.hackeruna.com',
  ogImage: 'https://shipframe.hackeruna.com/og-image.png',
  repo: 'https://github.com/juanitourquiza/shipframe',
  docs: 'https://github.com/juanitourquiza/shipframe#readme',
  releases: 'https://github.com/juanitourquiza/shipframe/releases',
  plugin: 'https://chatgpt.com/plugins/plugins_6a88e6256bb48191a343d39dace5e05c',
  license: 'https://github.com/juanitourquiza/shipframe/blob/main/LICENSE',
  version: '0.4.3',
  installCmd:
    'curl -fsSL https://raw.githubusercontent.com/juanitourquiza/shipframe/main/install.sh | bash',
  reachSnapshot: {
    date: '2026-09-03',
    source: 'GitHub REST API aggregate traffic metrics',
    repos: [
      { repo: 'juanitourquiza/shipframe', clones: 150, views: 75, stars: 2, uniqueCloners: 42, uniqueVisitors: 10 },
      { repo: 'juanitourquiza/homebrew-shipframe', clones: 43, views: 11, stars: 0, uniqueCloners: 31, uniqueVisitors: 1 },
    ],
  },
  author: {
    name: 'hackeruna',
    url: 'https://hackeruna.com',
    email: 'j@hackeruna.com',
  },
} as const;
