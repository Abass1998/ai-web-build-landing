import { shift } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

interface FlowRowProps {
  label: string;
  steps: readonly string[];
  tone: "old" | "new";
}

function FlowRow({ label, steps, tone }: FlowRowProps) {
  return (
    <div
      className={`rounded-lg border p-5 ${
        tone === "new"
          ? "border-accent bg-background"
          : "border-border bg-muted opacity-80"
      }`}
    >
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <ol
        className="flex flex-wrap items-center gap-y-2"
        aria-label={label}
      >
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span
              className={`rounded-md px-2.5 py-1 text-sm ${
                tone === "new"
                  ? i === steps.length - 1
                    ? "bg-primary font-semibold text-primary-foreground"
                    : "bg-secondary text-foreground"
                  : "bg-card text-muted-foreground"
              }`}
            >
              {step}
            </span>
            {i < steps.length - 1 && (
              <svg
                className={`h-3.5 w-3.5 ${tone === "new" ? "text-accent" : "text-muted-foreground"}`}
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 3l5 5-5 5V3z" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function TheShift() {
  return (
    <section className="bg-muted">
      <div className="container-page flex flex-col gap-10 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-col items-start gap-4">
            <Eyebrow>{shift.eyebrow}</Eyebrow>
            <h2 className="max-w-2xl font-display text-2xl font-bold tracking-tight md:text-3xl">
              {shift.h2}
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground">{shift.body}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-4">
            <FlowRow
              label={shift.oldLabel}
              steps={shift.oldSteps}
              tone="old"
            />
            <FlowRow
              label={shift.newLabel}
              steps={shift.newSteps}
              tone="new"
            />
          </div>
          <p className="mt-4 text-sm font-medium text-foreground">{shift.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}