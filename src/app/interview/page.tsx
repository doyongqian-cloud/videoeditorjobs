import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interview Preparation | Assistant Video Editor Jobs",
  description: "Prepare for assistant video editor interviews with common questions, sample answers, and expert tips. Get ready to land your dream job.",
  keywords: [
    ...siteConfig.keywords,
    "assistant video editor interview",
    "video editor interview questions",
    "interview preparation",
    "job interview tips"
  ],
  openGraph: {
    title: "Interview Preparation - Assistant Video Editor Jobs",
    description: "Prepare for assistant video editor interviews with common questions, sample answers, and expert tips.",
    url: "https://assistvideoeditorjobs.com/interview",
    type: "website",
    images: [
      {
        url: "https://assistvideoeditorjobs.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Interview Preparation - Assistant Video Editor Jobs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Interview Preparation - Assistant Video Editor Jobs",
    description: "Prepare for assistant video editor interviews with common questions, sample answers, and expert tips.",
    images: ["https://assistvideoeditorjobs.com/og.jpg"]
  },
  alternates: {
    canonical: "https://assistvideoeditorjobs.com/interview"
  }
};

export default function InterviewPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Interview Preparation for{" "}
              <span className="text-primary">Assistant Video Editors</span>
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              Get ready for your assistant video editor interview with our comprehensive guide. 
              Learn common questions, sample answers, and expert tips to land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/guides/interview-preparation"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View Detailed Guide
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold text-black dark:text-white lg:text-3xl text-center">
              Quick Interview Tips
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 bg-white dark:bg-dark rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                  Technical Questions
                </h3>
                <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                  <li>• Know your editing software inside out</li>
                  <li>• Understand file formats and codecs</li>
                  <li>• Be familiar with post-production workflows</li>
                  <li>• Prepare examples of your work</li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-dark rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                  Behavioral Questions
                </h3>
                <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                  <li>• Use the STAR method for examples</li>
                  <li>• Show your problem-solving skills</li>
                  <li>• Demonstrate teamwork experience</li>
                  <li>• Highlight your learning ability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white lg:text-3xl">
            Ready to Ace Your Interview?
          </h2>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
            Get comprehensive interview preparation with our detailed guides and practice questions.
          </p>
          <Link
            href="/guides/interview-preparation"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Preparing Now
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
