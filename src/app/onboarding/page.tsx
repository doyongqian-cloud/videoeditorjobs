import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Started | Assistant Video Editor Jobs - Onboarding Guide",
  description: "Welcome to Assistant Video Editor Jobs! Get started with our comprehensive onboarding guide to kickstart your video editing career.",
  keywords: [
    ...siteConfig.keywords,
    "onboarding",
    "get started",
    "beginner guide",
    "career start"
  ],
  openGraph: {
    title: "Get Started - Assistant Video Editor Jobs",
    description: "Welcome to Assistant Video Editor Jobs! Get started with our comprehensive onboarding guide.",
    url: "https://assistvideoeditorjobs.com/onboarding",
    type: "website",
    images: [
      {
        url: "https://assistvideoeditorjobs.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Get Started - Assistant Video Editor Jobs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started - Assistant Video Editor Jobs",
    description: "Welcome to Assistant Video Editor Jobs! Get started with our comprehensive onboarding guide.",
    images: ["https://assistvideoeditorjobs.com/og.jpg"]
  },
  alternates: {
    canonical: "https://assistvideoeditorjobs.com/onboarding"
  }
};

export default function OnboardingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Welcome to{" "}
              <span className="text-primary">Assistant Video Editor Jobs</span>
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              Your journey to becoming a successful assistant video editor starts here. 
              Follow our step-by-step onboarding guide to kickstart your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/guides/how-to-become"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Journey
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/skill-check"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Take Skill Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-2xl font-bold text-black dark:text-white lg:text-3xl text-center">
              Your Career Journey Starts Here
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    Learn the Basics
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark mb-4">
                    Start with our comprehensive guides to understand what an assistant video editor does and the skills you need.
                  </p>
                  <Link href="/guides/what-does-an-assistant-video-editor-do" className="text-primary hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    Develop Your Skills
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark mb-4">
                    Use our free tools and resources to practice video editing and build your portfolio.
                  </p>
                  <Link href="/tools" className="text-primary hover:underline">
                    Explore Tools →
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    Find Your First Job
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark mb-4">
                    Browse our job listings and apply for positions that match your skill level and interests.
                  </p>
                  <Link href="/jobs" className="text-primary hover:underline">
                    Browse Jobs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark/50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold text-black dark:text-white lg:text-3xl text-center">
              Essential Resources
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/guides" className="p-6 bg-white dark:bg-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Career Guides</h3>
                <p className="text-body-color dark:text-body-color-dark text-sm">Step-by-step guides to build your career</p>
              </Link>
              <Link href="/tools" className="p-6 bg-white dark:bg-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Free Tools</h3>
                <p className="text-body-color dark:text-body-color-dark text-sm">Professional tools to get you started</p>
              </Link>
              <Link href="/blog" className="p-6 bg-white dark:bg-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Industry Insights</h3>
                <p className="text-body-color dark:text-body-color-dark text-sm">Latest trends and tips from experts</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
