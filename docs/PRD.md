### Product Requirements Document (PRD): Fuse React + Tailwind Admin Template

#### Vision
Build a production‑ready, enterprise‑grade React admin template inspired by Fuse v19’s depth and TailAdmin’s simplicity. Ship a modern stack: React, TypeScript, Vite, Material UI, TailwindCSS, TanStack Query, React Router, React Hook Form, Zod, MSW, OpenAPI client generation, ApexCharts, FullCalendar, and JWT auth.

#### Goals
- Deliver a modular, scalable admin shell with authenticated/guest layouts, theming, and responsive design.
- Provide feature pages and patterns: Dashboard (ApexCharts), Calendar (FullCalendar), Users CRUD (Query + forms), Forms (Hook Form + Zod), Auth (JWT), Settings, Error pages.
- Strong DX: type‑safe API client generation from OpenAPI, MSW mocks, hot reload, tests, linting, formatting.
- Documented architecture, extension points, and examples to accelerate customization.

#### Non‑Goals
- Complex backend; the template mocks APIs via MSW and optional OpenAPI schema/stub.
- Multi‑tenant SaaS billing; payment flows.
- Server‑rendered setup (SSR). SPA only.

#### Users & Personas
- Frontend engineers integrating the template into internal tools, dashboards, SaaS admin panels.
- Full‑stack teams needing a fast starting point with type‑safe API integration.

#### Key Features
- Layout & Shell: topbar, sidebar (collapsible), responsive breakpoints, dark/light theme toggle.
- Auth: email/password login, refresh handling, protected routes, role‑based navigation.
- Dashboard: KPIs, timeseries charts, donut breakdowns (ApexCharts), recent activity list.
- Calendar: FullCalendar with month/week/day views, event CRUD (mocked), drag & drop.
- Users: list (pagination/sort/search), detail, create/edit with Zod validation, optimistic updates.
- Forms: examples—wizard, dynamic fields, file input, async validation.
- Settings: profile, preferences, notifications, theme density.
- Error/Empty states: 404, 500, empty lists, loading skeletons.

#### Functional Requirements
- Routing: public vs protected routes, nested routes, lazy‑loaded feature chunks.
- Data: TanStack Query for caching, retries, invalidation; Axios client with interceptors.
- API: generated TypeScript clients from OpenAPI; per‑endpoint hooks or client functions.
- Validation: Zod schemas shared between forms and input sanitization.
- Styling: Material UI as component system; Tailwind utilities for spacing/layout; unified design tokens.
- Accessibility: keyboard navigation, ARIA roles/labels, color‑contrast.
- Internationalization (optional v1.1): English baseline with i18n-ready strings.

#### Non‑Functional Requirements
- Performance: Lighthouse ≥ 90 for Performance/Best Practices/SEO on key pages, code‑splitting.
- Reliability: MSW‑backed mocks for offline/CI; tests covering critical flows.
- Security: JWT handling, route guards, basic XSS/CSRF considerations, dependency scanning.
- DX: <2s hot reload, type‑safe builds, lint‑free code.

#### Deliverables
- Working SPA with the features above
- OpenAPI schema example + generated client
- MSW mock handlers
- Documentation: README, PRD, RFCs, roadmap
- CI config for build/lint/test

#### Acceptance Criteria
- Fresh clone can run: install, codegen, start, test
- Can log in, navigate protected routes, and see mocked user data
- Dashboard renders charts, Calendar operates, Users CRUD works against mocks
- No linter/type errors, tests pass in CI


