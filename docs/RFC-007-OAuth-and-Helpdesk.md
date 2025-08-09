### RFC-007: OAuth Provider & Helpdesk Integration

Decision
- OAuth: Use a provider-agnostic approach suitable for SPA with Authorization Code + PKCE. For production, pair SPA with a minimal backend (FastAPI) to handle token exchange securely. In template, keep MSW-mocked endpoints and a pluggable `oauth.ts` client.
- Helpdesk: Freshdesk widget integration for support chat and ticket creation. Optional Zendesk path documented.

Implementation Plan
- `src/features/auth/oauth.ts` exposes `startOAuth(provider)`; real app redirects to provider, template uses MSW mock.
- Freshdesk widget: `FreshdeskWidget` loads widget script via `VITE_FRESHDESK_WIDGET_URL` and `VITE_FRESHDESK_WIDGET_TOKEN`.
- Security: document PKCE, CSRF state param, token storage (httpOnly cookie recommended), PII redaction hooks.


