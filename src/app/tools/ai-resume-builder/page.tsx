import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Resume Builder for Assistant Video Editors (2025) | Coming Soon",
  description: "AI-powered resume builder specifically designed for assistant video editors. Create professional resumes tailored to video editing roles with industry-specific templates and optimization. Coming soon with advanced AI features.",
  keywords: [
    "AI resume builder",
    "video editor resume",
    "assistant video editor resume",
    "resume builder AI",
    "professional resume creator",
    "video editing resume template",
    "career resume tool",
    "resume optimization"
  ],
  openGraph: {
    title: "AI Resume Builder for Assistant Video Editors (2025) | Coming Soon",
    description: "AI-powered resume builder specifically designed for assistant video editors. Create professional resumes tailored to video editing roles.",
    url: "https://assistvideoeditorjobs.com/tools/ai-resume-builder",
    type: "website",
    images: [
      {
        url: "https://assistvideoeditorjobs.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "AI Resume Builder for Assistant Video Editors"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Builder for Assistant Video Editors (2025)",
    description: "AI-powered resume builder specifically designed for assistant video editors. Coming soon with advanced features.",
    images: ["https://assistvideoeditorjobs.com/og.jpg"]
  },
  alternates: {
    canonical: "https://assistvideoeditorjobs.com/tools/ai-resume-builder"
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

export default function ComingSoonResumeBuilder() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-dark dark:to-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm font-medium">
            <span>🚧</span>
            <span>Coming Soon</span>
          </div>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
            AI Resume Builder for Assistant Video Editors
          </h1>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark md:text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re building an AI-powered resume tool tailored for assistant video editor roles. While we finish it, explore our skills guide and templates to get job-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/guides/skills" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">Skills Guide</Link>
            <Link href="/tools/resume-templates" className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300">Resume Templates</Link>
            <Link href="/guides/resume-portfolio" className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300">Portfolio Tips</Link>
          </div>
        </div>
      </div>
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
    </section>
  );
}

