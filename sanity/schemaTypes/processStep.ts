import { defineField, defineType } from "sanity";

export const processStepType = defineType({
  name: "processStep",
  title: "Langkah Proses",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Nama Tahap", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Penjelasan Singkat", type: "text", rows: 3 }),
    defineField({ name: "order", title: "Urutan Tampil", type: "number", initialValue: 0, description: "Angka kecil tampil lebih dulu." }),
    defineField({ name: "iconLabel", title: "Label Ikon", type: "string", description: "Opsional. Gunakan kata sederhana seperti consultation, survey, proposal, execution, atau handover." }),
    defineField({ name: "showOnWebsite", title: "Tampilkan di website", type: "boolean", initialValue: true, description: "Nonaktifkan untuk menyembunyikan tahap tanpa menghapus datanya." }),
    defineField({ name: "published", title: "Siap Dipublikasikan", type: "boolean", initialValue: false }),
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
