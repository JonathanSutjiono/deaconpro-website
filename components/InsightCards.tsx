import { insights, type Insight } from "@/data/insights";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EmptyState from "@/components/EmptyState";

export default function InsightCards({ limit, insights: source = insights }: { limit?: number; insights?: Insight[] }) {
  const items = typeof limit === "number" ? source.slice(0, limit) : source;

  if (!items.length) {
    return (
      <EmptyState
        dark
        title="New project notes are being prepared."
        description="For a practical discussion about construction, renovation, interior, or property care, contact Deacon Pro directly."
      />
    );
  }

  const gridClass = items.length === 1 ? "max-w-xl" : items.length === 2 ? "grid gap-6 md:grid-cols-2" : "grid gap-6 md:grid-cols-3";

  return (
    <div className={gridClass}>
      {items.map((item, index) => (
        <Link key={item.slug} href={`/insight/${item.slug}`} className="group block border border-neutral-800 bg-neutral-900 transition duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-gold focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/30">
          <article className="flex h-full flex-col">
            <div className="relative h-52 overflow-hidden">
              <Image
                src={item.coverImage}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                style={item.coverImage === "/images/hero-architecture.png" ? { objectPosition: ["50% 48%", "64% 50%", "36% 50%"][index % 3] } : undefined}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.08),rgba(7,7,7,0.6))]" />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="eyebrow text-champagne">
                {item.category}
              </p>
              <h3 className="mt-5 font-display text-3xl font-semibold uppercase leading-[0.96] text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-white/76 md:text-[18px] md:leading-9">
                {item.excerpt}
              </p>
              <p className="mt-auto flex items-center gap-2 pt-7 text-[15px] font-black uppercase leading-5 tracking-normal text-champagne transition group-hover:text-white">
                Read insight
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
