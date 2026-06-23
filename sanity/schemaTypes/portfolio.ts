import { defineField, defineType } from "sanity";
import { ClientImageInput } from "../components/ClientImageInput";

const imageHelp = "Recommended minimum width 1920px. Cover images should be at least 2400px wide. Use JPG/PNG/WebP, ideally 2-5MB, and avoid WhatsApp-compressed photos.";

export const portfolioType = defineType({
  name: "portfolio",
  title: "Portfolio / Proyek",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Nama Proyek", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "category", title: "Kategori Proyek", type: "string", options: { list: [
      { title: "Konstruksi", value: "construction" },
      { title: "Interior", value: "interior" },
      { title: "Office & Commercial", value: "office-commercial" },
      { title: "Residential", value: "residential" },
    ] }, validation: (rule) => rule.required() }),
    defineField({ name: "location", title: "Lokasi", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "year", title: "Tahun", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "clientName", title: "Nama Klien", type: "string", description: "Opsional. Kosongkan jika proyek bersifat privat." }),
    defineField({ name: "scope", title: "Lingkup Pekerjaan", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "status", title: "Status Proyek", type: "string" }),
    defineField({ name: "coverImage", title: "Gambar Utama", type: "image", options: { hotspot: true }, description: imageHelp, components: { input: ClientImageInput } }),
    defineField({ name: "gallery", title: "Galeri Proyek", type: "array", of: [{ type: "image", options: { hotspot: true }, components: { input: ClientImageInput } }], description: imageHelp }),
    defineField({ name: "description", title: "Deskripsi Proyek", type: "array", of: [{ type: "block" }], validation: (rule) => rule.required() }),
    defineField({ name: "featured", title: "Tampilkan sebagai Proyek Unggulan", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Urutan Tampil", type: "number", initialValue: 0, description: "Angka kecil tampil lebih dulu." }),
    defineField({ name: "showOnWebsite", title: "Tampilkan di website", type: "boolean", initialValue: true, description: "Nonaktifkan untuk menyembunyikan proyek tanpa menghapus datanya." }),
    defineField({ name: "published", title: "Siap Dipublikasikan", type: "boolean", initialValue: false, description: "Aktifkan setelah informasi dan gambar proyek siap." }),
    defineField({ name: "seoTitle", title: "Judul SEO", type: "string", validation: (rule) => rule.max(70).warning("Usahakan judul tidak lebih dari 70 karakter.") }),
    defineField({ name: "seoDescription", title: "Deskripsi SEO", type: "text", rows: 3, validation: (rule) => rule.max(160).warning("Usahakan deskripsi tidak lebih dari 160 karakter.") }),
  ],
  orderings: [{ title: "Urutan Tampil", name: "manualOrder", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", category: "category", location: "location", visible: "showOnWebsite", media: "coverImage" },
    prepare: ({ title, category, location, visible, media }) => ({
      title: title || "Proyek tanpa nama",
      subtitle: `${category || "Tanpa kategori"}${location ? ` · ${location}` : ""} · ${visible === false ? "Disembunyikan" : "Tampil"}`,
      media,
    }),
  },
});
