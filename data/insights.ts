export type Insight = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
  imageAlt: string;
};

// CMS-ready static insight source. Replace this array with a CMS fetch later.
export const insights: Insight[] = [
  {
    title: "Planning a Build New Project in Jabodetabek",
    slug: "planning-build-new-project-jabodetabek",
    category: "Build New",
    excerpt:
      "Key planning points before starting a new residential or commercial construction project in Jabodetabek.",
    content: [
      "A Build New project begins with clear requirements, realistic budgeting, and a project schedule that all stakeholders understand.",
      "For clients in Jabodetabek, Deacon Pro recommends aligning design, contractor coordination, procurement, and quality control from the earliest planning stage.",
      "This approach helps reduce late changes and keeps construction decisions connected to property needs, safety, and long-term value.",
    ],
    coverImage: "/images/hero-architecture.png",
    publishedAt: "2026-06-01",
    seoTitle: "Planning a Build New Project in Jabodetabek",
    seoDescription:
      "Planning guidance for Build New construction projects in Jabodetabek by PT Deacon Pro Konstruksi Indonesia.",
    imageAlt: "Planning a modern construction project in Jabodetabek",
  },
  {
    title: "Renovation Priorities Before Choosing Finishes",
    slug: "renovation-priorities-before-finishes",
    category: "Renovation",
    excerpt:
      "Before choosing surface finishes, renovation planning should clarify structure, function, timeline, and budget.",
    content: [
      "Renovation work should begin with the condition of the existing property, not only visual references.",
      "Clients should review layout, mechanical needs, structural constraints, and maintenance priorities before finalizing finishes.",
      "A controlled renovation process helps keep the project within budget while still achieving a refined final result.",
    ],
    coverImage: "/images/hero-architecture.png",
    publishedAt: "2026-05-20",
    seoTitle: "Renovation Priorities Before Choosing Finishes",
    seoDescription:
      "Renovation planning insight for clients seeking jasa renovasi rumah Kelapa Gading and Jakarta.",
    imageAlt: "Renovation planning and interior finish coordination",
  },
  {
    title: "Home Maintenance Checks for Long-Term Comfort",
    slug: "home-maintenance-checks-long-term-comfort",
    category: "Home Maintenance",
    excerpt:
      "Routine home maintenance protects comfort, safety, and the long-term quality of residential spaces.",
    content: [
      "Home maintenance is most effective when handled before small issues become disruptive repair work.",
      "Routine checks can include surface condition, water leakage, electrical points, doors, windows, built-in furniture, and finish durability.",
      "For homeowners in Jakarta and surrounding areas, a consistent maintenance rhythm supports comfort and protects property value.",
    ],
    coverImage: "/images/hero-architecture.png",
    publishedAt: "2026-05-05",
    seoTitle: "Home Maintenance Checks for Long-Term Comfort",
    seoDescription:
      "Home maintenance guidance for Jakarta property owners by PT Deacon Pro Konstruksi Indonesia.",
    imageAlt: "Home maintenance checks for a modern residential property",
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
