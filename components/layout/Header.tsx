import { displayBrandName } from "@/content/config";
import { header } from "@/content/copy";
import { CTAButton } from "@/components/ui/CTAButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="container-page flex h-16 items-center justify-between">
        <span className="font-display text-lg font-bold tracking-tight">{displayBrandName()}</span>
        <CTAButton location="header" size="default">
          {header.cta}
        </CTAButton>
      </div>
    </header>
  );
}