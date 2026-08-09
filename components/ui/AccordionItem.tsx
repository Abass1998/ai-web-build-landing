interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  return (
    <details className="group rounded-lg border border-border bg-card text-card-foreground">
      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-base font-medium focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
        {question}
        <svg
          className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1z" />
        </svg>
      </summary>
      <p className="px-6 pb-6 text-muted-foreground">{answer}</p>
    </details>
  );
}