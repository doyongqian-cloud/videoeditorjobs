import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start Your Career | Assistant Video Editor Jobs - Quick Start Guide",
  description: "Ready to start your assistant video editor career? Get quick access to essential resources, tools, and job opportunities to launch your journey.",
  keywords: [
    ...siteConfig.keywords,
    "start career",
    "quick start",
    "beginner",
    "launch career"
  ],
  openGraph: {
    title: "Start Your Career - Assistant Video Editor Jobs",
    description: "Ready to start your assistant video editor career? Get quick access to essential resources and job opportunities.",
    url: "https://assistvideoeditorjobs.com/start",
    type: "website",
    images: [
      {
        url: "https://assistvideoeditorjobs.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Start Your Career - Assistant Video Editor Jobs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your Career - Assistant Video Editor Jobs",
    description: "Ready to start your assistant video editor career? Get quick access to essential resources and job opportunities.",
    images: ["https://assistvideoeditorjobs.com/og.jpg"]
  },
  alternates: {
    canonical: "https://assistvideoeditorjobs.com/start"
  }
};

export default function StartPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Ready to{" "}
              <span className="text-primary">Start Your Career?</span>
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              Everything you need to launch your assistant video editor career is right here. 
              From learning the basics to landing your first job, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/onboarding"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Complete Setup
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Browse Jobs Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-2xl font-bold text-black dark:text-white lg:text-3xl text-center">
              Quick Start Actions
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/guides/how-to-become" className="group p-8 bg-white dark:bg-dark rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-primary transition-colors">
                  Learn the Basics
                </h3>
                <p className="text-body-color dark:text-body-color-dark mb-4">
                  Start with our comprehensive guide on how to become an assistant video editor.
                </p>
                <span className="text-primary font-medium group-hover:underline">Get Started →</span>
              </Link>

              <Link href="/tools" className="group p-8 bg-white dark:bg-dark rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-primary transition-colors">
                  Get Free Tools
                </h3>
                <p className="text-body-color dark:text-body-color-dark mb-4">
                  Access professional video editing software and career tools for free.
                </p>
                <span className="text-primary font-medium group-hover:underline">Explore Tools →</span>
              </Link>

              <Link href="/jobs" className="group p-8 bg-white dark:bg-dark rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-primary transition-colors">
                  Find Jobs
                </h3>
                <p className="text-body-color dark:text-body-color-dark mb-4">
                  Browse entry-level, freelance, and remote assistant video editor positions.
                </p>
                <span className="text-primary font-medium group-hover:underline">Search Jobs →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white lg:text-3xl">
            Ready to Launch Your Career?
          </h2>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
            Join thousands of successful assistant video editors who started their journey with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/onboarding"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Complete Your Setup
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/skill-check"
              className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Take Skill Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
