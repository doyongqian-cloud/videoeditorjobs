import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Assistant Video Editor Jobs - Get Support & Help (2025)",
  description: "Contact our team for support with Assistant Video Editor job searches, career advice, or platform feedback. We're here to help advance your Assistant Video Editor career with expert guidance and resources.",
  keywords: [
    "contact assistant video editor jobs",
    "video editing career support",
    "job search help",
    "career advice video editor",
    "platform feedback",
    "customer support",
    "help center",
    "contact form",
    "video editing assistance",
    "professional support"
  ],
  openGraph: {
    title: "Contact Us | Assistant Video Editor Jobs - Get Support & Help (2025)",
    description: "Contact our team for support with Assistant Video Editor job searches, career advice, or platform feedback. We're here to help advance your career.",
    url: "https://assistvideoeditorjobs.com/contact",
    type: "website",
    images: [
      {
        url: "https://assistvideoeditorjobs.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Assistant Video Editor Jobs Support"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Assistant Video Editor Jobs - Get Support & Help (2025)",
    description: "Contact our team for support with Assistant Video Editor job searches, career advice, or platform feedback.",
    images: ["https://assistvideoeditorjobs.com/og.jpg"]
  },
  alternates: {
    canonical: "https://assistvideoeditorjobs.com/contact"
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

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Get in touch with our team for support with Assistant Video Editor job searches, career advice, or platform feedback. We're here to help advance your career."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
