import { defineField, defineType } from "sanity";
import { ClientImageInput } from "../components/ClientImageInput";

const titledItem = {
  type: "object" as const,
  fields: [
    defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Keterangan", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "title", subtitle: "description" } },
};

export const aboutType = defineType({
  name: "about",
  title: "Tentang Deacon / About Us",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Judul", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "body", title: "Isi Tentang Kami", type: "array", of: [{ type: "block" }], description: "Gunakan paragraf yang jelas dan faktual mengenai Deacon Pro." }),
    defineField({ name: "image", title: "Gambar Pendukung", type: "image", options: { hotspot: true }, description: "Lebar minimum 1920px. Hindari foto buram atau terkompresi dari WhatsApp.", components: { input: ClientImageInput } }),
    defineField({ name: "highlights", title: "Sorotan Utama", type: "array", of: [titledItem] }),
    defineField({ name: "values", title: "Nilai Kerja", type: "array", of: [titledItem] }),
  ],
  preview: { prepare: () => ({ title: "Tentang Deacon", subtitle: "Profil dan nilai kerja perusahaan" }) },
});
