"use client";

import { useRef, useState } from "react";
import { seeItWork } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

function LivePreviewMock() {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-card shadow-card">
      <div className="flex flex-col items-center gap-4 px-6 text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent shadow-elevated" aria-hidden="true">
          <svg
            className="ml-1 h-8 w-8 text-accent-foreground"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
          Demo video — coming soon
        </p>
      </div>
    </div>
  );
}

export function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);

  const showPreview = !siteConfig.demoReady || failed;

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    void video.play().catch(() => setFailed(true));
  };

  return (
    <section className="bg-background">
      <div className="container-page flex flex-col gap-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow>{seeItWork.eyebrow}</Eyebrow>
          <h2 className="max-w-2xl font-display text-2xl font-bold tracking-tight md:text-3xl">
            {seeItWork.h2}
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground">{seeItWork.body}</p>
        </Reveal>

        <Reveal>
          {showPreview ? (
            <LivePreviewMock />
          ) : (
            <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                preload="none"
                poster={siteConfig.demoPoster}
                controls={started}
                aria-label='Demo video of an AI agent building a landing page'
                onError={() => setFailed(true)}
              />
              {!started && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play demo video"
                  className="absolute inset-0 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent shadow-elevated">
                    <svg
                      className="ml-1 h-8 w-8 text-accent-foreground"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          )}
        </Reveal>

        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {seeItWork.previewHint}
        </p>
      </div>
    </section>
  );
}