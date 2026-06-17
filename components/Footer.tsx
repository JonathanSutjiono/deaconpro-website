import Link from "next/link";
import { company } from "@/data/company";
import { portfolioNavigation } from "@/data/portfolio";
import { serviceNavigation } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-12 text-white">
      <div className="container-x grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-lg font-black uppercase tracking-[0.28em]">
            {company.shortName.split(" ")[0]}{" "}
            <span className="text-champagne">{company.shortName.split(" ")[1]}</span>
          </p>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
            {company.name} provides {company.tagline} services across{" "}
            {company.serviceArea}.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm text-white/70">
            <a href={company.phoneHref} className="transition hover:text-champagne">
              {company.phone}
            </a>
            <a
              href={company.whatsappHref}
              className="transition hover:text-champagne"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {company.whatsapp}
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-champagne">
            Services
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/68">
            {serviceNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-champagne">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-champagne">
            Portfolio
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/68">
            {portfolioNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-champagne">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container-x mt-10 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/42">
        © 2026 {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
