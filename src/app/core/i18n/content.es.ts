import { Content } from './content.model';

export const ES: Content = {
  seo: {
    title: 'ShipFrame — Flujos de trabajo de IA para equipos que planifican, prueban y publican',
    description:
      'ShipFrame es un toolkit open source de flujos de trabajo con IA para Claude Code, Codex CLI y OpenCode. Convierte peticiones en lenguaje natural en un ciclo repetible: planificar, implementar, verificar, revisar y publicar con evidencia real de release.',
    keywords:
      'flujo de trabajo IA, Claude Code, Codex CLI, OpenCode, agentes de IA, desarrollo con agentes, evidencia de release, herramientas para desarrolladores, MCP, desarrollo guiado por especificación',
    ogAlt: 'ShipFrame — flujos de trabajo de IA para equipos que planifican, prueban y publican',
  },
  nav: {
    links: [
      { id: 'lifecycle', label: 'Ciclo' },
      { id: 'features', label: 'Funciones' },
      { id: 'install', label: 'Instalación' },
      { id: 'faq', label: 'FAQ' },
    ],
    github: 'Estrella en GitHub',
    install: 'Empezar',
    themeLight: 'Cambiar a modo claro',
    themeDark: 'Cambiar a modo oscuro',
  },
  hero: {
    badge: 'Open source · MIT · Claude Code · Codex · OpenCode',
    titleLead: 'Flujos de trabajo de IA para equipos que ',
    titleHighlight: 'planifican, prueban y publican',
    titleTail: '.',
    subtitle:
      'ShipFrame convierte peticiones en lenguaje natural en un ciclo de entrega repetible — skills reutilizables, workflows de agentes, plantillas y evidencia de release. Dale disciplina a tus agentes de IA en lugar de improvisación.',
    ctaPrimary: 'Empezar ahora',
    ctaSecondary: 'Ver en GitHub',
    copy: 'Copiar',
    copied: '¡Copiado!',
    runsWith: 'Funciona con',
    metrics: [
      { value: '30+', label: 'Skills reutilizables' },
      { value: '3', label: 'Herramientas de IA' },
      { value: '8', label: 'Etapas del ciclo' },
      { value: 'MIT', label: 'Open source' },
    ],
  },
  lifecycle: {
    eyebrow: 'El flujo central',
    title: 'Un ciclo disciplinado para cada cambio',
    subtitle:
      'ShipFrame convierte una petición en un camino repetible — desde el contexto hasta un pull request respaldado por pruebas reales.',
    steps: [
      { title: 'Refrescar contexto', desc: 'Lee wiki, agentes y estado de git antes de tocar código.' },
      { title: 'Descubrir requisitos', desc: 'Preguntas estructuradas convierten ideas vagas en especificaciones.' },
      { title: 'Planificar el trabajo', desc: 'Divide la especificación en subtareas ordenadas a nivel de archivo.' },
      { title: 'Implementar', desc: 'Código listo para producción y acotado — sin improvisar.' },
      { title: 'Verificar', desc: 'Ejecuta el cambio de punta a punta y observa el comportamiento real.' },
      { title: 'Revisar', desc: 'Revisión en dos fases: chequeos rápidos y auditoría SOLID.' },
      { title: 'Evidencia de release', desc: 'Reúne pruebas concretas de que el deploy realmente ocurrió.' },
      { title: 'PR / MR', desc: 'Abre un draft PR en GitHub o MR en GitLab, autocompletado.' },
    ],
  },
  problem: {
    eyebrow: 'Por qué ShipFrame',
    title: 'Deja de publicar por intuición',
    lead: 'El prompting improvisado produce código plausible sin garantías. ShipFrame le da a tus agentes un proceso al que se les puede exigir.',
    before: {
      title: 'Vibe coding',
      points: [
        'Los agentes adivinan requisitos y saltan el descubrimiento',
        '“Listo” significa que compila, no que funciona',
        'Sin plan repetible ni rastro documental',
        'Releases declarados completos sin pruebas',
        'Cada proyecto reinventa sus convenciones',
      ],
    },
    after: {
      title: 'Con ShipFrame',
      points: [
        'Requisitos capturados antes de escribir una línea',
        'Cada cambio verificado de punta a punta antes de revisar',
        'Planes ordenados a nivel de archivo sobre tickets reales',
        'Evidencia de deploy obligatoria antes del “listo”',
        'Núcleo genérico + perfiles de proyecto opcionales',
      ],
    },
  },
  features: {
    eyebrow: 'Qué incluye',
    title: 'Todo lo necesario, sin dogmatismos',
    subtitle:
      'Un conjunto curado de skills y workflows de agentes que cubren todo el ciclo de entrega — usa lo que necesites.',
    groups: [
      {
        icon: 'workflow',
        title: 'Flujo central',
        desc: 'Del refresco de contexto a un pull request completo.',
        items: [
          'init-project y project-memory-refresh',
          'feature-discovery y plan-expert',
          'implement-task y code-review',
          'create-task, create-issue, create-pr',
        ],
      },
      {
        icon: 'discipline',
        title: 'Disciplina de ingeniería',
        desc: 'Los hábitos que mantienen sano el código.',
        items: [
          'domain-modeling y codebase-design',
          'tdd — red / green / refactor',
          'bug-diagnosis con bucle de reproducción',
          'research contra fuentes primarias',
        ],
      },
      {
        icon: 'shield',
        title: 'Release y evidencia',
        desc: 'Nunca digas “publicado” sin pruebas.',
        items: [
          'project-profile y project-release',
          'compuertas con release-checklist',
          'frontend-release y backend-release',
          'deploy-evidence antes del “listo”',
        ],
      },
      {
        icon: 'plug',
        title: 'Integración y producto',
        desc: 'Donde los agentes tocan el mundo real.',
        items: [
          'mcp-debugging con evidencia en vivo',
          'client-copy-review y chequeo bilingüe',
          'a11y-auditor (WCAG 2.2)',
          'design-expert y design-system-docs',
        ],
      },
      {
        icon: 'book',
        title: 'Wiki de conocimiento',
        desc: 'Un cerebro vivo y consultable del proyecto.',
        items: [
          'wiki-init — crea el vault',
          'wiki-query — responde desde el índice',
          'wiki-sync — actualiza desde diffs',
          'wiki-forge — ingiere material fuente',
        ],
      },
      {
        icon: 'layers',
        title: 'Perfiles de proyecto',
        desc: 'Núcleo genérico, reglas del proyecto opcionales.',
        items: [
          'Topología del repo y proceso de release',
          'Rutas de smoke-test y política de versiones',
          'Reglas de i18n y restricciones de copy',
          'Packs iniciales: Angular, Laravel, MCP',
        ],
      },
    ],
  },
  install: {
    eyebrow: 'Instalación',
    title: 'Funcionando con un solo comando',
    subtitle:
      'Se instala globalmente para tu usuario en Claude Code, Codex CLI y OpenCode, con comandos de doctor, repair y uninstall para un rollout seguro.',
    tabs: [
      { id: 'curl', label: 'Una línea', code: 'curl -fsSL https://raw.githubusercontent.com/juanitourquiza/shipframe/main/install.sh | bash' },
      { id: 'brew', label: 'Homebrew', code: 'brew tap juanitourquiza/shipframe\nbrew install shipframe\nshipframe install --codex\nshipframe install --doctor --repo-only' },
      { id: 'clone', label: 'Clon local', code: 'git clone https://github.com/juanitourquiza/shipframe ~/tools/shipframe\ncd ~/tools/shipframe\n./install.sh --all\n./install.sh --repair --all\n./install.sh --uninstall --all --yes' },
    ],
    copy: 'Copiar',
    copied: '¡Copiado!',
    targetsTitle: 'Elige tu herramienta',
    targetsHead: { tool: 'Herramienta', skills: 'Skills', orchestration: 'Orquestación' },
    targets: [
      { tool: 'Claude Code', skills: 'Marketplace de plugins / plugin local', orchestration: 'Agentes + hooks gestionados por el plugin' },
      { tool: 'OpenCode', skills: 'Skills enlazados', orchestration: 'Agentes convertidos; hereda el modelo global/default' },
      { tool: 'Codex CLI', skills: 'Skills enlazados', orchestration: 'Tabla de routing en AGENTS.md; config.toml queda del usuario' },
    ],
    note: 'Usa --doctor --repo-only en CI o antes del rollout; --repair restaura bloques gestionados y --uninstall elimina artefactos gestionados por ShipFrame.',
  },
  audience: {
    eyebrow: 'Para quién es',
    title: 'Hecho para equipos que se toman en serio publicar',
    subtitle: 'ShipFrame encaja con cómo ya trabajan los equipos reales — tickets, ramas y pull requests.',
    items: [
      { icon: 'ticket', title: 'Equipos guiados por tickets', desc: 'Trabaja desde tickets, ramas de Git y PRs/MRs con agentes que respetan el flujo.' },
      { icon: 'compass', title: 'Devs que quieren disciplina', desc: 'Ayuda de agentes sin vibe coding — cada paso es explícito y revisable.' },
      { icon: 'check', title: 'Proyectos que exigen pruebas', desc: 'Requiere evidencia de release exacta antes de dar por completo cualquier cambio.' },
      { icon: 'grid', title: 'Equipos multi-proyecto', desc: 'Comparte un núcleo genérico y añade perfiles específicos por repo.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Preguntas, respondidas',
    subtitle: 'Todo lo que necesitas saber antes de instalar ShipFrame.',
    items: [
      {
        q: '¿Qué es ShipFrame?',
        a: 'ShipFrame es un toolkit open source de flujos de trabajo de IA. Le da a los agentes de IA un ciclo de entrega repetible — skills reutilizables, workflows de agentes, plantillas y perfiles de proyecto — para que los equipos planifiquen, prueben y publiquen cambios con disciplina en lugar de prompting improvisado.',
      },
      {
        q: '¿Qué herramientas de IA soporta ShipFrame?',
        a: 'ShipFrame funciona con Claude Code (agentes y hooks gestionados por el plugin), Codex CLI (tabla de routing en AGENTS.md sin modificar tu config.toml) y OpenCode (skills enlazados y agentes convertidos que heredan tu modelo global/default salvo que lo sobrescribas). Una sola instalación puede apuntar a una, varias o todas.',
      },
      {
        q: '¿ShipFrame es gratis y open source?',
        a: 'Sí. ShipFrame se publica bajo la licencia permisiva MIT y es de uso libre en proyectos personales y comerciales. El material de terceros conserva sus notas originales.',
      },
      {
        q: '¿Cómo instalo ShipFrame?',
        a: 'Ejecuta el instalador de una línea con curl, instálalo con Homebrew (brew tap juanitourquiza/shipframe && brew install shipframe), o clona el repositorio y corre ./install.sh con --claude, --codex, --opencode o --all. Valida de forma segura con --doctor --repo-only, restaura archivos gestionados con --repair y elimina artefactos de ShipFrame con --uninstall.',
      },
      {
        q: '¿Tengo que cambiar mi flujo de trabajo actual?',
        a: 'No. ShipFrame está diseñado en torno a tickets, ramas de Git y pull/merge requests — la forma en que ya trabajan la mayoría de los equipos. Adoptas solo las skills que quieras y el comportamiento específico del proyecto queda en perfiles opcionales.',
      },
      {
        q: '¿Funciona con GitHub y GitLab?',
        a: 'Sí. ShipFrame cierra el ciclo con Draft Pull Requests en GitHub (con la CLI gh) y Draft Merge Requests en GitLab (con la CLI glab). La skill create-pr detecta el proveedor automáticamente desde tu remoto origin.',
      },
      {
        q: '¿Qué son los perfiles de proyecto?',
        a: 'Los perfiles de proyecto mantienen las reglas específicas fuera del núcleo genérico. Un repo se adhiere con shipframe.profile.md o .shipframe/profile.md para definir proceso de release, rutas de smoke-test, política de versiones, reglas de i18n y chequeos de integración.',
      },
      {
        q: '¿ShipFrame necesita un sistema de memoria?',
        a: 'No — funciona sin uno. Opcionalmente, Engram añade memoria persistente para que los agentes recuerden decisiones previas, fixes y convenciones entre sesiones de Claude Code, Codex CLI y OpenCode.',
      },
    ],
  },
  cta: {
    title: 'Dale a tus agentes de IA un proceso digno de confianza',
    subtitle: 'Instala ShipFrame y convierte cada petición en un plan, un cambio verificado y evidencia real de release.',
    primary: 'Empezar ahora',
    secondary: 'Leer la documentación',
  },
  footer: {
    tagline: 'Flujos de trabajo de IA para equipos que planifican, prueban y publican.',
    madeBy: 'Hecho por',
    madeByName: 'hackeruna',
    contact: 'Contacto',
    columns: [
      {
        title: 'Producto',
        links: [
          { label: 'Ciclo', href: '#lifecycle' },
          { label: 'Funciones', href: '#features' },
          { label: 'Instalación', href: '#install' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      {
        title: 'Recursos',
        links: [
          { label: 'Repositorio en GitHub', href: 'https://github.com/juanitourquiza/shipframe', external: true },
          { label: 'README y docs', href: 'https://github.com/juanitourquiza/shipframe#readme', external: true },
          { label: 'Releases', href: 'https://github.com/juanitourquiza/shipframe/releases', external: true },
          { label: 'Licencia MIT', href: 'https://github.com/juanitourquiza/shipframe/blob/main/LICENSE', external: true },
        ],
      },
    ],
    rights: 'Todos los derechos reservados.',
    license: 'Publicado bajo la licencia MIT.',
  },
};
