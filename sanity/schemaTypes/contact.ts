import { defineField, defineType } from "sanity";

export const contactType = defineType({
  name: "contact",
  title: "Kontak dan Peta",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Judul Bagian Kontak", type: "string" }),
    defineField({ name: "description", title: "Teks Pendukung", type: "text", rows: 4 }),
    defineField({ name: "phone", title: "Nomor Telepon", type: "string" }),
    defineField({ name: "whatsappNumber", title: "Nomor WhatsApp", type: "string", description: "Gunakan nomor lokal, misalnya 081299375577." }),
    defineField({ name: "whatsappButtonLabel", title: "Label Tombol WhatsApp", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string", validation: (rule) => rule.email() }),
    defineField({ name: "address", title: "Alamat Lengkap", type: "text", rows: 4 }),
    defineField({ name: "areaCoverage", title: "Area Layanan", type: "string" }),
    defineField({ name: "googleMapsUrl", title: "Tautan Google Maps", type: "url", description: "Gunakan tautan pencarian Google Maps yang terbuka di tab baru." }),
    defineField({ name: "googleMapsEmbedUrl", title: "Tautan Embed Google Maps", type: "url", description: "Opsional. Kosongkan jika hanya ingin menampilkan alamat dan tombol Google Maps." }),
    defineField({ name: "latitude", title: "Latitude", type: "number" }),
    defineField({ name: "longitude", title: "Longitude", type: "number" }),
    defineField({ name: "instagramUrl", title: "Tautan Instagram", type: "url" }),
    defineField({ name: "facebookUrl", title: "Tautan Facebook", type: "url" }),
    defineField({ name: "twitterUrl", title: "Tautan Twitter/X", type: "url" }),
    defineField({ name: "linkedinUrl", title: "Tautan LinkedIn", type: "url" }),
  ],
  preview: { prepare: () => ({ title: "Kontak dan Peta", subtitle: "Telepon, WhatsApp, alamat, dan media sosial" }) },
});
