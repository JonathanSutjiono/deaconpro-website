import { defineField, defineType } from "sanity";

export const companyType = defineType({
  name: "company",
  title: "Company",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Company Name",
      type: "string",
      initialValue: "PT Deacon Pro Konstruksi Indonesia",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      initialValue: "Deacon Pro",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Build New · Renovation · Home Maintenance",
    }),
    defineField({
      name: "locationName",
      title: "Location Name",
      type: "string",
      initialValue: "Mall Of Indonesia",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 4,
      initialValue:
        "Gading Square, Perkantoran Gading River View Apartemen Santa Monica Bay Lantai 1 Unit K03, Kelapa, Jl. Boulevard Bar. Raya No.18, RT.18/RW.8, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
    }),
    defineField({
      name: "serviceArea",
      title: "Service Area",
      type: "string",
      initialValue: "Jabodetabek · Bali · Makassar",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      initialValue: "021-22459116",
    }),
    defineField({
      name: "phoneLink",
      title: "Phone Link",
      type: "string",
      initialValue: "tel:02122459116",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
      initialValue: "081299375577",
    }),
    defineField({
      name: "whatsappLink",
      title: "WhatsApp Link",
      type: "url",
      initialValue: "https://wa.me/6281299375577",
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
      initialValue: "https://deaconpro.co.id",
    }),
    defineField({
      name: "instagramHandle",
      title: "Instagram Handle",
      type: "string",
      initialValue: "@deaconprocontractor",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
      initialValue: "https://www.instagram.com/deaconprocontractor",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter/X URL",
      type: "url",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "projectFocus",
      title: "Project Focus",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "missions",
      title: "Missions",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: { hotspot: true },
      description:
        "Recommended image width minimum 1920px. Hero/cover recommended width minimum 2400px. Recommended file size 2-5MB. Avoid blurry or WhatsApp-compressed photos.",
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "brandName",
      subtitle: "name",
    },
  },
});
