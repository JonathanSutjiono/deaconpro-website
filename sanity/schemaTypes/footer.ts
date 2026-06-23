import { defineField, defineType } from "sanity";

export const footerType = defineType({
  name: "footer",
  title: "Footer Website",
  type: "document",
  fields: [
    defineField({ name: "shortDescription", title: "Deskripsi Singkat", type: "text", rows: 4 }),
    defineField({ name: "copyrightText", title: "Teks Hak Cipta", type: "string" }),
    defineField({
      name: "links",
      title: "Tautan Footer",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
          defineField({ name: "url", title: "Tautan", type: "string", validation: (rule) => rule.required() }),
        ],
        preview: { select: { title: "label", subtitle: "url" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Footer Website", subtitle: "Deskripsi, hak cipta, dan tautan bawah" }) },
});
