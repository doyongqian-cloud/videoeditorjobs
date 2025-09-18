import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Assistant Video Editor Jobs - Your Career Partner",
  description: "Learn about our mission to connect Assistant Video Editors with the best job opportunities. Discover how we're building the premier platform for Assistant Video Editor careers with expert guidance, tools, and resources.",
  keywords: [
    "about assistant video editor jobs",
    "video editing career platform",
    "assistant video editor community",
    "video editing job resources",
    "career development platform"
  ],
  openGraph: {
    title: "About Assistant Video Editor Jobs - Your Career Partner",
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
    title: "About Assistant Video Editor Jobs - Your Career Partner",
    description: "Learn about our mission to connect Assistant Video Editors with the best job opportunities.",
    images: ["https://assistvideoeditorjobs.com/og.jpg"]
  },
  alternates: {
    canonical: "https://assistvideoeditorjobs.com/about"
  }
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
