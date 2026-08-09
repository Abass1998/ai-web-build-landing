"use client";

import { useEffect, useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { header } from "@/content/copy";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [suppressed, setSuppressed] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const heroCta = document.getElementById("hero-cta");
    let observer: IntersectionObserver | null = null;

    if (heroCta) {
      observer = new IntersectionObserver(
        (entries) => {
          // visible when the hero CTA is NOT intersecting the viewport
          setVisible(!entries[0].isIntersecting);
        },
        { threshold: 0 }
      );
      observer.observe(heroCta);
    }

    const finalCta = document.getElementById("final-cta");
    let finalObserver: IntersectionObserver | null = null;

    if (finalCta) {
      finalObserver = new IntersectionObserver(
        (entries) => {
          setSuppressed(entries[0].isIntersecting);
        },
        { threshold: 0.2 }
      );
      finalObserver.observe(finalCta);
    }

    return () => {
      observer?.disconnect();
      finalObserver?.disconnect();
    };
  }, []);

  const show = visible && !suppressed;

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-40 px-5 transition-all duration-300 md:hidden ${
        show
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-24 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-md rounded-md bg-card p-2 shadow-elevated">
        <CTAButton location="sticky" size="default">
          {header.cta}
        </CTAButton>
      </div>
    </div>
  );
}