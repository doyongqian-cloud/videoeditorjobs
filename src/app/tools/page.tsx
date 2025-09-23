'use client';

import { siteConfig } from "@/config/site";
import { videoEditingTools, careerTools } from "@/data/site-content";
import Link from "next/link";
import FAQSchema from "@/components/FAQ/FAQSchema";
import { sendEvent, GA4_EVENTS } from "@/lib/analytics";
import { useSEO } from "@/hooks/useSEO";

export default function ToolsPage() {
  // 设置页面SEO元数据
  useSEO({
    title: "Best Video Editing Tools 2025 | Free & Paid Software for Assistant Editors",
    description: "Complete toolkit for assistant video editors: free editing software, resume templates, project management tools. Start with free options, upgrade to professional tools as you grow.",
    keywords: [
      ...siteConfig.keywords,
      "video editing software",
      "tools",
      "resources",
      "free software",
      "professional tools",
      "editing workflow",
      "video editor toolkit",
      "editing software download",
      "career tools video editor",
      "professional software",
      "free editing tools",
      "video editing resources"
    ],
    ogTitle: "Best Video Editing Tools 2025 | Free & Paid Software for Assistant Editors",
    ogDescription: "Complete toolkit for assistant video editors: free editing software, resume templates, project management tools. Start with free options, upgrade to professional tools as you grow.",
    ogImage: "https://assistvideoeditorjobs.com/og-tools.jpg",
    canonical: "https://assistvideoeditorjobs.com/tools"
  });

  // 跟踪工具页面交互
  const handleToolClick = (toolName: string, toolCategory: string, toolType: string) => {
    sendEvent(GA4_EVENTS.CLICK, {
      event_category: 'tool_interaction',
      event_label: toolName,
      element_type: 'tool_card',
      tool_category: toolCategory,
      tool_type: toolType,
    });
  };

  const handleCategoryClick = (categoryName: string) => {
    sendEvent(GA4_EVENTS.CLICK, {
      event_category: 'tool_category',
      event_label: categoryName,
      element_type: 'category_tab',
    });
  };

const toolsFAQs = [
  {
    question: "What's the best free video editing software for beginners?",
    answer: "For beginners, we recommend DaVinci Resolve (free version), OpenShot, or Shotcut. DaVinci Resolve offers professional features for free, while OpenShot and Shotcut are more user-friendly for those just starting out."
  },
  {
    question: "Should I start with free or paid video editing software?",
    answer: "Start with free software to learn the basics and build your portfolio. Once you're comfortable and ready to take on professional projects, consider upgrading to paid software like Adobe Premiere Pro or Final Cut Pro."
  },
  {
    question: "What project management tools do video editors use?",
    answer: "Popular project management tools include Trello, Asana, Monday.com, and Frame.io. These help organize projects, track deadlines, collaborate with teams, and manage client feedback efficiently."
  },
  {
    question: "Do I need expensive equipment to start video editing?",
    answer: "No, you can start with a basic computer and free software. As you progress, you may want to invest in a better graphics card, more RAM, and external storage, but these aren't necessary for learning the fundamentals."
  }
];

  return (
    <>
      <FAQSchema faqs={toolsFAQs} />
      {/* 1. Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-dark dark:to-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Complete{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Video Editor Toolkit
              </span>
            </h1>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark md:text-lg max-w-3xl mx-auto leading-relaxed">
              Professional video editing software with direct download links, plus AI-powered career tools 
              to help you land your dream job as an assistant video editor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#tools-grid"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Tools
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/guides/skills"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Learn Skills
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </section>

      {/* 2. Video Editing Tools Section */}
      <section id="video-tools" className="py-20 lg:py-24 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <span>🎬</span>
              <span>Video Editing Software</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Professional Video Editing Tools
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
              Direct download links to the best video editing software for every skill level and budget
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {videoEditingTools.map((tool, index) => (
              <div
                key={tool.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl duration-500 hover:-translate-y-2 transition-all dark:bg-dark dark:hover:shadow-gray-dark border border-gray-100 dark:border-gray-700"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${
                        tool.isFree 
                          ? 'from-green-400 to-green-500' 
                          : 'from-blue-400 to-blue-500'
                      } flex items-center justify-center text-xl text-white shadow-lg`}>
                        {tool.isFree ? '🆓' : '💎'}
                      </div>
                      <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-sm font-medium ${
                      tool.isFree 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {tool.isFree ? 'Free' : 'Paid'}
                    </span>
                  </div>
                  <p className="mb-8 text-base text-body-color dark:text-body-color-dark leading-relaxed">
                    {tool.description}
                  </p>
                  <Link
                    href={tool.path}
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90 transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View Software & Download
                    <svg
                      className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Career Tools Section */}
      <section id="career-tools" className="py-20 lg:py-24 bg-gray-50 dark:bg-dark/50">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <span>💼</span>
              <span>Career Tools</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              AI-Powered Career Tools
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
              Professional resume builders, templates, and job application tools to land your dream job
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {careerTools.map((tool, index) => (
              <div
                key={tool.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl duration-500 hover:-translate-y-2 transition-all dark:bg-dark dark:hover:shadow-gray-dark border border-gray-100 dark:border-gray-700"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-xl text-white shadow-lg">
                        🤖
                      </div>
                      <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors flex items-center gap-2">
                        {tool.title}
                        {(tool.id === 'ai-resume-builder' || tool.id === 'cover-letter-generator') && (
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800">Beta</span>
                        )}
                      </h3>
                    </div>
                    <span className="rounded-full px-3 py-1 text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Free
                    </span>
                  </div>
                  <p className="mb-8 text-base text-body-color dark:text-body-color-dark leading-relaxed">
                    {tool.description}
                    {(tool.id === 'ai-resume-builder' || tool.id === 'cover-letter-generator') && (
                      <span className="ml-2 inline-block text-xs text-yellow-700 dark:text-yellow-300">(Coming soon)</span>
                    )}
                  </p>
                  <Link
                    href={tool.path}
                    className="inline-flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-base font-medium text-white hover:bg-green-600 transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Use Tool Now
                    <svg
                      className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Quick Start Section */}
      <section className="py-16 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white lg:text-3xl">
              Get Started in Two Steps
            </h2>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
              Download free editing software and use our AI tools to create professional job applications
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-100 p-8 dark:from-gray-800 dark:to-gray-700">
                <div className="mb-4 text-4xl">🎬</div>
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">1. Download Editing Software</h3>
                <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                  Start with free professional software like DaVinci Resolve or Shotcut
                </p>
                <Link
                  href="#video-tools"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  Browse Software
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="rounded-lg bg-gradient-to-r from-green-50 to-emerald-100 p-8 dark:from-gray-800 dark:to-gray-700">
                <div className="mb-4 text-4xl">🤖</div>
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">2. Create Job Applications</h3>
                <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                  Use our AI tools to build professional resumes and cover letters
                </p>
                <Link
                  href="#career-tools"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  Try AI Tools
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white lg:text-3xl">
            Ready to Start Your Video Editing Career?
          </h2>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
            Download professional software and create job-winning applications with our AI tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#video-tools"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Browse Video Software
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#career-tools"
              className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Try AI Career Tools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
