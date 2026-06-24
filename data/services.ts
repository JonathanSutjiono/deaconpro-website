export type ServicePillar =
  | "construction"
  | "interior-fit-out"
  | "renovation"
  | "home-maintenance";

export type ServiceIcon = "building" | "interior" | "renovation" | "maintenance";

export type ServiceItem = {
  slug: ServicePillar;
  pillar: ServicePillar;
  title: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  icon: ServiceIcon;
};

export const serviceNavigation = [
  { label: "Deacon Construction", href: "/construction" },
  { label: "Deacon Interior", href: "/interior" },
];

export const homepageServices: ServiceItem[] = [
  {
    slug: "construction",
    pillar: "construction",
    title: "Construction",
    href: "/services/construction",
    label: "Build New",
    icon: "building",
    cta: "Explore Construction",
    description:
      "Build New, general contracting, and site coordination for residential and commercial properties.",
  },
  {
    slug: "interior-fit-out",
    pillar: "interior-fit-out",
    title: "Interior Fit-Out",
    href: "/services/interior-fit-out",
    label: "Interior",
    icon: "interior",
    cta: "Explore Interior",
    description:
      "Interior design, fit-out, furnishings, and joinery for homes, workplaces, and commercial spaces.",
  },
  {
    slug: "renovation",
    pillar: "renovation",
    title: "Renovation",
    href: "/services/renovation",
    label: "Renovation",
    icon: "renovation",
    cta: "Plan a Renovation",
    description:
      "Measured renovation work for layout changes, building repairs, and finish upgrades.",
  },
  {
    slug: "home-maintenance",
    pillar: "home-maintenance",
    title: "Home Maintenance",
    href: "/services/home-maintenance",
    label: "Maintenance",
    icon: "maintenance",
    cta: "Request Maintenance",
    description:
      "Scheduled and responsive maintenance to keep the property safe, functional, and well cared for.",
  },
];

export const serviceDetailSupport: Record<
  ServicePillar,
  { eyebrow: string; overview: string; inclusions: string[] }
> = {
  construction: {
    eyebrow: "Build New & Construction",
    overview:
      "A practical delivery path for new homes, commercial buildings, and coordinated construction work.",
    inclusions: ["Build New", "General contracting", "Site coordination"],
  },
  "interior-fit-out": {
    eyebrow: "Interior Fit-Out",
    overview:
      "Interior work planned around how the space is used, detailed through fit-out, furnishings, and execution coordination.",
    inclusions: ["Interior design", "Fit-out coordination", "Furniture and joinery"],
  },
  renovation: {
    eyebrow: "Renovation",
    overview:
      "Measured renovation support for existing properties that need repair, layout changes, or finish upgrades.",
    inclusions: ["Existing-condition review", "Repair and layout upgrades", "Finish coordination"],
  },
  "home-maintenance": {
    eyebrow: "Property Care",
    overview:
      "Ongoing property care for practical repairs, scheduled maintenance, and follow-up work after handover.",
    inclusions: ["Routine maintenance", "Repair follow-up", "Property care support"],
  },
};

export const constructionServices = [
  "Design & Build",
  "General Contractor",
  "Project Management",
  "Renovation",
  "Construction Management",
];

export const interiorServices = [
  "Interior Design",
  "Interior Fit-Out",
  "Office Interior",
  "Residential Interior",
  "Custom Furniture",
];
