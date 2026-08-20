# Architecture Overview

Landing ShipFrame is an Angular single-page/static landing site for ShipFrame.

- Public pages are rendered from Angular section components under `src/app/sections/`.
- Bilingual content lives in `src/app/core/i18n/content.en.ts` and `src/app/core/i18n/content.es.ts`.
- Crawler-oriented summaries live in `public/llms.txt` and `public/llm.txt` and should stay aligned with public landing copy.
