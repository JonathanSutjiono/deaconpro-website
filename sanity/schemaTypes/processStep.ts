import { defineField, defineType } from "sanity";

export const processStepType = defineType({
  name: "processStep",
  title: "Process Step",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
    defineField({ name: "iconLabel", title: "Icon Label", type: "string", description: "Optional short label for future icon mapping." }),
    defineField({ name: "published", title: "Published", type: "boolean", initialValue: false }),
  ],
  orderings: [{ title: "Manual Order", name: "manualOrder", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "description" } },
});
