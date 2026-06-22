import { defineField, defineType } from "sanity";

const heroImageHelp = "Recommended minimum width 2400px, JPG/PNG/WebP, ideally 2-5MB before optimization.";

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero Eyebrow", type: "string" }),
    defineField({ name: "heroTitle", title: "Hero Title", type: "text", rows: 3, description: "Use one headline line per row, for example DESIGN., CONSTRUCT., INSPIRE." }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true }, description: heroImageHelp }),
    defineField({ name: "primaryButtonLabel", title: "Primary Button Label", type: "string" }),
    defineField({ name: "primaryButtonLink", title: "Primary Button Link", type: "string" }),
    defineField({ name: "secondaryButtonLabel", title: "Secondary Button Label", type: "string" }),
    defineField({ name: "secondaryButtonLink", title: "Secondary Button Link", type: "string" }),
    defineField({ name: "introTitle", title: "Introduction Title", type: "string" }),
    defineField({ name: "introText", title: "Introduction Text", type: "text", rows: 5 }),
    defineField({ name: "servicesTitle", title: "Services Title", type: "string" }),
    defineField({ name: "servicesSubtitle", title: "Services Subtitle", type: "text", rows: 3 }),
    defineField({ name: "portfolioTitle", title: "Portfolio Title", type: "string" }),
    defineField({ name: "portfolioSubtitle", title: "Portfolio Subtitle", type: "text", rows: 3 }),
    defineField({ name: "processTitle", title: "Process Title", type: "string" }),
    defineField({ name: "processSubtitle", title: "Process Subtitle", type: "text", rows: 3 }),
    defineField({ name: "contactTitle", title: "Contact Title", type: "string" }),
    defineField({ name: "contactSubtitle", title: "Contact Subtitle", type: "text", rows: 3 }),
  ],
  preview: { prepare: () => ({ title: "Homepage" }) },
});
