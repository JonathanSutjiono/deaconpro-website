# Deacon Pro CMS Guide

Sanity Studio is available at `/studio` after the environment variables are configured. This phase adds Studio and schemas only; the public website is not connected to Sanity content yet.

## Open Studio

1. Open `/studio`.
2. Login with the Sanity account invited to the project.
3. Use the `production` dataset.

If Studio shows a setup message, configure the environment variables in `docs/ENV_SETUP.md`.

## Edit Company Info

1. Open the `Company` document.
2. Edit company name, brand name, tagline, address, phone, WhatsApp, website, Instagram, project focus, about, vision, and missions.
3. Keep the active company document marked as `Active`.

## Add Project

1. Create a new `Project`.
2. Fill title, slug, category, location, year, scope of work, description, cover image, gallery, SEO title, SEO description, and image alt text.
3. Set `Published` when the project is ready to show in a future frontend CMS integration.

## Upload Project Photos

- Use JPG, PNG, or WebP.
- Recommended image width minimum 1920px.
- Hero or cover image recommended width minimum 2400px.
- Recommended file size: 2-5MB.
- Avoid blurry or WhatsApp-compressed photos.

## Recommended Image Naming

- `RumahSerpong2024-01.jpg`
- `KantorMenteng2025-01.jpg`

Use project name, location, year, and sequence number so files stay easy to manage.

## Publish And Unpublish

- For projects and insights, use the `Published` field.
- For company and homepage documents, use the `Active` field.
- Draft documents can be prepared in Studio before they are published.
