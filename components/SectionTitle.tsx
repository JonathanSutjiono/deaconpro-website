type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={className ?? "mb-10 max-w-4xl md:mb-14"}>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gold" aria-hidden="true" />
        <p className={light ? "eyebrow text-champagne" : "eyebrow"}>
          {eyebrow}
        </p>
      </div>
      <h2
        className={`mt-5 font-display text-4xl font-semibold uppercase leading-[0.96] sm:text-5xl md:text-6xl ${
          light ? "text-white" : "text-neutral-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 md:text-lg md:leading-9 ${
            light ? "text-white/70" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
