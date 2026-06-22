import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { company, type CompanyInfo } from "@/data/company";
import type { ContactContent } from "@/sanity/lib/types";

export default function ContactCTA({
  companyInfo = company,
  contact,
  heading,
  description,
}: {
  companyInfo?: CompanyInfo;
  contact?: ContactContent;
  heading?: string;
  description?: string;
}) {
  const instagram = companyInfo.socialLinks.find((item) => item.label === "Instagram");
  const phone = contact?.phone ?? companyInfo.phone;
  const phoneLink = contact?.phoneHref ?? companyInfo.phoneHref;
  const whatsapp = contact?.whatsappNumber ?? companyInfo.whatsapp;
  const whatsappLink = contact?.whatsappHref ?? companyInfo.whatsappHref;
  const address = contact?.address ?? companyInfo.address;
  const mapsLink = contact?.googleMapsUrl ?? companyInfo.googleMapsHref;

  return (
    <section id="contact" className="bg-white py-20 text-neutral-950 md:py-28">
      <div className="container-x bg-neutral-950 p-8 text-white shadow-2xl md:p-14">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.36em] text-champagne">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-tight md:text-6xl">
              {heading ?? contact?.heading ?? "Ready to build, renovate, or maintain your property?"}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-[18px] md:leading-9">
              {description ?? contact?.description ?? `Talk with ${companyInfo.name} about ${companyInfo.tagline} services across ${companyInfo.serviceArea}.`}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/72 md:text-[18px] md:leading-9">
              {companyInfo.location}: {address}
            </p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 border border-white/20 px-5 text-xs font-black uppercase tracking-widest text-white transition hover:border-champagne hover:text-champagne"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Open in Google Maps
            </a>
            <div className="mt-5 flex flex-col gap-3 text-base font-semibold text-white/82 sm:flex-row sm:gap-6 md:text-[18px]">
              <a href={phoneLink} className="inline-flex items-center gap-2 transition hover:text-champagne">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Phone: {phone}
              </a>
              <a
                href={whatsappLink}
                className="inline-flex items-center gap-2 transition hover:text-champagne"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                WhatsApp: {whatsapp}
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
              {contact?.email ? (
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-champagne"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  {contact.email}
                </a>
              ) : null}
            </div>
          </div>
          <Link
            href={whatsappLink}
            className="inline-flex min-h-12 items-center justify-center bg-gold px-7 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-neutral-950"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2 h-5 w-5" aria-hidden="true" />
            {contact?.whatsappButtonLabel ?? companyInfo.whatsappButtonLabel ?? "WhatsApp"}
          </Link>
        </div>
      </div>
    </section>
  );
}
