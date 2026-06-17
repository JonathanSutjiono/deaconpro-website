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
    title: "Deacon Construction",
    href: "/construction",
    label: "Construction",
    icon: "building",
    cta: "Explore Construction",
    description:
      "Construction delivery, contractor coordination, renovation, and site management for premium projects.",
  },
  {
    title: "Deacon Interior",
    href: "/interior",
    label: "Interior",
    icon: "interior",
    cta: "Explore Interior",
    description:
      "Interior design, fit-out, office interiors, residential interiors, and custom furniture execution.",
  },
  {
    title: "Build New",
    href: "/construction",
    label: "Build",
    icon: "build",
    cta: "Plan a Build",
    description:
      "New construction planning and execution for homes, commercial spaces, and hospitality environments.",
  },
  {
    title: "Renovation",
    href: "/construction",
    label: "Renovation",
    icon: "renovation",
    cta: "Discuss Renovation",
    description:
      "Renovation services for structural upgrades, space improvements, and finish refreshes.",
  },
  {
    title: "Home Maintenance",
    href: "/#contact",
    label: "Maintenance",
    icon: "maintenance",
    cta: "Request Support",
    description:
      "Reliable home maintenance support to keep properties functional, refined, and well cared for.",
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
