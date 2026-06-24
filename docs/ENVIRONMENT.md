# Environment and Deployment

## Public website and Studio

The public website and embedded Sanity Studio require these environment variables in `.env.local`, Vercel Preview, and Vercel Production:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

`NEXT_PUBLIC_*` values are public project configuration. They do not grant write access.

## Manual seed only

The one-off seed command needs a separate server-side write token:

```bash
SANITY_API_WRITE_TOKEN=your_write_token
```

Run it only from a trusted local terminal:

```bash
npm run seed:sanity
```

The seed is idempotent. It creates missing documents and fills missing new fields, but never overwrites populated client content.

## Vercel checks

1. Add the three public Sanity variables to Preview and Production.
2. Add Preview and Production origins in Sanity CORS settings for `/studio` login.
3. Never add `SANITY_API_WRITE_TOKEN` to browser-exposed variables.
4. Verify `/studio`, the public homepage, WhatsApp, and Google Maps links after deployment.
