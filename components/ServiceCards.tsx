import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Deacon Construction",
    href: "/construction",
    description:
      "General contractor, design build, project management, renovation, and construction management services.",
  },
  {
    title: "Deacon Interior",
    href: "/interior",
    description:
      "Interior design, fit-out, office interiors, residential interiors, and custom furniture execution.",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          className="group relative min-h-[360px] overflow-hidden bg-neutral-950 shadow-xl"
        >
          <Image
            src="/images/hero-architecture.png"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/66 to-black/20" />
          <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-champagne">
              Services
            </p>
            <h3 className="text-3xl font-black uppercase leading-tight text-white md:text-5xl">
              {service.title}
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">
              {service.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
