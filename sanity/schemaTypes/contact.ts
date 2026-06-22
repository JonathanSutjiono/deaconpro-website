import { defineField, defineType } from "sanity";

export const contactType = defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "whatsappNumber", title: "WhatsApp Number", type: "string" }),
    defineField({ name: "whatsappButtonLabel", title: "WhatsApp Button Label", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string", validation: (rule) => rule.email() }),
    defineField({ name: "address", title: "Address", type: "text", rows: 4 }),
    defineField({ name: "areaCoverage", title: "Area Coverage", type: "string" }),
    defineField({ name: "googleMapsUrl", title: "Google Maps URL", type: "url" }),
    defineField({ name: "googleMapsEmbedUrl", title: "Google Maps Embed URL", type: "url", description: "Optional Google Maps embed URL. Leave empty to show only the address and Maps button." }),
    defineField({ name: "latitude", title: "Latitude", type: "number" }),
    defineField({ name: "longitude", title: "Longitude", type: "number" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "facebookUrl", title: "Facebook URL", type: "url" }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
  ],
  preview: { prepare: () => ({ title: "Contact" }) },
});
