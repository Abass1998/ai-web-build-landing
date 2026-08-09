import { howItWorks } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StepMarker } from "@/components/ui/StepMarker";
import { Reveal } from "@/components/ui/Reveal";

export function BuildStrip() {
  return (
    <section className="bg-muted">
      <div className="container-page flex flex-col gap-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
          <h2 className="max-w-3xl font-display text-2xl font-bold tracking-tight md:text-3xl">
            {howItWorks.heading}
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">{howItWorks.intro}</p>
        </Reveal>
        <ol className="mt-4 flex flex-col gap-3 lg:flex-row lg:gap-0">
          {howItWorks.steps.map((step, i) => (
            <li
              key={step.title}
              className="flex-1 rounded-lg border border-border bg-card p-4 lg:rounded-none lg:border-0 lg:border-r lg:p-4 lg:first:border-l lg:first:rounded-l-lg lg:last:rounded-r-lg lg:last:border-r"
            >
              <div className="lg:hidden">
                <StepMarker step={`0${i + 1}`} label={step.title} />
              </div>
              <div className="hidden lg:block">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  0{i + 1} · {step.title}
                </span>
              </div>
              <p className="mt-3 text-foreground lg:mt-2">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}