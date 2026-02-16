import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FAQSchema from "@/components/FAQ/FAQSchema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Assistant Video Editor",
  description: "Find answers to common questions about assistant video editor jobs, career guidance, and our platform features.",
  keywords: ["FAQ", "frequently asked questions", "help", "assistant video editor", "career questions"],
};

const faqData = [
  {
    question: "What is an assistant video editor?",
    answer: "An assistant video editor is a professional who supports senior video editors in post-production workflows. They handle tasks like organizing footage, creating rough cuts, managing project files, and performing technical editing tasks under supervision."
  },
  {
    question: "What skills do I need to become an assistant video editor?",
    answer: "Essential skills include proficiency in video editing software (Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve), understanding of video formats and codecs, basic color correction, audio editing, file management, attention to detail, and strong communication skills."
  },
  {
    question: "How much do assistant video editors earn?",
    answer: "Assistant video editor salaries typically range from $35,000 to $65,000 annually, depending on experience, location, and company size. Freelance rates usually range from $20-50 per hour. Entry-level positions may start lower, while experienced assistants in major markets can earn more."
  },
  {
    question: "Can I work remotely as an assistant video editor?",
    answer: "Yes, many assistant video editor positions offer remote work options, especially in post-production companies, marketing agencies, and content creation teams. Remote work has become increasingly common in the video editing industry, particularly after the COVID-19 pandemic."
  },
  {
    question: "What's the difference between an assistant video editor and a video editor?",
    answer: "Assistant video editors focus on supporting tasks like file organization, rough cuts, and technical preparation, while senior video editors handle creative decisions, final cuts, and client communication. The assistant role is often a stepping stone to becoming a senior editor."
  },
  {
    question: "Do I need a degree to become an assistant video editor?",
    answer: "While a degree in film, media production, or related fields can be helpful, it's not always required. Many successful assistant editors are self-taught or have completed online courses and bootcamps. What matters most is having a strong portfolio and practical skills."
  },
  {
    question: "How do I build a portfolio as a beginner?",
    answer: "Start by creating personal projects, volunteer for student films or local organizations, work on passion projects, and practice with different types of content. Include before/after examples, show your process, and highlight different skills like editing, color correction, and audio work."
  },
  {
    question: "What software should I learn first?",
    answer: "Start with industry-standard software like Adobe Premiere Pro, which is widely used. Also consider learning DaVinci Resolve (free version available), Final Cut Pro (Mac), or Avid Media Composer. Focus on mastering one software before moving to others."
  },
  {
    question: "How long does it take to become an assistant video editor?",
    answer: "The timeline varies, but typically 6 months to 2 years of focused learning and practice. This includes learning software, building a portfolio, gaining experience through internships or freelance work, and networking in the industry."
  },
  {
    question: "What are the career advancement opportunities?",
    answer: "Assistant video editors can advance to senior editor, lead editor, post-production supervisor, or specialize in areas like color grading, sound design, or motion graphics. Some also transition to directing, producing, or starting their own production companies."
  },
  {
    question: "How do I find assistant video editor jobs?",
    answer: "Use job boards like LinkedIn, Indeed, and ProductionHUB, network at industry events, join professional organizations, reach out to local production companies, and consider freelance platforms like Upwork and Fiverr to build experience."
  },
  {
    question: "What should I include in my resume?",
    answer: "Include your contact information, professional summary, relevant skills, work experience (even if limited), education, software proficiencies, portfolio link, and any certifications. Highlight transferable skills and quantify achievements where possible."
  },
  {
    question: "How do I prepare for an assistant video editor interview?",
    answer: "Research the company and role, prepare your portfolio, practice explaining your editing process, be ready to discuss your technical skills, prepare questions about the team and projects, and practice common interview questions about your experience and career goals."
  },
  {
    question: "What are the working hours like?",
    answer: "Working hours vary by company and project. Full-time positions typically follow standard business hours, but deadlines may require overtime. Freelance work offers more flexibility but may include irregular hours. Film and TV work often involves longer hours during production periods."
  },
  {
    question: "Is the assistant video editor role stressful?",
    answer: "The role can be demanding, especially during tight deadlines or high-pressure projects. However, it's also rewarding and offers great learning opportunities. Good time management, communication skills, and staying organized can help manage stress effectively."
  }
];

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqData} />
      <Breadcrumb
        pageName="Frequently Asked Questions"
        description="Find answers to your questions about assistant video editor careers"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-blue-500/5 to-primary/10 dark:from-primary/10 dark:via-blue-500/10 dark:to-primary/20 pt-16 pb-10">
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
                ❓ Help Center
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-body-color dark:text-body-color-dark max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about assistant video editor careers, 
              job opportunities, and our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl">

            {/* Search Box */}
            <div className="mb-12">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark dark:border-gray-600 dark:text-white"
                />
                <svg
                  className="absolute left-4 top-3.5 h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Browse by Category</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Getting Started</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Questions about starting your career</p>
                </div>
                <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Job Search</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Finding and applying for jobs</p>
                </div>
                <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Skills & Tools</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Technical skills and software</p>
                </div>
                <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Career Growth</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Advancing your career</p>
                </div>
                <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Platform Help</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Using our website</p>
                </div>
                <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-primary">General</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Other common questions</p>
                </div>
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">All Questions</h2>
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between w-full p-6 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset">
                      <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                      <svg
                        className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-lg p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
                  Still Have Questions?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:support@assistvideoeditorjobs.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Support
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Live Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
