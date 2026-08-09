"use client";

import { useRevealOnScroll } from "@/lib/use-reveal";

export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRevealOnScroll<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}