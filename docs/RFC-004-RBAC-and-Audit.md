### RFC-004: RBAC & Audit Logging

Scope
- Role-based menus and route permissions (admin, manager, user)
- Feature gates for CRUD actions; UI disables when unauthorized
- Audit trail: navigation, auth events, CRUD writes with before/after snapshots (client-side queued)

Design
- Roles in JWT claims; lightweight `useAuthorization()` hook and `RequireRole` wrapper
- Nav structure annotated with `minRole`
- Audit logger interface pluggable; default sends to `/audit` (mocked via MSW), batches on idle

Security
- Never trust client-only checks; server must enforce in real backends (documented)


