import Image from "next/image";
import { instructor } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Instructor() {
  return (
    <section className="bg-background">
      <div className="container-page flex flex-col gap-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow>YOUR INSTRUCTOR</Eyebrow>
          <div className="mt-4 grid gap-8 md:grid-cols-[300px_1fr] md:items-start">
            <div>
              <div className="max-w-[240px] overflow-hidden rounded-lg border border-border bg-muted md:max-w-[300px]">
                <Image
                  src={siteConfig.instructorPhoto}
                  alt="Portrait of Abass Odunola — product designer and session host"
                  width={300}
                  height={300}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                {instructor.name}
              </h2>
              <p className="mt-1 font-mono text-sm text-muted-foreground">{instructor.positioning}</p>
              <p className="mt-4 text-lg text-foreground">{instructor.identityLine}</p>
              <p className="mt-4 text-base text-foreground">{instructor.whyLine}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {instructor.credentialPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-foreground">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">{instructor.credibilityNote}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}