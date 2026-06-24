import { defineField, defineType } from "sanity";
import { ClientImageInput } from "../components/ClientImageInput";

const imageAlt = defineField({ name: "alt", title: "Alt text", type: "string", validation: (rule) => rule.max(140).warning("Jelaskan isi gambar secara singkat.") });

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Pengaturan Website",
  type: "document",
  groups: [
    { name: "identity", title: "Brand", default: true },
    { name: "contact", title: "Contact" },
    { name: "social", title: "Social" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "companyName", title: "Nama Perusahaan", type: "string", group: "identity", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "logo", title: "Logo Utama", type: "image", group: "identity", options: { hotspot: true }, fields: [imageAlt], description: "Logo yang digunakan pada website. Unggah PNG transparan bila tersedia.", components: { input: ClientImageInput } }),
    defineField({ name: "logoMark", title: "Logo Simbol", type: "image", group: "identity", options: { hotspot: true }, fields: [imageAlt], description: "Versi simbol/monogram untuk ruang yang lebih kecil.", components: { input: ClientImageInput } }),
    defineField({ name: "favicon", title: "Favicon", type: "image", group: "identity", fields: [imageAlt], description: "Ikon kecil yang tampil di tab browser.", components: { input: ClientImageInput } }),
    defineField({ name: "tagline", title: "Tagline", type: "string", group: "identity", validation: (rule) => rule.max(100) }),
    defineField({ name: "phone", title: "Nomor Telepon", type: "string", group: "contact", validation: (rule) => rule.max(32) }),
    defineField({ name: "whatsappNumber", title: "Nomor WhatsApp", type: "string", group: "contact", description: "Gunakan nomor lokal yang mudah dibaca, misalnya 081299375577. Website membentuk tautan wa.me secara aman." }),
    defineField({ name: "whatsappPrefill", title: "Pesan Awal WhatsApp", type: "text", group: "contact", rows: 3, description: "Pesan yang otomatis terisi ketika pengunjung membuka WhatsApp." }),
    defineField({ name: "email", title: "Email", type: "string", group: "contact", validation: (rule) => rule.email() }),
    defineField({ name: "websiteUrl", title: "Tautan Website", type: "url", group: "contact", description: "Contoh: https://deaconpro.co.id" }),
    defineField({ name: "instagramUrl", title: "Tautan Instagram", type: "url", group: "social" }),
    defineField({ name: "facebookUrl", title: "Tautan Facebook", type: "url", group: "social" }),
    defineField({ name: "twitterUrl", title: "Tautan Twitter/X", type: "url", group: "social" }),
    defineField({ name: "linkedinUrl", title: "Tautan LinkedIn", type: "url", group: "social" }),
    defineField({ name: "defaultSeo", title: "SEO Default", type: "seo", group: "seo" }),
    defineField({ name: "defaultSeoTitle", title: "Judul SEO Default (legacy)", type: "string", group: "seo", validation: (rule) => rule.max(70).warning("Usahakan judul tidak lebih dari 70 karakter.") }),
    defineField({ name: "defaultSeoDescription", title: "Deskripsi SEO Default (legacy)", type: "text", group: "seo", rows: 3, validation: (rule) => rule.max(160).warning("Usahakan deskripsi tidak lebih dari 160 karakter.") }),
    defineField({ name: "defaultOgImage", title: "Gambar Berbagi Default", type: "image", group: "seo", options: { hotspot: true }, fields: [imageAlt], description: "Gambar saat tautan website dibagikan di WhatsApp atau media sosial.", components: { input: ClientImageInput } }),
  ],
  preview: { prepare: () => ({ title: "Pengaturan Website", subtitle: "Brand, kontak, social, dan SEO" }) },
});
