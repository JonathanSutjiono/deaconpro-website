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
  primaryButtonLabel: "Our Services",
  primaryButtonLink: "/#services",
  secondaryButtonLabel: "View Projects",
  secondaryButtonLink: "/#portfolio",
  introTitle: "Construction, renovation, and maintenance with a premium standard.",
  introText: company.aboutSummary,
  servicesTitle: "Build New, Renovation, Home Maintenance, and specialist divisions.",
  servicesSubtitle: `${company.tagline} for clients across ${company.serviceArea}.`,
  portfolioTitle: "Project categories ready for official case studies.",
  portfolioSubtitle: "",
  processTitle: "A clear route from first meeting to handover.",
  processSubtitle: "",
  contactTitle: "Ready to build, renovate, or maintain your property?",
  contactSubtitle: `Talk with ${company.name} about ${company.tagline} services across ${company.serviceArea}.`,
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
  "Consultation",
  "Concept & Planning",
  "Budgeting",
  "Execution",
  "Handover",
].map((title, index) => ({ title, order: index + 1 }));

export const fallbackContact: ContactContent = {
  heading: fallbackHomepage.contactTitle,
  description: fallbackHomepage.contactSubtitle,
  phone: company.phone,
  phoneHref: company.phoneHref,
  whatsappNumber: company.whatsapp,
  whatsappHref: company.whatsappHref,
  whatsappButtonLabel: "WhatsApp",
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
