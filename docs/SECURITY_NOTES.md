# Production Security Notes

## Current posture

The site is a mostly static Next.js frontend with a public, read-only Sanity query path. It has no customer login, payment flow, database write API, or public user-generated content surface.

## Headers

`next.config.ts` applies a practical Content Security Policy, disables `X-Powered-By`, and sends `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`, and DNS prefetch controls on all routes.

The CSP permits inline script/style support needed by Next.js, Sanity Studio, and Leaflet. It does not permit external script origins. Image and connection policies allow HTTPS because Sanity CDN, OpenStreetMap tiles, and browser navigation require it.

## Secrets

Do not commit `.env.local`, Sanity write tokens, deployment tokens, or credentials. Only the Sanity project ID, dataset, and API version belong in `NEXT_PUBLIC_*` variables.

## Future CMS phase

When a richer CMS workflow is introduced, add role-based access, upload file-size limits, image MIME validation, rich-text sanitization, least-privilege API tokens, audit logs, regular dependency updates, and a documented incident/revocation process.
