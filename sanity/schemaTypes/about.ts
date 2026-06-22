import { defineField, defineType } from "sanity";

const titledItem = {
  type: "object" as const,
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "title", subtitle: "description" } },
};

export const aboutType = defineType({
  name: "about",
  title: "About Us",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, description: "Recommended minimum width 1920px. Avoid blurry or WhatsApp-compressed photos." }),
    defineField({ name: "highlights", title: "Highlights", type: "array", of: [titledItem] }),
    defineField({ name: "values", title: "Values", type: "array", of: [titledItem] }),
  ],
  preview: { prepare: () => ({ title: "About Us" }) },
});
