import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Become an Assistant Video Editor",
  description:
    "Step-by-step guide on how to become an assistant video editor. Learn skills, training, and tips to start your career.",
  keywords: [
    "how to become an assistant video editor",
  ],
  openGraph: {
    title: "How to Become an Assistant Video Editor",
    description:
      "Step-by-step guide on how to become an assistant video editor. Learn skills, training, and tips to start your career.",
    type: "article",
  },
};

const HowToBecome = () => {
  return (
    <>
      {/* SEO: JSON-LD (Article) */}
      <Script id="become-article-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Become an Assistant Video Editor",
          description:
            "Skills to learn, portfolio to build, and steps to land your first assistant editor job.",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://assistantvideoeditor.com/guides/how-to-become",
          },
        })}
      </Script>

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-dark dark:to-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full text-sm font-medium">
              <span>🧭</span>
              <span>Career Guide</span>
            </div>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              How to Become an <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Assistant Video Editor</span>
            </h1>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark md:text-lg max-w-3xl mx-auto leading-relaxed">
              A practical roadmap: the exact skills to learn, portfolio to build, and actions to land your first role.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/guides/skills" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">Check Skills</Link>
              <Link href="/jobs/entry-level-assistant-video-editor" className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300">View Entry-Level Jobs</Link>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </section>

      <Breadcrumb
        pageName="How to Become an Assistant Video Editor"
        description="Your complete guide to starting a career as an assistant video editor"
      />

      {/* At a glance */}
      <section className="pt-8">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-xl bg-white dark:bg-dark border border-gray-100 dark:border-gray-700 p-4 md:p-6 shadow-sm">
              {[{
                label: "Learning Path",
                value: "6–12 weeks",
              }, {
                label: "Portfolio Size",
                value: "3–5 projects",
              }, {
                label: "Must-have",
                value: "Clean workflow",
              }, {
                label: "Goal",
                value: "First offer",
              }].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-black dark:text-white">{item.value}</div>
                  <div className="text-xs md:text-sm text-body-color dark:text-body-color-dark">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-10">
        <div className="container">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
            {/* Mobile TOC */}
            <div className="lg:hidden -mt-4">
              <details className="rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-dark p-4">
                <summary className="cursor-pointer text-sm font-medium text-black dark:text-white">On this page</summary>
                <nav className="mt-3 space-y-2 text-sm">
                  {["Step 1: Education & Training","Step 2: Develop Essential Skills","Step 3: Build Your Portfolio","Step 4: Gain Experience","Step 5: Network & Apply","Step 6: Continue Learning"].map((label) => (
                    <a key={label} href={`#${label.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}`} className="block text-body-color dark:text-body-color-dark hover:text-primary">
                      {label}
                    </a>
                  ))}
                </nav>
              </details>
            </div>

            {/* Sticky In-Page Nav */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-dark p-4">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">On this page</div>
                <nav className="space-y-2 text-sm">
                  {["Step 1: Education & Training","Step 2: Develop Essential Skills","Step 3: Build Your Portfolio","Step 4: Gain Experience","Step 5: Network & Apply","Step 6: Continue Learning"].map((label) => (
                    <a key={label} href={`#${label.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}`} className="block text-body-color dark:text-body-color-dark hover:text-primary">
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <h2 id="step-1-education-training">Step 1: Education & Training</h2>
              <p>While formal education isn&apos;t always required, consider pursuing:</p>
              <ul>
                <li>Film or media production degree</li>
                <li>Video editing certification programs</li>
                <li>Online courses and tutorials</li>
                <li>Workshops and bootcamps</li>
              </ul>

              <h2 id="step-2-develop-essential-skills">Step 2: Develop Essential Skills</h2>
              <p>Master these fundamental skills:</p>
              <ul>
                <li><strong>Technical Skills:</strong> NLEs, file management, proxies, formats, and codecs</li>
                <li><strong>Creative Skills:</strong> Storytelling, pacing, visual composition</li>
                <li><strong>Soft Skills:</strong> Communication, teamwork, time management</li>
                <li><strong>Industry Knowledge:</strong> Post-production pipeline and QA basics</li>
              </ul>

              <h2 id="step-3-build-your-portfolio">Step 3: Build Your Portfolio</h2>
              <p>Create a diverse portfolio showcasing:</p>
              <ul>
                <li>Personal projects and passion pieces</li>
                <li>Student films or collaborative work</li>
                <li>Before/after editing examples</li>
                <li>Different video styles and genres</li>
              </ul>

              <h2 id="step-4-gain-experience">Step 4: Gain Experience</h2>
              <p>Start building experience through:</p>
              <ul>
                <li>Internships at production companies</li>
                <li>Freelance projects for small clients</li>
                <li>Volunteer work for non-profits</li>
                <li>Student film collaborations</li>
              </ul>

              <h2 id="step-5-network-apply">Step 5: Network & Apply</h2>
              <p>Connect with industry professionals and apply for positions:</p>
              <ul>
                <li>Join professional organizations</li>
                <li>Attend industry events and conferences</li>
                <li>Use online job boards and platforms</li>
                <li>Reach out to local production companies</li>
              </ul>

              <h2 id="step-6-continue-learning">Step 6: Continue Learning</h2>
              <p>Stay current with industry trends and technology:</p>
              <ul>
                <li>Follow industry blogs and publications</li>
                <li>Learn new software and techniques</li>
                <li>Take advanced courses and workshops</li>
                <li>Seek mentorship from experienced editors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-gray-50 dark:bg-dark/50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">FAQ</h2>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-dark">
              {[{
                q: "Do I need a degree to enter the field?",
                a: "Not necessarily. Structured courses and project work are more important; bootcamps and online courses can also help you get started quickly.",
              }, {
                q: "Which software should I learn first?",
                a: "Either Premiere Pro or DaVinci Resolve works well; what's more crucial is understanding proxy editing, transcoding, and delivery workflows.",
              }, {
                q: "How many projects should be in my portfolio?",
                a: "We recommend 3-5 projects covering different genres, demonstrating your organizational skills, assembly abilities, and delivery capabilities.",
              }].map((item, idx) => (
                <details key={idx} className="p-5">
                  <summary className="cursor-pointer font-medium text-black dark:text-white">{item.q}</summary>
                  <p className="mt-2 text-sm text-body-color dark:text-body-color-dark">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Next/Previous */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Quick Start Checklist</h3>
                  <ul className="text-sm text-body-color dark:text-body-color-dark grid gap-2 md:grid-cols-2">
                    <li>Master a mainstream NLE and proxy editing workflow</li>
                    <li>Set up clear file structures and version naming</li>
                    <li>Complete 3-5 showcase projects</li>
                    <li>Prepare resume and a 1-page portfolio description</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Link href="/guides/skills" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition-all">
                    Previous: Skills
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </Link>
                  <Link href="/guides/resume-portfolio" className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all">
                    Next: Resume & Portfolio
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToBecome;
