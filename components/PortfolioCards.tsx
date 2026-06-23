import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import EmptyState from "@/components/EmptyState";

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

export default function PortfolioCards({ items, dark = false }: { items: Item[]; dark?: boolean }) {
  if (!items.length) {
    return (
      <EmptyState
        dark={dark}
        title="Project references are being prepared."
        description="Talk with Deacon Pro about the scope, location, and property requirements for your project."
      />
    );
  }

  const gridClass =
    items.length === 1
      ? "mx-auto max-w-2xl"
      : items.length === 2
        ? "mx-auto grid max-w-[980px] auto-rows-fr gap-6 md:grid-cols-2"
        : items.length === 4
          ? "grid auto-rows-fr gap-6 md:grid-cols-2"
          : "grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3";

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
        const referenceLabel = isSample ? "Representative visual" : isProject ? "Project reference" : "Project category";
        const content = (
          <article className="group relative h-full min-h-[350px] overflow-hidden border border-white/10 bg-neutral-900 shadow-[0_20px_50px_rgba(17,17,17,0.18)] transition duration-500 hover:-translate-y-1 hover:border-gold/70 hover:shadow-gold">
            <Image
              src={imageSrc}
              alt={"imageAlt" in item && item.imageAlt ? item.imageAlt : item.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              style={usesFallbackImage ? { objectPosition: fallbackPositions[index % fallbackPositions.length] } : undefined}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.08)_8%,rgba(7,7,7,0.26)_38%,rgba(7,7,7,0.92)_100%)]" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] font-bold uppercase leading-5 tracking-normal text-champagne">
                <span>{referenceLabel}</span>
                <span className="h-1 w-1 rounded-full bg-champagne" aria-hidden="true" />
                <span>{getCategory(item)}</span>
              </div>
              <h3 className="mt-4 max-w-lg font-display text-3xl font-semibold uppercase leading-[0.95] text-white md:text-[34px]">
                {item.title}
              </h3>
              {meta.length ? (
                <p className="mt-4 text-[15px] font-semibold uppercase leading-5 tracking-normal text-white/82">
                  {meta.join(" · ")}
                </p>
              ) : null}
              {primaryScope ? (
                <p className="mt-2 text-[15px] font-medium leading-6 text-white/80">
                  Scope: {primaryScope}
                </p>
              ) : null}
              {href ? (
                <p className="mt-6 flex items-center gap-2 text-[15px] font-black uppercase leading-5 tracking-normal text-champagne transition group-hover:text-white">
                  {isProject ? "View project" : "View projects"}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </p>
              ) : null}
            </div>
          </article>
        );

        return href ? (
          <Link key={item.title} href={href} className="group block h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/30">
            {content}
          </Link>
        ) : (
          <div key={item.title} className="h-full">{content}</div>
        );
      })}
    </div>
  );
}
