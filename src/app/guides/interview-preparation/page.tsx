import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { SmartLinks, PageNavigation, LearningPath } from "@/components/Navigation/SmartLinks";

export const metadata: Metadata = {
  title: "Assistant Video Editor Interview Preparation Guide 2025 | Expert Tips & Strategies",
  description: "Complete interview preparation guide for assistant video editor positions. Learn common questions, portfolio presentation tips, salary negotiation strategies, and expert interview techniques to land your dream job.",
  keywords: [
    ...siteConfig.keywords,
    "assistant video editor interview questions",
    "video editor interview preparation",
    "interview tips video editing",
    "portfolio presentation",
    "salary negotiation video editor",
    "interview strategies",
    "career preparation",
    "video editing interview",
    "post production interview",
    "media industry interview"
  ],
  openGraph: {
    title: "Assistant Video Editor Interview Preparation Guide 2025 | Expert Tips & Strategies",
    description: "Complete interview preparation guide for assistant video editor positions. Learn common questions, portfolio presentation tips, and expert strategies.",
    url: "https://assistvideoeditorjobs.com/guides/interview-preparation",
    type: "article",
    publishedTime: "2025-01-15T00:00:00.000Z",
    modifiedTime: "2025-01-15T00:00:00.000Z",
    authors: ["Assistant Video Editor Jobs"],
    images: [
      {
        url: "https://assistvideoeditorjobs.com/og-interview.jpg",
        width: 1200,
        height: 630,
        alt: "Assistant Video Editor Interview Preparation Guide"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Assistant Video Editor Interview Preparation Guide 2025",
    description: "Complete interview preparation guide for assistant video editor positions. Expert tips and strategies to land your dream job.",
    images: ["https://assistvideoeditorjobs.com/og-interview.jpg"]
  },
  alternates: {
    canonical: "https://assistvideoeditorjobs.com/guides/interview-preparation"
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

export default function InterviewPreparationPage() {
  return (
    <>
      {/* SEO: JSON-LD (Article) */}
      <Script id="interview-prep-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Assistant Video Editor Interview Preparation Guide",
          "description": "Complete interview preparation guide for assistant video editor positions. Learn common questions, portfolio presentation tips, salary negotiation strategies, and expert interview techniques.",
          "image": "https://assistvideoeditorjobs.com/og-interview.jpg",
          "author": {
            "@type": "Organization",
            "name": "Assistant Video Editor Jobs"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Assistant Video Editor Jobs",
            "logo": {
              "@type": "ImageObject",
              "url": "https://assistvideoeditorjobs.com/images/logo/logo.svg"
            }
          },
          "datePublished": "2025-01-15T00:00:00.000Z",
          "dateModified": "2025-01-15T00:00:00.000Z",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://assistvideoeditorjobs.com/guides/interview-preparation"
          },
          "totalTime": "PT2H",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
          },
          "step": [
            {
              "@type": "HowToStep",
              "name": "Research the Company",
              "text": "Learn about the company's projects, culture, and recent work. Understand their video editing needs and style preferences."
            },
            {
              "@type": "HowToStep",
              "name": "Prepare Your Portfolio",
              "text": "Select 3-5 best projects that showcase your skills. Prepare to explain your process and decision-making."
            },
            {
              "@type": "HowToStep",
              "name": "Practice Common Questions",
              "text": "Prepare answers for technical questions, behavioral questions, and portfolio walkthroughs."
            },
            {
              "@type": "HowToStep",
              "name": "Prepare Questions to Ask",
              "text": "Develop thoughtful questions about the role, team, and company to show your interest and engagement."
            }
          ]
        })}
      </Script>

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-800 dark:from-emerald-900 dark:to-blue-900 dark:text-emerald-200 rounded-full text-sm font-medium">
                  <span>🎯</span>
                  <span>Complete Interview Guide</span>
            </div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white lg:text-5xl">
              Interview Preparation{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
                    Master Guide
              </span>
            </h1>
                <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Master every aspect of assistant video editor interviews. From common questions to portfolio presentation, salary negotiation to follow-up strategies, we provide you with complete interview success tactics.
                </p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Common Questions</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">95%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Success Rate Boost</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2 Hours</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Prep Time</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#interview-questions"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Start Preparing
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
              <Link
                    href="/skill-check"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                    Skill Assessment
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </Link>
              <Link
                href="/jobs"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                    Browse Jobs
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
              </Link>
                </div>
              </div>

              {/* Right Content - Interview Preparation Visual */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-blue-600 dark:text-blue-400 text-2xl">💼</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Portfolio Prep</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Curate 3-5 best projects showcasing skills</p>
                      <div className="mt-3 flex items-center text-xs text-blue-600 dark:text-blue-400">
                        <span>30 min</span>
                        <div className="ml-2 w-16 h-1 bg-blue-200 dark:bg-blue-800 rounded-full">
                          <div className="w-3/4 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-purple-600 dark:text-purple-400 text-2xl">🎯</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Question Prep</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Practice common technical & behavioral questions</p>
                      <div className="mt-3 flex items-center text-xs text-purple-600 dark:text-purple-400">
                        <span>45 min</span>
                        <div className="ml-2 w-16 h-1 bg-purple-200 dark:bg-purple-800 rounded-full">
                          <div className="w-2/3 h-1 bg-purple-600 dark:text-purple-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 mt-8">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-emerald-600 dark:text-emerald-400 text-2xl">💬</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mock Interview</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Practice interview skills with friends or mentors</p>
                      <div className="mt-3 flex items-center text-xs text-emerald-600 dark:text-emerald-400">
                        <span>20 min</span>
                        <div className="ml-2 w-16 h-1 bg-emerald-200 dark:bg-emerald-800 rounded-full">
                          <div className="w-1/2 h-1 bg-emerald-600 dark:text-emerald-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-orange-600 dark:text-orange-400 text-2xl">📋</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Company Research</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Understand company culture and project style</p>
                      <div className="mt-3 flex items-center text-xs text-orange-600 dark:text-orange-400">
                        <span>25 min</span>
                        <div className="ml-2 w-16 h-1 bg-orange-200 dark:bg-orange-800 rounded-full">
                          <div className="w-1/4 h-1 bg-orange-600 dark:text-orange-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Enhanced floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-15 animate-bounce delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb
        pageName="Interview Preparation Guide"
        description="Complete interview preparation guide for assistant video editors"
      />

      {/* Interview Preparation Checklist */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Interview Preparation Checklist</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Use this checklist to ensure you&apos;re fully prepared for your interview</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Pre-Interview Preparation</h3>
                <div className="space-y-4">
                  {[
                    { task: "Research company background and projects", completed: false },
                    { task: "Prepare portfolio (3-5 projects)", completed: false },
                    { task: "Practice common question answers", completed: false },
                    { task: "Prepare questions to ask", completed: false },
                    { task: "Confirm interview time and location", completed: false },
                    { task: "Prepare resume and portfolio links", completed: false }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{item.task}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Interview Day</h3>
                <div className="space-y-4">
                  {[
                    { task: "Arrive 15 minutes early", completed: false },
                    { task: "Dress professionally", completed: false },
                    { task: "Bring portfolio and resume", completed: false },
                    { task: "Maintain positive, confident attitude", completed: false },
                    { task: "Listen carefully to questions", completed: false },
                    { task: "Show enthusiasm for the position", completed: false }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{item.task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Table of Contents */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Interview Prep Steps</h3>
                    <nav className="space-y-2">
                      {[
                        { label: "Common Interview Questions", href: "#interview-questions", icon: "❓" },
                        { label: "Portfolio Presentation Tips", href: "#portfolio-presentation", icon: "💼" },
                        { label: "Salary Negotiation Strategies", href: "#salary-negotiation", icon: "💰" },
                        { label: "Follow-up Techniques", href: "#follow-up", icon: "📧" },
                        { label: "Interview Tips Summary", href: "#interview-tips", icon: "💡" }
                      ].map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span>{item.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="space-y-16">
                  {/* Interview Questions Section */}
                  <div id="interview-questions" className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                          ❓
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Common Interview Questions</h2>
                          <p className="text-gray-600 dark:text-gray-400">Prepare professional answers for these common questions</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Questions</h3>
                          <div className="space-y-4">
                            {[
                              {
                                question: "What video editing software are you familiar with?",
                                answer: "I'm proficient in Adobe Premiere Pro and DaVinci Resolve, with some experience in Final Cut Pro. I'm particularly skilled in Premiere Pro's editing, color grading, and audio processing features."
                              },
                              {
                                question: "How do you handle large video projects?",
                                answer: "I use proxy files to ensure smooth editing experience, establish clear folder structures, and use version control to manage different edit versions."
                              },
                              {
                                question: "How do you ensure video quality?",
                                answer: "I carefully check each shot's focus, exposure, and composition, use professional color grading tools, and ensure audio sync and volume balance."
                              }
                            ].map((qa, idx) => (
                              <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{qa.question}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{qa.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Behavioral Questions</h3>
                          <div className="space-y-4">
                            {[
                              {
                                question: "Describe a time you solved a technical problem",
                                answer: "Use the STAR method: Situation, Task, Action, Result. Detail how you analyzed the problem, took action, and achieved positive results."
                              },
                              {
                                question: "How do you manage multiple projects?",
                                answer: "I use project management tools to track progress, set priorities, and maintain communication with team members. I also reserve buffer time to handle urgent situations."
                              },
                              {
                                question: "How do you stay updated with new technologies?",
                                answer: "I regularly follow industry blogs and tutorials, take online courses, and practice new features. I also enjoy exchanging experiences with other editors."
                              }
                            ].map((qa, idx) => (
                              <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{qa.question}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{qa.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Presentation Section */}
                  <div id="portfolio-presentation" className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                          💼
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Portfolio Presentation Tips</h2>
                          <p className="text-gray-600 dark:text-gray-400">How to effectively showcase your work and skills</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Portfolio Preparation</h3>
                          <div className="space-y-4">
                            {[
                              { title: "Curate Best Work", desc: "Select 3-5 projects that best showcase your skills", icon: "⭐" },
                              { title: "Diverse Content", desc: "Include videos of different styles and types", icon: "🎭" },
                              { title: "Project Descriptions", desc: "Prepare detailed explanations of your creative process", icon: "📝" },
                              { title: "Technical Details", desc: "Be ready to explain software and techniques used", icon: "⚙️" }
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                  <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Presentation Tips</h3>
                          <div className="space-y-4">
                            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">💡 Key Points</h4>
                              <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                <li>• Start with your best work</li>
                                <li>• Explain your creative thinking</li>
                                <li>• Demonstrate technical abilities</li>
                                <li>• Highlight teamwork experience</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎯 Common Questions</h4>
                              <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                <li>• &quot;What was the biggest challenge in this project?&quot;</li>
                                <li>• &quot;How did you solve technical problems?&quot;</li>
                                <li>• &quot;What&apos;s your favorite part of this project?&quot;</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Salary Negotiation Section */}
                  <div id="salary-negotiation" className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                          💰
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Salary Negotiation Strategies</h2>
                          <p className="text-gray-600 dark:text-gray-400">How to professionally discuss salary and benefits</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Negotiation Preparation</h3>
                          <div className="space-y-4">
                            {[
                              { title: "Market Research", desc: "Understand industry salary levels and regional differences", icon: "📊" },
                              { title: "Skill Assessment", desc: "Objectively evaluate your skills and experience value", icon: "🎯" },
                              { title: "Set Goals", desc: "Determine ideal salary range and bottom line", icon: "🎯" },
                              { title: "Consider Benefits", desc: "Think beyond salary to other benefits", icon: "🎁" }
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                  <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Negotiation Techniques</h3>
                          <div className="space-y-4">
                            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">💬 Negotiation Phrases</h4>
                              <ul className="text-emerald-800 dark:text-emerald-200 text-sm space-y-1">
                                <li>• &quot;Based on my skills and experience...&quot;</li>
                                <li>• &quot;I understand the market rate is...&quot;</li>
                                <li>• &quot;I&apos;d like to discuss the salary...&quot;</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ Important Notes</h4>
                              <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                                <li>• Stay professional and polite</li>
                                <li>• Have data to support your case</li>
                                <li>• Consider the total compensation package</li>
                                <li>• Don&apos;t rush to accept the first offer</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Follow-up Section */}
                  <div id="follow-up" className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                          📧
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Follow-up Techniques</h2>
                          <p className="text-gray-600 dark:text-gray-400">Professional follow-up strategies after the interview</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Follow-up Timeline</h3>
                          <div className="space-y-4">
                            {[
                              { time: "Within 24 hours", action: "Send thank you email", icon: "📧" },
                              { time: "After 1 week", action: "Inquire about interview results", icon: "📞" },
                              { time: "After 2 weeks", action: "Follow up again", icon: "🔄" },
                              { time: "After 1 month", action: "Maintain connection", icon: "🤝" }
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <span className="text-2xl">{item.icon}</span>
                  <div>
                                  <h4 className="font-semibold text-gray-900 dark:text-white">{item.time}</h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.action}</p>
                                </div>
                              </div>
                            ))}
                  </div>
                </div>
                        
                  <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Email Templates</h3>
                          <div className="space-y-4">
                            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">📧 Thank You Email</h4>
                              <p className="text-orange-800 dark:text-orange-200 text-sm">
                                &quot;Thank you for your time today. I enjoyed our conversation, especially the discussion about [specific topic]. I look forward to hearing your decision.&quot;
                              </p>
                            </div>
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📞 Follow-up Email</h4>
                              <p className="text-blue-800 dark:text-blue-200 text-sm">
                                &quot;I&apos;d like to follow up on the interview results. If you need any additional information, please don&apos;t hesitate to contact me.&quot;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interview Tips Summary */}
                  <div id="interview-tips" className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                          💡
                </div>
                  <div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Interview Success Tips</h2>
                          <p className="text-gray-600 dark:text-gray-400">Key elements to ensure interview success</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        {[
                          {
                            category: "Thorough Preparation",
                            icon: "📚",
                            color: "from-blue-500 to-blue-600",
                            tips: [
                              "Research company and position",
                              "Prepare portfolio",
                              "Practice common questions",
                              "Prepare questions to ask"
                            ]
                          },
                          {
                            category: "Professional Demeanor",
                            icon: "👔",
                            color: "from-purple-500 to-purple-600",
                            tips: [
                              "Arrive on time",
                              "Dress appropriately",
                              "Stay confident",
                              "Listen actively"
                            ]
                          },
                          {
                            category: "Effective Communication",
                            icon: "💬",
                            color: "from-emerald-500 to-emerald-600",
                            tips: [
                              "Express clearly",
                              "Use examples",
                              "Show enthusiasm",
                              "Ask questions"
                            ]
                          }
                        ].map((section, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                            <div className="flex items-center mb-4">
                              <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center text-white text-2xl mr-4`}>
                                {section.icon}
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{section.category}</h3>
                            </div>
                            <ul className="space-y-2">
                              {section.tips.map((tip, tipIdx) => (
                                <li key={tipIdx} className="text-gray-600 dark:text-gray-400 flex items-start">
                                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                                  <span className="text-sm">{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Interview FAQ</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Answers to common interview preparation questions</p>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "How do I showcase my portfolio during the interview?",
                  a: "Prepare a concise portfolio with 3-5 best projects. Create brief introductions for each project, including creative background, technologies used, and challenges faced. Ensure your portfolio is easily accessible via website link or USB drive.",
                  category: "Portfolio"
                },
                {
                  q: "How do I answer 'Why do you want to work for our company?'",
                  a: "Research the company's background, projects, and culture beforehand. Connect your career goals with the company's values and explain how you can add value. Specifically mention certain projects or achievements to show genuine interest.",
                  category: "Company Research"
                },
                {
                  q: "How do I demonstrate my technical abilities in the interview?",
                  a: "Use specific examples to illustrate your technical skills. Prepare answers for technical questions like handling large projects and solving technical problems. If possible, briefly demonstrate your workflow.",
                  category: "Technical Skills"
                },
                {
                  q: "How do I prepare for salary negotiation?",
                  a: "Research market salary levels and understand your skill value. Prepare a reasonable salary range and consider the total compensation package (including benefits, vacation, etc.). Discuss salary later in the interview process, maintaining a professional and open attitude.",
                  category: "Salary Negotiation"
                },
                {
                  q: "How do I follow up after the interview?",
                  a: "Send a thank-you email within 24 hours, reiterating your interest in the position. Follow up politely after one week to inquire about the interview results. Stay professional and patient, avoiding overly frequent contact.",
                  category: "Follow-up"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{item.q}</h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full whitespace-nowrap">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Links Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* 相关页面推荐 */}
              <div className="lg:col-span-2">
                <SmartLinks 
                  currentPageId="interview-preparation"
                  type="related"
                  limit={4}
                  title="Continue Your Learning Journey"
                />
            </div>

              {/* 学习路径推荐 */}
              <div className="lg:col-span-1">
                <LearningPath currentPageId="interview-preparation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gray-50 dark:bg-dark/50">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Ready to Start Your Interview Preparation?</h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    Use this complete interview preparation guide to boost your success rate and land your ideal assistant video editor position.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Link href="/guides/resume-portfolio" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition-all">
                    Previous: Resume & Portfolio
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </Link>
                  <Link href="/jobs" className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all">
                    Browse Jobs
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页面导航 */}
      <PageNavigation currentPageId="interview-preparation" category="guide" />

      {/* Related Guides Section */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-dark/50">
        <div className="container">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">
                Explore Other Career Guides
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
                Continue your career development journey with these helpful resources
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "How to Become an Assistant Video Editor",
                  description: "Complete guide to career development from scratch",
                  path: "/guides/how-to-become",
                  icon: "🚀",
                },
                {
                  title: "Essential Skills",
                  description: "Learn the skills you need to succeed",
                  path: "/guides/skills",
                  icon: "💡",
                },
                {
                  title: "Resume & Portfolio Tips",
                  description: "Create compelling materials to land jobs",
                  path: "/guides/resume-portfolio",
                  icon: "📄",
                },
              ].map((guide, index) => (
              <Link
                key={index}
                href={guide.path}
                className="group block overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl duration-500 hover:-translate-y-2 transition-all dark:bg-dark dark:hover:shadow-gray-dark border border-gray-100 dark:border-gray-700"
              >
                <div className="p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center text-2xl text-white shadow-lg">
                      {guide.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="text-base text-body-color dark:text-body-color-dark leading-relaxed">
                    {guide.description}
                  </p>
                  <div className="mt-6 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Read Guide
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
}
