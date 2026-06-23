import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { company, type CompanyInfo } from "@/data/company";
import type { ContactContent } from "@/sanity/lib/types";
import ContactMapLoader from "@/components/ContactMapLoader";

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
  const mapLatitude = contact?.mapLatitude ?? contact?.latitude ?? -6.1499;
  const mapLongitude = contact?.mapLongitude ?? contact?.longitude ?? 106.8916;
  const mapZoom = Math.min(18, Math.max(12, contact?.mapZoom ?? 15));
  const showMap = contact?.showInteractiveMap ?? true;
  const hasMapCoordinates = Number.isFinite(mapLatitude) && Number.isFinite(mapLongitude);
  const markerLabel = contact?.mapMarkerLabel ?? companyInfo.name;

  return (
    <section id="contact" className="section-space bg-white text-neutral-950">
      <div className="container-x relative overflow-hidden bg-neutral-950 p-8 text-white shadow-[0_28px_70px_rgba(7,7,7,0.2)] md:p-14">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 bg-[radial-gradient(circle,rgba(214,178,94,0.16),transparent_68%)]" aria-hidden="true" />
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-champagne" aria-hidden="true" />
              <p className="text-[14px] font-bold uppercase leading-5 tracking-normal text-champagne">
              Contact
              </p>
            </div>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold uppercase leading-[0.96] sm:text-5xl md:text-6xl">
              {heading ?? contact?.heading ?? "Ready to build, renovate, or maintain your property?"}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-[18px] md:leading-9">
              {description ?? contact?.description ?? `Talk with ${companyInfo.name} about ${companyInfo.tagline} services across ${companyInfo.serviceArea}.`}
            </p>
            <p className="mt-5 text-[14px] font-black uppercase leading-5 tracking-normal text-champagne">
              Service area · {contact?.areaCoverage ?? companyInfo.serviceArea}
            </p>
            <div className="mt-4 flex max-w-3xl items-start gap-3 text-base leading-8 text-white/72 md:text-[18px] md:leading-9">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-champagne" aria-hidden="true" />
              <p>{companyInfo.location}: {address}</p>
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary mt-5 border-white/25 px-5 text-white hover:border-champagne hover:text-champagne"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Open in Google Maps
            </a>
            <div className="mt-6 flex flex-col gap-3 text-base font-semibold text-white/82 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3 md:text-[18px]">
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
          <div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-[14px] font-bold uppercase leading-5 tracking-normal text-champagne">Start a conversation</p>
            <p className="mt-4 font-display text-3xl font-semibold uppercase leading-tight text-white">
              Send your location and scope.
            </p>
            <p className="mt-4 text-base leading-7 text-white/72">
              Our team will guide the next practical step, from survey through delivery.
            </p>
            <Link
              href={whatsappLink}
              className="button-primary mt-7 w-full px-5 hover:bg-white hover:text-neutral-950"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              {contact?.whatsappButtonLabel ?? companyInfo.whatsappButtonLabel ?? "WhatsApp"}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        {showMap && hasMapCoordinates ? (
          <div className="relative mt-8 grid gap-6 border-t border-white/15 pt-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.45fr)] lg:items-end">
            <div className="overflow-hidden border border-white/20 bg-[#0b0b0b] p-1.5 shadow-[0_16px_34px_rgba(0,0,0,0.2)]">
              <ContactMapLoader
                latitude={mapLatitude}
                longitude={mapLongitude}
                zoom={mapZoom}
                markerLabel={markerLabel}
              />
            </div>
            <div className="pb-1 lg:pl-2">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-champagne" aria-hidden="true" />
                <p className="text-[14px] font-bold uppercase leading-5 tracking-normal text-champagne">Office location</p>
              </div>
              <p className="mt-4 font-display text-3xl font-semibold uppercase leading-[0.96] text-white">
                {companyInfo.location}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
