## Fuse‑style React Admin Template (Vite, TS, MUI, Tailwind, Query, RHF, Zod, MSW, OpenAPI)

This repo contains a production‑ready admin template scaffold inspired by Fuse v19 and TailAdmin, built with:

- React + TypeScript + Vite
- Material UI + TailwindCSS
- TanStack Query + Axios
- React Router v6
- React Hook Form + Zod
- MSW (Mock Service Worker)
- OpenAPI client generation
- ApexCharts, FullCalendar

### Quick Start

Prereqs: Node 18+/20+, pnpm/yarn/npm.

Commands
```
pnpm install
pnpm run codegen   # generates API client from openapi/schema.yaml
pnpm run dev       # starts Vite with MSW mocks
pnpm run test      # Vitest + RTL
pnpm run build
```

### Structure
```
src/
  app/            # providers: router, theme, query, msw
  layouts/        # app shell, guest layout
  features/       # auth, dashboard, calendar, users, settings
  api/            # axios, generated client, hooks
  mocks/          # msw handlers
  shared/         # ui, hooks, utils, constants
openapi/
  schema.yaml     # example OpenAPI spec
```

See `docs/PRD.md` and `docs/RFC-*` for architecture, auth, and timelines.


