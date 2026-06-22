import { defineField, defineType } from "sanity";

const imageHelp = "Recommended minimum width 1920px. Cover images should be at least 2400px wide. Use JPG/PNG/WebP, ideally 2-5MB, and avoid WhatsApp-compressed photos.";

export const portfolioType = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: [
      { title: "Construction Projects", value: "construction" },
      { title: "Interior Projects", value: "interior" },
      { title: "Office & Commercial", value: "office-commercial" },
      { title: "Residential", value: "residential" },
    ] }, validation: (rule) => rule.required() }),
    defineField({ name: "location", title: "Location", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "year", title: "Year", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "clientName", title: "Client Name", type: "string" }),
    defineField({ name: "scope", title: "Scope of Work", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "status", title: "Status", type: "string" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true }, description: imageHelp, validation: (rule) => rule.required() }),
    defineField({ name: "gallery", title: "Gallery", type: "array", of: [{ type: "image", options: { hotspot: true } }], description: imageHelp }),
    defineField({ name: "description", title: "Description", type: "array", of: [{ type: "block" }], validation: (rule) => rule.required() }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
    defineField({ name: "published", title: "Published", type: "boolean", initialValue: false }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string", validation: (rule) => rule.max(70).warning("Keep the title under 70 characters when possible.") }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text", rows: 3, validation: (rule) => rule.max(160).warning("Keep the description under 160 characters when possible.") }),
  ],
  orderings: [{ title: "Manual Order", name: "manualOrder", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "location", media: "coverImage" } },
});
