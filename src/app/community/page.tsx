import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community for Assistant Video Editors | Connect & Learn",
  description:
    "Join our assistant video editor community: ask questions, share resources, find collaborators, and grow your career together.",
  openGraph: {
    title: "Community for Assistant Video Editors",
    description:
      "Connect with peers, get feedback, discover resources, and collaborate on projects.",
    type: "website",
  },
};

export default function CommunityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-dark dark:to-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium">
              <span>🤝</span>
              <span>Community</span>
            </div>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Connect with the <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Assistant Video Editor</span> Community
            </h1>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark md:text-lg max-w-3xl mx-auto leading-relaxed">
              Ask questions, share tips, and find collaborators. Learn faster by engaging with peers and mentors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/guides/skills"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Skills
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/guides/how-to-become"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Career Guide
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </section>

      {/* Community Info */}
      <section className="py-20 lg:py-24 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-gray-50 dark:bg-dark/50 p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">How You Can Participate</h2>
                <ul className="space-y-3 text-body-color dark:text-body-color-dark">
                  <li>• Ask and answer workflow and QC questions</li>
                  <li>• Share templates, presets, and project structures</li>
                  <li>• Find collaborators for practice and passion projects</li>
                  <li>• Get feedback on edits, reels, and resumes</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-50 dark:bg-dark/50 p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Starter Resources</h2>
                <div className="space-y-3">
                  <Link href="/guides/what-does-an-assistant-video-editor-do" className="block hover:underline">→ Role Overview</Link>
                  <Link href="/guides/skills" className="block hover:underline">→ Essential Skills</Link>
                  <Link href="/guides/resume-portfolio" className="block hover:underline">→ Resume & Portfolio</Link>
                  <Link href="/tools/free-editing-software" className="block hover:underline">→ Free Editing Tools</Link>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-xl bg-primary/5 dark:bg-primary/10 p-8">
              <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">Community Guidelines</h3>
              <ul className="list-disc pl-5 text-body-color dark:text-body-color-dark space-y-2">
                <li>Be constructive and respectful; give context and timecodes when relevant</li>
                <li>Credit sources and use only legal assets for shared materials</li>
                <li>Keep posts organized with clear titles and tags</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


