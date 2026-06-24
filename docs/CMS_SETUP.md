# DEACON PRO CMS Setup

This project uses an embedded Sanity Studio at `/studio`. The public website reads published Sanity content on the server and automatically falls back to the existing static Deacon Pro content when Sanity is unavailable or empty.

## Sanity Project

- Project name: `deaconpro-cms`
- Project ID: `v60v654p`
- Dataset: `production`
- API version: `2025-01-01`

## Required Environment Variables

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=v60v654p
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

These values are public Sanity configuration, not write credentials. Do not add a Sanity write token to client-side environment variables or commit private tokens.

## Local Development

Sanity tooling requires Node.js `20.19+` or a compatible Node 22 LTS release.

```bash
npm install
npm run dev
```

Open:

- Public website: `http://localhost:3000`
- Sanity Studio: `http://localhost:3000/studio`

Login to Studio with a Sanity account that has access to the `deaconpro-cms` project.

## Vercel Setup

1. Open the Vercel project.
2. Go to Settings, then Environment Variables.
3. Add all three required variables for Preview and Production.
4. Redeploy the branch.
5. Add the Vercel preview and production domains to Sanity CORS origins with credentials enabled for Studio login.

No Sanity write token is required by the public frontend.

## Client Editing Scope

The client can edit:

- Company name, logo, logo mark, favicon, tagline, phone, WhatsApp, email, and social links
- Homepage hero image, headings, text, and primary/secondary CTA objects
- About text, image, highlights, and values
- Service pillar, text, media alt text, visibility, and publishing order
- Portfolio text, cover image/gallery alt text, project details, visibility, and SEO fields
- Process steps
- Insight articles, cover-image alt text, publish dates, visibility, and SEO fields
- Contact address, service area, Google Maps link/embed, coordinates, and social links
- Footer description, copyright, and links

The CMS does not expose the layout, spacing system, animations, theme tokens, or application code.

## Publishing

- Services, Portfolio, Process Steps, and Insights only appear when `Published` is enabled.
- `Featured` controls homepage service/project priority where supported.
- Singleton documents are Site Settings, Homepage, About Us, Contact, and Footer.
- Use meaningful image alt context in titles and descriptions. Upload clear JPG, PNG, or WebP files.

Recommended images:

- Project images: minimum 1920px wide
- Hero and cover images: minimum 2400px wide
- Source file size: approximately 2-5MB
- Avoid blurry screenshots and WhatsApp-compressed images

## Fallback Behavior

The public website keeps its current static content in `data/`. Every CMS fetch uses that content when:

- Sanity environment variables are missing
- The Sanity API request fails
- A singleton document has not been created
- An individual CMS project or insight cannot be found but a static item with the same slug exists

An intentionally empty published collection remains empty on the public website. This respects the editor's visibility choices instead of replacing hidden content with dummy content.

## Preview Safety

Do not merge `cms-deacon-full` into `main` before preview testing the homepage, navigation, project pages, insight pages, contact links, Google Maps, images, mobile layout, and `/studio` login on Vercel Preview.
