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
};

export const company: CompanyInfo = {
  name: "PT Deacon Pro Konstruksi Indonesia",
  shortName: "Deacon Pro",
  tagline: "Build New · Renovation · Home Maintenance",
  shortTagline: "Build New · Renovation · Maintenance",
  location: "Mall Of Indonesia",
  address:
    "Gading Square, Perkantoran Gading River View Apartemen Santa Monica Bay Lantai 1 Unit K03, Kelapa, Jl. Boulevard Bar. Raya No.18, RT.18/RW.8, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
  serviceArea: "Jabodetabek · Bali · Makassar",
  phone: "021-22459116",
  phoneHref: "tel:02122459116",
  whatsapp: "081299375577",
  whatsappHref: "https://wa.me/6281299375577",
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
  projectFocus: ["Office & Commercial (1)", "Residential (1)"],
  heroSubtitle:
    "Build New, Renovation, and Home Maintenance services across Jabodetabek, Bali, and Makassar.",
  aboutSummary:
    "PT Deacon Pro Konstruksi Indonesia is a creative-innovative architectural building contractor and interior design furnishings company based in Kelapa Gading, Jakarta. We help clients build, renovate, and maintain properties through disciplined project execution, refined design sensibility, and reliable project management.",
  about:
    "PT Deacon Pro Konstruksi Indonesia is a creative-innovative Architectural Building Contractor and Interior Design Furnishings company in Kelapa Gading Jakarta, Indonesia. We are really passionate about helping others to understand about construction and furnishings through architectural and interior design that appropriate to clients property needs. To make it happens, we are focusing on Exterior and Interior Building Construction. Both of those areas should be covered by Project Management knowledge. We want to convince our valuable clients that their projects will be finished due to on the planned time, within budget and have a good quality control.",
  vision:
    "Be the world's premier building construction and interior design services organization.",
  missionsIntro:
    "Deacon Projects Contractor is built on honesty and integrity - created to provide you with a builder who listens to you and cares about your needs which based on our missions:",
  missions: [
    "We are committed achieving extraordinary results for our stakeholders towards global sustainability, safety, quality excellence and value creation.",
    "We establish partnerships with strategic players.",
    "We deliver projects by delivering clients' satisfaction.",
    "We are a progressive organization that fosters a people-excellence culture based on merit and equal opportunity.",
  ],
};
