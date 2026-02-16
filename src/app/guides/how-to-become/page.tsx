import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { SmartLinks, PageNavigation, LearningPath } from "@/components/Navigation/SmartLinks";

export const metadata: Metadata = {
  title: "How to Become an Assistant Video Editor: Complete Career Guide 2025",
  description:
    "Complete step-by-step guide on how to become an assistant video editor. Learn essential skills, training requirements, portfolio building, and job search strategies to start your video editing career.",
  keywords: [
    "how to become an assistant video editor",
    "assistant video editor career guide",
    "video editing career path",
    "assistant editor training",
    "video editing skills",
    "entry level video editor",
    "video editing portfolio",
    "video editing job search"
  ],
  openGraph: {
    title: "How to Become an Assistant Video Editor: Complete Career Guide 2025",
    description:
      "Complete step-by-step guide on how to become an assistant video editor. Learn essential skills, training requirements, and job search strategies.",
    url: "https://assistvideoeditorjobs.com/guides/how-to-become",
    type: "article",
    publishedTime: "2025-01-15T00:00:00.000Z",
    modifiedTime: "2025-01-15T00:00:00.000Z",
    authors: ["Assistant Video Editor Jobs"],
    images: [
      {
        url: "https://assistvideoeditorjobs.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "How to Become an Assistant Video Editor - Complete Career Guide"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Become an Assistant Video Editor: Complete Career Guide 2025",
    description: "Complete step-by-step guide on how to become an assistant video editor. Learn essential skills and job search strategies.",
    images: ["https://assistvideoeditorjobs.com/og.jpg"]
  },
  alternates: {
    canonical: "https://assistvideoeditorjobs.com/guides/how-to-become"
  }
};

const HowToBecome = () => {
  return (
    <>
      {/* SEO: JSON-LD (Article) */}
      <Script id="become-article-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Become an Assistant Video Editor",
          "description": "Complete step-by-step guide on how to become an assistant video editor. Learn essential skills, training requirements, portfolio building, and job search strategies.",
          "image": "https://assistvideoeditorjobs.com/og.jpg",
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
            "@id": "https://assistvideoeditorjobs.com/guides/how-to-become"
          },
          "totalTime": "PT6H",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0-500"
          },
          "supply": [
            {
              "@type": "HowToSupply",
              "name": "Computer with video editing software"
            },
            {
              "@type": "HowToSupply", 
              "name": "Video editing software (free or paid)"
            }
          ],
          "tool": [
            {
              "@type": "HowToTool",
              "name": "Video editing software"
            },
            {
              "@type": "HowToTool",
              "name": "Portfolio website"
            }
          ],
          "step": [
            {
              "@type": "HowToStep",
              "name": "Education & Training",
              "text": "While formal education isn't always required, consider pursuing film or media production degree, video editing certification programs, online courses and tutorials, workshops and bootcamps."
            },
            {
              "@type": "HowToStep", 
              "name": "Develop Essential Skills",
              "text": "Master technical skills (NLEs, file management, proxies, formats, and codecs), creative skills (storytelling, pacing, visual composition), soft skills (communication, teamwork, time management), and industry knowledge (post-production pipeline and QA basics)."
            },
            {
              "@type": "HowToStep",
              "name": "Build Your Portfolio", 
              "text": "Create a diverse portfolio showcasing personal projects and passion pieces, student films or collaborative work, before/after editing examples, and different video styles and genres."
            },
            {
              "@type": "HowToStep",
              "name": "Gain Experience",
              "text": "Start with internships, volunteer work, or freelance projects to build real-world experience and professional connections."
            },
            {
              "@type": "HowToStep",
              "name": "Network & Apply",
              "text": "Join industry groups, attend events, build online presence, and apply to entry-level positions with your portfolio."
            },
            {
              "@type": "HowToStep",
              "name": "Continue Learning",
              "text": "Stay updated with new software, techniques, and industry trends to advance your career."
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
                  <span>🚀</span>
                  <span>Complete Career Roadmap</span>
                </div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white lg:text-5xl">
                  How to Become an{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
                    Assistant Video Editor
                  </span>
                </h1>
                <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Your complete roadmap from beginner to professional. Learn the exact skills, build the right portfolio, and land your first role in video editing. Join thousands who&apos;ve successfully transitioned into this rewarding career.
                </p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6-12</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Months to Ready</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">$35K+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Starting Salary</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">85%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Success Rate</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#step-1"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Start Your Journey
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <Link
                    href="/skill-check"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    Assess Your Skills
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </Link>
                  <Link
                    href="/jobs/entry-level-assistant-video-editor"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    Browse Jobs
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right Content - Enhanced Visual Elements */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-blue-600 dark:text-blue-400 text-2xl">📚</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Learn Skills</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Master essential video editing tools and techniques</p>
                      <div className="mt-3 flex items-center text-xs text-blue-600 dark:text-blue-400">
                        <span>6-8 weeks</span>
                        <div className="ml-2 w-16 h-1 bg-blue-200 dark:bg-blue-800 rounded-full">
                          <div className="w-3/4 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-purple-600 dark:text-purple-400 text-2xl">💼</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Build Portfolio</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Create compelling work samples that get you hired</p>
                      <div className="mt-3 flex items-center text-xs text-purple-600 dark:text-purple-400">
                        <span>3-5 projects</span>
                        <div className="ml-2 w-16 h-1 bg-purple-200 dark:bg-purple-800 rounded-full">
                          <div className="w-2/3 h-1 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 mt-8">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-emerald-600 dark:text-emerald-400 text-2xl">🎯</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Get Experience</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Start with internships and freelance projects</p>
                      <div className="mt-3 flex items-center text-xs text-emerald-600 dark:text-emerald-400">
                        <span>2-4 months</span>
                        <div className="ml-2 w-16 h-1 bg-emerald-200 dark:bg-emerald-800 rounded-full">
                          <div className="w-1/2 h-1 bg-emerald-600 dark:bg-emerald-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-orange-600 dark:text-orange-400 text-2xl">🚀</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Land Your Job</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Apply strategically and advance your career</p>
                      <div className="mt-3 flex items-center text-xs text-orange-600 dark:text-orange-400">
                        <span>1-3 months</span>
                        <div className="ml-2 w-16 h-1 bg-orange-200 dark:bg-orange-800 rounded-full">
                          <div className="w-1/4 h-1 bg-orange-600 dark:bg-orange-400 rounded-full"></div>
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
        pageName="How to Become an Assistant Video Editor"
        description="Your complete guide to starting a career as an assistant video editor"
      />

      {/* Skill Assessment Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Quick Skill Assessment</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Evaluate your current skills and get personalized recommendations</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Rate Your Skills</h3>
                <div className="space-y-6">
                  {[
                    { skill: "Video Editing Software", desc: "Premiere Pro, DaVinci Resolve, etc." },
                    { skill: "File Organization", desc: "Managing media and project files" },
                    { skill: "Audio Sync & Mixing", desc: "Basic audio editing skills" },
                    { skill: "Color Correction", desc: "Basic color grading knowledge" },
                    { skill: "Storytelling", desc: "Understanding narrative structure" }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{item.skill}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                        </div>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button key={rating} className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                              <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 mx-auto mt-0.5"></div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>💡 Tip:</strong> Be honest about your current level. This helps us provide better recommendations for your learning path.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Your Learning Path</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Strong Areas</h4>
                    <p className="text-sm text-green-800 dark:text-green-200">Focus on building your portfolio and gaining experience</p>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ Areas to Improve</h4>
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">Dedicate extra time to these skills in your learning plan</p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">🚨 Priority Learning</h4>
                    <p className="text-sm text-red-800 dark:text-red-200">Start with these fundamentals before moving forward</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/skill-check"
                    className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Take Full Assessment
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Overview Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Career Journey at a Glance</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Key milestones and expectations for your path to becoming an assistant video editor</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{
                icon: "⏱️",
                label: "Learning Timeline",
                value: "6–12 weeks",
                description: "Intensive skill building"
              }, {
                icon: "📁",
                label: "Portfolio Projects",
                value: "3–5 pieces",
                description: "Quality over quantity"
              }, {
                icon: "🎯",
                label: "Key Focus",
                value: "Organization",
                description: "Clean workflows matter"
              }, {
                icon: "💼",
                label: "First Goal",
                value: "Entry Role",
                description: "Land your first job"
              }].map((item, idx) => (
                <div key={idx} className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.value}</div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{item.label}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{item.description}</div>
                </div>
              ))}
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
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Journey Steps</h3>
                    <nav className="space-y-2">
                      {[
                        { label: "Step 1: Education & Training", href: "#step-1", icon: "🎓" },
                        { label: "Step 2: Develop Skills", href: "#step-2", icon: "🛠️" },
                        { label: "Step 3: Build Portfolio", href: "#step-3", icon: "📁" },
                        { label: "Step 4: Gain Experience", href: "#step-4", icon: "💼" },
                        { label: "Step 5: Network & Apply", href: "#step-5", icon: "🤝" },
                        { label: "Step 6: Continue Learning", href: "#step-6", icon: "📈" }
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
                  {/* Step 1: Education & Training */}
                  <div id="step-1" className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                          1
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education & Training</h2>
                          <p className="text-gray-600 dark:text-gray-400">Build your foundation with the right education</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Formal Education Options</h3>
                          <div className="space-y-4">
                            {[
                              { title: "Film/Media Degree", desc: "Comprehensive foundation in video production", time: "2-4 years", cost: "$$$$" },
                              { title: "Certification Programs", desc: "Focused training in specific software", time: "3-6 months", cost: "$$" },
                              { title: "Online Courses", desc: "Flexible, self-paced learning", time: "1-3 months", cost: "$" },
                              { title: "Bootcamps", desc: "Intensive, hands-on training", time: "4-12 weeks", cost: "$$$" }
                            ].map((option, idx) => (
                              <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-semibold text-gray-900 dark:text-white">{option.title}</h4>
                                  <div className="flex space-x-2 text-xs">
                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">{option.time}</span>
                                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">{option.cost}</span>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{option.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recommended Resources</h3>
                          <div className="space-y-3">
                            {[
                              "Adobe Creative Suite tutorials",
                              "DaVinci Resolve free training",
                              "YouTube video editing channels",
                              "LinkedIn Learning courses",
                              "Skillshare creative classes"
                            ].map((resource, idx) => (
                              <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <span className="text-blue-600 dark:text-blue-400">✓</span>
                                <span className="text-gray-700 dark:text-gray-300">{resource}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tip</h4>
                            <p className="text-blue-800 dark:text-blue-200 text-sm">Start with free resources to test your interest before investing in paid courses.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Develop Essential Skills */}
                  <div id="step-2" className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                          2
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Develop Essential Skills</h2>
                          <p className="text-gray-600 dark:text-gray-400">Master the technical and creative skills you need</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-8">
                        {[
                          {
                            category: "Technical Skills",
                            icon: "🛠️",
                            color: "from-blue-500 to-blue-600",
                            skills: [
                              "NLE Software (Premiere Pro, DaVinci Resolve)",
                              "File Management & Organization",
                              "Codecs, Formats & Proxies",
                              "Audio Sync & Basic Mixing",
                              "Color Correction Fundamentals"
                            ]
                          },
                          {
                            category: "Creative Skills",
                            icon: "🎨",
                            color: "from-purple-500 to-purple-600",
                            skills: [
                              "Storytelling & Narrative Structure",
                              "Visual Composition & Framing",
                              "Rhythm & Timing",
                              "Color Theory & Visual Hierarchy",
                              "Creative Problem Solving"
                            ]
                          },
                          {
                            category: "Soft Skills",
                            icon: "🤝",
                            color: "from-green-500 to-green-600",
                            skills: [
                              "Communication & Collaboration",
                              "Time Management & Deadlines",
                              "Attention to Detail",
                              "Problem Solving & Troubleshooting",
                              "Adaptability & Learning"
                            ]
                          }
                        ].map((skillGroup, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                            <div className="flex items-center mb-4">
                              <div className={`w-12 h-12 bg-gradient-to-r ${skillGroup.color} rounded-xl flex items-center justify-center text-white text-2xl mr-4`}>
                                {skillGroup.icon}
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skillGroup.category}</h3>
                            </div>
                            <ul className="space-y-2">
                              {skillGroup.skills.map((skill, skillIdx) => (
                                <li key={skillIdx} className="text-gray-600 dark:text-gray-400 flex items-start">
                                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                                  <span className="text-sm">{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Build Your Portfolio */}
                  <div id="step-3" className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                          3
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Build Your Portfolio</h2>
                          <p className="text-gray-600 dark:text-gray-400">Create compelling work samples that showcase your skills</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Portfolio Components</h3>
                          <div className="space-y-4">
                            {[
                              { title: "Personal Projects", desc: "Passion pieces that demonstrate your creative vision", icon: "🎨" },
                              { title: "Student Films", desc: "Collaborative work showing teamwork skills", icon: "🎬" },
                              { title: "Before/After Examples", desc: "Show your editing process and improvements", icon: "🔄" },
                              { title: "Different Genres", desc: "Variety in style, length, and content type", icon: "🎭" },
                              { title: "Process Documentation", desc: "Explain your workflow and decision-making", icon: "📝" }
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
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Portfolio Best Practices</h3>
                          <div className="space-y-4">
                            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">📁 Portfolio Checklist</h4>
                              <ul className="text-emerald-800 dark:text-emerald-200 text-sm space-y-1">
                  <li>• 3-5 high-quality projects</li>
                  <li>• Clear project descriptions</li>
                  <li>• Contact information and resume</li>
                  <li>• Mobile-friendly design</li>
                  <li>• Fast loading times</li>
                </ul>
                            </div>
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tips</h4>
                              <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                <li>• Lead with your best work</li>
                                <li>• Include project context and challenges</li>
                                <li>• Show your creative process</li>
                                <li>• Keep it updated regularly</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>

                  {/* Step 4: Gain Experience */}
                  <div id="step-4" className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                          4
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Gain Experience</h2>
                          <p className="text-gray-600 dark:text-gray-400">Build real-world experience through practical opportunities</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        {[
                          {
                            title: "Internships",
                            icon: "🏢",
                            color: "from-blue-500 to-blue-600",
                            description: "Unpaid or low-paid positions to gain industry exposure",
                            benefits: ["Industry connections", "Real project experience", "Mentorship opportunities", "Resume building"]
                          },
                          {
                            title: "Volunteer Work",
                            icon: "🤝",
                            color: "from-green-500 to-green-600",
                            description: "Non-profit organizations, local events, student projects",
                            benefits: ["Portfolio pieces", "Community impact", "Skill practice", "Networking"]
                          },
                          {
                            title: "Freelance Projects",
                            icon: "💼",
                            color: "from-purple-500 to-purple-600",
                            description: "Small jobs to build your reputation and portfolio",
                            benefits: ["Income generation", "Client management", "Project variety", "Business skills"]
                          }
                        ].map((exp, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                            <div className="flex items-center mb-4">
                              <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center text-white text-2xl mr-4`}>
                                {exp.icon}
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                            <ul className="space-y-2">
                              {exp.benefits.map((benefit, benefitIdx) => (
                                <li key={benefitIdx} className="text-gray-600 dark:text-gray-400 flex items-start">
                                  <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                                  <span className="text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🚀 Getting Started Tips</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                            <li>• Start with personal projects to build confidence</li>
                            <li>• Reach out to local filmmakers and content creators</li>
                            <li>• Join online communities and forums</li>
                          </ul>
                          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                            <li>• Create a simple website to showcase your work</li>
                            <li>• Be proactive in seeking opportunities</li>
                            <li>• Always deliver quality work, even for free projects</li>
              </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Network & Apply */}
                  <div id="step-5" className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                          5
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Network & Apply</h2>
                          <p className="text-gray-600 dark:text-gray-400">Build professional connections and land your first job</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Networking Strategies</h3>
                          <div className="space-y-4">
                            {[
                              { title: "Industry Groups", desc: "Join professional associations and online communities", icon: "👥" },
                              { title: "Events & Conferences", desc: "Attend workshops, meetups, and industry gatherings", icon: "🎪" },
                              { title: "Online Presence", desc: "Maintain professional social media profiles", icon: "🌐" },
                              { title: "Informational Interviews", desc: "Connect with professionals for advice and insights", icon: "💬" }
                            ].map((strategy, idx) => (
                              <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <span className="text-2xl">{strategy.icon}</span>
                                <div>
                                  <h4 className="font-semibold text-gray-900 dark:text-white">{strategy.title}</h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{strategy.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Application Strategy</h3>
                          <div className="space-y-4">
                            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">📝 Application Checklist</h4>
                              <ul className="text-indigo-800 dark:text-indigo-200 text-sm space-y-1">
                                <li>• Tailored resume for each position</li>
                                <li>• Compelling cover letter</li>
                                <li>• Portfolio link prominently displayed</li>
                                <li>• Follow up within 1 week</li>
                                <li>• Research company beforehand</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🎯 Job Search Tips</h4>
                              <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                                <li>• Apply to 5-10 jobs per week</li>
                                <li>• Use multiple job boards</li>
                                <li>• Leverage your network</li>
                                <li>• Practice interview skills</li>
              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 6: Continue Learning */}
                  <div id="step-6" className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                          6
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Continue Learning</h2>
                          <p className="text-gray-600 dark:text-gray-400">Stay current and advance your career through continuous growth</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Learning Areas</h3>
                          <div className="space-y-4">
                            {[
                              { title: "Software Updates", desc: "Learn new features and capabilities", icon: "💻" },
                              { title: "Industry Trends", desc: "Follow blogs, podcasts, and publications", icon: "📈" },
                              { title: "Skill Development", desc: "Take advanced courses and workshops", icon: "🎓" },
                              { title: "Mentorship", desc: "Find mentors and offer to mentor others", icon: "🤝" },
                              { title: "Certifications", desc: "Pursue relevant certifications", icon: "🏆" }
                            ].map((area, idx) => (
                              <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <span className="text-2xl">{area.icon}</span>
                                <div>
                                  <h4 className="font-semibold text-gray-900 dark:text-white">{area.title}</h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{area.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Learning Resources</h3>
                          <div className="space-y-4">
                            <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200 dark:border-pink-800">
                              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">📚 Recommended Learning</h4>
                              <ul className="text-pink-800 dark:text-pink-200 text-sm space-y-1">
                                <li>• Adobe Creative Cloud tutorials</li>
                                <li>• DaVinci Resolve certification</li>
                                <li>• Film editing masterclasses</li>
                                <li>• Color grading workshops</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🔄 Continuous Growth</h4>
                              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                                <li>• Set monthly learning goals</li>
                                <li>• Join professional communities</li>
                                <li>• Attend industry conferences</li>
                                <li>• Share knowledge with others</li>
              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Progress Tracker */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Track Your Progress</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Use this checklist to stay on track with your journey</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "Education & Training",
                  icon: "🎓",
                  tasks: [
                    "Complete basic video editing course",
                    "Learn Adobe Premiere Pro basics",
                    "Practice with sample footage",
                    "Take color grading workshop"
                  ]
                },
                {
                  step: "Skill Development",
                  icon: "🛠️",
                  tasks: [
                    "Master file organization",
                    "Learn audio sync techniques",
                    "Practice different editing styles",
                    "Study film theory basics"
                  ]
                },
                {
                  step: "Portfolio Building",
                  icon: "📁",
                  tasks: [
                    "Create 3 personal projects",
                    "Document your process",
                    "Build portfolio website",
                    "Get feedback from peers"
                  ]
                },
                {
                  step: "Experience Gaining",
                  icon: "💼",
                  tasks: [
                    "Apply for internships",
                    "Volunteer for local projects",
                    "Start freelance work",
                    "Join industry communities"
                  ]
                },
                {
                  step: "Networking",
                  icon: "🤝",
                  tasks: [
                    "Attend industry events",
                    "Connect on LinkedIn",
                    "Join online forums",
                    "Find a mentor"
                  ]
                },
                {
                  step: "Job Search",
                  icon: "🎯",
                  tasks: [
                    "Apply to 10+ positions",
                    "Prepare for interviews",
                    "Follow up on applications",
                    "Negotiate your first offer"
                  ]
                }
              ].map((section, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{section.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{section.step}</h3>
                  </div>
                  <div className="space-y-3">
                    {section.tasks.map((task, taskIdx) => (
                      <div key={taskIdx} className="flex items-center space-x-3">
                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Essential Resources</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Tools, courses, and communities to accelerate your learning</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Learning Platforms",
                  icon: "📚",
                  color: "from-blue-500 to-blue-600",
                  resources: [
                    { name: "LinkedIn Learning", desc: "Professional video editing courses", link: "#" },
                    { name: "Skillshare", desc: "Creative video editing classes", link: "#" },
                    { name: "YouTube", desc: "Free tutorials and walkthroughs", link: "#" },
                    { name: "Adobe Learn", desc: "Official Premiere Pro training", link: "#" }
                  ]
                },
                {
                  category: "Software & Tools",
                  icon: "💻",
                  color: "from-purple-500 to-purple-600",
                  resources: [
                    { name: "Adobe Premiere Pro", desc: "Industry standard NLE", link: "#" },
                    { name: "DaVinci Resolve", desc: "Free professional editor", link: "#" },
                    { name: "Final Cut Pro", desc: "Mac-exclusive editor", link: "#" },
                    { name: "Avid Media Composer", desc: "Professional broadcast editor", link: "#" }
                  ]
                },
                {
                  category: "Communities",
                  icon: "👥",
                  color: "from-green-500 to-green-600",
                  resources: [
                    { name: "r/VideoEditing", desc: "Reddit community", link: "#" },
                    { name: "Creative Cow", desc: "Professional forums", link: "#" },
                    { name: "Frame.io", desc: "Collaboration platform", link: "#" },
                    { name: "Local Meetups", desc: "In-person networking", link: "#" }
                  ]
                }
              ].map((category, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white text-2xl mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.resources.map((resource, resourceIdx) => (
                      <div key={resourceIdx} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{resource.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{resource.desc}</p>
                        <a href={resource.link} className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                          Learn more →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Get answers to common questions about becoming an assistant video editor</p>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "How long does it take to become an assistant video editor?",
                  a: "Typically 6-12 months with dedicated learning and practice. This includes mastering basic software, building a portfolio, and gaining initial experience through internships or freelance work. The timeline can vary based on your prior experience and the time you can dedicate to learning.",
                  category: "Timeline"
                },
                {
                  q: "Do I need a degree to become an assistant video editor?",
                  a: "No, a degree is not required. Many successful assistant editors are self-taught or have taken online courses. However, formal education can provide a structured learning path, industry connections, and a deeper understanding of film theory and production processes.",
                  category: "Education"
                },
                {
                  q: "What software should I learn first?",
                  a: "Start with Adobe Premiere Pro as it's the most widely used in the industry. DaVinci Resolve is also excellent and free, making it perfect for beginners. Focus on mastering one software before moving to others. Most skills transfer between different editing programs.",
                  category: "Software"
                },
                {
                  q: "How much can I expect to earn as an assistant video editor?",
                  a: "Entry-level salaries typically range from $35,000-$45,000 annually, depending on location and company size. Freelance rates vary from $15-30 per hour for beginners. With experience, you can expect significant salary increases and more opportunities.",
                  category: "Salary"
                },
                {
                  q: "What's the difference between an assistant editor and a video editor?",
                  a: "Assistant editors focus on organization, rough cuts, and technical tasks like syncing audio, creating proxies, and managing media. Video editors handle creative decisions, final cuts, and client interactions. Assistant editing is often a stepping stone to becoming a full editor.",
                  category: "Roles"
                },
                {
                  q: "What skills are most important for assistant video editors?",
                  a: "Organization and attention to detail are crucial, as you'll manage large amounts of media. Technical proficiency with editing software, understanding of file formats and codecs, and strong communication skills are also essential. Creative thinking helps, but technical reliability is paramount.",
                  category: "Skills"
                },
                {
                  q: "How do I build a portfolio without professional experience?",
                  a: "Start with personal projects, student films, or volunteer work. Create before/after examples showing your editing process. Document your workflow and decision-making. Even small projects can demonstrate your skills and attention to detail to potential employers.",
                  category: "Portfolio"
                },
                {
                  q: "What's the career progression for assistant video editors?",
                  a: "Many assistant editors advance to full video editor roles, then to senior editor or post-production supervisor positions. Some specialize in specific areas like color grading, sound design, or motion graphics. The path often leads to creative director or freelance consultant roles.",
                  category: "Career Path"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
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
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* 相关页面推荐 */}
              <div className="lg:col-span-2">
                <SmartLinks 
                  currentPageId="how-to-become"
                  type="related"
                  limit={4}
                  title="Continue Your Learning Journey"
                />
              </div>
              
              {/* 学习路径推荐 */}
              <div className="lg:col-span-1">
                <LearningPath currentPageId="how-to-become" />
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
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Ready to Start Your Journey?</h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    Follow this guide step by step to build your skills and land your first assistant video editor role.
                  </p>
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

      {/* 页面导航 */}
      <PageNavigation currentPageId="how-to-become" category="guide" />
    </>
  );
};

export default HowToBecome;
