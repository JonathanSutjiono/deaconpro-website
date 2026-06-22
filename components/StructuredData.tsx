import { company, type CompanyInfo } from "@/data/company";

export default function StructuredData({ companyInfo = company }: { companyInfo?: CompanyInfo }) {
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
      "@type": "LocalBusiness",
      name: companyInfo.name,
      url: companyInfo.websiteHref,
      telephone: companyInfo.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: companyInfo.address,
        addressLocality: "Jakarta Utara",
        addressRegion: "DKI Jakarta",
        postalCode: "14240",
        addressCountry: "ID",
      },
      areaServed: companyInfo.serviceArea,
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
