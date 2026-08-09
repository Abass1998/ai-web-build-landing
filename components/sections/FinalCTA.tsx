import { finalCta } from "@/content/copy";
import { CTAButton } from "@/components/ui/CTAButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig, isWebinarScheduled } from "@/content/config";

export function FinalCTA() {
  const scheduled = isWebinarScheduled();

  return (
    <section id="final-cta" className="bg-secondary py-16 md:py-24">
      <div className="container-page flex flex-col items-center gap-8 text-center">
        <Reveal>
          <Eyebrow>{finalCta.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-2xl font-bold tracking-tight md:text-3xl">
            {finalCta.heading}
          </h2>

          {scheduled ? (
            <p className="mt-4 text-base text-foreground">
              Live on <span className="font-semibold">{siteConfig.webinarDate}</span>
              {siteConfig.webinarTime !== "[WEBINAR_TIME]" && (
                <>
                  {" "}at <span className="font-semibold">{siteConfig.webinarTime}</span>
                </>
              )}
            </p>
          ) : (
            <p className="mt-4 text-base text-muted-foreground">
              The exact date and time will be shared in the WhatsApp group when you join.
            </p>
          )}

          <div className="mt-8 flex w-full flex-col items-center gap-4">
            <CTAButton location="final" size="large">
              {finalCta.cta}
            </CTAButton>
            <p className="max-w-md text-sm text-muted-foreground">{finalCta.primaryMicrocopy}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-2 w-full max-w-2xl rounded-lg border border-border bg-card p-6 text-left">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {finalCta.stepsTitle}
            </p>
            <ol className="mt-4 flex flex-col gap-3">
              {finalCta.nextSteps.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-foreground">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border font-mono text-xs text-muted-foreground">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm text-muted-foreground">{finalCta.microcopyText}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}