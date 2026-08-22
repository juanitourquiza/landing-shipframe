/** Single source of truth for site-wide constants (URLs, contact, commands). */
export const SITE = {
  url: 'https://shipframe.hackeruna.com',
  ogImage: 'https://shipframe.hackeruna.com/og-image.png',
  repo: 'https://github.com/juanitourquiza/shipframe',
  docs: 'https://github.com/juanitourquiza/shipframe#readme',
  releases: 'https://github.com/juanitourquiza/shipframe/releases',
  plugin: 'https://chatgpt.com/plugins/plugins_6a88e6256bb48191a343d39dace5e05c',
  license: 'https://github.com/juanitourquiza/shipframe/blob/main/LICENSE',
  installCmd:
    'curl -fsSL https://raw.githubusercontent.com/juanitourquiza/shipframe/main/install.sh | bash',
  author: {
    name: 'hackeruna',
    url: 'https://hackeruna.com',
    email: 'j@hackeruna.com',
  },
} as const;
