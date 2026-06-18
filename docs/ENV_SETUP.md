# Sanity Environment Setup

The website currently uses static frontend content. Sanity is installed only as an embedded Studio at `/studio`.

## Create Sanity Project

1. Create a Sanity project.
2. Create or use the `production` dataset.
3. Copy the Project ID from Sanity project settings.
4. Add local and deployed domains to Sanity CORS origins.

## Local Environment

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

Restart the development server after changing environment variables.

## Vercel Environment Variables

In Vercel Project Settings, add:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

Use `production` for the dataset unless the project intentionally uses another dataset.

## Studio URL

- Local: `http://localhost:3000/studio`
- Production: `https://your-domain.com/studio`

If `NEXT_PUBLIC_SANITY_PROJECT_ID` is missing, `/studio` shows a setup message instead of crashing.
