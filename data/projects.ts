import type { PortableTextBlock } from "@portabletext/react";

export type ProjectCategory =
  | "construction"
  | "interior"
  | "office-commercial"
  | "residential";

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  location: string;
  year: string;
  scopeOfWork: string[];
  description: string;
  coverImage: string;
  gallery: string[];
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  imageAlt: string;
  clientName?: string;
  status?: string;
  portableDescription?: PortableTextBlock[];
};

export const imageUploadGuidelines = {
  allowedFormats: ["JPG", "PNG", "WebP"],
  recommendedProjectImageWidth: "minimum 1920px",
  recommendedHeroImageWidth: "minimum 2400px",
  recommendedFileSize: "2-5MB",
  futureMaxUploadTarget: "10MB",
  futureOutputQuality: "WebP quality 85-90",
};

// CMS-ready static project source. Replace this array with a CMS fetch later.
export const projects: Project[] = [
  {
    title: "Modern Residence BSD",
    slug: "modern-residence-bsd",
    category: "construction",
    location: "BSD, Jabodetabek",
    year: "2026",
    scopeOfWork: ["Build New", "Design & Build", "Project Management"],
    description:
      "A modern residential construction sample showing how Deacon Pro manages Build New work from planning and budgeting through execution, quality control, and handover.",
    coverImage: "/images/hero-architecture.png",
    gallery: ["/images/hero-architecture.png", "/images/hero-architecture.png", "/images/hero-architecture.png"],
    featured: true,
    seoTitle: "Modern Residence BSD | Kontraktor Rumah Jakarta",
    seoDescription:
      "Modern residential Build New construction sample by PT Deacon Pro Konstruksi Indonesia for Jabodetabek clients.",
    imageAlt: "Modern residence construction project in BSD by Deacon Pro",
  },
  {
    title: "Commercial Building Kelapa Gading",
    slug: "commercial-building-kelapa-gading",
    category: "construction",
    location: "Kelapa Gading, Jakarta",
    year: "2025",
    scopeOfWork: ["General Contractor", "Renovation", "Construction Management"],
    description:
      "A commercial building project reference in Kelapa Gading focused on contractor coordination, renovation planning, site management, and controlled delivery.",
    coverImage: "/images/hero-architecture.png",
    gallery: ["/images/hero-architecture.png", "/images/hero-architecture.png", "/images/hero-architecture.png"],
    featured: true,
    seoTitle: "Commercial Building Kelapa Gading | Kontraktor Bangunan Jabodetabek",
    seoDescription:
      "Commercial construction and renovation sample for Kelapa Gading by PT Deacon Pro Konstruksi Indonesia.",
    imageAlt: "Commercial building construction project in Kelapa Gading",
  },
  {
    title: "Villa Renovation Bali",
    slug: "villa-renovation-bali",
    category: "construction",
    location: "Bali",
    year: "2025",
    scopeOfWork: ["Renovation", "Design & Build", "Quality Control"],
    description:
      "A villa renovation sample for Bali service area, combining architectural construction planning, exterior improvement, and refined project control.",
    coverImage: "/images/hero-architecture.png",
    gallery: ["/images/hero-architecture.png", "/images/hero-architecture.png", "/images/hero-architecture.png"],
    featured: false,
    seoTitle: "Villa Renovation Bali | Kontraktor Bali",
    seoDescription:
      "Villa renovation sample project by Deacon Pro for Bali construction and renovation service area.",
    imageAlt: "Villa renovation construction project in Bali",
  },
  {
    title: "Apartment Interior Kelapa Gading",
    slug: "apartment-interior-kelapa-gading",
    category: "interior",
    location: "Kelapa Gading, Jakarta",
    year: "2026",
    scopeOfWork: ["Residential Interior", "Interior Fit-Out", "Custom Furniture"],
    description:
      "A residential apartment interior sample with warm materials, practical storage, custom furnishings, and a polished living atmosphere.",
    coverImage: "/images/hero-architecture.png",
    gallery: ["/images/hero-architecture.png", "/images/hero-architecture.png", "/images/hero-architecture.png"],
    featured: true,
    seoTitle: "Apartment Interior Kelapa Gading | Interior Design Kelapa Gading",
    seoDescription:
      "Residential apartment interior design and fit-out sample in Kelapa Gading by PT Deacon Pro Konstruksi Indonesia.",
    imageAlt: "Apartment interior design project in Kelapa Gading",
  },
  {
    title: "Office Interior Jakarta",
    slug: "office-interior-jakarta",
    category: "interior",
    location: "Jakarta",
    year: "2025",
    scopeOfWork: ["Office Interior", "Interior Design", "Interior Fit-Out"],
    description:
      "A commercial office interior sample designed for productivity, brand presentation, material clarity, and efficient fit-out execution.",
    coverImage: "/images/hero-architecture.png",
    gallery: ["/images/hero-architecture.png", "/images/hero-architecture.png", "/images/hero-architecture.png"],
    featured: true,
    seoTitle: "Office Interior Jakarta | Kontraktor Interior Jakarta",
    seoDescription:
      "Office interior design and fit-out sample by PT Deacon Pro Konstruksi Indonesia in Jakarta.",
    imageAlt: "Office interior design and fit-out project in Jakarta",
  },
  {
    title: "Residential Living Room Makassar",
    slug: "residential-living-room-makassar",
    category: "interior",
    location: "Makassar",
    year: "2025",
    scopeOfWork: ["Residential Interior", "Custom Furniture", "Project Management"],
    description:
      "A residential living room interior sample for Makassar, balancing furniture detail, finish selection, comfort, and everyday function.",
    coverImage: "/images/hero-architecture.png",
    gallery: ["/images/hero-architecture.png", "/images/hero-architecture.png", "/images/hero-architecture.png"],
    featured: false,
    seoTitle: "Residential Living Room Makassar | Kontraktor Makassar",
    seoDescription:
      "Residential interior and custom furniture sample for Makassar service area by Deacon Pro.",
    imageAlt: "Residential living room interior project in Makassar",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const constructionProjects = projects.filter((project) => project.category === "construction");
export const interiorProjects = projects.filter((project) => project.category === "interior");

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project, limit = 3) {
  return projects
    .filter((item) => item.category === project.category && item.slug !== project.slug)
    .slice(0, limit);
}
