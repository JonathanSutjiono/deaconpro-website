import Link from "next/link";
import { company } from "@/data/company";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-white py-20 text-neutral-950 md:py-28">
      <div className="container-x bg-neutral-950 p-8 text-white shadow-2xl md:p-14">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.36em] text-champagne">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-tight md:text-6xl">
              Ready to build, renovate, or maintain your property?
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">
              Talk with {company.name} about {company.tagline} services across{" "}
              {company.serviceArea}.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm font-semibold text-white/75 sm:flex-row sm:gap-6">
              <a href={company.phoneHref} className="transition hover:text-champagne">
                Phone: {company.phone}
              </a>
              <a
                href={company.whatsappHref}
                className="transition hover:text-champagne"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: {company.whatsapp}
              </a>
            </div>
          </div>
          <Link
            href={company.whatsappHref}
            className="inline-flex min-h-12 items-center justify-center bg-gold px-7 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-neutral-950"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
