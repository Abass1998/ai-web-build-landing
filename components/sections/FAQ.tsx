import { faq } from "@/content/faq";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  return (
    <section className="bg-muted">
      <div className="container-page flex flex-col items-center gap-6 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-2xl font-bold tracking-tight md:text-3xl">
              {faq.heading}
            </h2>
            <p className="mt-3 max-w-xl text-lg text-muted-foreground">{faq.intro}</p>
          </div>
        </Reveal>
        <div className="mt-2 flex w-full max-w-[45rem] flex-col gap-3">
          {faq.items.map((item) => (
            <AccordionItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}