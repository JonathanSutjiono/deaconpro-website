import { ArrowUpRight, ClipboardCheck, HardHat, Palette, Wrench } from "lucide-react";
import Link from "next/link";
import EmptyState from "@/components/EmptyState";
import { company } from "@/data/company";

const serviceCopy: Record<string, string> = {
  "Design & Build": "One coordinated path from early planning and costing through construction delivery.",
  "General Contractor": "Site execution, trade coordination, material planning, and practical quality control.",
  "Project Management": "Clear programme, budget direction, procurement coordination, and site reporting.",
  Renovation: "Measured upgrades for layouts, building repairs, finishes, and systems that need attention.",
  "Construction Management": "Structured supervision for projects that need careful control across the build phase.",
  "Interior Design": "Spatial planning, material direction, and detailing built around daily use.",
  "Interior Fit-Out": "Coordinated fit-out for residences, workplaces, and commercial environments.",
  "Office Interior": "Workplace layouts, finishes, and practical details that support the way teams operate.",
  "Residential Interior": "Comfortable, durable residential interiors tailored to the property and its occupants.",
  "Custom Furniture": "Furniture and joinery details integrated with the wider interior plan.",
};

const iconByIndex = [HardHat, ClipboardCheck, Wrench, Palette];

export default function ServiceList({
  services,
  whatsappHref = company.whatsappHref,
}: {
  services: string[];
  whatsappHref?: string;
}) {
  if (!services.length) {
    return (
      <EmptyState
        title="Service information is being prepared."
        description="Please contact Deacon Pro to discuss the scope you have in mind."
      />
    );
  }

  return (
    <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = iconByIndex[index % iconByIndex.length];

        return (
          <article
            key={service}
            className="group surface-card relative flex h-full min-h-[270px] flex-col overflow-hidden p-7 hover:-translate-y-1 hover:border-gold hover:shadow-gold md:p-8"
          >
            <span className="absolute right-6 top-4 font-display text-7xl leading-none text-neutral-950/[0.045]" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center justify-between gap-4">
              <span className="grid h-12 w-12 place-items-center border border-gold/30 bg-gold/5 text-gold transition group-hover:bg-gold group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="eyebrow">Service</span>
            </div>
            <h3 className="mt-8 max-w-sm font-display text-3xl font-semibold uppercase leading-[0.98] text-neutral-950">
              {service}
            </h3>
            <p className="mt-4 max-w-md text-base leading-8 text-neutral-600">
              {serviceCopy[service] ?? "Practical project support with clear coordination, documented scope, and accountable delivery."}
            </p>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex w-fit items-center gap-2 pt-6 text-[15px] font-black uppercase leading-5 tracking-normal text-neutral-950 transition hover:text-gold focus:outline-none focus-visible:text-gold"
            >
              Discuss this service
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
