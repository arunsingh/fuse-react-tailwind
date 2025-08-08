### RFC-001: Application Architecture

#### Context
We need a scalable structure combining Material UI and Tailwind, with robust data and auth layers, and type‑safe APIs.

#### Proposal
- App Shell
  - `src/app/` root, `src/app/providers/` for Query, Theme, Router, and MSW setup
  - `src/layouts/` for `AuthLayout` and `GuestLayout`, sidebar/topbar components
  - `src/features/` isolated domains: `auth`, `dashboard`, `calendar`, `users`, `settings`
  - `src/shared/` for UI primitives, hooks, utils, constants, and types

- Routing
  - React Router v6 with nested routes and lazy loading
  - ProtectedRoute wrapper reading auth state, role checks

- State & Data
  - TanStack Query for server state (queries/mutations)
  - Local UI state via component state or `zustand` (optional later)
  - Axios instance with interceptors (JWT attach, refresh token flow)

- API Client
  - OpenAPI schema in `openapi/schema.yaml`
  - Codegen via `openapi-typescript-codegen` into `src/api/generated`
  - Custom thin wrappers exposing React Query hooks in `src/api/hooks`

- Validation & Forms
  - Zod schemas per feature domain; use `zodResolver` with RHF

- Styling
  - MUI for components; Tailwind for utilities/layout
  - Theme mapping: Tailwind colors align to MUI palette; dark mode via MUI theme + `class` strategy

- Testing & Mocks
  - Vitest + React Testing Library
  - MSW for network mocks: `src/mocks/handlers` with realistic latency/errors

- Configuration
  - `.env` for API base URL and feature flags
  - `vite.config.ts` for path aliases and MSW dev integration

#### Alternatives Considered
- Pure Tailwind without MUI: faster styling but slower to reach enterprise components.
- RTK Query instead of TanStack Query: good DX but less library‑agnostic.

#### Risks
- Dual styling systems complexity—mitigated by conventions and docs
- JWT refresh edge cases—covered with robust interceptor logic and tests

#### Migration & Extensibility
- Features can be added by creating a `src/features/<name>` folder with routes, components, schemas, and API hooks.


