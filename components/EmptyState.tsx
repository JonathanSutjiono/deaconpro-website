type EmptyStateProps = {
  title: string;
  description: string;
  dark?: boolean;
};

export default function EmptyState({ title, description, dark = false }: EmptyStateProps) {
  return (
    <div
      className={`border border-dashed px-6 py-10 text-center md:px-10 md:py-12 ${
        dark ? "border-white/20 bg-white/[0.03] text-white" : "border-neutral-300 bg-white text-neutral-950"
      }`}
    >
      <span className={`mx-auto block h-px w-10 ${dark ? "bg-champagne" : "bg-gold"}`} aria-hidden="true" />
      <h3 className="mt-5 font-display text-3xl font-semibold uppercase leading-tight">{title}</h3>
      <p className={`mx-auto mt-4 max-w-xl text-base leading-8 ${dark ? "text-white/70" : "text-neutral-600"}`}>
        {description}
      </p>
    </div>
  );
}
