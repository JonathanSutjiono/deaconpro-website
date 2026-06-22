import { cache } from "react";
import { toPlainText, type PortableTextBlock } from "@portabletext/react";
import { company, type CompanyInfo } from "@/data/company";
import type { Insight } from "@/data/insights";
import type { Project, ProjectCategory } from "@/data/projects";
import {
  constructionServices,
  interiorServices,
  type ServiceItem,
} from "@/data/services";
import { hasSanityConfig, sanityClient } from "./client";
import {
  fallbackAbout,
  fallbackContact,
  fallbackFooter,
  fallbackHomepage,
  fallbackInsights,
  fallbackProcessSteps,
  fallbackProjects,
  fallbackServices,
  fallbackSiteSettings,
} from "./fallback";
import { resolveImageUrl } from "./image";
import {
  aboutQuery,
  contactQuery,
  footerQuery,
  homepageQuery,
  insightBySlugQuery,
  insightsQuery,
  portfolioBySlugQuery,
  portfolioQuery,
  processStepsQuery,
  servicesQuery,
  siteSettingsQuery,
} from "./queries";
import type {
  AboutContent,
  ContactContent,
  FooterContent,
  HomepageContent,
  ProcessStepContent,
  SiteSettingsContent,
  TitledContent,
} from "./types";

type SanityDocument = Record<string, unknown>;

function text(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function optionalText(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function portableBlocks(value: unknown): PortableTextBlock[] {
  return Array.isArray(value) ? (value as PortableTextBlock[]) : [];
}

function portablePlainText(value: unknown, fallback: string) {
  const blocks = portableBlocks(value);
  return blocks.length ? toPlainText(blocks) : fallback;
}

function phoneHref(phone: string) {
  const normalized = phone.replace(/[^+\d]/g, "");
  return normalized ? `tel:${normalized}` : company.phoneHref;
}

function whatsappHref(number: string) {
  let normalized = number.replace(/\D/g, "");
  if (normalized.startsWith("0")) normalized = `62${normalized.slice(1)}`;
  if (!normalized.startsWith("62")) normalized = `62${normalized}`;
  return normalized.length > 4 ? `https://wa.me/${normalized}` : company.whatsappHref;
}

async function safeFetch<T>(query: string, params: Record<string, unknown> = {}) {
  if (!hasSanityConfig) return undefined;

  try {
    return await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });
  } catch (error) {
    console.warn("[sanity] Query failed; using static fallback content.", error);
    return undefined;
  }
}

function mapSiteSettings(doc?: SanityDocument | null): SiteSettingsContent {
  if (!doc) return fallbackSiteSettings;

  const companyName = text(doc.companyName, fallbackSiteSettings.companyName);
  const phone = text(doc.phone, fallbackSiteSettings.phone);
  const whatsappNumber = text(doc.whatsappNumber, fallbackSiteSettings.whatsappNumber);

  return {
    companyName,
    brandName: fallbackSiteSettings.brandName,
    tagline: text(doc.tagline, fallbackSiteSettings.tagline),
    phone,
    phoneHref: phoneHref(phone),
    whatsappNumber,
    whatsappHref: whatsappHref(whatsappNumber),
    email: optionalText(doc.email),
    instagramUrl: optionalText(doc.instagramUrl) ?? fallbackSiteSettings.instagramUrl,
    facebookUrl: optionalText(doc.facebookUrl) ?? fallbackSiteSettings.facebookUrl,
    linkedinUrl: optionalText(doc.linkedinUrl) ?? fallbackSiteSettings.linkedinUrl,
    logoUrl: doc.logo ? resolveImageUrl(doc.logo, "", 1000) || undefined : undefined,
    logoMarkUrl: doc.logoMark ? resolveImageUrl(doc.logoMark, "", 500) || undefined : undefined,
    faviconUrl: doc.favicon ? resolveImageUrl(doc.favicon, "", 256) || undefined : undefined,
    defaultSeoTitle: text(doc.defaultSeoTitle, fallbackSiteSettings.defaultSeoTitle),
    defaultSeoDescription: text(doc.defaultSeoDescription, fallbackSiteSettings.defaultSeoDescription),
    defaultOgImage: resolveImageUrl(doc.defaultOgImage, fallbackSiteSettings.defaultOgImage, 1600),
  };
}

function mapHomepage(doc?: SanityDocument | null): HomepageContent {
  if (!doc) return fallbackHomepage;

  const heroTitle = text(doc.heroTitle, fallbackHomepage.heroTitle.join("\n"))
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  return {
    heroEyebrow: text(doc.heroEyebrow, fallbackHomepage.heroEyebrow),
    heroTitle: heroTitle.length ? heroTitle : fallbackHomepage.heroTitle,
    heroSubtitle: text(doc.heroSubtitle, fallbackHomepage.heroSubtitle),
    heroImage: resolveImageUrl(doc.heroImage, fallbackHomepage.heroImage),
    primaryButtonLabel: text(doc.primaryButtonLabel, fallbackHomepage.primaryButtonLabel),
    primaryButtonLink: text(doc.primaryButtonLink, fallbackHomepage.primaryButtonLink),
    secondaryButtonLabel: text(doc.secondaryButtonLabel, fallbackHomepage.secondaryButtonLabel),
    secondaryButtonLink: text(doc.secondaryButtonLink, fallbackHomepage.secondaryButtonLink),
    introTitle: text(doc.introTitle, fallbackHomepage.introTitle),
    introText: text(doc.introText, fallbackHomepage.introText),
    servicesTitle: text(doc.servicesTitle, fallbackHomepage.servicesTitle),
    servicesSubtitle: text(doc.servicesSubtitle, fallbackHomepage.servicesSubtitle),
    portfolioTitle: text(doc.portfolioTitle, fallbackHomepage.portfolioTitle),
    portfolioSubtitle: text(doc.portfolioSubtitle, fallbackHomepage.portfolioSubtitle),
    processTitle: text(doc.processTitle, fallbackHomepage.processTitle),
    processSubtitle: text(doc.processSubtitle, fallbackHomepage.processSubtitle),
    contactTitle: text(doc.contactTitle, fallbackHomepage.contactTitle),
    contactSubtitle: text(doc.contactSubtitle, fallbackHomepage.contactSubtitle),
  };
}

function mapTitledItems(value: unknown, fallback: TitledContent[]) {
  if (!Array.isArray(value) || value.length === 0) return fallback;

  return value
    .map((item) => {
      const record = item as SanityDocument;
      const title = optionalText(record.title);
      if (!title) return undefined;
      return { title, description: optionalText(record.description) ?? "" };
    })
    .filter((item): item is TitledContent => Boolean(item));
}

function mapAbout(doc?: SanityDocument | null): AboutContent {
  if (!doc) return fallbackAbout;
  const body = portableBlocks(doc.body);

  return {
    heading: text(doc.heading, fallbackAbout.heading),
    body,
    bodyText: portablePlainText(body, fallbackAbout.bodyText),
    image: doc.image ? resolveImageUrl(doc.image, "", 1920) || undefined : fallbackAbout.image,
    highlights: mapTitledItems(doc.highlights, fallbackAbout.highlights),
    values: mapTitledItems(doc.values, fallbackAbout.values),
  };
}

const servicePresentation: Record<
  string,
  Pick<ServiceItem, "href" | "label" | "icon" | "cta">
> = {
  "Deacon Construction": { href: "/construction", label: "Construction", icon: "building", cta: "Explore Construction" },
  "Deacon Interior": { href: "/interior", label: "Interior", icon: "interior", cta: "Explore Interior" },
  "Build New": { href: "/construction", label: "Build", icon: "build", cta: "Plan a Build" },
  Renovation: { href: "/construction", label: "Renovation", icon: "renovation", cta: "Discuss Renovation" },
  "Home Maintenance": { href: "/#contact", label: "Maintenance", icon: "maintenance", cta: "Request Support" },
};

function mapService(doc: SanityDocument): ServiceItem | undefined {
  const title = optionalText(doc.title);
  if (!title) return undefined;
  const category = text(doc.category, title);
  const presentation = servicePresentation[category] ?? servicePresentation[title] ?? servicePresentation["Deacon Construction"];

  return {
    title,
    description: text(doc.shortDescription, portablePlainText(doc.description, "")),
    ...presentation,
  };
}

function projectCategory(value: unknown): ProjectCategory {
  return value === "interior" || value === "office-commercial" || value === "residential"
    ? value
    : "construction";
}

function mapProject(doc: SanityDocument): Project | undefined {
  const title = optionalText(doc.title);
  const slugValue = doc.slug as { current?: unknown } | undefined;
  const slug = optionalText(slugValue?.current);
  if (!title || !slug || !doc.coverImage) return undefined;

  const portableDescription = portableBlocks(doc.description);
  const description = portablePlainText(portableDescription, "");
  const coverImage = resolveImageUrl(doc.coverImage, "/images/hero-architecture.png");
  const gallery = Array.isArray(doc.gallery)
    ? doc.gallery.map((image) => resolveImageUrl(image, coverImage, 1920))
    : [];

  return {
    title,
    slug,
    category: projectCategory(doc.category),
    location: text(doc.location, "Indonesia"),
    year: text(doc.year, ""),
    scopeOfWork: Array.isArray(doc.scope) ? doc.scope.filter((item): item is string => typeof item === "string") : [],
    description,
    portableDescription,
    coverImage,
    gallery: gallery.length ? gallery : [coverImage],
    featured: Boolean(doc.featured),
    seoTitle: text(doc.seoTitle, title),
    seoDescription: text(doc.seoDescription, description),
    imageAlt: `${title} - ${text(doc.location, "Deacon Pro project")}`,
    clientName: optionalText(doc.clientName),
    status: optionalText(doc.status),
    isSample: false,
  };
}

function mapProcessStep(doc: SanityDocument, index: number): ProcessStepContent | undefined {
  const title = optionalText(doc.title);
  if (!title) return undefined;
  return {
    title,
    description: optionalText(doc.description),
    order: typeof doc.order === "number" ? doc.order : index + 1,
    iconLabel: optionalText(doc.iconLabel),
  };
}

function mapInsight(doc: SanityDocument): Insight | undefined {
  const title = optionalText(doc.title);
  const slugValue = doc.slug as { current?: unknown } | undefined;
  const slug = optionalText(slugValue?.current);
  if (!title || !slug) return undefined;

  const portableContent = portableBlocks(doc.content);
  const plainContent = portablePlainText(portableContent, "");
  const excerpt = text(doc.excerpt, plainContent);

  return {
    title,
    slug,
    category: text(doc.category, "Insight"),
    excerpt,
    content: plainContent ? [plainContent] : [excerpt],
    portableContent,
    coverImage: resolveImageUrl(doc.coverImage, "/images/hero-architecture.png"),
    publishedAt: text(doc.publishedAt, new Date().toISOString()),
    seoTitle: text(doc.seoTitle, title),
    seoDescription: text(doc.seoDescription, excerpt),
    imageAlt: `${title} - Deacon Pro insight`,
    readTime: optionalText(doc.readTime),
  };
}

function mapContact(doc?: SanityDocument | null): ContactContent {
  if (!doc) return fallbackContact;
  const phone = text(doc.phone, fallbackContact.phone);
  const whatsappNumber = text(doc.whatsappNumber, fallbackContact.whatsappNumber);

  return {
    heading: text(doc.heading, fallbackContact.heading),
    description: text(doc.description, fallbackContact.description),
    phone,
    phoneHref: phoneHref(phone),
    whatsappNumber,
    whatsappHref: whatsappHref(whatsappNumber),
    whatsappButtonLabel: text(doc.whatsappButtonLabel, fallbackContact.whatsappButtonLabel),
    email: optionalText(doc.email) ?? fallbackContact.email,
    address: text(doc.address, fallbackContact.address),
    areaCoverage: text(doc.areaCoverage, fallbackContact.areaCoverage),
    googleMapsUrl: text(doc.googleMapsUrl, fallbackContact.googleMapsUrl),
    googleMapsEmbedUrl: optionalText(doc.googleMapsEmbedUrl),
    latitude: typeof doc.latitude === "number" ? doc.latitude : undefined,
    longitude: typeof doc.longitude === "number" ? doc.longitude : undefined,
    instagramUrl: optionalText(doc.instagramUrl) ?? fallbackContact.instagramUrl,
    facebookUrl: optionalText(doc.facebookUrl) ?? fallbackContact.facebookUrl,
    linkedinUrl: optionalText(doc.linkedinUrl) ?? fallbackContact.linkedinUrl,
  };
}

function mapFooter(doc?: SanityDocument | null): FooterContent {
  if (!doc) return fallbackFooter;
  const links = Array.isArray(doc.links)
    ? doc.links
        .map((item) => {
          const record = item as SanityDocument;
          const label = optionalText(record.label);
          const url = optionalText(record.url);
          return label && url ? { label, url } : undefined;
        })
        .filter((item): item is { label: string; url: string } => Boolean(item))
    : fallbackFooter.links;

  return {
    shortDescription: text(doc.shortDescription, fallbackFooter.shortDescription),
    copyrightText: text(doc.copyrightText, fallbackFooter.copyrightText),
    links,
  };
}

export const getSiteSettings = cache(async () =>
  mapSiteSettings(await safeFetch<SanityDocument | null>(siteSettingsQuery)),
);

export const getHomepage = cache(async () =>
  mapHomepage(await safeFetch<SanityDocument | null>(homepageQuery)),
);

export const getAbout = cache(async () =>
  mapAbout(await safeFetch<SanityDocument | null>(aboutQuery)),
);

export const getContact = cache(async () =>
  mapContact(await safeFetch<SanityDocument | null>(contactQuery)),
);

export const getFooter = cache(async () =>
  mapFooter(await safeFetch<SanityDocument | null>(footerQuery)),
);

const getServiceDocuments = cache(async () =>
  safeFetch<SanityDocument[]>(servicesQuery),
);

export const getServices = cache(async () => {
  const docs = await getServiceDocuments();
  const mapped = docs?.map(mapService).filter((item): item is ServiceItem => Boolean(item));
  return mapped?.length ? mapped : fallbackServices;
});

export const getFeaturedServices = cache(async () => {
  const docs = await getServiceDocuments();
  const mapped = docs
    ?.filter((doc) => Boolean(doc.featured))
    .map(mapService)
    .filter((item): item is ServiceItem => Boolean(item));
  const unique = new Map<string, ServiceItem>();
  for (const item of mapped ?? []) {
    if (!unique.has(item.title.toLowerCase())) {
      unique.set(item.title.toLowerCase(), item);
    }
  }
  const featured = [...unique.values()].slice(0, 5);
  return featured.length ? featured : fallbackServices;
});

export const getConstructionServiceNames = cache(async () => {
  const docs = await getServiceDocuments();
  const names = docs
    ?.filter((doc) =>
      ["Deacon Construction", "Build New", "Renovation", "Home Maintenance"].includes(
        text(doc.category, ""),
      ),
    )
    .map((doc) => text(doc.title, ""))
    .filter(Boolean);
  return names?.length ? names : constructionServices;
});

export const getInteriorServiceNames = cache(async () => {
  const docs = await getServiceDocuments();
  const names = docs
    ?.filter((doc) => text(doc.category, "") === "Deacon Interior")
    .map((doc) => text(doc.title, ""))
    .filter(Boolean);
  return names?.length ? names : interiorServices;
});

export const getProjects = cache(async () => {
  const docs = await safeFetch<SanityDocument[]>(portfolioQuery);
  const mapped = docs?.map(mapProject).filter((item): item is Project => Boolean(item));
  return mapped?.length ? mapped : fallbackProjects;
});

export const getProcessSteps = cache(async () => {
  const docs = await safeFetch<SanityDocument[]>(processStepsQuery);
  const mapped = docs?.map(mapProcessStep).filter((item): item is ProcessStepContent => Boolean(item));
  return mapped?.length ? mapped.slice(0, 5) : fallbackProcessSteps;
});

export const getInsights = cache(async () => {
  const docs = await safeFetch<SanityDocument[]>(insightsQuery);
  const mapped = docs?.map(mapInsight).filter((item): item is Insight => Boolean(item));
  return mapped?.length ? mapped : fallbackInsights;
});

export const getProjectBySlug = cache(async (slug: string) => {
  const doc = await safeFetch<SanityDocument | null>(portfolioBySlugQuery, { slug });
  return (doc ? mapProject(doc) : undefined) ?? fallbackProjects.find((item) => item.slug === slug);
});

export const getInsightBySlug = cache(async (slug: string) => {
  const doc = await safeFetch<SanityDocument | null>(insightBySlugQuery, { slug });
  return (doc ? mapInsight(doc) : undefined) ?? fallbackInsights.find((item) => item.slug === slug);
});

export async function getCompanyInfo(): Promise<CompanyInfo> {
  const [settings, contact] = await Promise.all([getSiteSettings(), getContact()]);
  const instagramUrl = settings.instagramUrl ?? contact.instagramUrl;
  const facebookUrl = settings.facebookUrl ?? contact.facebookUrl;
  const linkedinUrl = settings.linkedinUrl ?? contact.linkedinUrl;

  return {
    ...company,
    name: settings.companyName,
    shortName: settings.brandName,
    tagline: settings.tagline,
    phone: settings.phone,
    phoneHref: settings.phoneHref,
    whatsapp: settings.whatsappNumber,
    whatsappHref: settings.whatsappHref,
    address: contact.address,
    serviceArea: contact.areaCoverage,
    googleMapsHref: contact.googleMapsUrl,
    socialLinks: [
      { label: "Instagram", handle: company.socialLinks[0].handle, href: instagramUrl ?? "#" },
      { label: "Facebook", href: facebookUrl ?? "#" },
      { label: "Twitter/X", href: company.socialLinks.find((item) => item.label === "Twitter/X")?.href ?? "#" },
      { label: "LinkedIn", href: linkedinUrl ?? "#" },
    ],
    logoUrl: settings.logoUrl,
    logoMarkUrl: settings.logoMarkUrl,
    faviconUrl: settings.faviconUrl,
    email: contact.email ?? settings.email,
    googleMapsEmbedUrl: contact.googleMapsEmbedUrl,
    latitude: contact.latitude,
    longitude: contact.longitude,
    whatsappButtonLabel: contact.whatsappButtonLabel,
  };
}

export async function getProjectsByCategory(category: "construction" | "interior") {
  return (await getProjects()).filter((project) => project.category === category);
}

export async function getFeaturedProjects() {
  const genericTitles = new Set(["construction projects", "interior projects"]);
  const unique = new Map<string, Project>();

  for (const project of (await getProjects()).filter(
    (item) => item.featured && !genericTitles.has(item.title.trim().toLowerCase()),
  )) {
    if (!unique.has(project.slug)) unique.set(project.slug, project);
  }

  const featured = [...unique.values()].slice(0, 4);
  return featured.length
    ? featured
    : fallbackProjects.filter((project) => project.featured).slice(0, 4);
}

export async function getRelatedProjects(project: Project, limit = 3) {
  return (await getProjects())
    .filter((item) => item.category === project.category && item.slug !== project.slug)
    .slice(0, limit);
}
