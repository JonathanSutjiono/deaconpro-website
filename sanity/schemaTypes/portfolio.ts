import { defineField, defineType } from "sanity";
import { ClientImageInput } from "../components/ClientImageInput";

const imageHelp = "Recommended minimum width 1920px. Cover images should be at least 2400px wide. Use JPG/PNG/WebP, ideally 2-5MB, and avoid WhatsApp-compressed photos.";
const altField = defineField({ name: "alt", title: "Alt text", type: "string", validation: (rule) => rule.max(140).warning("Jelaskan isi gambar secara singkat.") });

export const portfolioType = defineType({
  name: "portfolio",
  title: "Portfolio / Proyek",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" },
    { name: "visibility", title: "Visibility" },
  ],
  fields: [
    defineField({ name: "title", title: "Nama Proyek", type: "string", group: "content", validation: (rule) => rule.required().max(110) }),
    defineField({ name: "slug", title: "Slug", type: "slug", group: "content", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "category", title: "Kategori Proyek", type: "string", group: "content", options: { list: [
      { title: "Konstruksi", value: "construction" },
      { title: "Interior", value: "interior" },
      { title: "Office & Commercial", value: "office-commercial" },
      { title: "Residential", value: "residential" },
    ] }, validation: (rule) => rule.required() }),
    defineField({ name: "location", title: "Lokasi", type: "string", group: "content", validation: (rule) => rule.required() }),
    defineField({ name: "year", title: "Tahun", type: "string", group: "content", validation: (rule) => rule.required() }),
    defineField({ name: "clientName", title: "Nama Klien", type: "string", group: "content", description: "Opsional. Kosongkan jika proyek bersifat privat." }),
    defineField({ name: "scope", title: "Lingkup Pekerjaan", type: "array", group: "content", of: [{ type: "string" }] }),
    defineField({ name: "status", title: "Status Proyek", type: "string", group: "content", description: "Gunakan wording faktual, misalnya Representative visual bila belum memakai proyek klien nyata." }),
    defineField({ name: "description", title: "Deskripsi Proyek", type: "array", group: "content", of: [{ type: "block" }], validation: (rule) => rule.required() }),
    defineField({ name: "coverImage", title: "Gambar Utama", type: "image", group: "media", options: { hotspot: true }, fields: [altField], description: imageHelp, components: { input: ClientImageInput } }),
    defineField({ name: "gallery", title: "Galeri Proyek", type: "array", group: "media", of: [{ type: "image", options: { hotspot: true }, fields: [altField], components: { input: ClientImageInput } }], description: imageHelp }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
    defineField({ name: "seoTitle", title: "Judul SEO (legacy)", type: "string", group: "seo", validation: (rule) => rule.max(70).warning("Usahakan judul tidak lebih dari 70 karakter.") }),
    defineField({ name: "seoDescription", title: "Deskripsi SEO (legacy)", type: "text", group: "seo", rows: 3, validation: (rule) => rule.max(160).warning("Usahakan deskripsi tidak lebih dari 160 karakter.") }),
    defineField({ name: "featured", title: "Tampilkan sebagai Proyek Unggulan", type: "boolean", group: "visibility", initialValue: false }),
    defineField({ name: "order", title: "Urutan Tampil", type: "number", group: "visibility", initialValue: 0, description: "Angka kecil tampil lebih dulu." }),
    defineField({ name: "showOnWebsite", title: "Tampilkan di website", type: "boolean", group: "visibility", initialValue: true, description: "Nonaktifkan untuk menyembunyikan proyek tanpa menghapus datanya." }),
    defineField({ name: "published", title: "Siap Dipublikasikan", type: "boolean", group: "visibility", initialValue: false, description: "Aktifkan setelah informasi dan gambar proyek siap." }),
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
