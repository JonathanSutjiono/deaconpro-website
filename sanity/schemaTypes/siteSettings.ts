import { defineField, defineType } from "sanity";
import { ClientImageInput } from "../components/ClientImageInput";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Pengaturan Website",
  type: "document",
  fields: [
    defineField({ name: "companyName", title: "Nama Perusahaan", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "logo", title: "Logo Utama", type: "image", options: { hotspot: true }, description: "Logo yang digunakan pada website. Unggah PNG transparan bila tersedia.", components: { input: ClientImageInput } }),
    defineField({ name: "logoMark", title: "Logo Simbol", type: "image", options: { hotspot: true }, description: "Versi simbol/monogram untuk ruang yang lebih kecil.", components: { input: ClientImageInput } }),
    defineField({ name: "favicon", title: "Favicon", type: "image", description: "Ikon kecil yang tampil di tab browser.", components: { input: ClientImageInput } }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "phone", title: "Nomor Telepon", type: "string" }),
    defineField({ name: "whatsappNumber", title: "Nomor WhatsApp", type: "string", description: "Gunakan nomor lokal yang mudah dibaca, misalnya 081299375577. Website membentuk tautan wa.me secara aman." }),
    defineField({ name: "email", title: "Email", type: "string", validation: (rule) => rule.email() }),
    defineField({ name: "websiteUrl", title: "Tautan Website", type: "url", description: "Contoh: https://deaconpro.co.id" }),
    defineField({ name: "instagramUrl", title: "Tautan Instagram", type: "url" }),
    defineField({ name: "facebookUrl", title: "Tautan Facebook", type: "url" }),
    defineField({ name: "twitterUrl", title: "Tautan Twitter/X", type: "url" }),
    defineField({ name: "linkedinUrl", title: "Tautan LinkedIn", type: "url" }),
    defineField({ name: "defaultSeoTitle", title: "Judul SEO Default", type: "string", validation: (rule) => rule.max(70).warning("Usahakan judul tidak lebih dari 70 karakter.") }),
    defineField({ name: "defaultSeoDescription", title: "Deskripsi SEO Default", type: "text", rows: 3, validation: (rule) => rule.max(160).warning("Usahakan deskripsi tidak lebih dari 160 karakter.") }),
    defineField({ name: "defaultOgImage", title: "Gambar Berbagi Default", type: "image", options: { hotspot: true }, description: "Gambar saat tautan website dibagikan di WhatsApp atau media sosial.", components: { input: ClientImageInput } }),
  ],
  preview: { prepare: () => ({ title: "Pengaturan Website", subtitle: "Identitas, kontak, dan SEO" }) },
});
