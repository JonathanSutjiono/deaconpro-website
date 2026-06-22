import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export type PortfolioItem = {
  title: string;
  href?: string;
  category?: string;
  location?: string;
  year?: string;
  description?: string;
  coverImage?: string;
  imageAlt?: string;
  slug?: string;
};

type Item = PortfolioItem | Project;

function getCardHref(item: Item) {
  if ("href" in item && item.href) return item.href;
  if ("slug" in item && item.slug) return `/portfolio/${item.slug}`;
  return undefined;
}

function getCategory(item: Item) {
  if ("category" in item && item.category) {
    if (item.category === "construction") return "Construction";
    if (item.category === "interior") return "Interior";
    if (item.category === "office-commercial") return "Office & Commercial";
    if (item.category === "residential") return "Residential";
    return item.category;
  }
  return "Portfolio";
}

export default function PortfolioCards({ items }: { items: Item[] }) {
  const gridClass =
    items.length === 2
      ? "grid gap-6 md:grid-cols-2"
      : "grid gap-6 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={gridClass}>
      {items.map((item, index) => {
        const href = getCardHref(item);
        const isProject = "slug" in item && Boolean(item.slug);
        const isSample = "isSample" in item && Boolean(item.isSample);
        const imageSrc =
          "coverImage" in item && item.coverImage
            ? item.coverImage
            : "/images/hero-architecture.png";
        const usesFallbackImage = imageSrc === "/images/hero-architecture.png";
        const fallbackPositions = ["50% 50%", "50% 34%", "68% 50%", "32% 50%"];
        const meta = [
          "location" in item ? item.location : undefined,
          "year" in item ? item.year : undefined,
        ].filter(Boolean);
        const primaryScope =
          "scopeOfWork" in item && item.scopeOfWork.length
            ? item.scopeOfWork[0]
            : undefined;
        const categoryLabel = isSample
          ? `Representative Visual · ${getCategory(item)}`
          : isProject
            ? getCategory(item)
            : `Project Category · ${getCategory(item)}`;
        const content = (
          <article className="group relative min-h-[330px] overflow-hidden border border-neutral-200/20 bg-neutral-900 shadow-xl">
            <Image
              src={imageSrc}
              alt={"imageAlt" in item && item.imageAlt ? item.imageAlt : item.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              style={usesFallbackImage ? { objectPosition: fallbackPositions[index % fallbackPositions.length] } : undefined}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-champagne">
                {categoryLabel}
              </p>
              <h3 className="max-w-lg text-2xl font-black uppercase leading-tight text-white md:text-[26px]">
                {item.title}
              </h3>
              {meta.length ? (
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-white/75">
                  {meta.join(" · ")}
                </p>
              ) : null}
              {primaryScope ? (
                <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-champagne">
                  Scope: {primaryScope}
                </p>
              ) : null}
              {href ? (
                <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-champagne transition group-hover:text-white">
                  {isProject ? "View Project" : "View Projects"}
                </p>
              ) : null}
            </div>
          </article>
        );

        return href ? (
          <Link key={item.title} href={href} className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/30">
            {content}
          </Link>
        ) : (
          <div key={item.title}>{content}</div>
        );
      })}
    </div>
  );
}
