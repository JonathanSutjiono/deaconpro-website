import Link from "next/link";
import { Building2, Hammer, Paintbrush, ShieldCheck, Wrench } from "lucide-react";
import { homepageServices, type ServiceItem } from "@/data/services";

const icons = {
  building: Building2,
  interior: Paintbrush,
  build: Hammer,
  renovation: Wrench,
  maintenance: ShieldCheck,
};

export default function ServiceCards({ services = homepageServices }: { services?: ServiceItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = icons[service.icon];

        return (
          <Link key={service.title} href={service.href} className="group block focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/30">
            <article className="flex min-h-[330px] flex-col border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-gold md:p-8">
              <div className="grid h-14 w-14 place-items-center bg-neutral-950 text-champagne transition group-hover:bg-gold group-hover:text-white">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="mt-9 text-xs font-black uppercase tracking-[0.28em] text-gold">
                {service.label}
              </p>
              <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-neutral-950">
                {service.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-neutral-700 md:text-[18px] md:leading-9">
                {service.description}
              </p>
              <p className="mt-auto pt-7 text-sm font-black uppercase tracking-widest text-neutral-950 transition group-hover:text-gold">
                {service.cta}
              </p>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
