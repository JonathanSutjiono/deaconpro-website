import type { Metadata } from "next";
import { company } from "@/data/company";

export const siteUrl = company.websiteHref;

export const seoKeywords = [
  "kontraktor rumah Jakarta",
  "kontraktor interior Jakarta",
  "jasa renovasi rumah Kelapa Gading",
  "kontraktor bangunan Jabodetabek",
  "jasa home maintenance Jakarta",
  "interior design Kelapa Gading",
  "kontraktor Bali",
  "kontraktor Makassar",
];

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = "/images/hero-architecture.png",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = new URL(path, siteUrl);

  return {
    title,
    description,
    keywords: seoKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
