import { displayBrandName } from "@/content/config";
import { footerTagline } from "@/content/copy";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page flex flex-col items-start gap-2 py-10 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-lg font-bold tracking-tight">{displayBrandName()}</span>
        <p className="text-sm text-muted-foreground">{footerTagline}</p>
      </div>
    </footer>
  );
}