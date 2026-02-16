import Link from "next/link";

interface ToolCardProps {
  title: string;
  description: string;
  path: string;
  isFree: boolean;
}

const ToolCard = ({ title, description, path, isFree }: ToolCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <div className="p-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-black dark:text-white">
            {title}
          </h3>
          {isFree && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
              FREE
            </span>
          )}
        </div>
        <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
          {description}
        </p>
        <Link
          href={path}
          className="inline-flex items-center justify-center rounded-sm bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
        >
          Explore this tool
          <svg
            className="ml-2 h-4 w-4"
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
  );
};

const ToolsPreview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white lg:text-4xl">
            Get the Tools
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            Professional tools and resources to accelerate your career
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <ToolCard 
            title="AI Resume Builder"
            description="Generate professional resumes tailored for video editor positions using AI"
            path="/tools/ai-resume-builder"
            isFree={true}
          />
          <ToolCard 
            title="Resume Templates"
            description="Download professional templates designed specifically for video editors"
            path="/tools/resume-templates"
            isFree={true}
          />
          <ToolCard 
            title="Free Editing Software"
            description="Complete list of free video editing tools for beginners and professionals"
            path="/tools/free-editing-software"
            isFree={true}
          />
        </div>
        
        <div className="mt-8 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
          >
            Browse All Tools
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsPreview;
