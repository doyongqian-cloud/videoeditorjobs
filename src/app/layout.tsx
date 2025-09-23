import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Script from "next/script";
import "../styles/index.css";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";
import PrivacyConsent from "@/components/Analytics/PrivacyConsent";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="canonical" href="https://assistvideoeditorjobs.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4a6cf7" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="preload" href="/images/logo/logo.svg" as="image" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`} suppressHydrationWarning>
        {/* Google Analytics 4 - 优化配置 */}
        <GoogleAnalytics 
          measurementId={process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-VZZMFQ9BWE'}
          enabled={process.env.NEXT_PUBLIC_GA4_ENABLED === 'true' && process.env.NODE_ENV === 'production'}
        />
        
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <PrivacyConsent />
        </Providers>
        
        {/* JSON-LD Schema - Load after interactive to avoid blocking */}
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Assistant Video Editor",
              "description": "The premier platform for Assistant Video Editor careers. Find jobs, learn skills, access tools, and grow your video editing career with expert guidance.",
              "url": "https://assistvideoeditorjobs.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://assistvideoeditorjobs.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Assistant Video Editor",
                "url": "https://assistvideoeditorjobs.com"
              }
            })
          }}
        />
      </body>
    </html>
  );
}

