import {
  CheckCircle2,
  ClipboardList,
  Hammer,
  MessageSquare,
  Ruler,
  type LucideIcon,
} from "lucide-react";
import type { ProcessStepContent } from "@/sanity/lib/types";
import EmptyState from "@/components/EmptyState";

const defaultSteps: ProcessStepContent[] = [
  {
    title: "Consultation",
    description:
      "Initial discussion to understand project needs, site condition, budget direction, and expected timeline.",
    output: "Project brief",
    iconLabel: "consultation",
    order: 1,
  },
  {
    title: "Site Survey",
    description:
      "On-site review to measure, document, and identify technical requirements before proposal.",
    output: "Survey notes",
    iconLabel: "survey",
    order: 2,
  },
  {
    title: "Proposal",
    description:
      "Scope, work plan, material direction, and budget estimation are prepared for approval.",
    output: "Proposal & estimate",
    iconLabel: "proposal",
    order: 3,
  },
  {
    title: "Execution",
    description:
      "Work begins based on approved scope, timeline, coordination, and field supervision.",
    output: "Construction progress",
    iconLabel: "execution",
    order: 4,
  },
  {
    title: "Handover",
    description:
      "Final checking, finishing review, and project handover after agreed works are completed.",
    output: "Completed work",
    iconLabel: "handover",
    order: 5,
  },
];

const fallbackIcons: LucideIcon[] = [
  MessageSquare,
  Ruler,
  ClipboardList,
  Hammer,
  CheckCircle2,
];

const stepDefaults = new Map(
  defaultSteps.map((step) => [step.title.toLowerCase(), step]),
);
const defaultOutputs = ["Project brief", "Survey notes", "Proposal & estimate", "Construction progress", "Completed work"];

function resolveIcon(step: ProcessStepContent, index: number) {
  const hint = `${step.iconLabel ?? ""} ${step.title}`.toLowerCase();

  if (hint.includes("survey") || hint.includes("ruler") || hint.includes("measure")) return Ruler;
  if (hint.includes("proposal") || hint.includes("file") || hint.includes("checklist")) return ClipboardList;
  if (hint.includes("execution") || hint.includes("hammer") || hint.includes("tool")) return Hammer;
  if (hint.includes("handover") || hint.includes("complete") || hint.includes("check")) return CheckCircle2;
  if (hint.includes("consult") || hint.includes("chat") || hint.includes("brief")) return MessageSquare;

  return fallbackIcons[index % fallbackIcons.length];
}

export default function ProcessSteps({ steps = defaultSteps }: { steps?: ProcessStepContent[] }) {
  if (!steps.length) {
    return (
      <EmptyState
        title="Our process is being updated."
        description="Contact Deacon Pro to discuss the survey, quotation, and delivery steps for your property."
      />
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => {
        const matchingDefault = stepDefaults.get(step.title.toLowerCase());
        const Icon = resolveIcon(step, index);
        const description = step.description || matchingDefault?.description;
        const output = step.output || matchingDefault?.output || defaultOutputs[index];

        return (
          <article
            key={`${step.title}-${step.order}`}
            className="group relative flex min-h-[320px] flex-col overflow-hidden border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-gold"
          >
            <span className="absolute -right-1 -top-3 font-display text-8xl leading-none text-gold/[0.07]" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex items-start justify-between gap-4">
              <p className="eyebrow relative z-10">
                {String(index + 1).padStart(2, "0")}
              </p>
              <span className="grid h-11 w-11 shrink-0 place-items-center border border-gold/30 bg-gold/5 text-gold transition group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-2xl font-semibold uppercase leading-[0.95] text-neutral-950 lg:text-xl xl:text-2xl">
                {step.title}
              </h3>
              {description ? (
                <p className="mt-4 text-base leading-7 text-neutral-600">
                {description}
                </p>
              ) : null}
            </div>

            {output ? (
              <div className="mt-auto border-t border-neutral-200 pt-5">
                <p className="eyebrow">
                  Output
                </p>
                <p className="mt-2 text-[15px] font-bold leading-6 text-neutral-900">{output}</p>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
