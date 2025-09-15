import Link from "next/link";

export default function ComingSoonResumeBuilder() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-dark dark:to-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm font-medium">
            <span>🚧</span>
            <span>Coming Soon</span>
          </div>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
            AI Resume Builder for Assistant Video Editors
          </h1>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark md:text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re building an AI-powered resume tool tailored for assistant video editor roles. While we finish it, explore our skills guide and templates to get job-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/guides/skills" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">Skills Guide</Link>
            <Link href="/tools/resume-templates" className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300">Resume Templates</Link>
            <Link href="/guides/resume-portfolio" className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300">Portfolio Tips</Link>
          </div>
        </div>
      </div>
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
    </section>
  );
}

