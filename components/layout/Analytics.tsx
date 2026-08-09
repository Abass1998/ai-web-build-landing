"use client";

import { useEffect } from "react";
import Script from "next/script";
import { captureUtmParamsOnLoad } from "@/lib/analytics";
import { siteConfig } from "@/content/config";

export function Analytics() {
  useEffect(() => {
    captureUtmParamsOnLoad();
  }, []);

  return (
    <>
      {siteConfig.metaPixelId ? (
        <Script id="meta-pixel" strategy="afterInteractive" src="https://connect.facebook.net/en_US/fbevents.js">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","${siteConfig.metaPixelId}");fbq("track","PageView");`}
        </Script>
      ) : null}
      {siteConfig.gaId ? (
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}
        />
      ) : null}
      {siteConfig.gaId ? (
        <Script id="ga-config" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","${siteConfig.gaId}");`}
        </Script>
      ) : null}
    </>
  );
}