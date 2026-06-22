import type { PortableTextBlock } from "@portabletext/react";
import type { Insight } from "@/data/insights";
import type { Project } from "@/data/projects";
import type { ServiceItem } from "@/data/services";

export type HomepageContent = {
  heroEyebrow: string;
  heroTitle: string[];
  heroSubtitle: string;
  heroImage: string;
  primaryButtonLabel: string;
  primaryButtonLink: string;
  secondaryButtonLabel: string;
  secondaryButtonLink: string;
  introTitle: string;
  introText: string;
  servicesTitle: string;
  servicesSubtitle: string;
  portfolioTitle: string;
  portfolioSubtitle: string;
  processTitle: string;
  processSubtitle: string;
  contactTitle: string;
  contactSubtitle: string;
};

export type TitledContent = {
  title: string;
  description: string;
};

export type AboutContent = {
  heading: string;
  body: PortableTextBlock[];
  bodyText: string;
  image?: string;
  highlights: TitledContent[];
  values: TitledContent[];
};

export type ProcessStepContent = {
  title: string;
  description?: string;
  order: number;
  iconLabel?: string;
};

export type ContactContent = {
  heading: string;
  description: string;
  phone: string;
  phoneHref: string;
  whatsappNumber: string;
  whatsappHref: string;
  whatsappButtonLabel: string;
  email?: string;
  address: string;
  areaCoverage: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl?: string;
  latitude?: number;
  longitude?: number;
  instagramUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
};

export type FooterContent = {
  shortDescription: string;
  copyrightText: string;
  links: { label: string; url: string }[];
};

export type SiteSettingsContent = {
  companyName: string;
  brandName: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  whatsappNumber: string;
  whatsappHref: string;
  email?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  logoUrl?: string;
  logoMarkUrl?: string;
  faviconUrl?: string;
  defaultSeoTitle: string;
  defaultSeoDescription: string;
  defaultOgImage: string;
};

export type CmsCollections = {
  services: ServiceItem[];
  projects: Project[];
  insights: Insight[];
  processSteps: ProcessStepContent[];
};
