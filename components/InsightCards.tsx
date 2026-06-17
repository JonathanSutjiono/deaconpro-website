import { insights } from "@/data/insights";

export default function InsightCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {insights.map((item) => (
        <article key={item.title} className="border border-neutral-800 bg-neutral-900 p-7">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-champagne">
            {item.meta}
          </p>
          <h3 className="mt-8 text-2xl font-black uppercase leading-tight text-white">
            {item.title}
          </h3>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-white/45">
            Read Insight
          </p>
        </article>
      ))}
    </div>
  );
}
