'use client';

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
// import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import JobPreview from "@/components/JobPreview";
import GuidesPreview from "@/components/GuidesPreview";
import ToolsPreview from "@/components/ToolsPreview";
// import CTA from "@/components/CTA";
import { siteConfig } from "@/config/site";
import FAQSchema from "@/components/FAQ/FAQSchema";
import { sendEvent, GA4_EVENTS } from "@/lib/analytics";
import { useSEO } from "@/hooks/useSEO";

const homeFAQs = [
  {
    question: "How long does it take to become an assistant video editor?",
    answer: "Most people can land their first assistant video editor job within 2-4 months of focused learning and practice using our structured guides and tools."
  },
  {
    question: "Do I need expensive equipment to start?",
    answer: "No! You can start with just a computer and free editing software. We provide a complete list of free tools to get you started."
  },
  {
    question: "Can I work remotely as an assistant video editor?",
    answer: "Yes! 85% of assistant video editor positions offer remote work options, making it perfect for flexible work arrangements."
  }
];

export default function Home() {
  // 设置页面SEO元数据
  useSEO({
    title: "Assistant Video Editor Jobs & Career Guide 2025 | Find Your Next Opportunity",
    description: "Discover assistant video editor jobs, career guides, and essential tools. Find freelance, remote, and entry-level positions. Start your video editing career today with expert guidance.",
    keywords: siteConfig.keywords,
    ogTitle: siteConfig.name,
    ogDescription: siteConfig.description,
    ogImage: siteConfig.ogImage,
    canonical: siteConfig.url
  });

  // 跟踪首页关键交互
  const handleCTAClick = (ctaType: string, ctaText: string) => {
    sendEvent(GA4_EVENTS.CLICK, {
      event_category: 'homepage_cta',
      event_label: ctaText,
      element_type: 'cta_button',
      cta_type: ctaType,
    });
  };

  const handleSectionClick = (sectionName: string, elementType: string) => {
    sendEvent(GA4_EVENTS.CLICK, {
      event_category: 'homepage_section',
      event_label: sectionName,
      element_type: elementType,
    });
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Assistant Video Editor",
            "description": "The premier platform for Assistant Video Editor careers",
            "url": "https://assistvideoeditorjobs.com",
            "logo": "https://assistvideoeditorjobs.com/images/logo/logo.svg",
            "sameAs": [
              "https://twitter.com/assistantvideoeditor",
              "https://github.com/assistantvideoeditor"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "support@assistvideoeditorjobs.com"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Assistant Video Editor Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Assistant Video Editor Job Listings",
                    "description": "Find Assistant Video Editor positions across different categories"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Assistant Video Editor Career Guidance",
                    "description": "Comprehensive resources for skill development and career growth"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Assistant Video Editor Tools & Resources",
                    "description": "Free software, templates, and career tools for Assistant Video Editors"
                  }
                }
              ]
            }
          })
        }}
      />
      <FAQSchema faqs={homeFAQs} />
      <ScrollUp />
      <Hero />
      <GuidesPreview />
      <ToolsPreview />
      <JobPreview />
      {/* <CTA /> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
