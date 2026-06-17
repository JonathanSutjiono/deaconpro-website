import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string | string[];
  eyebrow?: string;
  description?: string;
  imageSrc?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function Hero({
  title,
  eyebrow = "Deacon Pro",
  description = "Luxury construction and interior solutions shaped with precision, restraint, and enduring material quality.",
  imageSrc = "/images/hero-architecture.png",
  primaryHref = "/#services",
  primaryLabel = "Explore Services",
  secondaryHref = "/#projects",
  secondaryLabel = "View Projects",
}: HeroProps) {
  const titleLines = Array.isArray(title) ? title : [title];

  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-20">
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/65" />

      <div className="container-x relative z-10 flex min-h-[calc(92vh-80px)] items-center py-16">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.42em] text-champagne">
            {eyebrow}
          </p>
          <h1 className="text-[clamp(3rem,8vw,7.8rem)] font-black uppercase leading-[0.86] tracking-normal text-white">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <div className="mt-8 h-px w-72 max-w-full gold-line" />
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
            {description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex min-h-12 items-center justify-center border border-champagne bg-champagne px-6 text-sm font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-white"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex min-h-12 items-center justify-center border border-white/28 px-6 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-champagne hover:text-champagne"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
