import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@/components/layout/Analytics";
import { siteConfig } from "@/content/config";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = siteConfig.siteUrl || "https://example.com";

export const metadata: Metadata = {
  title: "Build websites with AI agents — free live training",
  description:
    "A free live session for Nigerian marketers and funnel builders on building and launching real websites using AI coding agents — no developer needed.",
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.canonicalUrl !== "[CANONICAL_URL]" ? siteConfig.canonicalUrl : siteUrl },
  icons: {
    icon: "/icons/icon.svg",
    shortcut: "/icons/icon.svg",
    apple: "/icons/icon.svg",
  },
  openGraph: {
    title: "Build websites with AI agents — free live training",
    description:
      "A free live session for Nigerian marketers and funnel builders on building and launching real websites using AI coding agents — no developer needed.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage !== "[OG_IMAGE]" ? siteConfig.ogImage : `${siteUrl}/images/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Build websites with AI agents — free live training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build websites with AI agents — free live training",
    description:
      "A free live session for Nigerian marketers and funnel builders on building and launching real websites using AI coding agents — no developer needed.",
    images: [siteConfig.ogImage !== "[OG_IMAGE]" ? siteConfig.ogImage : `${siteUrl}/images/og-image.svg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-body text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}