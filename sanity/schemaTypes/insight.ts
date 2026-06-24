import { defineField, defineType } from "sanity";
import { ClientImageInput } from "../components/ClientImageInput";

export const insightType = defineType({
  name: "insight",
  title: "Insight / Artikel",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" },
    { name: "visibility", title: "Visibility" },
  ],
  fields: [
    defineField({ name: "title", title: "Judul Artikel", type: "string", group: "content", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "slug", title: "Slug", type: "slug", group: "content", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "category", title: "Kategori", type: "string", group: "content", validation: (rule) => rule.max(48) }),
    defineField({ name: "excerpt", title: "Ringkasan", type: "text", group: "content", rows: 3, validation: (rule) => rule.required().max(220).warning("Ringkasan yang padat lebih mudah dibaca pada kartu.") }),
    defineField({ name: "content", title: "Isi Artikel", type: "array", group: "content", of: [{ type: "block" }], validation: (rule) => rule.required() }),
    defineField({ name: "readTime", title: "Estimasi Waktu Baca", type: "string", group: "content", description: "Contoh: 5 menit baca" }),
    defineField({ name: "coverImage", title: "Gambar Utama", type: "image", group: "media", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (rule) => rule.max(140).warning("Jelaskan isi gambar secara singkat.") })], description: "Lebar minimum 2400px, format JPG/PNG/WebP.", components: { input: ClientImageInput } }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
    defineField({ name: "seoTitle", title: "Judul SEO (legacy)", type: "string", group: "seo", validation: (rule) => rule.max(70).warning("Usahakan judul tidak lebih dari 70 karakter.") }),
    defineField({ name: "seoDescription", title: "Deskripsi SEO (legacy)", type: "text", group: "seo", rows: 3, validation: (rule) => rule.max(160).warning("Usahakan deskripsi tidak lebih dari 160 karakter.") }),
    defineField({ name: "publishedAt", title: "Tanggal Terbit", type: "datetime", group: "visibility", initialValue: () => new Date().toISOString(), validation: (rule) => rule.required() }),
    defineField({ name: "order", title: "Urutan Tampil", type: "number", group: "visibility", initialValue: 0, description: "Gunakan untuk memprioritaskan artikel. Angka kecil tampil lebih dulu." }),
    defineField({ name: "showOnWebsite", title: "Tampilkan di website", type: "boolean", group: "visibility", initialValue: true, description: "Nonaktifkan untuk menyembunyikan artikel tanpa menghapus draf." }),
    defineField({ name: "published", title: "Siap Dipublikasikan", type: "boolean", group: "visibility", initialValue: false }),
  ],
  orderings: [{ title: "Urutan Tampil", name: "manualOrder", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", category: "category", visible: "showOnWebsite", media: "coverImage" },
    prepare: ({ title, category, visible, media }) => ({
      title: title || "Artikel tanpa judul",
      subtitle: `${category || "Insight"} · ${visible === false ? "Disembunyikan" : "Tampil"}`,
      media,
    }),
  },
});
