import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

type HeroProps = {
  title: string | string[];
  highlight?: string;
  eyebrow?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  tertiaryLabel?: string;
  tertiaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function Hero({
  title,
  highlight,
  eyebrow = company.shortName,
  description,
  primaryLabel = "Our Services",
  primaryHref = "/#services",
  secondaryLabel = "View Projects",
  secondaryHref = "/#portfolio",
  tertiaryLabel,
  tertiaryHref,
  imageSrc = "/images/hero-architecture.png",
  imageAlt = "",
}: HeroProps) {
  const lines = Array.isArray(title) ? title : [title];
  const primaryExternal = primaryHref.startsWith("http");
  const secondaryExternal = secondaryHref.startsWith("http");
  const tertiaryExternal = tertiaryHref?.startsWith("http") ?? false;

  return (
    <section className="relative min-h-[86vh] overflow-hidden pt-20 md:min-h-[88vh]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/62" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/76 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-neutral-950 to-transparent" />

      <div className="container-x relative z-10 flex min-h-[calc(86vh-80px)] items-center py-14 md:min-h-[calc(88vh-80px)] md:py-16">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-champagne sm:tracking-[0.42em] md:mb-6">
            {eyebrow}
          </p>
          <h1 className="text-[clamp(2.75rem,10vw,7.75rem)] font-black uppercase leading-[0.92] tracking-normal text-white sm:leading-[0.9]">
            {lines.map((line) => (
              <span
                key={line}
                className={highlight && line.includes(highlight) ? "block text-champagne" : "block"}
              >
                {line}
              </span>
            ))}
          </h1>
          {description ? (
            <p className="mt-7 max-w-xl text-base font-medium leading-8 text-white/82 md:text-lg">
              {description}
            </p>
          ) : null}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={primaryHref}
              className="inline-flex min-h-12 items-center justify-center bg-gold px-7 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-neutral-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/30 sm:tracking-[0.18em]"
              target={primaryExternal ? "_blank" : undefined}
              rel={primaryExternal ? "noopener noreferrer" : undefined}
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex min-h-12 items-center justify-center border border-white/50 px-7 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-champagne hover:text-champagne focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20 sm:tracking-[0.18em]"
              target={secondaryExternal ? "_blank" : undefined}
              rel={secondaryExternal ? "noopener noreferrer" : undefined}
            >
              {secondaryLabel}
            </Link>
            {tertiaryLabel && tertiaryHref ? (
              <Link
                href={tertiaryHref}
                className="inline-flex min-h-12 items-center justify-center border border-champagne/70 bg-black/20 px-7 text-sm font-black uppercase tracking-[0.14em] text-champagne transition hover:bg-champagne hover:text-neutral-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/30 sm:tracking-[0.18em]"
                target={tertiaryExternal ? "_blank" : undefined}
                rel={tertiaryExternal ? "noopener noreferrer" : undefined}
              >
                {tertiaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
