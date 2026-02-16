'use client';

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { sendEvent, GA4_EVENTS } from "@/lib/analytics";
import { useSEO } from "@/hooks/useSEO";

export default function AboutPage() {
  // 设置页面SEO元数据
  useSEO({
    title: "About Us | Assistant Video Editor Jobs - Your Career Partner (2025)",
    description: "Learn about our mission to connect Assistant Video Editors with the best job opportunities. Discover how we're building the premier platform for Assistant Video Editor careers with expert guidance, tools, and resources. Join our community of video editing professionals.",
    keywords: [
      "about assistant video editor jobs",
      "video editing career platform",
      "assistant video editor community",
      "video editing job resources",
      "career development platform",
      "video editor career support",
      "assistant video editor network",
      "video editing industry platform",
      "career growth video editing",
      "professional development video editor"
    ],
    ogTitle: "About Assistant Video Editor Jobs - Your Career Partner (2025)",
    ogDescription: "Learn about our mission to connect Assistant Video Editors with the best job opportunities. Discover how we're building the premier platform for Assistant Video Editor careers.",
    ogImage: "https://assistvideoeditorjobs.com/og-about.jpg",
    canonical: "https://assistvideoeditorjobs.com/about"
  });

  // 跟踪关于页面交互
  const handleSectionClick = (sectionName: string) => {
    sendEvent(GA4_EVENTS.CLICK, {
      event_category: 'about_section',
      event_label: sectionName,
      element_type: 'section_interaction',
    });
  };

  const handleTeamClick = (teamMember: string) => {
    sendEvent(GA4_EVENTS.CLICK, {
      event_category: 'team_interaction',
      event_label: teamMember,
      element_type: 'team_member',
    });
  };

  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Learn about our mission to empower Assistant Video Editors with comprehensive job opportunities, career guidance, and essential tools to succeed in the video editing industry."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}
