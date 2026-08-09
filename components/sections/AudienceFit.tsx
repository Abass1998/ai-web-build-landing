import { audience } from "@/content/audience";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContentCard } from "@/components/ui/ContentCard";
import { Reveal } from "@/components/ui/Reveal";

function CheckList({
  intro,
  items,
  tone,
}: {
  intro: string;
  items: readonly string[];
  tone: "for" | "not";
}) {
  return (
    <ContentCard tone="default">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{intro}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-foreground">
            <svg
              className={`mt-1 h-5 w-5 shrink-0 ${tone === "for" ? "text-success" : "text-destructive"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              {tone === "for" ? (
                <path
                  fillRule="evenodd"
                  d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  d="M6 5.6l8.4 8.8M14 5.6L5.6 14.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ContentCard>
  );
}

export function AudienceFit() {
  return (
    <section className="bg-muted">
      <div className="container-page flex flex-col gap-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow>{audience.eyebrow}</Eyebrow>
          <h2 className="max-w-3xl font-display text-2xl font-bold tracking-tight md:text-3xl">
            {audience.h2}
          </h2>
        </Reveal>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <CheckList intro={audience.forYouIntro} items={audience.forYou} tone="for" />
          <CheckList intro={audience.notForYouIntro} items={audience.notForYou} tone="not" />
        </div>
      </div>
    </section>
  );
}