import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN. Add them to .env.local before running this manual seed.",
  );
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });
const summary = { created: [], skipped: [] };

function block(text, key) {
  return [{ _type: "block", _key: `block-${key}`, style: "normal", markDefs: [], children: [{ _type: "span", _key: `span-${key}`, text, marks: [] }] }];
}

async function ensureSingleton(id, type, document) {
  const existing = await client.fetch(`*[_id == $id][0]._id`, { id });
  if (existing) {
    summary.skipped.push(`${type} (${id})`);
    return;
  }

  await client.create({ _id: id, _type: type, ...document });
  summary.created.push(`${type} (${id})`);
}

async function ensureBySlug(type, slug, document) {
  const existing = await client.fetch(
    `*[_type == $type && slug.current == $slug][0]._id`,
    { type, slug },
  );
  if (existing) {
    summary.skipped.push(`${type} (${slug})`);
    return;
  }

  await client.create({ _id: `${type}-${slug}`, _type: type, ...document });
  summary.created.push(`${type} (${slug})`);
}

async function ensureProcessStep(step) {
  const existing = await client.fetch(
    `*[_type == "processStep" && title == $title][0]._id`,
    { title: step.title },
  );
  if (existing) {
    summary.skipped.push(`processStep (${step.title})`);
    return;
  }

  await client.create({ _id: `process-${step.order}`, _type: "processStep", ...step });
  summary.created.push(`processStep (${step.title})`);
}

const companyName = "PT Deacon Pro Konstruksi Indonesia";
const address = "Gading Square, Perkantoran Gading River View Apartemen Santa Monica Bay Lantai 1 Unit K03, Kelapa, Jl. Boulevard Bar. Raya No.18, RT.18/RW.8, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240";
const mapsUrl = "https://www.google.com/maps/search/Gading%20Square%2C%20Perkantoran%20Gading%20River%20View%20Apartemen%20Santa%20Monica%20Bay%20Lantai%201%20Unit%20K03%2C%20Kelapa%2C%20Jl.%20Boulevard%20Bar.%20Raya%20No.18%2C%20RT.18%2FRW.8%2C%20Klp.%20Gading%20Bar.%2C%20Kec.%20Klp.%20Gading%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014240";

await ensureSingleton("siteSettings", "siteSettings", {
  companyName,
  tagline: "Build New · Renovation · Home Maintenance",
  phone: "021-22459116",
  whatsappNumber: "081299375577",
  websiteUrl: "https://deaconpro.co.id",
  instagramUrl: "https://www.instagram.com/deaconprocontractor",
  facebookUrl: "#",
  twitterUrl: "#",
  linkedinUrl: "#",
  defaultSeoTitle: `${companyName} | Build New, Renovation, Home Maintenance`,
  defaultSeoDescription: "Construction, renovation, interior, and home maintenance services for residential and commercial properties.",
});

await ensureSingleton("homepage", "homepage", {
  heroEyebrow: "Deacon Pro",
  heroTitle: "DESIGN.\nCONSTRUCT.\nINSPIRE.",
  heroSubtitle: "Construction, renovation, home maintenance, and interior work for homes and businesses across JABODETABEK, Bali, and Makassar.",
  primaryButtonLabel: "WhatsApp",
  primaryButtonLink: "https://wa.me/6281299375577",
  secondaryButtonLabel: "View Portfolio",
  secondaryButtonLink: "/#portfolio",
  introTitle: "One team for construction, interior, and property care.",
  introText: "PT Deacon Pro Konstruksi Indonesia supports residential and commercial work with construction, interior fit-out, renovation, maintenance, and hands-on project management.",
  servicesTitle: "Practical support from first build to ongoing care.",
  servicesSubtitle: "Construction, interior, renovation, and maintenance services across JABODETABEK, Bali, and Makassar.",
  portfolioTitle: "Construction and interior project references.",
  portfolioSubtitle: "Browse work by project type and open each reference for scope and project details.",
  processTitle: "A straightforward route from survey to handover.",
  processSubtitle: "Each stage is agreed before the team moves into execution.",
  contactTitle: "Tell us what needs to be built, repaired, or maintained.",
  contactSubtitle: "Send the property location, intended scope, and preferred schedule. Our team will follow up with the next practical step.",
});

await ensureSingleton("about", "about", {
  heading: companyName,
  body: block("PT Deacon Pro Konstruksi Indonesia provides construction, renovation, interior fit-out, and home maintenance services from Kelapa Gading, Jakarta. Each project is planned around the property condition, client priorities, budget, and working schedule. Our team coordinates design, procurement, site execution, and quality checks so decisions remain clear from the first survey through handover.", "about"),
  highlights: [
    { _key: "focus-commercial", _type: "object", title: "Office & Commercial", description: "" },
    { _key: "focus-residential", _type: "object", title: "Residential", description: "" },
  ],
  values: [
    { _key: "value-listen", _type: "object", title: "Define the project scope", description: "Listen carefully before work begins." },
    { _key: "value-plan", _type: "object", title: "Plan clearly", description: "Set a realistic budget and schedule." },
    { _key: "value-communicate", _type: "object", title: "Coordinate openly", description: "Keep communication clear during execution." },
    { _key: "value-handover", _type: "object", title: "Handover responsibly", description: "Complete work with accountable checking." },
  ],
});

await ensureSingleton("contact", "contact", {
  heading: "Tell us what needs to be built, repaired, or maintained.",
  description: "Send the property location, intended scope, and preferred schedule. Our team will follow up with the next practical step.",
  phone: "021-22459116",
  whatsappNumber: "081299375577",
  whatsappButtonLabel: "Chat on WhatsApp",
  address,
  areaCoverage: "JABODETABEK · Bali · Makassar",
  googleMapsUrl: mapsUrl,
  instagramUrl: "https://www.instagram.com/deaconprocontractor",
  facebookUrl: "#",
  twitterUrl: "#",
  linkedinUrl: "#",
});

await ensureSingleton("footer", "footer", {
  shortDescription: `${companyName} serves JABODETABEK · Bali · Makassar from Mall Of Indonesia.`,
  copyrightText: `© ${new Date().getFullYear()} ${companyName}. All rights reserved.`,
  links: [
    { _key: "footer-home", _type: "object", label: "Home", url: "/" },
    { _key: "footer-about", _type: "object", label: "About Us", url: "/#about" },
    { _key: "footer-contact", _type: "object", label: "Contact", url: "/#contact" },
  ],
});

const services = [
  ["deacon-construction", "Deacon Construction", "Deacon Construction", "General contracting, site coordination, and project control for residential and commercial work."],
  ["deacon-interior", "Deacon Interior", "Deacon Interior", "Interior design and fit-out for homes, offices, retail spaces, and custom furniture needs."],
  ["build-new", "Build New", "Build New", "Planning and construction for new homes, commercial buildings, and hospitality spaces."],
  ["renovation", "Renovation", "Renovation", "Measured renovation work for layout changes, building repairs, and finish upgrades."],
  ["home-maintenance", "Home Maintenance", "Home Maintenance", "Scheduled and responsive maintenance to keep the property safe, functional, and well cared for."],
];

for (const [slug, title, category, shortDescription] of services) {
  await ensureBySlug("service", slug, {
    title,
    slug: { _type: "slug", current: slug },
    category,
    shortDescription,
    description: block(shortDescription, slug),
    order: services.findIndex((item) => item[0] === slug) + 1,
    featured: true,
    showOnWebsite: true,
    published: true,
  });
}

const projects = [
  ["modern-residence-bsd", "Modern Residence BSD", "construction", "BSD, Jabodetabek", "2026", ["Build New", "Design & Build", "Project Management"], "Representative case-study format for a new residence in BSD, covering early planning, budget alignment, site coordination, quality checks, and handover.", true],
  ["commercial-building-kelapa-gading", "Commercial Building Kelapa Gading", "construction", "Kelapa Gading, Jakarta", "2025", ["General Contractor", "Renovation", "Construction Management"], "Representative commercial reference for Kelapa Gading, showing a practical scope for contractor coordination, renovation planning, and controlled site delivery.", true],
  ["villa-renovation-bali", "Villa Renovation Bali", "construction", "Bali", "2025", ["Renovation", "Design & Build", "Quality Control"], "Representative renovation reference for Bali, outlining architectural updates, exterior work, finish coordination, and quality control.", false],
  ["apartment-interior-kelapa-gading", "Apartment Interior Kelapa Gading", "interior", "Kelapa Gading, Jakarta", "2026", ["Residential Interior", "Interior Fit-Out", "Custom Furniture"], "Representative apartment interior reference focused on efficient storage, durable finishes, custom furniture, and comfortable daily use.", true],
  ["office-interior-jakarta", "Office Interior Jakarta", "interior", "Jakarta", "2025", ["Office Interior", "Interior Design", "Interior Fit-Out"], "Representative office fit-out reference for Jakarta, covering workspace planning, material selection, brand application, and execution coordination.", true],
  ["residential-living-room-makassar", "Residential Living Room Makassar", "interior", "Makassar", "2025", ["Residential Interior", "Custom Furniture", "Project Management"], "Representative residential interior reference for Makassar, balancing furniture detail, finish selection, comfort, and everyday function.", false],
];

for (const [slug, title, category, location, year, scope, description, featured] of projects) {
  await ensureBySlug("portfolio", slug, {
    title,
    slug: { _type: "slug", current: slug },
    category,
    location,
    year,
    scope,
    status: "Representative visual",
    description: block(description, slug),
    featured,
    order: projects.findIndex((item) => item[0] === slug) + 1,
    showOnWebsite: true,
    published: true,
    seoTitle: `${title} | Deacon Pro`,
    seoDescription: description,
  });
}

for (const step of [
  [1, "Consultation", "Initial discussion to understand project needs, site condition, budget direction, and expected timeline.", "consultation"],
  [2, "Site Survey", "On-site review to measure, document, and identify technical requirements before proposal.", "survey"],
  [3, "Proposal", "Scope, work plan, material direction, and budget estimation are prepared for approval.", "proposal"],
  [4, "Execution", "Work begins based on approved scope, timeline, coordination, and field supervision.", "execution"],
  [5, "Handover", "Final checking, finishing review, and project handover after agreed works are completed.", "handover"],
]) {
  await ensureProcessStep({ order: step[0], title: step[1], description: step[2], iconLabel: step[3], showOnWebsite: true, published: true });
}

const insights = [
  ["tips-memilih-kontraktor-rumah-di-jakarta", "Tips Memilih Kontraktor Rumah di Jakarta", "Construction", "Cara menilai kontraktor rumah Jakarta dari sisi komunikasi, perencanaan, budgeting, kualitas kerja, dan project management."],
  ["checklist-sebelum-renovasi-rumah", "Checklist Sebelum Renovasi Rumah", "Renovation", "Hal penting yang perlu disiapkan sebelum renovasi rumah, mulai dari kondisi bangunan, prioritas ruang, budget, hingga jadwal kerja."],
  ["perbedaan-design-and-build-dengan-kontraktor-umum", "Perbedaan Design and Build dengan Kontraktor Umum", "Design & Build", "Design and Build menyatukan desain dan pelaksanaan, sementara kontraktor umum biasanya fokus pada eksekusi konstruksi."],
  ["tips-desain-interior-kantor-komersial", "Tips Desain Interior Kantor Komersial", "Interior", "Interior kantor komersial perlu menyeimbangkan produktivitas, identitas brand, sirkulasi, material, dan kebutuhan maintenance."],
];

for (const [slug, title, category, excerpt] of insights) {
  await ensureBySlug("insight", slug, {
    title,
    slug: { _type: "slug", current: slug },
    category,
    excerpt,
    content: block(excerpt, slug),
    readTime: "5 menit baca",
    publishedAt: new Date().toISOString(),
    order: insights.findIndex((item) => item[0] === slug) + 1,
    showOnWebsite: true,
    published: true,
    seoTitle: title,
    seoDescription: excerpt,
  });
}

console.log("Sanity seed selesai.");
console.log(`Dibuat (${summary.created.length}): ${summary.created.join(", ") || "-"}`);
console.log(`Dilewati (${summary.skipped.length}): ${summary.skipped.join(", ") || "-"}`);
