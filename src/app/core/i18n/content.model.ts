export type Lang = 'en' | 'es';

export interface NavContent {
  links: { id: string; label: string }[];
  github: string;
  install: string;
  themeLight: string;
  themeDark: string;
}

export interface HeroContent {
  badge: string;
  titleLead: string;
  titleHighlight: string;
  titleTail: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  copy: string;
  copied: string;
  runsWith: string;
  metrics: { value: string; label: string }[];
}

export interface Step {
  title: string;
  desc: string;
}

export interface LifecycleContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: Step[];
}

export interface ProblemContent {
  eyebrow: string;
  title: string;
  lead: string;
  before: { title: string; points: string[] };
  after: { title: string; points: string[] };
}

export interface FeatureGroup {
  icon: string;
  title: string;
  desc: string;
  items: string[];
}

export interface FeaturesContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  groups: FeatureGroup[];
}

export interface InstallTab {
  id: string;
  label: string;
  code: string;
}

export interface InstallContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  tabs: InstallTab[];
  copy: string;
  copied: string;
  targetsTitle: string;
  targetsHead: { tool: string; skills: string; orchestration: string };
  targets: { tool: string; skills: string; orchestration: string }[];
  note: string;
}

export interface AudienceContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: { icon: string; title: string; desc: string }[];
}

export interface FaqContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: { q: string; a: string }[];
}

export interface CtaContent {
  title: string;
  subtitle: string;
  primary: string;
  secondary: string;
}

export interface FooterContent {
  tagline: string;
  madeBy: string;
  madeByName: string;
  contact: string;
  columns: { title: string; links: { label: string; href: string; external?: boolean }[] }[];
  rights: string;
  license: string;
}

export interface SeoContent {
  title: string;
  description: string;
  keywords: string;
  ogAlt: string;
}

export interface Content {
  seo: SeoContent;
  nav: NavContent;
  hero: HeroContent;
  lifecycle: LifecycleContent;
  problem: ProblemContent;
  features: FeaturesContent;
  install: InstallContent;
  audience: AudienceContent;
  faq: FaqContent;
  cta: CtaContent;
  footer: FooterContent;
}
