import { JobCategory, GuideCategory, ToolCategory, BlogPost, ResumeTemplate } from "@/types/site";

export const jobCategories: JobCategory[] = [
  {
    id: "assistant-video-editor-jobs",
    title: "Assistant Video Editor Jobs",
    description: "Find full-time assistant video editor positions at top companies and studios",
    path: "/jobs/assistant-video-editor-jobs",
    count: 150,
  },
  {
    id: "freelance-assistant-video-editor",
    title: "Freelance Jobs",
    description: "Discover freelance and contract assistant video editor opportunities",
    path: "/jobs/freelance-assistant-video-editor",
    count: 89,
  },
  {
    id: "remote-assistant-video-editor",
    title: "Remote Jobs",
    description: "Work from anywhere with remote assistant video editor positions",
    path: "/jobs/remote-assistant-video-editor",
    count: 67,
  },
  {
    id: "entry-level-assistant-video-editor",
    title: "Entry-Level Jobs",
    description: "Perfect for beginners starting their video editing career",
    path: "/jobs/entry-level-assistant-video-editor",
    count: 45,
  },
  {
    id: "salary-career",
    title: "Salary & Career Path",
    description: "Learn about assistant video editor salaries and career progression",
    path: "/jobs/salary-career",
  },
];

export const guideCategories: GuideCategory[] = [
  {
    id: "what-does-an-assistant-video-editor-do",
    title: "What Does an Assistant Video Editor Do?",
    description: "Learn about the day-to-day responsibilities and tasks of assistant video editors",
    path: "/guides/what-does-an-assistant-video-editor-do",
    readTime: "5 min read",
  },
  {
    id: "how-to-become",
    title: "How to Become an Assistant Video Editor",
    description: "Step-by-step guide to starting your career as an assistant video editor",
    path: "/guides/how-to-become",
    readTime: "8 min read",
  },
  {
    id: "skills",
    title: "Skills Needed",
    description: "Essential skills and competencies required for assistant video editor positions",
    path: "/guides/skills",
    readTime: "6 min read",
  },
  {
    id: "resume-portfolio",
    title: "Resume & Portfolio Tips",
    description: "How to create a compelling resume and portfolio to land your dream job",
    path: "/guides/resume-portfolio",
    readTime: "7 min read",
  },
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    description: "Prepare for assistant video editor job interviews with expert tips",
    path: "/guides/interview-preparation",
    readTime: "6 min read",
  },
];

// Video Editing Tools
export const videoEditingTools: ToolCategory[] = [
  {
    id: "free-editing-software",
    title: "Free Editing Software",
    description: "Professional-grade free video editing software with direct download links",
    path: "/tools/free-editing-software",
    isFree: true,
  },
  {
    id: "paid-editing-tools",
    title: "Professional Software",
    description: "Industry-standard video editing software and professional tools",
    path: "/tools/paid-editing-tools",
    isFree: false,
  },
  {
    id: "project-management-tools",
    title: "Project Management Tools",
    description: "Essential tools for managing video editing projects efficiently",
    path: "/tools/project-management-tools",
    isFree: false,
  },
];

// Career Tools
export const careerTools: ToolCategory[] = [
  {
    id: "ai-resume-builder",
    title: "AI Resume Builder",
    description: "Generate professional resumes tailored for video editor positions using AI",
    path: "/tools/ai-resume-builder",
    isFree: true,
  },
  {
    id: "resume-templates",
    title: "Resume Templates",
    description: "Download professional templates designed specifically for video editors",
    path: "/tools/resume-templates",
    isFree: true,
  },
  {
    id: "cover-letter-generator",
    title: "Cover Letter Generator",
    description: "AI-powered cover letter creation for video editor job applications",
    path: "/tools/cover-letter-generator",
    isFree: true,
  },
];

// Resume Templates
export const resumeTemplates: ResumeTemplate[] = [
  {
    id: "modern-video-editor",
    title: "Modern Video Editor Resume",
    description: "Clean, modern design that highlights video editing skills and project experience",
    category: "Modern Style",
    difficulty: "Easy",
    fileFormat: "PDF",
    downloadUrl: "/assets/resume/modern-video-editor-resume.pdf",
    previewImage: "/images/resume-templates/modern-video-editor-preview.svg",
    features: ["Responsive Design", "Skills Highlighted", "Project Showcase", "Clear Contact Info"],
    isFree: true,
  },
  {
    id: "creative-portfolio",
    title: "Creative Portfolio Resume",
    description: "Perfect for video editors with rich portfolios, emphasizing creative abilities",
    category: "Creative Style",
    difficulty: "Medium",
    fileFormat: "PDF",
    downloadUrl: "/assets/resume/creative-portfolio-resume.pdf",
    previewImage: "/images/resume-templates/creative-portfolio-preview.svg",
    features: ["Portfolio Display", "Creative Layout", "Visual Impact", "Personal Branding"],
    isFree: true,
  },
  {
    id: "professional-corporate",
    title: "Professional Corporate Resume",
    description: "Ideal for applying to large companies or traditional corporate video editing positions",
    category: "Professional Style",
    difficulty: "Easy",
    fileFormat: "PDF",
    downloadUrl: "/assets/resume/professional-corporate-resume.pdf",
    previewImage: "/images/resume-templates/professional-corporate-preview.svg",
    features: ["Traditional Layout", "Professional Look", "Easy to Read", "ATS Friendly"],
    isFree: true,
  },
  {
    id: "freelancer-showcase",
    title: "Freelancer Showcase Resume",
    description: "Designed specifically for freelance video editors, highlighting client projects and services",
    category: "Freelance",
    difficulty: "Medium",
    fileFormat: "PDF",
    downloadUrl: "/assets/resume/freelancer-showcase-resume.pdf",
    previewImage: "/images/resume-templates/freelancer-showcase-preview.svg",
    features: ["Client Projects", "Service Range", "Contact Info", "Social Media Links"],
    isFree: true,
  },
  {
    id: "entry-level-starter",
    title: "Entry-Level Starter Resume",
    description: "Perfect for new video editors, highlighting learning ability and foundational skills",
    category: "Entry Level",
    difficulty: "Easy",
    fileFormat: "PDF",
    downloadUrl: "/assets/resume/entry-level-starter-resume.pdf",
    previewImage: "/images/resume-templates/entry-level-starter-preview.svg",
    features: ["Education Focus", "Learning Projects", "Basic Skills", "Internship Experience"],
    isFree: true,
  },
  {
    id: "senior-editor-executive",
    title: "Senior Editor Executive Resume",
    description: "For experienced senior video editors or team leaders with management experience",
    category: "Senior Management",
    difficulty: "Advanced",
    fileFormat: "PDF",
    downloadUrl: "/assets/resume/senior-editor-executive-resume.pdf",
    previewImage: "/images/resume-templates/senior-editor-executive-preview.svg",
    features: ["Management Experience", "Team Leadership", "Strategic Planning", "Industry Achievements"],
    isFree: true,
  },
];

// Legacy export for backward compatibility
export const toolCategories: ToolCategory[] = [...videoEditingTools, ...careerTools];

export const blogPosts: BlogPost[] = [
  {
    id: "assistant-vs-video-editor",
    title: "Assistant Video Editor vs Video Editor",
    description: "Understanding the key differences between assistant and senior video editor roles",
    path: "/blog/assistant-vs-video-editor",
    publishDate: "2024-01-15",
    author: "Sarah Johnson",
    readTime: "4 min read",
    tags: ["career", "roles", "comparison"],
  },
  {
    id: "finding-freelance-clients",
    title: "Finding Freelance Clients",
    description: "Proven strategies to find and retain freelance video editing clients",
    path: "/blog/finding-freelance-clients",
    publishDate: "2024-01-10",
    author: "Mike Chen",
    readTime: "6 min read",
    tags: ["freelance", "clients", "business"],
  },
  {
    id: "ai-tools-for-video-editors",
    title: "AI Tools for Video Editors",
    description: "How artificial intelligence is revolutionizing video editing workflows",
    path: "/blog/ai-tools-for-video-editors",
    publishDate: "2024-01-05",
    author: "Emily Rodriguez",
    readTime: "5 min read",
    tags: ["AI", "technology", "workflow"],
  },
];
