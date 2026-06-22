import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Deacon Construction", "Deacon Interior", "Build New", "Renovation", "Home Maintenance"] },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text", rows: 3, validation: (rule) => rule.max(180).warning("Keep card text concise so the original layout remains balanced.") }),
    defineField({ name: "description", title: "Description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, description: "Recommended minimum width 1920px, JPG/PNG/WebP, ideally 2-5MB." }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "published", title: "Published", type: "boolean", initialValue: false }),
  ],
  orderings: [{ title: "Manual Order", name: "manualOrder", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "category", media: "image" } },
});
