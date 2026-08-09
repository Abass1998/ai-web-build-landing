import { hero } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";

function MechanismVisual() {
  const stages = [
    {
      label: hero.ideaLabel,
      detail: hero.ideaDetail,
      icon: (
        <path d="M10 2l1.8 4.8L16 9l-4.2 2.2L10 16l-1.8-4.8L4 9l4.2-2.2L10 2z" />
      ),
    },
    {
      label: hero.specLabel,
      detail: hero.specDetail,
      icon: <path d="M3 4h14v2H3V4zm0 5h14v2H3V9zm4 5h10v2H7v-2z" />,
    },
    {
      label: hero.agentLabel,
      detail: hero.agentDetail,
      icon: (
        <path d="M4 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5h-6.5V3H4zm11.5 5.5L11 4v4.5h4.5z" />
      ),
    },
    {
      label: hero.liveLabel,
      detail: hero.liveDetail,
      icon: (
        <path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm13.5.5H3.5v9h13v-9zM5 7h4v4H5V7zm6 0h4v2h-4V7zm0 4h4v2h-4v-2z" />
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
        <div className="flex items-center gap-2 border-b border-border bg-background px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
          <span className="ml-2 flex h-5 min-w-0 flex-1 items-center rounded-md bg-muted px-2 font-mono text-[10px] text-muted-foreground">
            workspace: your-landing-page
          </span>
        </div>

        <div className="flex flex-col gap-3 p-4">
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary">
                <svg
                  className="h-4 w-4 text-foreground"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  {stage.icon}
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
                  {stage.label}
                </p>
                <p className="text-sm text-foreground">{stage.detail}</p>
              </div>
              {i < stages.length - 1 && (
                <svg
                  className="h-4 w-4 shrink-0 self-center text-muted-foreground"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 2v11M4 9l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-border bg-background px-4 py-3">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {hero.mechanismCaption}
          </p>
        </div>
      </div>
      <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {hero.visualEyebrow} · {hero.visualTitle}
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-background">
      <div className="container-page grid gap-10 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 md:py-24">
        <Reveal>
          <div className="flex flex-col items-start gap-6">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="max-w-3xl font-display text-[34px] font-bold leading-tight tracking-tight md:text-[42px] lg:text-[56px]">
              {hero.h1}
            </h1>
            {hero.subheadline && (
              <p className="max-w-xl text-lg text-muted-foreground">{hero.subheadline}</p>
            )}
            <div id="hero-cta" className="flex w-full flex-col items-start gap-3 sm:w-auto">
              <CTAButton location="hero" size="large">
                {hero.cta}
              </CTAButton>
            </div>
            {hero.primaryMicrocopy && (
              <p className="text-sm text-muted-foreground">{hero.primaryMicrocopy}</p>
            )}
          </div>
        </Reveal>

        <Reveal>
          <MechanismVisual />
        </Reveal>
      </div>
    </section>
  );
}