import type { Metadata } from "next";
import { company } from "@/data/company";

export const siteUrl = "https://deaconpro-website.vercel.app";

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
  noIndex = false,
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}): Metadata {
  const url = new URL(path, siteUrl);

  return {
    title,
    description,
    keywords: seoKeywords,
    alternates: {
      canonical: url,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "id_ID",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
