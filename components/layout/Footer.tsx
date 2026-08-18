import buildLabLogo from "@/Images/logo-2_clean.png";
import { footerTagline } from "@/content/copy";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page flex flex-col items-start gap-2 py-10 sm:flex-row sm:items-center sm:justify-between">
        <img
          src={buildLabLogo.src}
          alt="BuildLab AI"
          className="h-6 w-auto md:h-[30px]"
        />
        <p className="text-sm text-muted-foreground">{footerTagline}</p>
      </div>
    </footer>
  );
}