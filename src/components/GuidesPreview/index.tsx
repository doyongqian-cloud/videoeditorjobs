import Link from "next/link";

interface GuideCardProps {
  title: string;
  description: string;
  path: string;
  readTime: string;
}

const GuideCard = ({ title, description, path, readTime }: GuideCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <div className="p-6">
        <div className="mb-4">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {readTime}
          </span>
        </div>
        <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
          {description}
        </p>
        <Link
          href={path}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
        >
          Read this guide
          <svg
            className="ml-1 h-4 w-4"
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

const GuidesPreview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-dark">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white lg:text-4xl">
            Master the Skills
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            Learn everything you need to become a successful assistant video editor
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <GuideCard 
            title="What Does an Assistant Video Editor Do?"
            description="Complete breakdown of daily responsibilities, tasks, and workflow expectations in the role"
            path="/guides/what-does-an-assistant-video-editor-do"
            readTime="5 min read"
          />
          <GuideCard 
            title="How to Get Started"
            description="Step-by-step guide from beginner to landing your first assistant editor position"
            path="/guides/how-to-become"
            readTime="8 min read"
          />
          <GuideCard 
            title="Essential Skills & Requirements"
            description="Must-have technical skills, software proficiency, and soft skills for success"
            path="/guides/skills"
            readTime="6 min read"
          />
        </div>
        
        <div className="mt-8 text-center">
          <Link
            href="/guides"
            className="inline-flex items-center justify-center rounded-sm border border-primary px-8 py-3 text-center text-base font-medium text-primary hover:bg-primary hover:text-white"
          >
            Explore All Guides
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuidesPreview;
