### RFC-003: Data Layer and OpenAPI Integration

#### Goals
- Centralized Axios client with interceptors, TanStack Query for data fetching/caching, code‑generated TS client from OpenAPI, and MSW for mocks.

#### Axios
- `src/api/httpClient.ts` exports a configured Axios instance with:
  - Base URL from `import.meta.env.VITE_API_URL`
  - Request interceptor attaching `Authorization` header
  - Response interceptor handling refresh logic on 401 once

#### Query
- `src/api/query.ts` exports a QueryClient with sensible defaults (retries, staleTime)
- Feature hooks in `src/api/hooks/` wrap generated client methods

#### OpenAPI Codegen
- Source: `openapi/schema.yaml`
- Tool: `openapi-typescript-codegen` → `src/api/generated`
- Script: `pnpm run codegen`

#### MSW
- Handlers mirror OpenAPI endpoints; seeded fixtures in `src/mocks/fixtures`
- Dev server uses MSW; tests also enable MSW via setup file

#### Error Handling
- Map API errors to Zod‑friendly shapes; display via MUI `Alert` and RHF `ErrorMessage`


