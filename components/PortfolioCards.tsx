import Image from "next/image";
import Link from "next/link";

export type PortfolioItem = {
  title: string;
  href?: string;
  category?: string;
  description?: string;
};

export default function PortfolioCards({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const content = (
          <article className="group relative min-h-[330px] overflow-hidden bg-neutral-950 shadow-xl">
            <Image
              src="/images/hero-architecture.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/66 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-7">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-champagne">
                {item.category ?? "Portfolio"}
              </p>
              <h3 className="text-2xl font-black uppercase leading-tight text-white">
                {item.title}
              </h3>
              {item.description ? (
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.description}
                </p>
              ) : null}
            </div>
          </article>
        );

        return item.href ? (
          <Link key={item.title} href={item.href}>
            {content}
          </Link>
        ) : (
          <div key={item.title}>{content}</div>
        );
      })}
    </div>
  );
}
