import { learningOutcomes } from "@/content/outcomes";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContentCard } from "@/components/ui/ContentCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { finalCta } from "@/content/copy";

export function LearningOutcomes() {
  return (
    <section className="bg-background">
      <div className="container-page flex flex-col gap-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow>{learningOutcomes.eyebrow}</Eyebrow>
          <h2 className="max-w-2xl font-display text-2xl font-bold tracking-tight md:text-3xl">
            {learningOutcomes.h2}
          </h2>
        </Reveal>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {learningOutcomes.outcomes.map((outcome) => (
            <ContentCard key={outcome.title} tone="default">
              <h3 className="font-display text-lg font-bold tracking-tight">{outcome.title}</h3>
              <p className="mt-2 text-muted-foreground">{outcome.body}</p>
            </ContentCard>
          ))}
        </div>
        <p className="max-w-2xl text-base text-muted-foreground">{learningOutcomes.closing}</p>
        <Reveal>
          <div className="mt-2 flex flex-col items-start gap-3">
            <CTAButton location="mid" size="default">
              {finalCta.cta}
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}