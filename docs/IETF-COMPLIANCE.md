### IETF Alignment Notes

- HTTP Semantics (RFC 9110):
  - Client sets `Accept: application/json` and `Accept-Language` automatically for requests
  - `201 Created` responses include `Location` header
  - JSON content types used consistently
- Security (BCP 72-ish guidance):
  - JWTs are template-only and mocked; production guidance recommends httpOnly cookies and PKCE
  - CSP meta added in `index.html`
- Internationalization:
  - `Accept-Language` sent; i18n initialized with English fallback

References: IETF RFC process and guidance [ietf.org/process/rfcs](https://www.ietf.org/process/rfcs/)


