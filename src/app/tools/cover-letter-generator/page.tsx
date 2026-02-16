import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Cover Letter Generator for Video Editors | Free Tool",
  description:
    "Generate tailored cover letters for assistant video editor roles using our free AI tool. Customize quickly and apply with confidence.",
  openGraph: {
    title: "AI Cover Letter Generator for Video Editors",
    description:
      "Create personalized cover letters aligned to job descriptions for assistant video editors.",
    type: "website",
  },
};

export default function CoverLetterGeneratorPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-dark dark:to-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full text-sm font-medium">
              <span>✉️</span>
              <span>AI Cover Letter</span>
            </div>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Generate a Strong <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Cover Letter</span>
            </h1>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark md:text-lg max-w-3xl mx-auto leading-relaxed">
              Quickly create a customized cover letter for assistant video editor roles—aligned to job descriptions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/guides/interview-preparation" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Interview Prep
              </Link>
              <Link href="/tools" className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300">
                Back to Tools
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </section>

      {/* Placeholder Content */}
      <section className="py-20 lg:py-24 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl bg-gray-50 dark:bg-dark/50 p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Coming Soon</h2>
              <p className="text-body-color dark:text-body-color-dark">
                We&apos;re crafting an AI cover letter tool designed for assistant video editor applications. While it ships, prepare with interview tips and keep an updated resume and portfolio.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/guides/interview-preparation" className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary/90">Interview Guide</Link>
                <Link href="/guides/resume-portfolio" className="inline-flex items-center rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white">Resume & Portfolio</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


