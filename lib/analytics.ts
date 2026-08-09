"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type CtaLocation = "header" | "hero" | "mid" | "sticky" | "final";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

let captured: UtmParams | null = null;

function getUtmParams(): UtmParams {
  if (captured) return captured;

  if (typeof window !== "undefined") {
    try {
      const stored = window.sessionStorage.getItem("utm_params");
      if (stored) {
        captured = JSON.parse(stored) as UtmParams;
        return captured;
      }
    } catch {
      /* ignore */
    }

    const params: UtmParams = {};
    try {
      const url = new URL(window.location.href);
      for (const key of UTM_KEYS) {
        const value = url.searchParams.get(key);
        if (value) params[key] = value;
      }
    } catch {
      /* ignore */
    }

    captured = params;
    try {
      window.sessionStorage.setItem("utm_params", JSON.stringify(captured));
    } catch {
      /* ignore */
    }
  }

  return captured ?? {};
}

export function captureUtmParamsOnLoad(): void {
  // Only called from a client effect; safe to read at that point.
  getUtmParams();
}

export function trackPixelLead(location: CtaLocation): void {
  try {
    if (typeof window.fbq === "function") {
      const params = getUtmParams();
      window.fbq("track", "Lead", { location, ...params });
    }
  } catch {
    /* never throw */
  }
}

export function trackGAEvent(name: string, params: Record<string, unknown>): void {
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, { ...params, ...getUtmParams() });
    }
  } catch {
    /* never throw */
  }
}

export function trackWhatsappClick(location: CtaLocation): void {
  trackPixelLead(location);
  trackGAEvent("whatsapp_click", { location });
}