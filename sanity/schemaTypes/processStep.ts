import { defineField, defineType } from "sanity";

export const processStepType = defineType({
  name: "processStep",
  title: "Langkah Proses",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "visibility", title: "Visibility" },
  ],
  fields: [
    defineField({ name: "title", title: "Nama Tahap", type: "string", group: "content", validation: (rule) => rule.required().max(60) }),
    defineField({ name: "description", title: "Penjelasan Singkat", type: "text", group: "content", rows: 3, validation: (rule) => rule.max(220).warning("Jaga penjelasan ringkas agar kartu mudah dipindai.") }),
    defineField({ name: "output", title: "Output / Deliverable", type: "string", group: "content", description: "Contoh: Project brief, Survey notes, atau Proposal & estimate." }),
    defineField({ name: "iconLabel", title: "Label Ikon", type: "string", group: "content", description: "Opsional. Gunakan kata sederhana seperti consultation, survey, proposal, execution, atau handover." }),
    defineField({ name: "order", title: "Urutan Tampil", type: "number", group: "visibility", initialValue: 0, description: "Angka kecil tampil lebih dulu." }),
    defineField({ name: "showOnWebsite", title: "Tampilkan di website", type: "boolean", group: "visibility", initialValue: true, description: "Nonaktifkan untuk menyembunyikan tahap tanpa menghapus datanya." }),
    defineField({ name: "published", title: "Siap Dipublikasikan", type: "boolean", group: "visibility", initialValue: false }),
  ],
  orderings: [{ title: "Urutan Tampil", name: "manualOrder", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", order: "order", visible: "showOnWebsite" },
    prepare: ({ title, order, visible }) => ({
      title: title || "Tahap tanpa nama",
      subtitle: `Urutan ${order ?? 0} · ${visible === false ? "Disembunyikan" : "Tampil"}`,
    }),
  },
});
