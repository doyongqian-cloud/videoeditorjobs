import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "What Does an Assistant Video Editor Do?",
  description:
    "Learn what an assistant video editor does, daily tasks, responsibilities, and how the role supports senior editors.",
  keywords: [
    "what does an assistant video editor do",
    "assistant video editor responsibilities",
    "assistant editor daily tasks",
  ],
  openGraph: {
    title: "What Does an Assistant Video Editor Do?",
    description:
      "Learn what an assistant video editor does, daily tasks, responsibilities, and how the role supports senior editors.",
    type: "article",
  },
};

const WhatDoesAssistantVideoEditorDo = () => {
  return (
    <>
      {/* SEO: JSON-LD (Article + FAQ) */}
      <Script id="role-article-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What Does an Assistant Video Editor Do?",
          description:
            "Responsibilities, daily workflow, tools, and career growth for assistant video editors.",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://assistantvideoeditor.com/guides/what-does-an-assistant-video-editor-do",
          },
        })}
      </Script>
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-dark dark:to-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
              <span>🎞️</span>
              <span>Role Guide</span>
            </div>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              What Does an <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Assistant Video Editor</span> Do?
            </h1>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark md:text-lg max-w-3xl mx-auto leading-relaxed">
              Get a clear picture of the role: what you do day-to-day, the tools you use, how you collaborate—and practical steps to grow into a full editor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Browse Jobs
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/guides/skills"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Check Skills
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </section>

      <Breadcrumb
        pageName="What Does an Assistant Video Editor Do?"
        description="Understanding the role and responsibilities of an assistant video editor"
      />
      
      {/* At a glance */}
      <section className="pt-8">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-xl bg-white dark:bg-dark border border-gray-100 dark:border-gray-700 p-4 md:p-6 shadow-sm">
              {[{
                label: "Typical Experience",
                value: "0–2 yrs",
              }, {
                label: "Core Tools",
                value: "Premiere / Resolve",
              }, {
                label: "Focus",
                value: "Organization & QC",
              }, {
                label: "Next Step",
                value: "Junior Editor",
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
                  {["Role Overview","Primary Responsibilities","Daily Tasks","Required Skills","Typical Workflow","Tools & Best Practices","Technical Checklist","Collaboration & Communication","Career Path","Common Mistakes to Avoid","Sample Day Schedule","How to Stand Out","Recommended Resources"].map((label) => (
                    <a key={label} href={`#${label.toLowerCase().replace(/\s+/g,'-')}`} className="block text-body-color dark:text-body-color-dark hover:text-primary">
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
                  {["Role Overview","Primary Responsibilities","Daily Tasks","Required Skills","Typical Workflow","Tools & Best Practices","Technical Checklist","Collaboration & Communication","Career Path","Common Mistakes to Avoid","Sample Day Schedule","How to Stand Out","Recommended Resources"].map((label) => (
                    <a key={label} href={`#${label.toLowerCase().replace(/\s+/g,'-')}`} className="block text-body-color dark:text-body-color-dark hover:text-primary">
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div>
              {/* Key Responsibilities */}
              <div className="not-prose bg-gray-50 dark:bg-dark/50 rounded-xl p-6 md:p-8 mb-10">
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">Key Responsibilities</h3>
                <div className="grid gap-4 md:grid-cols-2 text-left">
                  {[
                    { num: "1", title: "Footage Organization", desc: "Sort, label, and organize raw footage and metadata" },
                    { num: "2", title: "Assembly & Rough Cuts", desc: "Create string-outs and rough edits per brief" },
                    { num: "3", title: "Asset Management", desc: "Manage graphics, audio, proxies, and project files" },
                    { num: "4", title: "Quality Control", desc: "Perform technical checks and prepare clean handoffs" },
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">{item.num}</div>
                      <div>
                        <h4 className="font-medium text-black dark:text-white">{item.title}</h4>
                        <p className="text-sm text-body-color dark:text-body-color-dark">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 id="role-overview">Role Overview</h2>
                <p>
                  An assistant video editor supports senior editors across the post-production pipeline—keeping media organized, building assemblies, and ensuring clean, reliable handoffs. The role is often the bridge to becoming a full editor.
                </p>

                <h2 id="primary-responsibilities">Primary Responsibilities</h2>
                <ul>
                  <li><strong>Footage Organization:</strong> Sorting, labeling, and organizing raw video footage</li>
                  <li><strong>Rough Cuts:</strong> Creating initial assembly edits of video projects</li>
                  <li><strong>Asset Management:</strong> Managing video files, graphics, and audio assets</li>
                  <li><strong>Quality Control:</strong> Checking for technical issues and ensuring standards</li>
                  <li><strong>Collaboration:</strong> Working closely with senior editors and production teams</li>
                </ul>

                <h2 id="daily-tasks">Daily Tasks</h2>
                <p>
                  A typical day includes reviewing footage, creating rough cuts, organizing project files, syncing audio, and preparing exports and notes for review.
                </p>

                <h2 id="required-skills">Required Skills</h2>
                <ul>
                  <li>Proficiency in Premiere Pro, DaVinci Resolve, or Final Cut Pro</li>
                  <li>Understanding of formats, codecs, proxies, and color spaces</li>
                  <li>Basic color and audio cleanup; loudness awareness</li>
                  <li>Strong organization, versioning, and time management</li>
                  <li>Attention to detail and quality control</li>
                </ul>

                <h2 id="typical-workflow">Typical Workflow</h2>
                <ol>
                  <li><strong>Ingest & Backup:</strong> Verify media, maintain checksums, generate proxies as needed.</li>
                  <li><strong>Project Setup:</strong> Apply folder structure, import bins, sync audio, label selects.</li>
                  <li><strong>Assembly:</strong> Build string-outs and rough cuts according to script or brief.</li>
                  <li><strong>Versioning:</strong> Use consistent naming (e.g., v1.0 → v1.1) with changelogs.</li>
                  <li><strong>Handoff:</strong> Provide clean timelines, organized media, and concise notes.</li>
                  <li><strong>QC & Conform:</strong> Check formatting, loudness, captions, and relinks for online.</li>
                </ol>

                <h2 id="tools-best-practices">Tools & Best Practices</h2>
                <ul>
                  <li><strong>NLE workflow:</strong> Markers, colors, labeled tracks; keep timelines clean.</li>
                  <li><strong>File management:</strong> Use clear structure and names like DATE_PROJECT_DESC_v1.ext</li>
                  <li><strong>Audio levels:</strong> Target web loudness around -14 LUFS where appropriate</li>
                  <li><strong>Review process:</strong> Respond with timecode-accurate, checklist-based updates</li>
                  <li><strong>Backups:</strong> Follow the 3-2-1 rule: 3 copies, 2 media types, 1 offsite</li>
                </ul>

                <h2 id="technical-checklist">Technical Checklist</h2>
                <ul>
                  <li>Sequence settings match source (frame rate, resolution, color space)</li>
                  <li>Audio channels mapped correctly (mono/stereo/dual-mono)</li>
                  <li>Captions/subtitles synced and exported as needed (SRT/VTT)</li>
                  <li>Export presets documented and reused for consistency</li>
                </ul>

                <h2 id="collaboration-communication">Collaboration & Communication</h2>
                <p>
                  Communicate proactively: clarify briefs, summarize status, document decisions, and flag risks early. When referencing changes, include sequence names and timecodes to reduce ambiguity.
                </p>

                <h2 id="career-path">Career Path</h2>
                <p>
                  Typical progression: assistant editor → junior editor → editor → senior editor. Some specialize in color, motion graphics, audio, or finishing.
                </p>
                <ul>
                  <li><strong>0–1 year:</strong> Solidify organization, technical QC, and reliable handoffs.</li>
                  <li><strong>1–2 years:</strong> Own short-form edits and develop storytelling and pacing.</li>
                  <li><strong>2–3 years:</strong> Lead complex edits and begin mentoring junior teammates.</li>
                </ul>

                <h2 id="common-mistakes-to-avoid">Common Mistakes to Avoid</h2>
                <ul>
                  <li>Inconsistent naming and versioning leading to relink problems</li>
                  <li>Skipping backups before significant timeline changes</li>
                  <li>Over-editing when only an assembly is requested</li>
                  <li>Not documenting export settings and delivery notes</li>
                </ul>

                <h2 id="sample-day-schedule">Sample Day Schedule</h2>
                <ul>
                  <li>09:30 — Ingest and verify media; update project structure</li>
                  <li>11:00 — Assemble rough cut; add markers and comments</li>
                  <li>14:00 — Sync audio, basic cleanup, temp music/graphics</li>
                  <li>16:00 — QC pass; export review file; write concise notes</li>
                  <li>17:30 — Handoff to senior editor; archive and document</li>
                </ul>

                <h2 id="how-to-stand-out">How to Stand Out</h2>
                <ul>
                  <li>Create reusable templates and export presets for the team</li>
                  <li>Offer well-structured cutdowns and alternate versions</li>
                  <li>Maintain a legal library of transitions, SFX, and graphics</li>
                  <li>Track impact: fewer relink issues, faster handoffs, fewer QC notes</li>
                </ul>

                <h2 id="recommended-resources">Recommended Resources</h2>
                <p>
                  Explore learning materials on editing software, file management, audio basics, and color correction. Build a portfolio with varied projects and keep your resume updated with measurable outcomes.
                </p>
              </div>
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
                q: "What software should I learn first?",
                a: "Start with Premiere Pro or DaVinci Resolve. Both are widely used and excellent for assistant workflows.",
              }, {
                q: "Do I need a powerful computer?",
                a: "Not necessarily. Proxies allow smooth editing on modest machines. Focus on fast storage and backups.",
              }, {
                q: "How do I move up to editor?",
                a: "Own short-form edits, communicate clearly, and deliver clean handoffs. Build a portfolio with measurable outcomes.",
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
                    <li>Set up clean folder structure and naming</li>
                    <li>Create export presets and proxy workflow</li>
                    <li>Practice assembly edits from scripts</li>
                    <li>Build a small portfolio with 3–5 projects</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Link href="/guides/how-to-become" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition-all">
                    Next: How to Become
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/guides/skills" className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all">
                    Previous: Skills
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources (match jobs detail grid) */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-dark/50">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">Related Resources</h2>
            <p className="text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">Level up with these next steps</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "How to Become", description: "Step-by-step career roadmap", path: "/guides/how-to-become", icon: "📚" },
              { title: "Skills Development", description: "Essential skills to master", path: "/guides/skills", icon: "⚡" },
              { title: "Resume & Portfolio", description: "Create strong applications", path: "/guides/resume-portfolio", icon: "📄" },
            ].map((resource, index) => (
              <Link
                key={index}
                href={resource.path}
                className="group block overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl duration-500 hover:-translate-y-2 transition-all dark:bg-dark dark:hover:shadow-gray-dark border border-gray-100 dark:border-gray-700"
              >
                <div className="p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center text-2xl text-white shadow-lg">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-base text-body-color dark:text-body-color-dark leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="mt-6 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Learn about this resource
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatDoesAssistantVideoEditorDo;
