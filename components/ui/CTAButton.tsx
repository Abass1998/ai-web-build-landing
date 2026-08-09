"use client";

import { trackWhatsappClick } from "@/lib/analytics";
import type { CtaLocation } from "@/lib/analytics";
import { siteConfig } from "@/content/config";

type CtaSize = "default" | "large";

const sizeClasses: Record<CtaSize, string> = {
  default: "h-12 px-6 text-base font-semibold",
  large: "h-14 px-8 text-lg font-semibold",
};

interface CTAButtonProps {
  size?: CtaSize;
  location: CtaLocation;
  children: React.ReactNode;
}

export function CTAButton({
  size = "default",
  location,
  children,
}: CTAButtonProps) {
  return (
    <a
      href={siteConfig.whatsappGroupLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsappClick(location)}
      aria-label={`${children} (opens WhatsApp in a new tab)`}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent text-accent-foreground transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent-hover active:bg-accent-active sm:w-auto ${sizeClasses[size]}`}
    >
      {children}
    </a>
  );
}