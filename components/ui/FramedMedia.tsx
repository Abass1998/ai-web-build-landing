import { cn } from "@/lib/utils";

interface FramedMediaProps {
  children: React.ReactNode;
  caption?: string;
  className?: string;
}

export function FramedMedia({ children, caption, className }: FramedMediaProps) {
  return (
    <figure className={cn("overflow-hidden rounded-lg border border-border bg-card", className)}>
      <div className="aspect-video w-full bg-muted">{children}</div>
      {caption ? <figcaption className="p-3 font-mono text-xs text-muted-foreground">{caption}</figcaption> : null}
    </figure>
  );
}