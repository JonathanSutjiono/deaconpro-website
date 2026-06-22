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
  isSample?: boolean;
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
      "Sample case-study format for a new residence in BSD, covering early planning, budget alignment, site coordination, quality checks, and handover.",
    coverImage: "/images/hero-architecture.png",
    gallery: ["/images/hero-architecture.png", "/images/hero-architecture.png", "/images/hero-architecture.png"],
    featured: true,
    isSample: true,
    seoTitle: "Modern Residence BSD | Kontraktor Rumah Jakarta",
    seoDescription:
      "Modern residential Build New construction sample by PT Deacon Pro Konstruksi Indonesia for Jabodetabek clients.",
    imageAlt: "Sample modern residence construction reference in BSD",
  },
  {
    title: "Commercial Building Kelapa Gading",
    slug: "commercial-building-kelapa-gading",
    category: "construction",
    location: "Kelapa Gading, Jakarta",
    year: "2025",
    scopeOfWork: ["General Contractor", "Renovation", "Construction Management"],
    description:
      "Sample commercial reference for Kelapa Gading, showing a practical scope for contractor coordination, renovation planning, and controlled site delivery.",
    coverImage: "/images/hero-architecture.png",
    gallery: ["/images/hero-architecture.png", "/images/hero-architecture.png", "/images/hero-architecture.png"],
    featured: true,
    isSample: true,
    seoTitle: "Commercial Building Kelapa Gading | Kontraktor Bangunan Jabodetabek",
    seoDescription:
      "Commercial construction and renovation sample for Kelapa Gading by PT Deacon Pro Konstruksi Indonesia.",
    imageAlt: "Sample commercial building construction reference in Kelapa Gading",
  },
  {
    title: "Villa Renovation Bali",
    slug: "villa-renovation-bali",
    category: "construction",
    location: "Bali",
    year: "2025",
    scopeOfWork: ["Renovation", "Design & Build", "Quality Control"],
    description:
      "Sample renovation reference for Bali, outlining architectural updates, exterior work, finish coordination, and quality control.",
    coverImage: "/images/hero-architecture.png",
    gallery: ["/images/hero-architecture.png", "/images/hero-architecture.png", "/images/hero-architecture.png"],
    featured: false,
    isSample: true,
    seoTitle: "Villa Renovation Bali | Kontraktor Bali",
    seoDescription:
      "Villa renovation sample project by Deacon Pro for Bali construction and renovation service area.",
    imageAlt: "Sample villa renovation reference in Bali",
  },
  {
    title: "Apartment Interior Kelapa Gading",
    slug: "apartment-interior-kelapa-gading",
    category: "interior",
    location: "Kelapa Gading, Jakarta",
    year: "2026",
    scopeOfWork: ["Residential Interior", "Interior Fit-Out", "Custom Furniture"],
    description:
      "Sample apartment interior reference focused on efficient storage, durable finishes, custom furniture, and comfortable daily use.",
    coverImage: "/images/hero-architecture.png",
    gallery: ["/images/hero-architecture.png", "/images/hero-architecture.png", "/images/hero-architecture.png"],
    featured: true,
    isSample: true,
    seoTitle: "Apartment Interior Kelapa Gading | Interior Design Kelapa Gading",
    seoDescription:
      "Residential apartment interior design and fit-out sample in Kelapa Gading by PT Deacon Pro Konstruksi Indonesia.",
    imageAlt: "Sample apartment interior reference in Kelapa Gading",
  },
  {
    title: "Office Interior Jakarta",
    slug: "office-interior-jakarta",
    category: "interior",
    location: "Jakarta",
    year: "2025",
    scopeOfWork: ["Office Interior", "Interior Design", "Interior Fit-Out"],
    description:
      "Sample office fit-out reference for Jakarta, covering workspace planning, material selection, brand application, and execution coordination.",
    coverImage: "/images/hero-architecture.png",
    gallery: ["/images/hero-architecture.png", "/images/hero-architecture.png", "/images/hero-architecture.png"],
    featured: true,
    isSample: true,
    seoTitle: "Office Interior Jakarta | Kontraktor Interior Jakarta",
    seoDescription:
      "Office interior design and fit-out sample by PT Deacon Pro Konstruksi Indonesia in Jakarta.",
    imageAlt: "Sample office interior and fit-out reference in Jakarta",
  },
  {
    title: "Residential Living Room Makassar",
    slug: "residential-living-room-makassar",
    category: "interior",
    location: "Makassar",
    year: "2025",
    scopeOfWork: ["Residential Interior", "Custom Furniture", "Project Management"],
    description:
      "Sample residential interior reference for Makassar, balancing furniture detail, finish selection, comfort, and everyday function.",
    coverImage: "/images/hero-architecture.png",
    gallery: ["/images/hero-architecture.png", "/images/hero-architecture.png", "/images/hero-architecture.png"],
    featured: false,
    isSample: true,
    seoTitle: "Residential Living Room Makassar | Kontraktor Makassar",
    seoDescription:
      "Residential interior and custom furniture sample for Makassar service area by Deacon Pro.",
    imageAlt: "Sample residential living room interior reference in Makassar",
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
