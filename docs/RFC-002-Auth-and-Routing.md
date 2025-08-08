### RFC-002: Auth and Routing

#### Goals
- JWT-based auth with login/logout, refresh token flow, protected routes, and role-based navigation.

#### Flow
1. User submits login form → `/auth/login` (mocked by MSW) returns `{ accessToken, refreshToken, user }`.
2. Tokens stored in memory + `localStorage` (access short‑lived; refresh longer‑lived).
3. Axios request interceptor adds `Authorization: Bearer <accessToken>`.
4. On 401 with token expiry, a refresh request is attempted once; if successful, retry original request.
5. If refresh fails, logout and redirect to `/login`.

#### Routing Structure
- Public: `/login`, `/register`, `/forgot-password` (optional)
- Protected: `/` (Dashboard), `/calendar`, `/users`, `/users/:id`, `/settings`
- 404: catch‑all

#### Guarding
- `ProtectedRoute` checks auth state; shows a loading indicator while rehydrating; redirects guests to `/login`.
- Optional `RequireRole` wrapper for admin‑only routes.

#### Persistence
- On app load, bootstrap from `localStorage` and validate via a silent `/me` call.

#### Telemetry & Security Notes
- Avoid storing refresh token in localStorage in production—use httpOnly cookie; for template simplicity we mock both.
- Add basic route‑change analytics hooks (optional).


