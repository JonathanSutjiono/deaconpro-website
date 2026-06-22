import { defineField, defineType } from "sanity";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({ name: "shortDescription", title: "Short Description", type: "text", rows: 4 }),
    defineField({ name: "copyrightText", title: "Copyright Text", type: "string" }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
          defineField({ name: "url", title: "URL", type: "string", validation: (rule) => rule.required() }),
        ],
        preview: { select: { title: "label", subtitle: "url" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Footer" }) },
});
