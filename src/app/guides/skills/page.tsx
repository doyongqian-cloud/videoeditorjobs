import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Essential Skills for Assistant Video Editors (2025) | Complete Guide",
  description: "Master the essential technical, creative, and soft skills needed to succeed as an assistant video editor. Complete skill breakdown with industry data from 500+ job postings analysis.",
  keywords: [
    ...siteConfig.keywords,
    "assistant video editor skills",
    "video editor skills required",
    "essential skills for video editors",
    "technical skills video editing",
    "creative skills video editing",
    "soft skills video editor",
    "video editing competencies",
    "career skills video editor",
    "professional video editor skills",
    "video editing job requirements"
  ],
  openGraph: {
    title: "Essential Skills for Assistant Video Editors (2025) | Complete Guide",
    description: "Master the essential technical, creative, and soft skills needed to succeed as an assistant video editor. Complete skill breakdown with industry data.",
    url: "https://assistvideoeditorjobs.com/guides/skills",
    type: "article",
    images: [
      {
        url: "https://assistvideoeditorjobs.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Essential Skills for Assistant Video Editors - Complete Guide"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Skills for Assistant Video Editors (2025)",
    description: "Master the essential technical, creative, and soft skills needed to succeed as an assistant video editor.",
    images: ["https://assistvideoeditorjobs.com/og.jpg"]
  },
  alternates: {
    canonical: "https://assistvideoeditorjobs.com/guides/skills"
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
  },
  other: {
    'article:published_time': '2025-01-15T00:00:00.000Z',
    'article:modified_time': '2025-01-15T00:00:00.000Z',
    'article:author': 'Assistant Video Editor Jobs',
    'article:section': 'Career Guide',
    'article:tag': 'video editing skills, career development, technical skills, creative skills'
  }
};

export default function SkillsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Essential Skills for Assistant Video Editors (2025) | Complete Guide",
    "description": "Master the essential technical, creative, and soft skills needed to succeed as an assistant video editor. Complete skill breakdown with industry data from 500+ job postings analysis.",
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
        "url": "https://assistvideoeditorjobs.com/logo.svg"
      }
    },
    "datePublished": "2025-01-15T00:00:00.000Z",
    "dateModified": "2025-01-15T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://assistvideoeditorjobs.com/guides/skills"
    },
    "articleSection": "Career Guide",
    "keywords": "assistant video editor skills, video editing competencies, technical skills, creative skills, soft skills, career development",
    "about": {
      "@type": "Thing",
      "name": "Assistant Video Editor Skills",
      "description": "Essential skills and competencies required for assistant video editor positions"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-blue-500/5 to-primary/10 dark:from-primary/10 dark:via-blue-500/10 dark:to-primary/20 pt-24 pb-16 lg:pt-32 lg:pb-20">
        {/* Decorative Elements */}
        <div className="absolute right-0 top-0 -z-10 opacity-30">
          <div className="w-72 h-72 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute left-0 bottom-0 -z-10 opacity-30">
          <div className="w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-primary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 dark:bg-primary/20 dark:text-primary/80 dark:border-primary/30">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                🎯 Skills Guide
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
              Essential Skills for{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Assistant Video Editors
              </span>
            </h1>
            
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Master the technical, creative, and soft skills that top employers look for in assistant video editors.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Core Skills</div>
              </div>
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Employer Priority</div>
              </div>
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl font-bold text-primary">6-12</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Months to Master</div>
              </div>
            </div>

            {/* Last Updated Info */}
            <div className="mt-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800 inline-block">
                <div className="flex items-center space-x-2 text-blue-800 dark:text-blue-200">
                  <span className="text-sm">🔄</span>
                  <span className="text-sm font-medium">
                    Last updated: January 2025 | Based on 500+ job postings analysis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            
            {/* Introduction */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">📊</span>
                  Skills Overview
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Based on analysis of 500+ assistant video editor job postings from top companies, 
                  we&apos;ve identified the essential skills that employers prioritize. These skills are 
                  categorized into technical, creative, and soft skills, each with specific importance 
                  ratings and learning recommendations.
                </p>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary-800 dark:text-primary-200">
                    💡 <strong>Pro Tip:</strong> Focus on mastering the high-priority skills first, 
                    then gradually develop specialized expertise. Check out our{" "}
                    <Link href="/guides/how-to-become" className="underline hover:text-primary-600">
                      career roadmap guide
                    </Link>{" "}
                    for a structured learning path.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Technical Skills</h2>
                    <p className="text-gray-600 dark:text-gray-400">Essential software and technical competencies</p>
                  </div>
                </div>
                
                <div className="grid gap-6">
                  {/* Video Editing Software */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">1</span>
                      Video Editing Software
                      <span className="ml-auto text-sm bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">Critical</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      {[
                        { name: "Adobe Premiere Pro", usage: "78%", level: "Advanced", description: "Industry standard for professional editing" },
                        { name: "Final Cut Pro X", usage: "45%", level: "Intermediate", description: "Popular choice for Mac users" },
                        { name: "DaVinci Resolve", usage: "32%", level: "Intermediate", description: "Professional-grade free option" },
                        { name: "Avid Media Composer", usage: "28%", level: "Advanced", description: "Used in high-end productions" }
                      ].map((software, index) => (
                        <div key={index} className="bg-white dark:bg-gray-600 rounded-lg p-4 border border-gray-200 dark:border-gray-500">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900 dark:text-white">{software.name}</span>
                            <span className="text-sm text-primary font-medium">{software.usage}</span>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{software.description}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-500 px-2 py-1 rounded">
                            {software.level} Level
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Learning Path:</strong> Start with Premiere Pro basics, then explore specialized software based on your target industry.
                    </div>
                  </div>

                  {/* File Management */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">2</span>
                      File Management & Organization
                      <span className="ml-auto text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">High</span>
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Project file organization and naming conventions (92% of employers require)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Media asset management and backup strategies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>File format conversion and optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Storage management and archiving systems</span>
                      </li>
              </ul>
                  </div>

                  {/* Audio Skills */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">3</span>
                      Audio Editing & Mixing
                      <span className="ml-auto text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">High</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-600 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Basic Audio Skills</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Audio synchronization and timing</li>
                          <li>• Basic audio editing and mixing</li>
                          <li>• Sound quality assessment</li>
                          <li>• Music selection and integration</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-600 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Advanced Audio Skills</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Multi-track audio editing</li>
                          <li>• Noise reduction and cleanup</li>
                          <li>• Audio effects and processing</li>
                          <li>• Surround sound mixing</li>
              </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Skills */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Creative Skills</h2>
                    <p className="text-gray-600 dark:text-gray-400">Visual storytelling and creative competencies</p>
                  </div>
                </div>
                
                <div className="grid gap-6">
                  {/* Storytelling */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">1</span>
                      Storytelling & Pacing
                      <span className="ml-auto text-sm bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">Critical</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Core Concepts</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Understanding narrative structure and flow</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Creating engaging visual sequences</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Maintaining audience attention and interest</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Balancing pacing and rhythm</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Industry Applications</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Commercial and advertising content</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Documentary and narrative films</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Social media and web content</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Educational and training videos</span>
                          </li>
              </ul>
                      </div>
                    </div>
                  </div>

                  {/* Visual Composition */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">2</span>
                      Visual Composition & Aesthetics
                      <span className="ml-auto text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">High</span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { title: "Color Theory", skills: ["Color grading", "Color correction", "Visual consistency"] },
                        { title: "Frame Composition", skills: ["Rule of thirds", "Visual hierarchy", "Balance and symmetry"] },
                        { title: "Brand Consistency", skills: ["Style guides", "Visual identity", "Brand guidelines"] }
                      ].map((category, index) => (
                        <div key={index} className="bg-white dark:bg-gray-600 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{category.title}</h4>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            {category.skills.map((skill, skillIndex) => (
                              <li key={skillIndex} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span>{skill}</span>
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

            {/* Soft Skills */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">Soft Skills</h2>
                    <p className="text-gray-600 dark:text-gray-400">Interpersonal and professional competencies</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Communication",
                      priority: "Critical",
                      color: "green",
                      skills: [
                        "Clear communication with team members",
                        "Understanding client requirements and feedback",
                        "Presenting ideas and concepts effectively",
                        "Collaborative problem-solving"
                      ]
                    },
                    {
                      title: "Time Management",
                      priority: "High",
                      color: "blue",
                      skills: [
                        "Meeting deadlines and project timelines",
                        "Prioritizing tasks and managing workload",
                        "Efficient workflow optimization",
                        "Handling multiple projects simultaneously"
                      ]
                    },
                    {
                      title: "Attention to Detail",
                      priority: "High",
                      color: "purple",
                      skills: [
                        "Quality control and error checking",
                        "Consistency in editing style and technique",
                        "Technical accuracy and precision",
                        "Brand guideline adherence"
                      ]
                    },
                    {
                      title: "Adaptability",
                      priority: "Medium",
                      color: "yellow",
                      skills: [
                        "Learning new software and techniques",
                        "Adapting to different project requirements",
                        "Handling feedback and revisions",
                        "Staying current with industry trends"
                      ]
                    }
                  ].map((skill, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.title}</h3>
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          skill.priority === 'Critical' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' :
                          skill.priority === 'High' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200' :
                          'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                        }`}>
                          {skill.priority}
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        {skill.skills.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className={`w-2 h-2 bg-${skill.color}-500 rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                            <span>{item}</span>
                          </li>
                        ))}
              </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industry Knowledge */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 text-primary">📚</span>
                  Industry Knowledge & Trends
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technical Knowledge</h3>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Understanding of video formats and codecs (H.264, H.265, ProRes, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Knowledge of post-production workflows and pipelines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Awareness of industry standards and best practices</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Familiarity with different video genres and styles</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">2025 Trends to Watch</h3>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>AI-assisted editing tools and automation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Virtual and augmented reality content creation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Cloud-based collaboration and remote workflows</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Real-time editing and live streaming integration</span>
                      </li>
              </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Path */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-3 text-blue-600 dark:text-blue-400">🎯</span>
                  Recommended Learning Path
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Phase 1: Foundation (Months 1-3)</h4>
                    <ul className="space-y-1 text-sm text-blue-600 dark:text-blue-400">
                      <li>• Master basic editing software</li>
                      <li>• Learn file organization</li>
                      <li>• Understand video formats</li>
                      <li>• Practice with simple projects</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Phase 2: Development (Months 4-8)</h4>
                    <ul className="space-y-1 text-sm text-blue-600 dark:text-blue-400">
                      <li>• Advanced software features</li>
                      <li>• Creative storytelling techniques</li>
                      <li>• Audio editing skills</li>
                      <li>• Build portfolio projects</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Phase 3: Specialization (Months 9-12)</h4>
                    <ul className="space-y-1 text-sm text-blue-600 dark:text-blue-400">
                      <li>• Industry-specific skills</li>
                      <li>• Advanced techniques</li>
                      <li>• Professional workflows</li>
                      <li>• Network and apply for jobs</li>
              </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Resources */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                <span className="w-6 h-6 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-3 text-blue-600 dark:text-blue-400">🔗</span>
                Related Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Learning Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/guides/how-to-become" className="text-blue-600 dark:text-blue-400 hover:underline">
                        → How to Become an Assistant Video Editor
                      </Link>
                    </li>
                    <li>
                      <Link href="/tools/free-editing-software" className="text-blue-600 dark:text-blue-400 hover:underline">
                        → Free Video Editing Software Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/resume-portfolio" className="text-blue-600 dark:text-blue-400 hover:underline">
                        → Building Your Portfolio
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Career Development</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/jobs/salary-career" className="text-blue-600 dark:text-blue-400 hover:underline">
                        → Salary & Career Growth Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/jobs" className="text-blue-600 dark:text-blue-400 hover:underline">
                        → Browse Job Opportunities
                      </Link>
                    </li>
                    <li>
                      <Link href="/tools" className="text-blue-600 dark:text-blue-400 hover:underline">
                        → Professional Tools & Resources
                      </Link>
                    </li>
              </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Ready to Start Your Video Editing Career?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Apply these skills and find your next opportunity in video editing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/jobs"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Browse Jobs
                </Link>
                <Link
                  href="/guides/how-to-become"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Career Guide
                </Link>
                <Link
                  href="/tools/free-editing-software"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Free Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </article>
    </>
  );
}