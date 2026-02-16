import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { SmartLinks, PageNavigation, LearningPath } from "@/components/Navigation/SmartLinks";

export const metadata: Metadata = {
  title: "Assistant Video Editor Resume & Portfolio Guide: Complete 2025 Guide",
  description: "Master resume writing and portfolio creation for assistant video editors. Get templates, examples, and expert tips to land your dream job.",
  keywords: [
    "assistant video editor resume examples",
    "assistant video editor portfolio tips",
    "video editor resume template",
    "creative portfolio examples",
    "resume writing guide",
    "portfolio website design",
    "video editing portfolio",
    "assistant editor resume",
    "creative resume templates",
    "portfolio best practices"
  ],
  openGraph: {
    title: "Assistant Video Editor Resume & Portfolio Guide: Complete 2025 Guide",
    description: "Master resume writing and portfolio creation for assistant video editors. Get templates, examples, and expert tips to land your dream job.",
    url: "https://assistantvideoeditorjobs.com/guides/resume-portfolio",
    type: "article",
    publishedTime: "2025-01-15T00:00:00.000Z",
    modifiedTime: "2025-01-15T00:00:00.000Z",
    authors: ["Assistant Video Editor Jobs"],
    images: [
      {
        url: "https://assistantvideoeditorjobs.com/og-resume-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Assistant Video Editor Resume & Portfolio Guide"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Assistant Video Editor Resume & Portfolio Guide: Complete 2025 Guide",
    description: "Master resume writing and portfolio creation for assistant video editors. Get templates, examples, and expert tips.",
    images: ["https://assistantvideoeditorjobs.com/og-resume-portfolio.jpg"]
  },
  alternates: {
    canonical: "https://assistantvideoeditorjobs.com/guides/resume-portfolio"
  }
};

const ResumePortfolio = () => {
  return (
    <>
      {/* SEO: JSON-LD (Article) */}
      <Script id="resume-portfolio-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Create a Professional Resume and Portfolio for Assistant Video Editors",
          "description": "Complete guide to creating compelling resumes and portfolios that showcase video editing skills effectively.",
          "image": "https://assistantvideoeditorjobs.com/og-resume-portfolio.jpg",
          "author": {
            "@type": "Organization",
            "name": "Assistant Video Editor Jobs"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Assistant Video Editor Jobs",
            "logo": {
              "@type": "ImageObject",
              "url": "https://assistantvideoeditorjobs.com/images/logo/logo.svg"
            }
          },
          "datePublished": "2025-01-15T00:00:00.000Z",
          "dateModified": "2025-01-15T00:00:00.000Z",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://assistantvideoeditorjobs.com/guides/resume-portfolio"
          },
          "totalTime": "PT4H",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0-100"
          },
          "supply": [
            {
              "@type": "HowToSupply",
              "name": "Computer with internet access"
            },
            {
              "@type": "HowToSupply", 
              "name": "Portfolio content and work samples"
            }
          ],
          "tool": [
            {
              "@type": "HowToTool",
              "name": "Resume builder or word processor"
            },
            {
              "@type": "HowToTool",
              "name": "Portfolio website platform"
            }
          ],
          "step": [
            {
              "@type": "HowToStep",
              "name": "Resume Essentials",
              "text": "Create a professional resume with contact information, summary, skills, and experience sections."
            },
            {
              "@type": "HowToStep", 
              "name": "Portfolio Creation",
              "text": "Select and organize your best work samples, create project descriptions, and choose presentation format."
            },
            {
              "@type": "HowToStep",
              "name": "Online Presence",
              "text": "Build professional profiles on LinkedIn, Vimeo, and create a personal website to showcase your work."
            },
            {
              "@type": "HowToStep",
              "name": "Optimization",
              "text": "Optimize for mobile devices, ensure fast loading times, and regularly update with new work."
            }
          ]
        })}
      </Script>

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 dark:from-purple-900 dark:to-blue-900 dark:text-purple-200 rounded-full text-sm font-medium">
                  <span>📄</span>
                  <span>Complete Guide</span>
                </div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white lg:text-5xl">
                  Resume & Portfolio{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
                    Master Guide
                  </span>
                </h1>
                <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Create compelling resumes and portfolios that showcase your video editing skills. Get hired faster with professional presentation and proven strategies.
                </p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3x</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">More Interviews</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">90%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">24h</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Quick Setup</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#resume-essentials"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Start Building
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <Link
                    href="/tools/ai-resume-builder"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    Use AI Builder
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right Content - Visual Elements */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-purple-600 dark:text-purple-400 text-2xl">📝</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Resume Templates</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Professional templates designed for video editors</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-blue-600 dark:text-blue-400 text-2xl">🎨</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Portfolio Showcase</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Showcase your best work effectively</p>
                    </div>
                  </div>
                  <div className="space-y-6 mt-8">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-indigo-600 dark:text-indigo-400 text-2xl">💼</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Job Ready</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Get noticed by employers</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-green-600 dark:text-green-400 text-2xl">🚀</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Setup</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Ready in under 24 hours</p>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb
        pageName="Resume & Portfolio Tips"
        description="Create compelling resumes and portfolios to showcase your video editing skills"
      />
      
      {/* Main Content Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="space-y-16">
              {/* Resume Essentials Section */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                      📝
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Resume Essentials</h2>
                      <p className="text-gray-600 dark:text-gray-400">Create a professional resume that gets you noticed</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Must-Have Sections</h3>
                      <div className="space-y-4">
                        {[
                          { title: "Contact Information", desc: "Professional email, phone, location, LinkedIn", icon: "📞" },
                          { title: "Professional Summary", desc: "2-3 sentences highlighting key skills", icon: "📄" },
                          { title: "Skills Section", desc: "Technical and soft skills with proficiency levels", icon: "🛠️" },
                          { title: "Experience", desc: "Work history with quantified achievements", icon: "💼" },
                          { title: "Education", desc: "Relevant degrees, certifications, courses", icon: "🎓" }
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
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Pro Tips</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">💡 Formatting</h4>
                          <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                            <li>• Use consistent formatting</li>
                            <li>• Keep it to 1-2 pages maximum</li>
                            <li>• Use bullet points for readability</li>
                            <li>• Choose professional fonts</li>
              </ul>
                        </div>
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎯 Keywords</h4>
                          <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                            <li>• Include industry keywords</li>
                            <li>• Match job descriptions</li>
                            <li>• Use action verbs</li>
                            <li>• Quantify achievements</li>
              </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Creation Section */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                      🎨
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Portfolio Creation</h2>
                      <p className="text-gray-600 dark:text-gray-400">Showcase your best work effectively</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Project Selection",
                        icon: "🎬",
                        color: "from-blue-500 to-blue-600",
                        tips: [
                          "Choose 8-12 best pieces",
                          "Show variety in style and genre",
                          "Include personal and professional work",
                          "Demonstrate skill progression"
                        ]
                      },
                      {
                        title: "Organization",
                        icon: "📁",
                        color: "from-purple-500 to-purple-600",
                        tips: [
                          "Group by category or style",
                          "Provide project context",
                          "Include before/after examples",
                          "Add detailed descriptions"
                        ]
                      },
                      {
                        title: "Presentation",
                        icon: "💻",
                        color: "from-indigo-500 to-indigo-600",
                        tips: [
                          "Create professional website",
                          "Ensure mobile-friendly design",
                          "Optimize loading times",
                          "Keep navigation simple"
                        ]
                      }
                    ].map((section, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center text-white text-2xl mr-4`}>
                            {section.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{section.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {section.tips.map((tip, tipIdx) => (
                            <li key={tipIdx} className="text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                              <span className="text-sm">{tip}</span>
                            </li>
                          ))}
              </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Templates & Examples Section */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                      📋
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Templates & Examples</h2>
                      <p className="text-gray-600 dark:text-gray-400">Ready-to-use templates and real examples</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Resume Templates</h3>
                      <div className="space-y-4">
                        {[
                          { name: "Creative Video Editor", type: "Modern", color: "blue" },
                          { name: "Professional Assistant", type: "Clean", color: "purple" },
                          { name: "Freelance Portfolio", type: "Creative", color: "green" },
                          { name: "Entry-Level Starter", type: "Simple", color: "indigo" }
                        ].map((template, idx) => (
                          <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-semibold text-gray-900 dark:text-white">{template.name}</h4>
                              <span className={`px-2 py-1 bg-${template.color}-100 dark:bg-${template.color}-900 text-${template.color}-800 dark:text-${template.color}-200 text-xs rounded`}>
                                {template.type}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Professional template designed for video editors</p>
                            <Link href="/tools/resume-templates" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                              Download Template →
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Portfolio Examples</h3>
                      <div className="space-y-4">
                        {[
                          { name: "Video Reel Showcase", desc: "2-minute highlight reel", type: "Video" },
                          { name: "Project Gallery", desc: "Individual project pages", type: "Gallery" },
                          { name: "Interactive Timeline", desc: "Chronological work history", type: "Timeline" },
                          { name: "Skills Demonstration", desc: "Before/after comparisons", type: "Comparison" }
                        ].map((example, idx) => (
                          <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-semibold text-gray-900 dark:text-white">{example.name}</h4>
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded">
                                {example.type}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{example.desc}</p>
                            <Link href="/tools/portfolio-builder" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                              View Example →
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Mistakes Section */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                      ⚠️
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Common Mistakes to Avoid</h2>
                      <p className="text-gray-600 dark:text-gray-400">Learn from others&apos; mistakes to improve your chances</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        mistake: "Outdated Content",
                        impact: "Shows lack of activity",
                        solution: "Update regularly with new work"
                      },
                      {
                        mistake: "Poor Quality Images",
                        impact: "Unprofessional appearance",
                        solution: "Use high-resolution, clear images"
                      },
                      {
                        mistake: "Generic Templates",
                        impact: "Blends in with others",
                        solution: "Customize to reflect your style"
                      },
                      {
                        mistake: "Missing Contact Info",
                        impact: "Lost opportunities",
                        solution: "Make contact info easily accessible"
                      },
                      {
                        mistake: "Not Mobile-Friendly",
                        impact: "Poor user experience",
                        solution: "Test and optimize for mobile"
                      },
                      {
                        mistake: "Too Much Information",
                        impact: "Overwhelms viewers",
                        solution: "Keep it concise and focused"
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">{item.mistake}</h4>
                        <p className="text-sm text-red-800 dark:text-red-200 mb-2">
                          <strong>Impact:</strong> {item.impact}
                        </p>
                        <p className="text-sm text-red-800 dark:text-red-200">
                          <strong>Solution:</strong> {item.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                  currentPageId="resume-portfolio"
                  type="related"
                  limit={4}
                  title="Continue Your Career Journey"
                />
              </div>
              
              {/* 学习路径推荐 */}
              <div className="lg:col-span-1">
                <LearningPath currentPageId="resume-portfolio" />
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
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Ready to Build Your Portfolio?</h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    Use our AI-powered tools to create professional resumes and portfolios that get you hired.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Link href="/tools/ai-resume-builder" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition-all">
                    Build Resume
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </Link>
                  <Link href="/tools/portfolio-builder" className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all">
                    Create Portfolio
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页面导航 */}
      <PageNavigation currentPageId="resume-portfolio" category="guide" />
    </>
  );
};

export default ResumePortfolio;
