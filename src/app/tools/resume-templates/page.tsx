import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { resumeTemplates } from "@/data/site-content";
import Link from "next/link";
import Image from "next/image";
import FAQSchema from "@/components/FAQ/FAQSchema";

export const metadata: Metadata = {
  title: "Professional Video Editor Resume Templates | Free PDF Downloads",
  description: "Professional resume templates designed specifically for video editors. Modern, creative, corporate styles available. Free PDF downloads for all templates.",
  keywords: [...siteConfig.keywords, "resume templates", "video editor resume", "PDF templates", "job application", "professional resume", "video editing career"],
};

const resumeFAQs = [
  {
    question: "How do I choose the right resume template?",
    answer: "Choose based on your experience level and target position: Entry-level templates highlight learning ability, experienced professionals use modern styles to showcase skills, freelancers choose portfolio templates, and corporate applicants select professional business templates."
  },
  {
    question: "What file formats are supported?",
    answer: "We provide PDF format resume templates, ensuring perfect display across different devices and platforms. PDF format is also more easily recognized by ATS systems and HR departments."
  },
  {
    question: "How can I customize the resume templates?",
    answer: "After downloading the PDF template, you can use Adobe Acrobat, Canva, or other PDF editing tools to personalize it, including adding your personal information, adjusting content layout, and color schemes."
  },
  {
    question: "Are the templates optimized for video editors?",
    answer: "Yes, all templates are specifically designed for video editors, including relevant skill showcase areas, project experience sections, software skill lists, and more to help highlight your professional advantages."
  }
];

const categories = [
  { id: "all", name: "All Templates", count: resumeTemplates.length },
  { id: "Modern Style", name: "Modern Style", count: resumeTemplates.filter(t => t.category === "Modern Style").length },
  { id: "Creative Style", name: "Creative Style", count: resumeTemplates.filter(t => t.category === "Creative Style").length },
  { id: "Professional Style", name: "Professional Style", count: resumeTemplates.filter(t => t.category === "Professional Style").length },
  { id: "Freelance", name: "Freelance", count: resumeTemplates.filter(t => t.category === "Freelance").length },
  { id: "Entry Level", name: "Entry Level", count: resumeTemplates.filter(t => t.category === "Entry Level").length },
  { id: "Senior Management", name: "Senior Management", count: resumeTemplates.filter(t => t.category === "Senior Management").length },
];

export default function ResumeTemplatesPage() {
  return (
    <>
      <FAQSchema faqs={resumeFAQs} />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-dark dark:to-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Professional Video Editor{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Resume Templates
              </span>
            </h1>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark md:text-lg max-w-3xl mx-auto leading-relaxed">
              Professionally designed resume templates tailored specifically for video editors. From entry-level to senior management, multiple styles to meet different job application needs. Free PDF downloads available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#templates-grid"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Browse Templates
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/guides/resume-portfolio"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Resume Writing Guide
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </section>

      {/* 2. Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-dark border-b border-gray-100 dark:border-gray-700">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-primary hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary dark:hover:text-white"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Templates Grid */}
      <section id="templates-grid" className="py-20 lg:py-24 bg-gray-50 dark:bg-dark/50">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <span>📄</span>
              <span>Resume Templates</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Curated Resume Templates
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
              6 professionally designed resume templates covering different experience levels and job application scenarios
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resumeTemplates.map((template) => (
              <div
                key={template.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl duration-500 hover:-translate-y-2 transition-all dark:bg-dark dark:hover:shadow-gray-dark border border-gray-100 dark:border-gray-700"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Preview Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">📄</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full px-3 py-1 text-xs font-medium bg-white/90 text-gray-700 shadow-sm">
                      {template.fileFormat}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors mb-2">
                        {template.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{template.category}</span>
                        <span className="text-sm text-gray-300 dark:text-gray-600">•</span>
                        <span className={`text-sm font-medium ${
                          template.difficulty === "Easy" ? "text-green-600" :
                          template.difficulty === "Medium" ? "text-yellow-600" : "text-red-600"
                        }`}>
                          {template.difficulty}
                        </span>
                      </div>
                    </div>
                    <span className="rounded-full px-3 py-1 text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Free
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm text-body-color dark:text-body-color-dark leading-relaxed">
                    {template.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {template.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <a
                      href={template.downloadUrl}
                      download
                      className="flex-1 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Template
                    </a>
                    <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How to Use Section */}
      <section className="py-20 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white lg:text-3xl">
              How to Use Resume Templates
            </h2>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
              Simple three-step process to create a professional resume
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                  1
                </div>
                <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">Choose Template</h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Select the appropriate resume template based on your experience level and target position
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                  2
                </div>
                <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">Download & Edit</h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Download the PDF template and use PDF editing tools to add your personal information
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                  3
                </div>
                <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">Apply for Jobs</h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Save as PDF format and start applying for your desired video editor positions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tips Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark/50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white lg:text-3xl">
              Resume Writing Tips
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Make your resume stand out among numerous applicants
            </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark border border-gray-100 dark:border-gray-700">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">Highlight Video Editing Skills</h3>
                </div>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  List the editing software you master (such as Premiere Pro, Final Cut Pro, DaVinci Resolve, etc.) and specify your proficiency level.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark border border-gray-100 dark:border-gray-700">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900 dark:text-green-300">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">Showcase Project Experience</h3>
                </div>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Describe your project experience with specific data and results, such as &ldquo;Created 100+ short videos with an average view count of 100K+&rdquo;.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark border border-gray-100 dark:border-gray-700">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">Keep It Concise</h3>
                </div>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Keep your resume to 1-2 pages, use concise language and clear formatting to help HR quickly understand your strengths.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark border border-gray-100 dark:border-gray-700">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">Include Portfolio Links</h3>
                </div>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Provide your portfolio links in your resume so employers can visually see your editing skills and style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white lg:text-3xl">
            Start Creating Your Professional Resume
          </h2>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
            Choose the right template, showcase your video editing skills, and start your career journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#templates-grid"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Browse All Templates
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/guides/resume-portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Learn Resume Writing Tips
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
