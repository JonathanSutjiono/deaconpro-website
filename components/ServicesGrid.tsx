type ServicesGridProps = {
  eyebrow?: string;
  title?: string;
  services: string[];
  dark?: boolean;
};

export default function ServicesGrid({
  eyebrow = "Services",
  title = "Precision across every phase.",
  services,
  dark = true,
}: ServicesGridProps) {
  return (
    <section
      id="services"
      className={dark ? "bg-ink py-20 text-white md:py-28" : "bg-ivory py-20 text-ink md:py-28"}
    >
      <div className="container-x">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-champagne">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
            {title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service}
              className={
                dark
                  ? "min-h-44 border border-white/10 bg-white/[0.035] p-6 transition hover:border-champagne/70 hover:bg-white/[0.06]"
                  : "min-h-44 border border-ink/12 bg-white p-6 transition hover:border-gold/70"
              }
            >
              <p className="text-xs font-black uppercase tracking-[0.26em] text-champagne">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-10 text-2xl font-extrabold uppercase leading-tight">
                {service}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
