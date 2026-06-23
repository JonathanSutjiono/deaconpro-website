import { defineField, defineType } from "sanity";
import { ClientImageInput } from "../components/ClientImageInput";

export const insightType = defineType({
  name: "insight",
  title: "Insight / Artikel",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Judul Artikel", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "category", title: "Kategori", type: "string" }),
    defineField({ name: "excerpt", title: "Ringkasan", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "content", title: "Isi Artikel", type: "array", of: [{ type: "block" }], validation: (rule) => rule.required() }),
    defineField({ name: "coverImage", title: "Gambar Utama", type: "image", options: { hotspot: true }, description: "Lebar minimum 2400px, format JPG/PNG/WebP.", components: { input: ClientImageInput } }),
    defineField({ name: "readTime", title: "Estimasi Waktu Baca", type: "string", description: "Contoh: 5 menit baca" }),
    defineField({ name: "publishedAt", title: "Tanggal Terbit", type: "datetime", initialValue: () => new Date().toISOString(), validation: (rule) => rule.required() }),
    defineField({ name: "order", title: "Urutan Tampil", type: "number", initialValue: 0, description: "Gunakan untuk memprioritaskan artikel. Angka kecil tampil lebih dulu." }),
    defineField({ name: "showOnWebsite", title: "Tampilkan di website", type: "boolean", initialValue: true, description: "Nonaktifkan untuk menyembunyikan artikel tanpa menghapus draf." }),
    defineField({ name: "published", title: "Siap Dipublikasikan", type: "boolean", initialValue: false }),
    defineField({ name: "seoTitle", title: "Judul SEO", type: "string", validation: (rule) => rule.max(70).warning("Usahakan judul tidak lebih dari 70 karakter.") }),
    defineField({ name: "seoDescription", title: "Deskripsi SEO", type: "text", rows: 3, validation: (rule) => rule.max(160).warning("Usahakan deskripsi tidak lebih dari 160 karakter.") }),
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
