type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-3xl md:mb-12">
      <p className="text-xs font-black uppercase tracking-[0.36em] text-gold">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-neutral-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 md:text-lg ${
            light ? "text-white/70" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
