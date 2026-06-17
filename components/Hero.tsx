import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string | string[];
  highlight?: string;
  eyebrow?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function Hero({
  title,
  highlight,
  eyebrow = "Deacon Pro",
  description,
  primaryLabel = "Our Services",
  primaryHref = "/#services",
  secondaryLabel = "View Projects",
  secondaryHref = "/#portfolio",
}: HeroProps) {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <section className="relative min-h-[88vh] overflow-hidden pt-20">
      <Image
        src="/images/hero-architecture.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/62" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/76 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-neutral-950 to-transparent" />

      <div className="container-x relative z-10 flex min-h-[calc(88vh-80px)] items-center py-16">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.42em] text-champagne">
            {eyebrow}
          </p>
          <h1 className="text-[clamp(3.1rem,8.8vw,8.6rem)] font-black uppercase leading-[0.88] tracking-normal text-white">
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
            <p className="mt-8 max-w-2xl text-base font-medium leading-8 text-white/82 md:text-lg">
              {description}
            </p>
          ) : null}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex min-h-12 items-center justify-center bg-gold px-7 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-neutral-950"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex min-h-12 items-center justify-center border border-white/50 px-7 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-champagne hover:text-champagne"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
