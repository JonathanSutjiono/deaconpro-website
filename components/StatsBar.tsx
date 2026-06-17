const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "80+", label: "Happy Clients" },
  { value: "50+", label: "Professional Team" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-white/10 bg-coal py-8">
      <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-l border-champagne/50 pl-5">
            <p className="text-4xl font-black text-champagne md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/68">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
