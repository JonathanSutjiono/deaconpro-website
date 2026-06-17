export type ProjectCategory = "construction" | "interior";

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
};

// CMS-ready static project source. Replace this array with a CMS fetch later.
// Image upload guidance for future CMS:
// JPG, PNG, WebP; minimum width 1920px; hero minimum width 2400px;
// target 2-5MB files, later max upload 10MB, WebP quality 85-90.
export const projects: Project[] = [
  {
    title: "Private Residence Build",
    slug: "private-residence-build",
    category: "construction",
    location: "Jabodetabek",
    year: "2026",
    scopeOfWork: ["Build New", "Project Management", "Quality Control"],
    description:
      "Premium residential construction prepared as a sample case study for Build New services with structured planning, budgeting, execution, and handover.",
    coverImage: "/images/hero-architecture.png",
    gallery: [
      "/images/hero-architecture.png",
      "/images/hero-architecture.png",
      "/images/hero-architecture.png",
    ],
    featured: true,
    seoTitle: "Private Residence Build | Deacon Pro Construction Project",
    seoDescription:
      "Sample Build New residential construction project by PT Deacon Pro Konstruksi Indonesia across Jabodetabek.",
    imageAlt: "Modern private residence construction project by Deacon Pro",
  },
  {
    title: "Commercial Renovation",
    slug: "commercial-renovation",
    category: "construction",
    location: "Kelapa Gading, Jakarta",
    year: "2025",
    scopeOfWork: ["Renovation", "General Contractor", "Site Coordination"],
    description:
      "Commercial renovation reference for clients seeking jasa renovasi rumah Kelapa Gading, office improvement, and controlled contractor delivery.",
    coverImage: "/images/hero-architecture.png",
    gallery: [
      "/images/hero-architecture.png",
      "/images/hero-architecture.png",
      "/images/hero-architecture.png",
    ],
    featured: true,
    seoTitle: "Commercial Renovation | Kontraktor Bangunan Jabodetabek",
    seoDescription:
      "Commercial renovation and contractor project structure by PT Deacon Pro Konstruksi Indonesia in Jakarta.",
    imageAlt: "Commercial renovation project with dark modern construction finish",
  },
  {
    title: "Hospitality Development",
    slug: "hospitality-development",
    category: "construction",
    location: "Bali",
    year: "2025",
    scopeOfWork: ["Design & Build", "Construction Management"],
    description:
      "Hospitality development placeholder for future construction portfolio content in Bali with emphasis on project management and quality control.",
    coverImage: "/images/hero-architecture.png",
    gallery: [
      "/images/hero-architecture.png",
      "/images/hero-architecture.png",
      "/images/hero-architecture.png",
    ],
    featured: false,
    seoTitle: "Hospitality Development | Kontraktor Bali",
    seoDescription:
      "Sample hospitality construction project by Deacon Pro for Bali service area presentation.",
    imageAlt: "Luxury hospitality construction development placeholder",
  },
  {
    title: "Executive Office Interior",
    slug: "executive-office-interior",
    category: "interior",
    location: "Jakarta",
    year: "2026",
    scopeOfWork: ["Interior Design", "Interior Fit-Out", "Custom Furniture"],
    description:
      "Executive office interior reference for a refined commercial workspace with structured design, fit-out execution, and furniture coordination.",
    coverImage: "/images/hero-architecture.png",
    gallery: [
      "/images/hero-architecture.png",
      "/images/hero-architecture.png",
      "/images/hero-architecture.png",
    ],
    featured: true,
    seoTitle: "Executive Office Interior | Kontraktor Interior Jakarta",
    seoDescription:
      "Office interior design and fit-out project reference by PT Deacon Pro Konstruksi Indonesia in Jakarta.",
    imageAlt: "Executive office interior fit-out project by Deacon Pro",
  },
  {
    title: "Luxury Apartment Suite",
    slug: "luxury-apartment-suite",
    category: "interior",
    location: "Kelapa Gading, Jakarta",
    year: "2025",
    scopeOfWork: ["Residential Interior", "Custom Furniture"],
    description:
      "Residential interior project reference for apartment living with refined material selection, custom furniture, and practical daily function.",
    coverImage: "/images/hero-architecture.png",
    gallery: [
      "/images/hero-architecture.png",
      "/images/hero-architecture.png",
      "/images/hero-architecture.png",
    ],
    featured: true,
    seoTitle: "Luxury Apartment Suite | Interior Design Kelapa Gading",
    seoDescription:
      "Residential interior design and custom furniture reference by Deacon Pro in Kelapa Gading.",
    imageAlt: "Luxury apartment suite interior design project",
  },
  {
    title: "Retail Boutique Fit-Out",
    slug: "retail-boutique-fit-out",
    category: "interior",
    location: "Makassar",
    year: "2025",
    scopeOfWork: ["Interior Fit-Out", "Project Management"],
    description:
      "Retail boutique fit-out placeholder for Makassar service area with compact planning, clean execution, and commercial interior detailing.",
    coverImage: "/images/hero-architecture.png",
    gallery: [
      "/images/hero-architecture.png",
      "/images/hero-architecture.png",
      "/images/hero-architecture.png",
    ],
    featured: false,
    seoTitle: "Retail Boutique Fit-Out | Kontraktor Makassar",
    seoDescription:
      "Interior fit-out project structure for Makassar service area by PT Deacon Pro Konstruksi Indonesia.",
    imageAlt: "Retail boutique interior fit-out project placeholder",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const constructionProjects = projects.filter(
  (project) => project.category === "construction",
);
export const interiorProjects = projects.filter(
  (project) => project.category === "interior",
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
