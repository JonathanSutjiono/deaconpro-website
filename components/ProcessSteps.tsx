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

function getGridClass(count: number) {
  switch (count) {
    case 1:
      return "mx-auto grid max-w-[620px] auto-rows-fr gap-5";
    case 2:
      return "mx-auto grid max-w-[980px] auto-rows-fr gap-5 md:grid-cols-2 md:gap-6";
    case 3:
      return "grid auto-rows-fr gap-5 md:grid-cols-3 md:gap-6";
    case 4:
      return "grid auto-rows-fr gap-5 sm:grid-cols-2 md:gap-6 xl:grid-cols-4";
    default:
      return "grid auto-rows-fr gap-5 sm:grid-cols-2 md:grid-cols-6 md:gap-6";
  }
}

function getCardGridClass(count: number, index: number) {
  if (count !== 5) return "";
  if (index < 3) return "md:col-span-2";
  if (index === 3) return "md:col-span-2 md:col-start-2";
  return "sm:col-span-2 md:col-span-2";
}

export default function ProcessSteps({ steps = defaultSteps }: { steps?: ProcessStepContent[] }) {
  const visibleSteps = steps.slice(0, 5);

  if (!visibleSteps.length) {
    return (
      <EmptyState
        title="Our process is being updated."
        description="Contact Deacon Pro to discuss the survey, quotation, and delivery steps for your property."
      />
    );
  }

  const stepCount = visibleSteps.length;
  const isFeatureLayout = stepCount <= 2;
  const cardSizeClass = isFeatureLayout ? "min-h-[360px] p-7 sm:p-8 md:p-9" : "min-h-[332px] p-6 sm:p-7";
  const titleClass = isFeatureLayout ? "text-3xl sm:text-[2rem]" : "text-2xl sm:text-[26px]";
  const iconSizeClass = isFeatureLayout ? "h-14 w-14" : "h-12 w-12";
  const iconGlyphSizeClass = isFeatureLayout ? "h-6 w-6" : "h-5 w-5";
  const watermarkClass = isFeatureLayout ? "text-9xl" : "text-8xl";

  return (
    <div className={getGridClass(stepCount)}>
      {visibleSteps.map((step, index) => {
        const matchingDefault = stepDefaults.get(step.title.toLowerCase());
        const Icon = resolveIcon(step, index);
        const description = step.description || matchingDefault?.description;
        const output = step.output || matchingDefault?.output || defaultOutputs[index];

        return (
          <article
            key={`${step.title}-${step.order}`}
            className={`group relative flex h-full flex-col overflow-hidden border border-neutral-200 bg-white shadow-[0_16px_36px_rgba(17,17,17,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-gold ${cardSizeClass} ${getCardGridClass(stepCount, index)}`}
          >
            <span className={`absolute -right-1 -top-3 font-display leading-none text-gold/[0.07] ${watermarkClass}`} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex items-start justify-between gap-4">
              <p className="eyebrow relative z-10">
                {String(index + 1).padStart(2, "0")}
              </p>
              <span className={`grid shrink-0 place-items-center border border-gold/30 bg-gold/5 text-gold transition group-hover:border-gold group-hover:bg-gold group-hover:text-white ${iconSizeClass}`}>
                <Icon className={iconGlyphSizeClass} strokeWidth={1.8} aria-hidden="true" />
              </span>
            </div>

            <div className="relative z-10 mt-9">
              <h3 className={`font-display font-semibold uppercase leading-[0.95] text-neutral-950 ${titleClass}`}>
                {step.title}
              </h3>
              {description ? (
                <p className="mt-5 text-base leading-7 text-neutral-700 md:text-[17px] md:leading-8">
                  {description}
                </p>
              ) : null}
            </div>

            {output ? (
              <div className="relative z-10 mt-auto border-t border-neutral-200 pt-6">
                <p className="eyebrow">
                  Output
                </p>
                <p className="mt-2 text-base font-bold leading-7 text-neutral-900 md:text-[17px]">{output}</p>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
