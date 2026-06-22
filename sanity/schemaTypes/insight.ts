import { defineField, defineType } from "sanity";

export const insightType = defineType({
  name: "insight",
  title: "Insight",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "content", title: "Content", type: "array", of: [{ type: "block" }], validation: (rule) => rule.required() }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true }, description: "Recommended minimum width 2400px, JPG/PNG/WebP, ideally 2-5MB.", validation: (rule) => rule.required() }),
    defineField({ name: "readTime", title: "Read Time", type: "string", description: "Example: 5 min read" }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime", initialValue: () => new Date().toISOString(), validation: (rule) => rule.required() }),
    defineField({ name: "published", title: "Published", type: "boolean", initialValue: false }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string", validation: (rule) => rule.max(70).warning("Keep the title under 70 characters when possible.") }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text", rows: 3, validation: (rule) => rule.max(160).warning("Keep the description under 160 characters when possible.") }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
});
