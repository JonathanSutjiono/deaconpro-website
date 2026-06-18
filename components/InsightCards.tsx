import { insights } from "@/data/insights";
import Image from "next/image";
import Link from "next/link";

export default function InsightCards({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? insights.slice(0, limit) : insights;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <Link key={item.slug} href={`/insight/${item.slug}`} className="group block border border-neutral-800 bg-neutral-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/30">
          <article className="flex h-full flex-col">
            <div className="relative h-52 overflow-hidden">
              <Image
                src={item.coverImage}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/45" />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-champagne">
                {item.category}
              </p>
              <h3 className="mt-6 text-2xl font-black uppercase leading-tight text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-white/76 md:text-[18px] md:leading-9">
                {item.excerpt}
              </p>
              <p className="mt-auto pt-6 text-sm font-bold uppercase tracking-[0.18em] text-white/45">
                Read Insight
              </p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
