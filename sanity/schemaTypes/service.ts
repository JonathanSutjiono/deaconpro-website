import { defineField, defineType } from "sanity";
import { ClientImageInput } from "../components/ClientImageInput";

export const serviceType = defineType({
  name: "service",
  title: "Layanan",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" },
    { name: "visibility", title: "Visibility" },
  ],
  fields: [
    defineField({ name: "title", title: "Nama Layanan", type: "string", group: "content", validation: (rule) => rule.required().max(80) }),
    defineField({ name: "slug", title: "Slug", type: "slug", group: "content", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({
      name: "pillar",
      title: "Pilar Layanan Publik",
      type: "string",
      group: "content",
      description: "Pilih pilar yang tampil di homepage. Dokumen lama tanpa field ini tetap aman.",
      options: {
        list: [
          { title: "Construction", value: "construction" },
          { title: "Interior Fit-Out", value: "interior-fit-out" },
          { title: "Renovation", value: "renovation" },
          { title: "Home Maintenance", value: "home-maintenance" },
        ],
      },
    }),
    defineField({
      name: "category",
      title: "Kategori Layanan (legacy)",
      type: "string",
      group: "content",
      description: "Dipertahankan agar dokumen lama tetap terbaca. Gunakan Pilar Layanan Publik untuk konten baru.",
      options: { list: ["Deacon Construction", "Deacon Interior", "Build New", "Renovation", "Home Maintenance"] },
    }),
    defineField({ name: "shortDescription", title: "Ringkasan untuk Kartu", type: "text", rows: 3, group: "content", description: "Teks singkat yang tampil pada kartu layanan.", validation: (rule) => rule.max(180).warning("Jaga teks tetap singkat agar kartu tetap seimbang.") }),
    defineField({ name: "description", title: "Deskripsi Lengkap", type: "array", group: "content", of: [{ type: "block" }] }),
    defineField({ name: "image", title: "Gambar Layanan", type: "image", group: "media", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (rule) => rule.max(140).warning("Jelaskan isi gambar secara singkat.") })], description: "Lebar minimum 1920px, format JPG/PNG/WebP.", components: { input: ClientImageInput } }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
    defineField({ name: "order", title: "Urutan Tampil", type: "number", group: "visibility", initialValue: 0, description: "Angka kecil tampil lebih dulu." }),
    defineField({ name: "featured", title: "Tampilkan sebagai Unggulan", type: "boolean", group: "visibility", initialValue: false }),
    defineField({ name: "showOnWebsite", title: "Tampilkan di website", type: "boolean", group: "visibility", initialValue: true, description: "Nonaktifkan untuk menyembunyikan layanan tanpa menghapus datanya." }),
    defineField({ name: "published", title: "Siap Dipublikasikan", type: "boolean", group: "visibility", initialValue: false, description: "Aktifkan setelah konten siap digunakan di website." }),
  ],
  orderings: [{ title: "Urutan Tampil", name: "manualOrder", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", pillar: "pillar", category: "category", visible: "showOnWebsite", order: "order", media: "image" },
    prepare: ({ title, pillar, category, visible, order, media }) => ({
      title: title || "Layanan tanpa nama",
      subtitle: `${pillar || category || "Tanpa kategori"} · Urutan ${order ?? 0} · ${visible === false ? "Disembunyikan" : "Tampil"}`,
      media,
    }),
  },
});
