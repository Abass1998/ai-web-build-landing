import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
  tone?: "muted" | "accent" | "default";
}

export function ContentCard({ children, className, tone = "default" }: ContentCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-6 text-card-foreground",
        tone === "muted" && "bg-muted text-muted-foreground",
        tone === "accent" && "border-accent-soft bg-accent-soft text-accent",
        className
      )}
    >
      {children}
    </div>
  );
}