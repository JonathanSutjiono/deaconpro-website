import Link from "next/link";

const divisions = [
  {
    title: "Deacon Construction",
    href: "/construction",
    label: "Construction",
    description:
      "Integrated project delivery for premium residential, commercial, and hospitality builds.",
  },
  {
    title: "Deacon Interior",
    href: "/interior",
    label: "Interior",
    description:
      "Refined interior environments with tailored fit-out, furniture, and finish execution.",
  },
];

export default function DivisionCards() {
  return (
    <section id="about" className="bg-ivory py-20 text-ink md:py-28">
      <div className="container-x">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.36em] text-gold">
              Our Divisions
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-tight md:text-6xl">
              Built for structure and atmosphere.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-graphite/72">
            Two specialist divisions work as one studio-minded team: disciplined on site,
            exacting in detail, and focused on spaces that last.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {divisions.map((division, index) => (
            <Link
              key={division.href}
              href={division.href}
              className="group relative min-h-80 overflow-hidden border border-ink/12 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-gold md:p-9"
            >
              <div className="absolute right-6 top-6 text-7xl font-black text-ink/[0.04]">
                0{index + 1}
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-gold">
                {division.label}
              </p>
              <h3 className="mt-16 max-w-sm text-3xl font-black uppercase leading-tight md:text-5xl">
                {division.title}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-7 text-graphite/70">
                {division.description}
              </p>
              <span className="mt-10 inline-flex border-b border-gold pb-2 text-xs font-bold uppercase tracking-[0.22em] text-ink transition group-hover:text-gold">
                Discover Division
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
