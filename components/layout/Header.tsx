import buildLabLogo from "@/Images/logo-2_clean.png";
import { header } from "@/content/copy";
import { CTAButton } from "@/components/ui/CTAButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="container-page flex h-16 items-center justify-between">
        <img
          src={buildLabLogo.src}
          alt="BuildLab AI"
          className="hidden h-[30px] w-auto md:block"
        />
        <div className="hidden md:block">
          <CTAButton location="header" size="default">
            {header.cta}
          </CTAButton>
        </div>
      </div>
    </header>
  );
}