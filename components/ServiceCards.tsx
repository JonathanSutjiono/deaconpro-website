import Link from "next/link";
import { ArrowUpRight, Building2, Hammer, Paintbrush, ShieldCheck, Wrench } from "lucide-react";
import { homepageServices, type ServiceItem } from "@/data/services";
import EmptyState from "@/components/EmptyState";

const icons = {
  building: Building2,
  interior: Paintbrush,
  build: Hammer,
  renovation: Wrench,
  maintenance: ShieldCheck,
};

export default function ServiceCards({ services = homepageServices }: { services?: ServiceItem[] }) {
  if (!services.length) {
    return (
      <EmptyState
        title="Service information is being prepared."
        description="Contact Deacon Pro to discuss construction, interior, renovation, or property care requirements."
      />
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = icons[service.icon];

        return (
          <Link key={service.title} href={service.href} className="group block focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/30">
            <article className="surface-card flex min-h-[320px] flex-col p-7 hover:-translate-y-1 hover:border-gold hover:shadow-gold md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center bg-neutral-950 text-champagne transition group-hover:bg-gold group-hover:text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <span className="font-display text-5xl leading-none text-neutral-950/[0.06]" aria-hidden="true">
                  {String(services.indexOf(service) + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-8 eyebrow">
                {service.label}
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold uppercase leading-[0.98] text-neutral-950 md:text-4xl">
                {service.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-neutral-700 md:text-[18px] md:leading-9">
                {service.description}
              </p>
              <p className="mt-auto flex items-center gap-2 pt-7 text-[15px] font-black uppercase leading-5 tracking-normal text-neutral-950 transition group-hover:text-gold">
                {service.cta}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </p>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
