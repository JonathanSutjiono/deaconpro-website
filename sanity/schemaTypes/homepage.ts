import { defineField, defineType } from "sanity";
import { ClientImageInput } from "../components/ClientImageInput";

const heroImageHelp = "Lebar minimum 2400px, format JPG/PNG/WebP. Gunakan foto asli yang tajam dan hindari gambar dari WhatsApp yang sudah terkompresi.";

export const homepageType = defineType({
  name: "homepage",
  title: "Halaman Utama",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Label Kecil Hero", type: "string" }),
    defineField({ name: "heroTitle", title: "Judul Hero", type: "text", rows: 3, description: "Gunakan satu baris judul per baris teks, misalnya DESIGN., CONSTRUCT., INSPIRE." }),
    defineField({ name: "heroSubtitle", title: "Subjudul Hero", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Gambar Hero", type: "image", options: { hotspot: true }, description: heroImageHelp, components: { input: ClientImageInput } }),
    defineField({ name: "primaryButtonLabel", title: "Label Tombol Utama", type: "string" }),
    defineField({ name: "primaryButtonLink", title: "Tautan Tombol Utama", type: "string", description: "Boleh gunakan tautan WhatsApp atau path internal seperti /#contact." }),
    defineField({ name: "secondaryButtonLabel", title: "Label Tombol Kedua", type: "string" }),
    defineField({ name: "secondaryButtonLink", title: "Tautan Tombol Kedua", type: "string" }),
    defineField({ name: "introTitle", title: "Judul Pengantar", type: "string" }),
    defineField({ name: "introText", title: "Teks Pengantar", type: "text", rows: 5 }),
    defineField({ name: "servicesTitle", title: "Judul Bagian Layanan", type: "string" }),
    defineField({ name: "servicesSubtitle", title: "Teks Pendukung Layanan", type: "text", rows: 3 }),
    defineField({ name: "portfolioTitle", title: "Judul Bagian Portfolio", type: "string" }),
    defineField({ name: "portfolioSubtitle", title: "Teks Pendukung Portfolio", type: "text", rows: 3 }),
    defineField({ name: "processTitle", title: "Judul Bagian Proses", type: "string" }),
    defineField({ name: "processSubtitle", title: "Teks Pendukung Proses", type: "text", rows: 3 }),
    defineField({ name: "contactTitle", title: "Judul Bagian Kontak", type: "string" }),
    defineField({ name: "contactSubtitle", title: "Teks Pendukung Kontak", type: "text", rows: 3 }),
  ],
  preview: { prepare: () => ({ title: "Halaman Utama", subtitle: "Hero dan judul setiap bagian" }) },
});
