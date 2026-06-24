import { defineField, defineType } from "sanity";
import { ClientImageInput } from "../components/ClientImageInput";

const heroImageHelp = "Lebar minimum 2400px, format JPG/PNG/WebP. Gunakan foto asli yang tajam dan hindari gambar dari WhatsApp yang sudah terkompresi.";

export const homepageType = defineType({
  name: "homepage",
  title: "Halaman Utama",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "content", title: "Section Content" },
    { name: "cta", title: "CTA" },
  ],
  fields: [
    defineField({ name: "heroEyebrow", title: "Label Kecil Hero", type: "string", group: "hero", validation: (rule) => rule.max(48) }),
    defineField({ name: "heroTitle", title: "Judul Hero", type: "text", rows: 3, group: "hero", description: "Gunakan satu baris judul per baris teks, misalnya DESIGN., CONSTRUCT., INSPIRE.", validation: (rule) => rule.required() }),
    defineField({ name: "heroSubtitle", title: "Subjudul Hero", type: "text", rows: 3, group: "hero", description: "Sebutkan layanan utama dan area kerja secara jelas.", validation: (rule) => rule.max(240).warning("Jaga subjudul ringkas agar hero tetap mudah dibaca.") }),
    defineField({ name: "heroImage", title: "Gambar Hero", type: "image", group: "hero", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (rule) => rule.max(140).warning("Jelaskan isi gambar secara ringkas.") })], description: heroImageHelp, components: { input: ClientImageInput } }),
    defineField({ name: "primaryCta", title: "CTA utama", type: "cta", group: "cta", description: "Gunakan untuk konsultasi WhatsApp." }),
    defineField({ name: "secondaryCta", title: "CTA kedua", type: "cta", group: "cta", description: "Gunakan untuk portfolio atau section pendukung." }),
    defineField({ name: "primaryButtonLabel", title: "Label Tombol Utama (legacy)", type: "string", group: "cta", hidden: ({ document }) => Boolean(document?.primaryCta) }),
    defineField({ name: "primaryButtonLink", title: "Tautan Tombol Utama (legacy)", type: "string", group: "cta", hidden: ({ document }) => Boolean(document?.primaryCta) }),
    defineField({ name: "secondaryButtonLabel", title: "Label Tombol Kedua (legacy)", type: "string", group: "cta", hidden: ({ document }) => Boolean(document?.secondaryCta) }),
    defineField({ name: "secondaryButtonLink", title: "Tautan Tombol Kedua (legacy)", type: "string", group: "cta", hidden: ({ document }) => Boolean(document?.secondaryCta) }),
    defineField({ name: "introTitle", title: "Judul Pengantar", type: "string", group: "content", validation: (rule) => rule.max(120) }),
    defineField({ name: "introText", title: "Teks Pengantar", type: "text", rows: 5, group: "content", validation: (rule) => rule.max(600).warning("Gunakan ringkasan yang padat dan faktual.") }),
    defineField({ name: "servicesTitle", title: "Judul Bagian Layanan", type: "string", group: "content" }),
    defineField({ name: "servicesSubtitle", title: "Teks Pendukung Layanan", type: "text", rows: 3, group: "content" }),
    defineField({ name: "portfolioTitle", title: "Judul Bagian Portfolio", type: "string", group: "content" }),
    defineField({ name: "portfolioSubtitle", title: "Teks Pendukung Portfolio", type: "text", rows: 3, group: "content" }),
    defineField({ name: "processTitle", title: "Judul Bagian Proses", type: "string", group: "content" }),
    defineField({ name: "processSubtitle", title: "Teks Pendukung Proses", type: "text", rows: 3, group: "content" }),
    defineField({ name: "contactTitle", title: "Judul Bagian Kontak", type: "string", group: "content" }),
    defineField({ name: "contactSubtitle", title: "Teks Pendukung Kontak", type: "text", rows: 3, group: "content" }),
  ],
  preview: { prepare: () => ({ title: "Halaman Utama", subtitle: "Hero dan judul setiap bagian" }) },
});
