import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StructuredData from "@/components/StructuredData";
import { company } from "@/data/company";
import { createPageMetadata, siteUrl } from "@/data/seo";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...createPageMetadata({
    title: `${company.name} | ${company.tagline}`,
    description: `${company.name} provides ${company.tagline} services across ${company.serviceArea}.`,
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-ink text-white antialiased`}>
        <StructuredData />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
