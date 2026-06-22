import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "companyName", title: "Company Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "logoMark", title: "Logo Mark", type: "image", options: { hotspot: true } }),
    defineField({ name: "favicon", title: "Favicon", type: "image" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "whatsappNumber", title: "WhatsApp Number", type: "string", description: "Use digits only or a readable local number. The website creates the wa.me link safely." }),
    defineField({ name: "email", title: "Email", type: "string", validation: (rule) => rule.email() }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "facebookUrl", title: "Facebook URL", type: "url" }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "defaultSeoTitle", title: "Default SEO Title", type: "string", validation: (rule) => rule.max(70).warning("Keep the title under 70 characters when possible.") }),
    defineField({ name: "defaultSeoDescription", title: "Default SEO Description", type: "text", rows: 3, validation: (rule) => rule.max(160).warning("Keep the description under 160 characters when possible.") }),
    defineField({ name: "defaultOgImage", title: "Default Open Graph Image", type: "image", options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
