export type CompanyInfo = {
  name: string;
  shortName: string;
  tagline: string;
  shortTagline: string;
  location: string;
  address: string;
  serviceArea: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  whatsappHref: string;
  website: string;
  websiteHref: string;
  googleMapsHref: string;
  socialLinks: { label: string; href: string; handle?: string }[];
  projectFocus: string[];
  heroSubtitle: string;
  aboutSummary: string;
  about: string;
  vision: string;
  missionsIntro: string;
  missions: string[];
  logoUrl?: string;
  logoMarkUrl?: string;
  faviconUrl?: string;
  email?: string;
  googleMapsEmbedUrl?: string;
  latitude?: number;
  longitude?: number;
  whatsappButtonLabel?: string;
  whatsappPrefill?: string;
};

export const whatsappPrefill =
  "Halo DEACON PRO, saya ingin konsultasi kebutuhan konstruksi/renovasi/interior.";

export function createWhatsAppHref(number: string, message = whatsappPrefill) {
  const normalized = number.replace(/\D/g, "").replace(/^0/, "62");
  const recipient = normalized.startsWith("62") ? normalized : `62${normalized}`;

  return `https://wa.me/${recipient.length > 4 ? recipient : "6281299375577"}?text=${encodeURIComponent(message)}`;
}

export const company: CompanyInfo = {
  name: "PT Deacon Pro Konstruksi Indonesia",
  shortName: "Deacon Pro",
  tagline: "Build New · Renovation · Home Maintenance",
  shortTagline: "Build New · Renovation · Maintenance",
  location: "Mall Of Indonesia",
  address:
    "Gading Square, Perkantoran Gading River View Apartemen Santa Monica Bay Lantai 1 Unit K03, Kelapa, Jl. Boulevard Bar. Raya No.18, RT.18/RW.8, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
  serviceArea: "JABODETABEK · Bali · Makassar",
  phone: "021-22459116",
  phoneHref: "tel:02122459116",
  whatsapp: "081299375577",
  whatsappHref: createWhatsAppHref("081299375577"),
  whatsappPrefill,
  website: "deaconpro.co.id",
  websiteHref: "https://deaconpro.co.id",
  googleMapsHref:
    "https://www.google.com/maps/search/Gading%20Square%2C%20Perkantoran%20Gading%20River%20View%20Apartemen%20Santa%20Monica%20Bay%20Lantai%201%20Unit%20K03%2C%20Kelapa%2C%20Jl.%20Boulevard%20Bar.%20Raya%20No.18%2C%20RT.18%2FRW.8%2C%20Klp.%20Gading%20Bar.%2C%20Kec.%20Klp.%20Gading%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014240",
  socialLinks: [
    {
      label: "Instagram",
      handle: "@deaconprocontractor",
      href: "https://www.instagram.com/deaconprocontractor",
    },
    { label: "Facebook", href: "#" },
    { label: "Twitter/X", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  projectFocus: ["Office & Commercial", "Residential"],
  heroSubtitle:
    "A contractor for construction, interior fit-out, renovation, and home maintenance across JABODETABEK, Bali, and Makassar.",
  aboutSummary:
    "PT Deacon Pro Konstruksi Indonesia is a contractor and interior specialist based in Kelapa Gading, Jakarta. We support residential and commercial work across JABODETABEK, Bali, and Makassar through construction, interior fit-out, renovation, maintenance, and hands-on project management.",
  about:
    "PT Deacon Pro Konstruksi Indonesia provides construction, renovation, interior fit-out, and home maintenance services from Kelapa Gading, Jakarta. Each project is planned around the property condition, client priorities, budget, and working schedule. Our team coordinates design, procurement, site execution, and quality checks so decisions remain clear from the first survey through handover.",
  vision:
    "To be a dependable construction and interior partner for every property we handle.",
  missionsIntro:
    "Our working principles are straightforward:",
  missions: [
    "Listen carefully and define the project scope before work begins.",
    "Set a realistic budget, schedule, and site coordination plan.",
    "Maintain clear communication during execution and quality checks.",
    "Complete each project with an accountable handover process.",
  ],
};
