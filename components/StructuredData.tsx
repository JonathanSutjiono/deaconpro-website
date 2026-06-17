import { company } from "@/data/company";

export default function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: company.name,
      url: company.websiteHref,
      telephone: company.phone,
      sameAs: company.socialLinks.map((link) => link.href).filter((href) => href !== "#"),
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: company.name,
      url: company.websiteHref,
      telephone: company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address,
        addressLocality: "Jakarta Utara",
        addressRegion: "DKI Jakarta",
        postalCode: "14240",
        addressCountry: "ID",
      },
      areaServed: company.serviceArea,
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
