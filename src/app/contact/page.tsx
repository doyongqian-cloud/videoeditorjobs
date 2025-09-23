'use client';

import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { sendEvent, GA4_EVENTS } from "@/lib/analytics";
import { useSEO } from "@/hooks/useSEO";

export default function ContactPage() {
  // 设置页面SEO元数据
  useSEO({
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
    ogTitle: "Contact Us | Assistant Video Editor Jobs - Get Support & Help (2025)",
    ogDescription: "Contact our team for support with Assistant Video Editor job searches, career advice, or platform feedback. We're here to help advance your career.",
    ogImage: "https://assistvideoeditorjobs.com/og-contact.jpg",
    canonical: "https://assistvideoeditorjobs.com/contact"
  });

  // 跟踪联系页面交互
  const handleFormSubmit = (formType: string) => {
    sendEvent(GA4_EVENTS.CLICK, {
      event_category: 'contact_form',
      event_label: 'Form Submission',
      element_type: 'form_submit',
      form_type: formType,
    });
  };

  const handleSupportClick = (supportType: string) => {
    sendEvent(GA4_EVENTS.CLICK, {
      event_category: 'support_interaction',
      event_label: supportType,
      element_type: 'support_link',
    });
  };

  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Get in touch with our team for support with Assistant Video Editor job searches, career advice, or platform feedback. We're here to help advance your career."
      />

      <Contact />
    </>
  );
}
