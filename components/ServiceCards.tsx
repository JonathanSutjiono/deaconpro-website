import Image from "next/image";
import Link from "next/link";
import { homepageServices } from "@/data/services";

export default function ServiceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {homepageServices.map((service) => {
        const card = (
          <article className="group relative min-h-[340px] overflow-hidden bg-neutral-950 shadow-xl">
          <Image
            src="/images/hero-architecture.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/66 to-black/20" />
          <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-champagne">
              {service.label}
            </p>
            <h3 className="text-3xl font-black uppercase leading-tight text-white md:text-4xl">
              {service.title}
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">
              {service.description}
            </p>
          </div>
          </article>
        );

        return service.href ? (
          <Link key={service.title} href={service.href}>
            {card}
          </Link>
        ) : (
          <div key={service.title}>{card}</div>
        );
      })}
    </div>
  );
}
