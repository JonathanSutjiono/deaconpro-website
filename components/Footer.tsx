import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { company, type CompanyInfo } from "@/data/company";
import { portfolioNavigation } from "@/data/portfolio";
import { serviceNavigation } from "@/data/services";
import type { FooterContent } from "@/sanity/lib/types";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Insight", href: "/insight" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer({
  companyInfo = company,
  footerContent,
}: {
  companyInfo?: CompanyInfo;
  footerContent?: FooterContent;
}) {
  const instagram = companyInfo.socialLinks.find((item) => item.label === "Instagram");
  const footerLinks = footerContent?.links.length ? footerContent.links : quickLinks;

  return (
    <footer className="bg-neutral-950 py-14 text-white">
      <div className="container-x grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_0.85fr_1fr]">
        <div>
          <p className="text-lg font-black uppercase tracking-[0.28em]">
            {companyInfo.shortName.split(" ")[0]}{" "}
            <span className="text-champagne">{companyInfo.shortName.split(" ").slice(1).join(" ")}</span>
          </p>
          <p className="mt-4 max-w-md text-base leading-8 text-white/72">
            {companyInfo.tagline}
          </p>
          <p className="mt-3 max-w-md text-base leading-8 text-white/58">
            {footerContent?.shortDescription ?? `${companyInfo.name} serves ${companyInfo.serviceArea} from ${companyInfo.location}.`}
          </p>
          <Link
            href={companyInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 bg-gold px-6 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-neutral-950"
          >
            <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
            Chat WhatsApp
          </Link>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-champagne">
            Quick Links
          </p>
          <div className="mt-5 flex flex-col gap-3 text-base text-white/72">
            {footerLinks.map((item) => {
              const href = "href" in item ? item.href : item.url;
              const external = href.startsWith("http");
              return (
                <Link
                  key={`${item.label}-${href}`}
                  href={href}
                  className="transition hover:text-champagne"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-champagne">
            Services
          </p>
          <div className="mt-5 flex flex-col gap-3 text-base text-white/72">
            {serviceNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-champagne">
                {item.label}
              </Link>
            ))}
            {portfolioNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-champagne">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-champagne">
            Contact
          </p>
          <div className="mt-5 flex flex-col gap-3 text-base text-white/72">
            <a href={companyInfo.phoneHref} className="inline-flex items-center gap-2 transition hover:text-champagne">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {companyInfo.phone}
            </a>
            <a
              href={companyInfo.whatsappHref}
              className="inline-flex items-center gap-2 transition hover:text-champagne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              {companyInfo.whatsapp}
            </a>
            <a
              href={companyInfo.websiteHref}
              className="inline-flex items-center gap-2 transition hover:text-champagne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-5 w-5" aria-hidden="true" />
              {companyInfo.website}
            </a>
            {instagram ? (
              <a
                href={instagram.href}
                className="inline-flex items-center gap-2 transition hover:text-champagne"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-5 w-5" aria-hidden="true" />
                {instagram.handle}
              </a>
            ) : null}
            {companyInfo.email ? (
              <a
                href={`mailto:${companyInfo.email}`}
                className="inline-flex items-center gap-2 transition hover:text-champagne"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                {companyInfo.email}
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <div className="container-x mt-10 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/42">
        {footerContent?.copyrightText ?? `© ${new Date().getFullYear()} ${companyInfo.name}. All rights reserved.`}
      </div>
    </footer>
  );
}
