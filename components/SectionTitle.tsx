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
    <div className="mb-10 max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.36em] text-gold">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-4xl font-black uppercase leading-tight md:text-6xl ${
          light ? "text-white" : "text-neutral-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-sm leading-7 md:text-base ${
            light ? "text-white/70" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
