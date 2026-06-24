import { company, type CompanyInfo } from "@/data/company";
import JsonLd from "@/components/JsonLd";

export default function StructuredData({ companyInfo = company }: { companyInfo?: CompanyInfo }) {
  const serviceAreas = companyInfo.serviceArea.split("·").map((area) => area.trim()).filter(Boolean);
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: companyInfo.name,
      url: companyInfo.websiteHref,
      telephone: companyInfo.phone,
      sameAs: companyInfo.socialLinks.map((link) => link.href).filter((href) => href !== "#"),
    },
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      name: companyInfo.name,
      url: companyInfo.websiteHref,
      telephone: companyInfo.phone,
      image: companyInfo.logoUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: companyInfo.address,
        addressLocality: "Jakarta Utara",
        addressRegion: "DKI Jakarta",
        postalCode: "14240",
        addressCountry: "ID",
      },
      areaServed: serviceAreas.map((name) => ({ "@type": "AdministrativeArea", name })),
      hasMap: companyInfo.googleMapsHref,
    },
  ];

  return <JsonLd data={data} />;
}
