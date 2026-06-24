import { defineField, defineType } from "sanity";

export const imageWithAltType = defineType({
  name: "imageWithAlt",
  title: "Gambar dengan alt text",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      description: "Jelaskan isi gambar secara singkat untuk aksesibilitas dan pencarian.",
      validation: (rule) => rule.max(140).warning("Usahakan alt text di bawah 140 karakter."),
    }),
  ],
});

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Judul SEO", type: "string", validation: (rule) => rule.max(70).warning("Usahakan judul tidak lebih dari 70 karakter.") }),
    defineField({ name: "description", title: "Deskripsi SEO", type: "text", rows: 3, validation: (rule) => rule.max(160).warning("Usahakan deskripsi tidak lebih dari 160 karakter.") }),
    defineField({ name: "noIndex", title: "Jangan diindeks mesin pencari", type: "boolean", initialValue: false, description: "Gunakan hanya untuk halaman yang memang tidak ingin muncul di hasil pencarian." }),
  ],
});

export const ctaType = defineType({
  name: "cta",
  title: "Call to action",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label tombol", type: "string", validation: (rule) => rule.required().max(40) }),
    defineField({ name: "href", title: "Tautan", type: "string", description: "Gunakan path internal seperti /#contact atau tautan WhatsApp https://wa.me/....", validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});
