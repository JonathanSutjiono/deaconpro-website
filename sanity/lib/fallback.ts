import { company } from "@/data/company";
import { insights } from "@/data/insights";
import { projects } from "@/data/projects";
import { homepageServices } from "@/data/services";
import type {
  AboutContent,
  ContactContent,
  FooterContent,
  HomepageContent,
  ProcessStepContent,
  SiteSettingsContent,
} from "./types";

export const fallbackSiteSettings: SiteSettingsContent = {
  companyName: company.name,
  brandName: company.shortName,
  tagline: company.tagline,
  phone: company.phone,
  phoneHref: company.phoneHref,
  whatsappNumber: company.whatsapp,
  whatsappHref: company.whatsappHref,
  instagramUrl: company.socialLinks.find((item) => item.label === "Instagram")?.href,
  facebookUrl: company.socialLinks.find((item) => item.label === "Facebook")?.href,
  linkedinUrl: company.socialLinks.find((item) => item.label === "LinkedIn")?.href,
  defaultSeoTitle: `${company.name} | Build New, Renovation, Home Maintenance`,
  defaultSeoDescription:
    "PT Deacon Pro Konstruksi Indonesia provides construction, renovation, interior, and home maintenance services.",
  defaultOgImage: "/images/hero-architecture.png",
};

export const fallbackHomepage: HomepageContent = {
  heroEyebrow: company.shortName,
  heroTitle: ["DESIGN.", "CONSTRUCT.", "INSPIRE."],
  heroSubtitle: company.heroSubtitle,
  heroImage: "/images/hero-architecture.png",
  primaryButtonLabel: "WhatsApp",
  primaryButtonLink: company.whatsappHref,
  secondaryButtonLabel: "View Portfolio",
  secondaryButtonLink: "/#portfolio",
  introTitle: "One team for construction, interior, and property care.",
  introText: company.aboutSummary,
  servicesTitle: "Practical support from first build to ongoing care.",
  servicesSubtitle: `Construction, interior, renovation, and maintenance services across ${company.serviceArea}.`,
  portfolioTitle: "Construction and interior project references.",
  portfolioSubtitle: "Browse work by project type and open each reference for scope and project details.",
  processTitle: "A straightforward route from survey to handover.",
  processSubtitle: "Each stage is agreed before the team moves into execution.",
  contactTitle: "Tell us what needs to be built, repaired, or maintained.",
  contactSubtitle: "Send the property location, intended scope, and preferred schedule. Our team will follow up with the next practical step.",
};

export const fallbackAbout: AboutContent = {
  heading: company.name,
  body: [],
  bodyText: company.about,
  highlights: company.projectFocus.map((title) => ({ title, description: "" })),
  values: company.missions.map((title) => ({ title, description: "" })),
};

export const fallbackServices = homepageServices;
export const fallbackProjects = projects;
export const fallbackInsights = insights;

export const fallbackProcessSteps: ProcessStepContent[] = [
  {
    title: "Consultation",
    description:
      "Initial discussion to understand project needs, site condition, budget direction, and expected timeline.",
    output: "Project brief",
    iconLabel: "consultation",
    order: 1,
  },
  {
    title: "Site Survey",
    description:
      "On-site review to measure, document, and identify technical requirements before proposal.",
    output: "Survey notes",
    iconLabel: "survey",
    order: 2,
  },
  {
    title: "Proposal",
    description:
      "Scope, work plan, material direction, and budget estimation are prepared for approval.",
    output: "Proposal & estimate",
    iconLabel: "proposal",
    order: 3,
  },
  {
    title: "Execution",
    description:
      "Work begins based on approved scope, timeline, coordination, and field supervision.",
    output: "Construction progress",
    iconLabel: "execution",
    order: 4,
  },
  {
    title: "Handover",
    description:
      "Final checking, finishing review, and project handover after agreed works are completed.",
    output: "Completed work",
    iconLabel: "handover",
    order: 5,
  },
];

export const fallbackContact: ContactContent = {
  heading: fallbackHomepage.contactTitle,
  description: fallbackHomepage.contactSubtitle,
  phone: company.phone,
  phoneHref: company.phoneHref,
  whatsappNumber: company.whatsapp,
  whatsappHref: company.whatsappHref,
  whatsappButtonLabel: "Chat on WhatsApp",
  address: company.address,
  areaCoverage: company.serviceArea,
  googleMapsUrl: company.googleMapsHref,
  instagramUrl: company.socialLinks.find((item) => item.label === "Instagram")?.href,
  facebookUrl: company.socialLinks.find((item) => item.label === "Facebook")?.href,
  linkedinUrl: company.socialLinks.find((item) => item.label === "LinkedIn")?.href,
};

export const fallbackFooter: FooterContent = {
  shortDescription: `${company.name} serves ${company.serviceArea} from ${company.location}.`,
  copyrightText: `© ${new Date().getFullYear()} ${company.name}. All rights reserved.`,
  links: [],
};
