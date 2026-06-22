import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StructuredData from "@/components/StructuredData";
import { createPageMetadata, siteUrl } from "@/data/seo";
import { getCompanyInfo, getSiteSettings } from "@/sanity/lib/fetch";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
      <body className={`${montserrat.variable} bg-ink text-white antialiased`}>
        <StructuredData companyInfo={companyInfo} />
        {children}
        <FloatingWhatsApp companyInfo={companyInfo} />
      </body>
    </html>
  );
}
