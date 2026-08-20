export type WebinarDateStatus = "unset" | "set";

export const siteConfig = {
  brandName: "[BRAND_NAME]",
  webinarDate: "[WEBINAR_DATE]",
  webinarTime: "[WEBINAR_TIME]",
  whatsappGroupLink: "[WHATSAPP_GROUP_LINK]",
  canonicalUrl: "[CANONICAL_URL]",
  instructorName: "Abass Odunola",
  demoVideo: "/videos/ai-agent-build.mp4",
  demoPoster: "/images/demo-poster.jpg",
  demoReady: true, // set to true only once real demo assets exist and paths above are filled
  demoLength: "[DEMO_LENGTH_PLACEHOLDER]",
  demoCaption: "Full build, recorded in real time — [MM:SS]",
  instructorPhoto: "/images/instructor.svg",
  ogImage: "[OG_IMAGE]",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
};

/** True only when real webinar date/time have been supplied (placeholders are still unset). */
export function isWebinarScheduled(): boolean {
  return !siteConfig.webinarDate.startsWith("[WEBINAR_DATE]");
}

/**
 * The visible brand/wordmark.
 * Falls back to a neutral descriptor (not an invented brand) until the real name is set.
 */
export function displayBrandName(): string {
  return siteConfig.brandName !== "[BRAND_NAME]" ? siteConfig.brandName : "Live AI Build Training";
}