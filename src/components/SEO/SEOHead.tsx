import { Metadata } from "next";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  articleSection?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = "https://assistvideoeditorjobs.com/og.jpg",
  ogType = "website",
  publishedTime,
  modifiedTime,
  authors,
  articleSection,
  noindex = false,
  nofollow = false
}: SEOHeadProps): Metadata {
  const robots = [];
  if (noindex) robots.push("noindex");
  else robots.push("index");
  
  if (nofollow) robots.push("nofollow");
  else robots.push("follow");

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    robots: robots.join(", "),
    openGraph: {
      title,
      description,
      url: canonical,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
      ...(articleSection && { section: articleSection })
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    },
    ...(canonical && {
      alternates: {
        canonical
      }
    })
  };

  return metadata;
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateJobPostingSchema(job: {
  title: string;
  description: string;
  company: string;
  location: string;
  employmentType: string[];
  salary?: string;
  datePosted: string;
  validThrough?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location
      }
    },
    "employmentType": job.employmentType,
    "datePosted": job.datePosted,
    "validThrough": job.validThrough,
    "url": job.url,
    ...(job.salary && {
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": {
          "@type": "QuantitativeValue",
          "value": job.salary
        }
      }
    })
  };
}
