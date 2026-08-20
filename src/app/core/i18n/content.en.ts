import { Content } from './content.model';

export const EN: Content = {
  seo: {
    title: 'ShipFrame — AI Coding Workflows for Teams that Plan, Prove & Ship',
    description:
      'ShipFrame is an open-source AI coding workflow toolkit for Claude Code, Codex CLI and OpenCode. Turn natural-language requests into a repeatable lifecycle: plan, implement, verify, review and ship with real release evidence.',
    keywords:
      'AI coding workflow, Claude Code, Codex CLI, OpenCode, AI agents, agentic development, release evidence, developer tools, MCP, spec-driven development',
    ogAlt: 'ShipFrame — AI coding workflows for teams that plan, prove and ship',
  },
  nav: {
    links: [
      { id: 'lifecycle', label: 'Lifecycle' },
      { id: 'features', label: 'Features' },
      { id: 'install', label: 'Install' },
      { id: 'faq', label: 'FAQ' },
    ],
    github: 'Star on GitHub',
    install: 'Get started',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
  hero: {
    badge: 'Open source · MIT · Claude Code · Codex · OpenCode',
    titleLead: 'AI coding workflows for teams that ',
    titleHighlight: 'plan, prove & ship',
    titleTail: '.',
    subtitle:
      'ShipFrame turns natural-language development requests into a repeatable delivery lifecycle — reusable skills, agent workflows, templates and release evidence. Give your AI agents discipline instead of vibes.',
    ctaPrimary: 'Get started',
    ctaSecondary: 'View on GitHub',
    copy: 'Copy',
    copied: 'Copied!',
    runsWith: 'Runs with',
    metrics: [
      { value: '30+', label: 'Reusable skills' },
      { value: '3', label: 'AI tools supported' },
      { value: '8', label: 'Lifecycle stages' },
      { value: 'MIT', label: 'Open source' },
    ],
  },
  lifecycle: {
    eyebrow: 'The core workflow',
    title: 'One disciplined lifecycle, every change',
    subtitle:
      'ShipFrame turns a request into a repeatable path — from context to a pull request backed by real proof.',
    steps: [
      { title: 'Refresh context', desc: 'Read wiki, agents and git state before touching code.' },
      { title: 'Discover requirements', desc: 'Structured questioning turns vague ideas into specs.' },
      { title: 'Plan work', desc: 'Break the spec into ordered, file-level subtasks.' },
      { title: 'Implement', desc: 'Write scoped, production-ready code — no vibe coding.' },
      { title: 'Verify', desc: 'Drive the change end-to-end and observe real behavior.' },
      { title: 'Review', desc: 'Two-phase review: fast checks plus a SOLID audit.' },
      { title: 'Release evidence', desc: 'Collect concrete proof the deploy actually landed.' },
      { title: 'PR / MR', desc: 'Open a draft PR on GitHub or MR on GitLab, auto-populated.' },
    ],
  },
  problem: {
    eyebrow: 'Why ShipFrame',
    title: 'Stop shipping on vibes',
    lead: 'Ad-hoc prompting produces plausible code with no guarantees. ShipFrame gives your agents a process they can be held to.',
    before: {
      title: 'Vibe coding',
      points: [
        'Agents guess requirements and skip discovery',
        '“Done” means the code compiles, not that it works',
        'No repeatable plan, no paper trail',
        'Releases declared complete with no proof',
        'Every project reinvents its own conventions',
      ],
    },
    after: {
      title: 'With ShipFrame',
      points: [
        'Requirements captured before a line is written',
        'Every change verified end-to-end before review',
        'Ordered, file-level plans on real tickets',
        'Deploy evidence required before “done”',
        'Generic core + opt-in project profiles',
      ],
    },
  },
  features: {
    eyebrow: 'What’s inside',
    title: 'Batteries-included, not opinionated-to-a-fault',
    subtitle:
      'A curated set of skills and agent workflows that cover the whole delivery lifecycle — pick what you need.',
    groups: [
      {
        icon: 'workflow',
        title: 'Core workflow',
        desc: 'From context refresh to a populated pull request.',
        items: [
          'init-project & project-memory-refresh',
          'feature-discovery & plan-expert',
          'implement-task & code-review',
          'create-task, create-issue, create-pr',
        ],
      },
      {
        icon: 'discipline',
        title: 'Engineering discipline',
        desc: 'The habits that keep a codebase healthy.',
        items: [
          'domain-modeling & codebase-design',
          'tdd — red / green / refactor',
          'bug-diagnosis with a tight repro loop',
          'research against primary sources',
        ],
      },
      {
        icon: 'shield',
        title: 'Release & evidence',
        desc: 'Never say “shipped” without proof.',
        items: [
          'project-profile & project-release',
          'release-checklist gates',
          'frontend-release & backend-release',
          'deploy-evidence before “done”',
        ],
      },
      {
        icon: 'plug',
        title: 'Integration & product',
        desc: 'Where agents meet the real world.',
        items: [
          'mcp-debugging with live tool evidence',
          'client-copy-review & bilingual checks',
          'a11y-auditor (WCAG 2.2)',
          'design-expert & design-system-docs',
        ],
      },
      {
        icon: 'book',
        title: 'Knowledge wiki',
        desc: 'A living, queryable brain for the project.',
        items: [
          'wiki-init — create the vault',
          'wiki-query — answer from the index',
          'wiki-sync — update from repo diffs',
          'wiki-forge — ingest source material',
        ],
      },
      {
        icon: 'layers',
        title: 'Project profiles',
        desc: 'Generic core, project-specific rules opt-in.',
        items: [
          'Repo topology & release process',
          'Smoke-test routes & version policy',
          'i18n rules & client copy constraints',
          'Starter packs: Angular, Laravel, MCP',
        ],
      },
    ],
  },
  install: {
    eyebrow: 'Installation',
    title: 'Up and running in one command',
    subtitle:
      'Installs globally for your user across Claude Code, Codex CLI and OpenCode, with doctor, repair and uninstall commands for safe rollout.',
    tabs: [
      { id: 'curl', label: 'One-line', code: 'curl -fsSL https://raw.githubusercontent.com/juanitourquiza/shipframe/main/install.sh | bash' },
      { id: 'brew', label: 'Homebrew', code: 'brew tap juanitourquiza/shipframe\nbrew install shipframe\nshipframe install --codex\nshipframe install --doctor --repo-only' },
      { id: 'clone', label: 'Local clone', code: 'git clone https://github.com/juanitourquiza/shipframe ~/tools/shipframe\ncd ~/tools/shipframe\n./install.sh --all\n./install.sh --repair --all\n./install.sh --uninstall --all --yes' },
    ],
    copy: 'Copy',
    copied: 'Copied!',
    targetsTitle: 'Choose your tool',
    targetsHead: { tool: 'Tool', skills: 'Skills', orchestration: 'Orchestration' },
    targets: [
      { tool: 'Claude Code', skills: 'Plugin marketplace / local plugin', orchestration: 'Plugin-managed agents + hooks' },
      { tool: 'OpenCode', skills: 'Symlinked skills', orchestration: 'Converted agents; inherits global/default model' },
      { tool: 'Codex CLI', skills: 'Symlinked skills', orchestration: 'Routing table in AGENTS.md; config.toml stays user-owned' },
    ],
    note: 'Use --doctor --repo-only in CI or before rollout; --repair restores managed blocks, and --uninstall removes ShipFrame-managed artifacts.',
  },
  audience: {
    eyebrow: 'Who it’s for',
    title: 'Built for teams that take shipping seriously',
    subtitle: 'ShipFrame fits the way real teams already work — tickets, branches and pull requests.',
    items: [
      { icon: 'ticket', title: 'Ticket-driven teams', desc: 'Work from tickets, Git branches and PRs/MRs with agents that respect the flow.' },
      { icon: 'compass', title: 'Developers who want discipline', desc: 'Get agent help without vibe coding — every step is explicit and reviewable.' },
      { icon: 'check', title: 'Projects that need proof', desc: 'Require exact release evidence before any change is declared complete.' },
      { icon: 'grid', title: 'Multi-project teams', desc: 'Share one generic core, then layer project-specific profiles per repo.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered',
    subtitle: 'Everything you need to know before you install ShipFrame.',
    items: [
      {
        q: 'What is ShipFrame?',
        a: 'ShipFrame is an open-source AI coding workflow toolkit. It gives AI agents a repeatable delivery lifecycle — reusable skills, agent workflows, templates and project profiles — so teams can plan, prove and ship software changes with discipline instead of ad-hoc prompting.',
      },
      {
        q: 'Which AI tools does ShipFrame support?',
        a: 'ShipFrame works with Claude Code (plugin-managed agents and hooks), Codex CLI (a routing table in AGENTS.md without changing your config.toml) and OpenCode (symlinked skills plus converted agents that inherit your global/default model unless you override it). A single install can target one, several or all of them.',
      },
      {
        q: 'Is ShipFrame free and open source?',
        a: 'Yes. ShipFrame is released under the permissive MIT License and is free to use in personal and commercial projects. Third-party material remains under its original notices.',
      },
      {
        q: 'How do I install ShipFrame?',
        a: 'Run the one-line installer with curl, install via Homebrew (brew tap juanitourquiza/shipframe && brew install shipframe), or clone the repository and run ./install.sh with --claude, --codex, --opencode or --all. Validate safely with --doctor --repo-only, restore managed files with --repair, and remove ShipFrame-managed artifacts with --uninstall.',
      },
      {
        q: 'Do I have to change my existing workflow?',
        a: 'No. ShipFrame is designed around tickets, Git branches and pull/merge requests — the way most teams already work. You adopt only the skills you want, and project-specific behavior stays in opt-in profiles.',
      },
      {
        q: 'Does it work with both GitHub and GitLab?',
        a: 'Yes. ShipFrame closes the loop with Draft Pull Requests on GitHub (via the gh CLI) and Draft Merge Requests on GitLab (via the glab CLI). The create-pr skill auto-detects the provider from your origin remote.',
      },
      {
        q: 'What are project profiles?',
        a: 'Project profiles keep project-specific rules out of the generic core. A repo opts in with shipframe.profile.md or .shipframe/profile.md to define release process, smoke-test routes, version policy, i18n rules and integration checks.',
      },
      {
        q: 'Does ShipFrame need a memory system?',
        a: 'No — it works without one. Optionally, Engram adds persistent memory so agents remember prior decisions, bug fixes and conventions across Claude Code, Codex CLI and OpenCode sessions.',
      },
    ],
  },
  cta: {
    title: 'Give your AI agents a process worth trusting',
    subtitle: 'Install ShipFrame and turn every request into a plan, a verified change and real release evidence.',
    primary: 'Get started',
    secondary: 'Read the docs',
  },
  footer: {
    tagline: 'AI coding workflows for teams that plan, prove and ship.',
    madeBy: 'Made by',
    madeByName: 'hackeruna',
    contact: 'Contact',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Lifecycle', href: '#lifecycle' },
          { label: 'Features', href: '#features' },
          { label: 'Install', href: '#install' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'GitHub repository', href: 'https://github.com/juanitourquiza/shipframe', external: true },
          { label: 'README & docs', href: 'https://github.com/juanitourquiza/shipframe#readme', external: true },
          { label: 'Releases', href: 'https://github.com/juanitourquiza/shipframe/releases', external: true },
          { label: 'MIT License', href: 'https://github.com/juanitourquiza/shipframe/blob/main/LICENSE', external: true },
        ],
      },
    ],
    rights: 'All rights reserved.',
    license: 'Released under the MIT License.',
  },
};
