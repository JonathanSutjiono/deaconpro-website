import type { Metadata } from "next";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StructuredData from "@/components/StructuredData";
import { createPageMetadata, siteUrl } from "@/data/seo";
import { getCompanyInfo, getSiteSettings } from "@/sanity/lib/fetch";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    metadataBase: new URL(siteUrl),
    ...createPageMetadata({
      title: settings.defaultSeoTitle,
      description: settings.defaultSeoDescription,
      image: settings.defaultOgImage,
    }),
    icons: settings.faviconUrl ? { icon: settings.faviconUrl } : undefined,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const companyInfo = await getCompanyInfo();

  return (
    <html lang="en">
      <body className="bg-ink text-white antialiased">
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[1300] bg-white px-5 py-3 text-sm font-black uppercase tracking-normal text-neutral-950 shadow-surface focus:not-sr-only"
        >
          Skip to main content
        </a>
        <StructuredData companyInfo={companyInfo} />
        {children}
        <FloatingWhatsApp companyInfo={companyInfo} />
      </body>
    </html>
  );
}
