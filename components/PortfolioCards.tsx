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
    return item.category === "construction" ? "Construction" : item.category === "interior" ? "Interior" : item.category;
  }
  return "Portfolio";
}

export default function PortfolioCards({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const href = getCardHref(item);
        const content = (
          <article className="group relative min-h-[330px] overflow-hidden bg-neutral-950 shadow-xl">
            <Image
              src={"coverImage" in item && item.coverImage ? item.coverImage : "/images/hero-architecture.png"}
              alt={"imageAlt" in item && item.imageAlt ? item.imageAlt : item.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/66 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-7">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-champagne">
                {getCategory(item)}
              </p>
              <h3 className="text-2xl font-black uppercase leading-tight text-white">
                {item.title}
              </h3>
              {"location" in item && item.location ? (
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-white/58">
                  {item.location} · {item.year}
                </p>
              ) : null}
              {item.description ? (
                <p className="mt-3 text-base leading-8 text-white/78 md:text-[18px] md:leading-9">
                  {item.description}
                </p>
              ) : null}
            </div>
          </article>
        );

        return href ? (
          <Link key={item.title} href={href}>
            {content}
          </Link>
        ) : (
          <div key={item.title}>{content}</div>
        );
      })}
    </div>
  );
}
