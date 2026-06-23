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
    <section className="relative min-h-[85svh] overflow-hidden pt-[76px] md:min-h-[88vh]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-black/48" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.94)_0%,rgba(7,7,7,0.78)_44%,rgba(7,7,7,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(214,178,94,0.14),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950/95 to-transparent" />

      <div className="container-x relative z-10 flex min-h-[calc(85svh-76px)] items-center py-16 md:min-h-[calc(88vh-76px)] md:py-20">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-champagne" aria-hidden="true" />
            <p className="text-[13px] font-bold uppercase leading-5 tracking-normal text-champagne">
            {eyebrow}
            </p>
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.85rem,9vw,8rem)] font-semibold uppercase leading-[0.84] text-white sm:leading-[0.82]">
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
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 md:text-lg md:leading-9">
              {description}
            </p>
          ) : null}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={primaryHref}
              className="button-primary border border-gold px-7 hover:border-white hover:bg-white hover:text-neutral-950"
              target={primaryExternal ? "_blank" : undefined}
              rel={primaryExternal ? "noopener noreferrer" : undefined}
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="button-secondary border-white/55 px-7 text-white hover:border-champagne hover:bg-white/10 hover:text-champagne focus-visible:ring-white/20"
              target={secondaryExternal ? "_blank" : undefined}
              rel={secondaryExternal ? "noopener noreferrer" : undefined}
            >
              {secondaryLabel}
            </Link>
            {tertiaryLabel && tertiaryHref ? (
              <Link
                href={tertiaryHref}
                className="button-secondary border-champagne/70 bg-black/20 px-7 text-champagne hover:bg-champagne hover:text-neutral-950"
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
