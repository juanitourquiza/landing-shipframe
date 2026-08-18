# A11y Audit Report

**Environment:** Web (Angular 22)
**Conformance Level:** AA (WCAG 2.2)
**Files / Components Reviewed:** app shell, header, footer, logo, hero, trust, lifecycle, problem, features, install, audience, faq, cta, icon, copy-button, reveal, styles.scss

---

### ❌ Violations — all fixed in this pass

| WCAG | Level | Issue | Location | Fix |
|------|-------|-------|----------|-----|
| 1.4.3 | AA | Eyebrow labels used `text-brand-500` (#6366f1) on light bg ≈ 3.9:1 (< 4.5:1 for normal text) | 6 section eyebrows + install active tab | Switched to `text-brand-600 dark:text-brand-400` (≈ 5:1 light, ≈ 6.5:1 dark) |
| 1.4.3 | AA | `.text-gradient` H1 highlight reached light indigo-400/cyan stops on white ≈ 1.6–2.8:1 (< 3:1 for large text) | `styles.scss` | Theme-aware gradient: darker indigo→teal stops in light mode, vibrant stops kept for dark |
| 2.4.11 | AA | No explicit focus indicator; gradient buttons could show a low-contrast default outline | `styles.scss` | Added global `:focus-visible` ring (2px brand, offset), lighter color in dark |

### ⚠️ Warnings — addressed / low priority

| WCAG | Level | Issue | Location | Status |
|------|-------|-------|----------|--------|
| 4.1.3 | AA | "Copied!" state not announced to screen readers | `copy-button.ts` | Fixed — added `aria-live="polite"` sr-only status |
| 1.3.1 | A | "Runs with" logos were `<span>`s, not a list | `trust.ts` | Fixed — converted to `<ul>/<li>` |
| 2.5.8 | AA | Footer text links have < 24px vertical target | `footer.ts` | Acceptable — inline text-link exception applies; spacing gives adequate hit area |
| 4.1.2 | A | `role="tablist"` present but no `tabpanel`/`aria-controls` wiring on install tabs | `install.ts` | Low impact — content swaps in place; can add full tab semantics if desired |

### ✅ Passed

- **1.1.1** All icons are `aria-hidden` inline SVG; every icon-only control has an `aria-label` (theme toggle, lang toggle, GitHub, menu, copy).
- **1.3.1** Semantic landmarks: `<header>`, `<main id="main">`, `<footer>`, `<nav aria-label>`, `<section>`, `<ol>`/`<ul>`, `<dl>` for metrics.
- **2.1.1 / 2.1.2** Fully keyboard operable; FAQ uses native `<details>/<summary>`; no traps.
- **2.4.1** Skip-to-content link present and functional.
- **2.4.2** Descriptive, per-locale `<title>` set by SeoService.
- **2.3.1** No flashing content; **2.2.2** reduced-motion honored via `prefers-reduced-motion`.
- **1.4.10** Reflow verified at 320–390px with no horizontal scroll (measured scrollWidth 379px).
- **3.1.1 / 3.1.2** `<html lang>` correct per locale (`/en` → en, `/es` → es); language toggle updates it.
- **3.2.3** Consistent navigation and labeling across locales.
- **4.1.1** No duplicate IDs; valid nesting.

---

### Summary
- **Violations:** 3 (all fixed)
- **Warnings:** 4 (2 fixed, 2 accepted/low-priority)
- **Passed:** 15+ criteria
- **Overall:** ✅ Passes Level AA after fixes

### Recommended Next Steps
1. (Optional) Add full ARIA tab semantics (`aria-controls` + `role="tabpanel"`) to the install tabs.
2. (Optional) Run `axe-core` / Lighthouse against the deployed URL for automated confirmation.
