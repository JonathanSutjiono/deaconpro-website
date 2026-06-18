import { defineField, defineType } from "sanity";

const imageDescription =
  "Recommended image width minimum 1920px. Hero/cover recommended width minimum 2400px. Recommended file size 2-5MB. Avoid blurry or WhatsApp-compressed photos.";

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Homepage",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
    }),
    defineField({
      name: "heroHeadlineLine1",
      title: "Hero Headline Line 1",
      type: "string",
      initialValue: "DESIGN.",
    }),
    defineField({
      name: "heroHeadlineLine2",
      title: "Hero Headline Line 2",
      type: "string",
      initialValue: "CONSTRUCT.",
    }),
    defineField({
      name: "heroHeadlineLine3",
      title: "Hero Headline Line 3",
      type: "string",
      initialValue: "INSPIRE.",
    }),
    defineField({
      name: "heroHighlightedWord",
      title: "Hero Highlighted Word",
      type: "string",
      initialValue: "INSPIRE.",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      description: imageDescription,
    }),
    defineField({
      name: "heroPrimaryButtonLabel",
      title: "Hero Primary Button Label",
      type: "string",
    }),
    defineField({
      name: "heroPrimaryButtonLink",
      title: "Hero Primary Button Link",
      type: "string",
    }),
    defineField({
      name: "heroSecondaryButtonLabel",
      title: "Hero Secondary Button Label",
      type: "string",
    }),
    defineField({
      name: "heroSecondaryButtonLink",
      title: "Hero Secondary Button Link",
      type: "string",
    }),
    defineField({
      name: "heroWhatsappButtonLabel",
      title: "Hero WhatsApp Button Label",
      type: "string",
    }),
    defineField({
      name: "aboutHeading",
      title: "About Heading",
      type: "string",
    }),
    defineField({
      name: "aboutSummary",
      title: "About Summary",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "servicesHeading",
      title: "Services Heading",
      type: "string",
    }),
    defineField({
      name: "portfolioHeading",
      title: "Portfolio Heading",
      type: "string",
    }),
    defineField({
      name: "processHeading",
      title: "Process Heading",
      type: "string",
    }),
    defineField({
      name: "insightHeading",
      title: "Insight Heading",
      type: "string",
    }),
    defineField({
      name: "contactHeading",
      title: "Contact Heading",
      type: "string",
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
      description: imageDescription,
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
      title: "title",
      subtitle: "heroHeadlineLine1",
    },
  },
});
