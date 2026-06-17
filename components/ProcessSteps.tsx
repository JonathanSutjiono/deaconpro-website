const steps = [
  "Consultation",
  "Concept & Planning",
  "Budgeting",
  "Execution",
  "Handover",
];

export default function ProcessSteps() {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {steps.map((step, index) => (
        <article
          key={step}
          className="border border-neutral-200 bg-white p-6 shadow-sm"
        >
          <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-10 text-xl font-black uppercase leading-tight text-neutral-950">
            {step}
          </h3>
        </article>
      ))}
    </div>
  );
}
