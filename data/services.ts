export type ServiceItem = {
  title: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  icon: "building" | "interior" | "build" | "renovation" | "maintenance";
};

export const serviceNavigation = [
  { label: "Deacon Construction", href: "/construction" },
  { label: "Deacon Interior", href: "/interior" },
];

export const homepageServices: ServiceItem[] = [
  {
    title: "Construction",
    href: "/construction",
    label: "Construction",
    icon: "building",
    cta: "Construction Services",
    description:
      "General contracting, site coordination, and project control for residential and commercial work.",
  },
  {
    title: "Interior",
    href: "/interior",
    label: "Interior",
    icon: "interior",
    cta: "Interior Services",
    description:
      "Interior design and fit-out for homes, offices, retail spaces, and custom furniture needs.",
  },
  {
    title: "Build New",
    href: "/construction",
    label: "Build",
    icon: "build",
    cta: "Discuss a New Build",
    description:
      "Planning and construction for new homes, commercial buildings, and hospitality spaces.",
  },
  {
    title: "Renovation",
    href: "/construction",
    label: "Renovation",
    icon: "renovation",
    cta: "Plan a Renovation",
    description:
      "Measured renovation work for layout changes, building repairs, and finish upgrades.",
  },
  {
    title: "Home Maintenance",
    href: "/#contact",
    label: "Maintenance",
    icon: "maintenance",
    cta: "Request Maintenance",
    description:
      "Scheduled and responsive maintenance to keep the property safe, functional, and well cared for.",
  },
];

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
