import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { company } from "@/data/company";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${company.name} | ${company.tagline}`,
  description: `${company.name} provides ${company.tagline} services across ${company.serviceArea}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-ink text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
