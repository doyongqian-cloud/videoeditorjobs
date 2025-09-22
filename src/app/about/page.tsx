import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
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
  openGraph: {
    title: "About Assistant Video Editor Jobs - Your Career Partner (2025)",
    description: "Learn about our mission to connect Assistant Video Editors with the best job opportunities. Discover how we're building the premier platform for Assistant Video Editor careers.",
    url: "https://assistvideoeditorjobs.com/about",
    type: "website",
    images: [
      {
        url: "https://assistvideoeditorjobs.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "About Assistant Video Editor Jobs Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Assistant Video Editor Jobs - Your Career Partner (2025)",
    description: "Learn about our mission to connect Assistant Video Editors with the best job opportunities.",
    images: ["https://assistvideoeditorjobs.com/og.jpg"]
  },
  alternates: {
    canonical: "https://assistvideoeditorjobs.com/about"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

const AboutPage = () => {
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
};

export default AboutPage;
