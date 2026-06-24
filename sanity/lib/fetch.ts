import { cache } from "react";
import { toPlainText, type PortableTextBlock } from "@portabletext/react";
import { company, createWhatsAppHref, type CompanyInfo } from "@/data/company";
import type { Insight } from "@/data/insights";
import type { Project, ProjectCategory } from "@/data/projects";
import {
  constructionServices,
  interiorServices,
  type ServiceItem,
  type ServicePillar,
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

async function safeFetch<T>(query: string, params: Record<string, unknown> = {}) {
  if (!hasSanityConfig) return undefined;

  try {
    return await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });
  } catch {
    return undefined;
  }
}

function imageAlt(value: unknown, fallback: string) {
  if (!value || typeof value !== "object") return fallback;
  return optionalText((value as SanityDocument).alt) ?? fallback;
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
    whatsappHref: createWhatsAppHref(whatsappNumber),
    whatsappPrefill: optionalText(doc.whatsappPrefill),
    email: optionalText(doc.email),
    websiteUrl: optionalText(doc.websiteUrl) ?? fallbackSiteSettings.websiteUrl,
    instagramUrl: optionalText(doc.instagramUrl) ?? fallbackSiteSettings.instagramUrl,
    facebookUrl: optionalText(doc.facebookUrl) ?? fallbackSiteSettings.facebookUrl,
    twitterUrl: optionalText(doc.twitterUrl) ?? fallbackSiteSettings.twitterUrl,
    linkedinUrl: optionalText(doc.linkedinUrl) ?? fallbackSiteSettings.linkedinUrl,
    logoUrl: doc.logo ? resolveImageUrl(doc.logo, "", 1000) || undefined : undefined,
    logoMarkUrl: doc.logoMark ? resolveImageUrl(doc.logoMark, "", 500) || undefined : undefined,
    faviconUrl: doc.favicon ? resolveImageUrl(doc.favicon, "", 256) || undefined : undefined,
    defaultSeoTitle: text((doc.defaultSeo as SanityDocument | undefined)?.title, text(doc.defaultSeoTitle, fallbackSiteSettings.defaultSeoTitle)),
    defaultSeoDescription: text((doc.defaultSeo as SanityDocument | undefined)?.description, text(doc.defaultSeoDescription, fallbackSiteSettings.defaultSeoDescription)),
    defaultOgImage: resolveImageUrl(doc.defaultOgImage, fallbackSiteSettings.defaultOgImage, 1600),
  };
}

function mapHomepage(doc?: SanityDocument | null): HomepageContent {
  if (!doc) return fallbackHomepage;

  const heroTitle = text(doc.heroTitle, fallbackHomepage.heroTitle.join("\n"))
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const primaryCta = doc.primaryCta as SanityDocument | undefined;
  const secondaryCta = doc.secondaryCta as SanityDocument | undefined;

  return {
    heroEyebrow: text(doc.heroEyebrow, fallbackHomepage.heroEyebrow),
    heroTitle: heroTitle.length ? heroTitle : fallbackHomepage.heroTitle,
    heroSubtitle: text(doc.heroSubtitle, fallbackHomepage.heroSubtitle),
    heroImage: resolveImageUrl(doc.heroImage, fallbackHomepage.heroImage),
    heroImageAlt: imageAlt(doc.heroImage, fallbackHomepage.heroImageAlt),
    primaryButtonLabel: text(primaryCta?.label, text(doc.primaryButtonLabel, fallbackHomepage.primaryButtonLabel)),
    primaryButtonLink: text(primaryCta?.href, text(doc.primaryButtonLink, fallbackHomepage.primaryButtonLink)),
    secondaryButtonLabel: text(secondaryCta?.label, text(doc.secondaryButtonLabel, fallbackHomepage.secondaryButtonLabel)),
    secondaryButtonLink: text(secondaryCta?.href, text(doc.secondaryButtonLink, fallbackHomepage.secondaryButtonLink)),
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
  Pick<ServiceItem, "slug" | "pillar" | "title" | "href" | "label" | "icon" | "cta">
> = {
  construction: { slug: "construction", pillar: "construction", title: "Construction", href: "/services/construction", label: "Build New", icon: "building", cta: "Explore Construction" },
  "interior-fit-out": { slug: "interior-fit-out", pillar: "interior-fit-out", title: "Interior Fit-Out", href: "/services/interior-fit-out", label: "Interior", icon: "interior", cta: "Explore Interior" },
  renovation: { slug: "renovation", pillar: "renovation", title: "Renovation", href: "/services/renovation", label: "Renovation", icon: "renovation", cta: "Plan a Renovation" },
  "home-maintenance": { slug: "home-maintenance", pillar: "home-maintenance", title: "Home Maintenance", href: "/services/home-maintenance", label: "Maintenance", icon: "maintenance", cta: "Request Support" },
  "Deacon Construction": { slug: "construction", pillar: "construction", title: "Construction", href: "/services/construction", label: "Build New", icon: "building", cta: "Explore Construction" },
  "Build New": { slug: "construction", pillar: "construction", title: "Construction", href: "/services/construction", label: "Build New", icon: "building", cta: "Explore Construction" },
  "Deacon Interior": { slug: "interior-fit-out", pillar: "interior-fit-out", title: "Interior Fit-Out", href: "/services/interior-fit-out", label: "Interior", icon: "interior", cta: "Explore Interior" },
  Renovation: { slug: "renovation", pillar: "renovation", title: "Renovation", href: "/services/renovation", label: "Renovation", icon: "renovation", cta: "Plan a Renovation" },
  "Home Maintenance": { slug: "home-maintenance", pillar: "home-maintenance", title: "Home Maintenance", href: "/services/home-maintenance", label: "Maintenance", icon: "maintenance", cta: "Request Support" },
};

function mapService(doc: SanityDocument): ServiceItem | undefined {
  const title = optionalText(doc.title);
  if (!title) return undefined;
  const legacyCategory = text(doc.category, title);
  const pillar = optionalText(doc.pillar) as ServicePillar | undefined;
  const presentation =
    (pillar ? servicePresentation[pillar] : undefined) ??
    servicePresentation[legacyCategory] ??
    servicePresentation[title] ??
    servicePresentation.construction;

  return {
    ...presentation,
    title: presentation.title,
    description: text(doc.shortDescription, portablePlainText(doc.description, "")),
  };
}

function uniqueServicePillars(items: ServiceItem[]) {
  const unique = new Map<ServicePillar, ServiceItem>();
  for (const item of items) {
    if (!unique.has(item.pillar)) unique.set(item.pillar, item);
  }
  return [...unique.values()];
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
  if (!title || !slug) return undefined;

  const portableDescription = portableBlocks(doc.description);
  const description = portablePlainText(portableDescription, "");
  const hasCoverImage = Boolean(doc.coverImage);
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
    seoTitle: text((doc.seo as SanityDocument | undefined)?.title, text(doc.seoTitle, title)),
    seoDescription: text((doc.seo as SanityDocument | undefined)?.description, text(doc.seoDescription, description)),
    imageAlt: imageAlt(doc.coverImage, `${title} - ${text(doc.location, "Deacon Pro project")}`),
    clientName: optionalText(doc.clientName),
    status: optionalText(doc.status),
    // An incomplete CMS entry is still safe to preview, but it is clearly
    // identified as a representative visual until the client uploads media.
    isSample: !hasCoverImage,
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
    output: optionalText(doc.output),
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
    seoTitle: text((doc.seo as SanityDocument | undefined)?.title, text(doc.seoTitle, title)),
    seoDescription: text((doc.seo as SanityDocument | undefined)?.description, text(doc.seoDescription, excerpt)),
    imageAlt: imageAlt(doc.coverImage, `${title} - Deacon Pro insight`),
    readTime: optionalText(doc.readTime),
  };
}

function mapContact(doc?: SanityDocument | null): ContactContent {
  if (!doc) return fallbackContact;
  const phone = text(doc.phone, fallbackContact.phone);
  const whatsappNumber = text(doc.whatsappNumber, fallbackContact.whatsappNumber);
  const legacyLatitude = typeof doc.latitude === "number" ? doc.latitude : undefined;
  const legacyLongitude = typeof doc.longitude === "number" ? doc.longitude : undefined;
  const mapLatitude = typeof doc.mapLatitude === "number" ? doc.mapLatitude : legacyLatitude ?? fallbackContact.mapLatitude;
  const mapLongitude = typeof doc.mapLongitude === "number" ? doc.mapLongitude : legacyLongitude ?? fallbackContact.mapLongitude;
  const mapZoom = typeof doc.mapZoom === "number" ? doc.mapZoom : fallbackContact.mapZoom;

  return {
    heading: text(doc.heading, fallbackContact.heading),
    description: text(doc.description, fallbackContact.description),
    phone,
    phoneHref: phoneHref(phone),
    whatsappNumber,
    whatsappHref: createWhatsAppHref(whatsappNumber),
    whatsappButtonLabel: text(doc.whatsappButtonLabel, fallbackContact.whatsappButtonLabel),
    email: optionalText(doc.email) ?? fallbackContact.email,
    address: text(doc.address, fallbackContact.address),
    areaCoverage: text(doc.areaCoverage, fallbackContact.areaCoverage),
    googleMapsUrl: text(doc.googleMapsUrl, fallbackContact.googleMapsUrl),
    googleMapsEmbedUrl: optionalText(doc.googleMapsEmbedUrl),
    latitude: legacyLatitude,
    longitude: legacyLongitude,
    showInteractiveMap: typeof doc.showInteractiveMap === "boolean" ? doc.showInteractiveMap : fallbackContact.showInteractiveMap,
    mapLatitude,
    mapLongitude,
    mapZoom,
    mapMarkerLabel: text(doc.mapMarkerLabel, fallbackContact.mapMarkerLabel),
    instagramUrl: optionalText(doc.instagramUrl) ?? fallbackContact.instagramUrl,
    facebookUrl: optionalText(doc.facebookUrl) ?? fallbackContact.facebookUrl,
    twitterUrl: optionalText(doc.twitterUrl) ?? fallbackContact.twitterUrl,
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
  if (docs === undefined) return fallbackServices;
  return uniqueServicePillars(docs.map(mapService).filter((item): item is ServiceItem => Boolean(item)));
});

export const getFeaturedServices = cache(async () => {
  const docs = await getServiceDocuments();
  if (docs === undefined) return fallbackServices;
  const mapped = docs
    .filter((doc) => Boolean(doc.featured))
    .map(mapService)
    .filter((item): item is ServiceItem => Boolean(item));
  return uniqueServicePillars(mapped).slice(0, 4);
});

export const getConstructionServiceNames = cache(async () => {
  const docs = await getServiceDocuments();
  if (docs === undefined) return constructionServices;
  const names = docs
    .filter((doc) => ["construction", "renovation"].includes(optionalText(doc.pillar) ?? "") || ["Deacon Construction", "Build New", "Renovation"].includes(text(doc.category, "")))
    .map((doc) => text(doc.title, ""))
    .filter(Boolean);
  return names;
});

export const getInteriorServiceNames = cache(async () => {
  const docs = await getServiceDocuments();
  if (docs === undefined) return interiorServices;
  const names = docs
    .filter((doc) => optionalText(doc.pillar) === "interior-fit-out" || text(doc.category, "") === "Deacon Interior")
    .map((doc) => text(doc.title, ""))
    .filter(Boolean);
  return names;
});

const getProjectDocuments = cache(async () => safeFetch<SanityDocument[]>(portfolioQuery));

export const getProjects = cache(async () => {
  const docs = await getProjectDocuments();
  if (docs === undefined) return fallbackProjects;
  return docs.map(mapProject).filter((item): item is Project => Boolean(item));
});

export const getServiceBySlug = cache(async (slug: string) => {
  const docs = await getServiceDocuments();
  if (docs === undefined) return fallbackServices.find((service) => service.slug === slug);
  return uniqueServicePillars(docs.map(mapService).filter((item): item is ServiceItem => Boolean(item))).find(
    (service) => service.slug === slug,
  );
});

export const getProcessSteps = cache(async () => {
  const docs = await safeFetch<SanityDocument[]>(processStepsQuery);
  if (docs === undefined) return fallbackProcessSteps;
  return docs.map(mapProcessStep).filter((item): item is ProcessStepContent => Boolean(item)).slice(0, 5);
});

export const getInsights = cache(async () => {
  const docs = await safeFetch<SanityDocument[]>(insightsQuery);
  if (docs === undefined) return fallbackInsights;
  return docs.map(mapInsight).filter((item): item is Insight => Boolean(item));
});

export const getProjectBySlug = cache(async (slug: string) => {
  const doc = await safeFetch<SanityDocument | null>(portfolioBySlugQuery, { slug });
  if (doc === undefined) return fallbackProjects.find((item) => item.slug === slug);
  return doc ? mapProject(doc) : undefined;
});

export const getInsightBySlug = cache(async (slug: string) => {
  const doc = await safeFetch<SanityDocument | null>(insightBySlugQuery, { slug });
  if (doc === undefined) return fallbackInsights.find((item) => item.slug === slug);
  return doc ? mapInsight(doc) : undefined;
});

export async function getCompanyInfo(): Promise<CompanyInfo> {
  const [settings, contact] = await Promise.all([getSiteSettings(), getContact()]);
  const instagramUrl = settings.instagramUrl ?? contact.instagramUrl;
  const facebookUrl = settings.facebookUrl ?? contact.facebookUrl;
  const twitterUrl = settings.twitterUrl ?? contact.twitterUrl;
  const linkedinUrl = settings.linkedinUrl ?? contact.linkedinUrl;
  const websiteHref = settings.websiteUrl ?? company.websiteHref;

  return {
    ...company,
    name: settings.companyName,
    shortName: settings.brandName,
    tagline: settings.tagline,
    phone: settings.phone,
    phoneHref: settings.phoneHref,
    whatsapp: settings.whatsappNumber,
    whatsappHref: createWhatsAppHref(settings.whatsappNumber, settings.whatsappPrefill),
    whatsappPrefill: settings.whatsappPrefill,
    website: websiteHref.replace(/^https?:\/\//, "").replace(/\/$/, ""),
    websiteHref,
    address: contact.address,
    serviceArea: contact.areaCoverage,
    googleMapsHref: contact.googleMapsUrl,
    socialLinks: [
      { label: "Instagram", handle: company.socialLinks[0].handle, href: instagramUrl ?? "#" },
      { label: "Facebook", href: facebookUrl ?? "#" },
      { label: "Twitter/X", href: twitterUrl ?? "#" },
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

  const docs = await getProjectDocuments();
  const source = docs === undefined
    ? fallbackProjects
    : docs.map(mapProject).filter((item): item is Project => Boolean(item));

  for (const project of source.filter(
    (item) => item.featured && !genericTitles.has(item.title.trim().toLowerCase()),
  )) {
    if (!unique.has(project.slug)) unique.set(project.slug, project);
  }

  return [...unique.values()].slice(0, 4);
}

export async function getRelatedProjects(project: Project, limit = 3) {
  return (await getProjects())
    .filter((item) => item.category === project.category && item.slug !== project.slug)
    .slice(0, limit);
}
