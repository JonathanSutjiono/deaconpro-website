import { defineField, defineType } from "sanity";
import { ClientImageInput } from "../components/ClientImageInput";

export const serviceType = defineType({
  name: "service",
  title: "Layanan",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Nama Layanan", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({
      name: "category",
      title: "Kategori Layanan",
      type: "string",
      options: { list: ["Deacon Construction", "Deacon Interior", "Build New", "Renovation", "Home Maintenance"] },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "shortDescription", title: "Ringkasan untuk Kartu", type: "text", rows: 3, description: "Teks singkat yang tampil pada kartu layanan.", validation: (rule) => rule.max(180).warning("Jaga teks tetap singkat agar kartu tetap seimbang.") }),
    defineField({ name: "description", title: "Deskripsi Lengkap", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "image", title: "Gambar Layanan", type: "image", options: { hotspot: true }, description: "Lebar minimum 1920px, format JPG/PNG/WebP.", components: { input: ClientImageInput } }),
    defineField({ name: "order", title: "Urutan Tampil", type: "number", initialValue: 0, description: "Angka kecil tampil lebih dulu." }),
    defineField({ name: "featured", title: "Tampilkan sebagai Unggulan", type: "boolean", initialValue: false }),
    defineField({ name: "showOnWebsite", title: "Tampilkan di website", type: "boolean", initialValue: true, description: "Nonaktifkan untuk menyembunyikan layanan tanpa menghapus datanya." }),
    defineField({ name: "published", title: "Siap Dipublikasikan", type: "boolean", initialValue: false, description: "Aktifkan setelah konten siap digunakan di website." }),
  ],
  orderings: [{ title: "Urutan Tampil", name: "manualOrder", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", category: "category", visible: "showOnWebsite", order: "order", media: "image" },
    prepare: ({ title, category, visible, order, media }) => ({
      title: title || "Layanan tanpa nama",
      subtitle: `${category || "Tanpa kategori"} · Urutan ${order ?? 0} · ${visible === false ? "Disembunyikan" : "Tampil"}`,
      media,
    }),
  },
});
