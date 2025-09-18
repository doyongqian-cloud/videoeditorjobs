/**
 * 可扩展的网站导航和链接管理系统
 * 支持动态添加新页面和智能链接推荐
 */

export interface NavigationNode {
  id: string;
  title: string;
  path: string;
  description?: string;
  category: 'guide' | 'job' | 'tool' | 'blog' | 'page';
  priority: number; // 1-10, 10为最高优先级
  tags: string[];
  relatedPages?: string[]; // 相关页面ID数组
  parentId?: string; // 父级页面ID
  children?: NavigationNode[];
  lastModified?: Date;
  isActive?: boolean;
}

export interface LinkRecommendation {
  pageId: string;
  title: string;
  path: string;
  reason: string;
  type: 'related' | 'next-step' | 'prerequisite' | 'complementary';
  priority: number;
}

// 核心页面数据
export const navigationData: NavigationNode[] = [
  // 指南类页面
  {
    id: 'how-to-become',
    title: 'How to Become an Assistant Video Editor',
    path: '/guides/how-to-become',
    description: 'Complete step-by-step guide to start your career',
    category: 'guide',
    priority: 10,
    tags: ['career', 'beginner', 'roadmap', 'skills'],
    relatedPages: ['skills', 'resume-portfolio', 'interview-prep'],
    children: [
      {
        id: 'education-training',
        title: 'Education & Training',
        path: '/guides/how-to-become#step-1',
        category: 'guide',
        priority: 8,
        tags: ['education', 'training', 'courses'],
        parentId: 'how-to-become'
      },
      {
        id: 'develop-skills',
        title: 'Develop Essential Skills',
        path: '/guides/how-to-become#step-2',
        category: 'guide',
        priority: 8,
        tags: ['skills', 'technical', 'creative'],
        parentId: 'how-to-become'
      },
      {
        id: 'build-portfolio',
        title: 'Build Your Portfolio',
        path: '/guides/how-to-become#step-3',
        category: 'guide',
        priority: 8,
        tags: ['portfolio', 'projects', 'showcase'],
        parentId: 'how-to-become'
      }
    ]
  },
  {
    id: 'skills',
    title: 'Skills & Requirements',
    path: '/guides/skills',
    description: 'Essential skills for assistant video editors',
    category: 'guide',
    priority: 9,
    tags: ['skills', 'requirements', 'technical', 'soft-skills'],
    relatedPages: ['how-to-become', 'resume-portfolio', 'interview-prep']
  },
  {
    id: 'resume-portfolio',
    title: 'Resume & Portfolio Tips',
    path: '/guides/resume-portfolio',
    description: 'Master resume writing and portfolio creation for assistant video editors. Get templates, examples, and expert tips to land your dream job.',
    category: 'guide',
    priority: 9,
    tags: ['resume', 'portfolio', 'job-search', 'application', 'templates', 'examples', 'career'],
    relatedPages: ['how-to-become', 'skills', 'interview-prep', 'ai-resume-builder', 'resume-templates']
  },
  {
    id: 'interview-prep',
    title: 'Interview Preparation',
    path: '/guides/interview-preparation',
    description: 'Ace your assistant video editor interviews',
    category: 'guide',
    priority: 8,
    tags: ['interview', 'preparation', 'questions', 'tips'],
    relatedPages: ['resume-portfolio', 'skills', 'how-to-become']
  },

  // 工具类页面
  {
    id: 'ai-resume-builder',
    title: 'AI Resume Builder',
    path: '/tools/ai-resume-builder',
    description: 'Create professional resumes with AI assistance',
    category: 'tool',
    priority: 8,
    tags: ['ai', 'resume', 'builder', 'automation'],
    relatedPages: ['resume-portfolio', 'resume-templates']
  },
  {
    id: 'resume-templates',
    title: 'Resume Templates',
    path: '/tools/resume-templates',
    description: 'Professional resume templates for video editors',
    category: 'tool',
    priority: 7,
    tags: ['templates', 'resume', 'design'],
    relatedPages: ['ai-resume-builder', 'resume-portfolio']
  },
  {
    id: 'free-editing-software',
    title: 'Free Editing Software',
    path: '/tools/free-editing-software',
    description: 'Best free video editing software for beginners',
    category: 'tool',
    priority: 8,
    tags: ['software', 'free', 'editing', 'beginner'],
    relatedPages: ['skills', 'how-to-become']
  },

  // 工作类页面
  {
    id: 'entry-level-jobs',
    title: 'Entry-Level Jobs',
    path: '/jobs/entry-level-assistant-video-editor',
    description: 'Find entry-level assistant video editor positions',
    category: 'job',
    priority: 9,
    tags: ['jobs', 'entry-level', 'beginner', 'career'],
    relatedPages: ['how-to-become', 'resume-portfolio', 'interview-prep']
  },
  {
    id: 'freelance-jobs',
    title: 'Freelance Jobs',
    path: '/jobs/freelance-assistant-video-editor',
    description: 'Freelance assistant video editor opportunities',
    category: 'job',
    priority: 8,
    tags: ['freelance', 'jobs', 'remote', 'flexible'],
    relatedPages: ['entry-level-jobs', 'resume-portfolio']
  },
  {
    id: 'remote-jobs',
    title: 'Remote Jobs',
    path: '/jobs/remote-assistant-video-editor',
    description: 'Remote assistant video editor positions',
    category: 'job',
    priority: 8,
    tags: ['remote', 'jobs', 'work-from-home'],
    relatedPages: ['freelance-jobs', 'entry-level-jobs']
  },

  // 博客类页面
  {
    id: 'ai-tools-blog',
    title: 'AI Tools for Video Editors',
    path: '/blog/ai-tools-for-video-editors',
    description: 'Latest AI tools transforming video editing',
    category: 'blog',
    priority: 7,
    tags: ['ai', 'tools', 'technology', 'innovation'],
    relatedPages: ['free-editing-software', 'skills']
  },
  {
    id: 'freelance-clients-blog',
    title: 'Finding Freelance Clients',
    path: '/blog/finding-freelance-clients',
    description: 'Strategies to find and retain freelance clients',
    category: 'blog',
    priority: 7,
    tags: ['freelance', 'clients', 'business', 'networking'],
    relatedPages: ['freelance-jobs', 'interview-prep']
  }
];

// 页面关系映射
export const pageRelations: Record<string, string[]> = {
  'how-to-become': ['skills', 'resume-portfolio', 'interview-prep', 'entry-level-jobs'],
  'skills': ['how-to-become', 'resume-portfolio', 'free-editing-software'],
  'resume-portfolio': ['ai-resume-builder', 'resume-templates', 'interview-prep', 'how-to-become', 'skills'],
  'interview-prep': ['resume-portfolio', 'skills', 'entry-level-jobs'],
  'entry-level-jobs': ['how-to-become', 'resume-portfolio', 'interview-prep'],
  'freelance-jobs': ['freelance-clients-blog', 'resume-portfolio'],
  'ai-resume-builder': ['resume-templates', 'resume-portfolio'],
  'resume-templates': ['ai-resume-builder', 'resume-portfolio'],
  'free-editing-software': ['skills', 'how-to-become', 'ai-tools-blog']
};

// 学习路径定义
export const learningPaths = {
  beginner: [
    'how-to-become',
    'skills',
    'free-editing-software',
    'resume-portfolio',
    'entry-level-jobs'
  ],
  jobSeeker: [
    'resume-portfolio',
    'ai-resume-builder',
    'interview-prep',
    'entry-level-jobs',
    'freelance-jobs'
  ],
  freelancer: [
    'freelance-jobs',
    'freelance-clients-blog',
    'resume-portfolio',
    'remote-jobs'
  ],
  advanced: [
    'ai-tools-blog',
    'freelance-jobs',
    'remote-jobs'
  ]
};

// 智能链接推荐系统
export class LinkRecommendationEngine {
  private navigationData: NavigationNode[];
  private pageRelations: Record<string, string[]>;

  constructor() {
    this.navigationData = navigationData;
    this.pageRelations = pageRelations;
  }

  // 获取相关页面推荐
  getRelatedPages(currentPageId: string, limit: number = 4): LinkRecommendation[] {
    const currentPage = this.navigationData.find(page => page.id === currentPageId);
    if (!currentPage) return [];

    const relatedPageIds = this.pageRelations[currentPageId] || [];
    const recommendations: LinkRecommendation[] = [];

    relatedPageIds.forEach(pageId => {
      const page = this.navigationData.find(p => p.id === pageId);
      if (page) {
        recommendations.push({
          pageId: page.id,
          title: page.title,
          path: page.path,
          reason: this.getRecommendationReason(currentPage, page),
          type: this.getRecommendationType(currentPage, page),
          priority: page.priority
        });
      }
    });

    return recommendations
      .sort((a, b) => b.priority - a.priority)
      .slice(0, limit);
  }

  // 获取学习路径推荐
  getLearningPathRecommendations(currentPageId: string): LinkRecommendation[] {
    const recommendations: LinkRecommendation[] = [];
    
    Object.entries(learningPaths).forEach(([pathName, pageIds]) => {
      const currentIndex = pageIds.indexOf(currentPageId);
      if (currentIndex !== -1) {
        // 推荐学习路径中的下一个页面
        const nextPageId = pageIds[currentIndex + 1];
        if (nextPageId) {
          const page = this.navigationData.find(p => p.id === nextPageId);
          if (page) {
            recommendations.push({
              pageId: page.id,
              title: page.title,
              path: page.path,
              reason: `Next step in ${pathName} learning path`,
              type: 'next-step',
              priority: page.priority
            });
          }
        }
      }
    });

    return recommendations;
  }

  // 根据标签获取相关页面
  getPagesByTags(tags: string[], excludePageId?: string): LinkRecommendation[] {
    const recommendations: LinkRecommendation[] = [];

    this.navigationData.forEach(page => {
      if (page.id === excludePageId) return;

      const matchingTags = page.tags.filter(tag => tags.includes(tag));
      if (matchingTags.length > 0) {
        recommendations.push({
          pageId: page.id,
          title: page.title,
          path: page.path,
          reason: `Related to: ${matchingTags.join(', ')}`,
          type: 'related',
          priority: page.priority + matchingTags.length
        });
      }
    });

    return recommendations
      .sort((a, b) => b.priority - a.priority)
      .slice(0, 6);
  }

  // 获取面包屑导航
  getBreadcrumbs(currentPageId: string): NavigationNode[] {
    const currentPage = this.navigationData.find(page => page.id === currentPageId);
    if (!currentPage) return [];

    const breadcrumbs: NavigationNode[] = [];
    
    // 添加父级页面
    if (currentPage.parentId) {
      const parentPage = this.navigationData.find(page => page.id === currentPage.parentId);
      if (parentPage) {
        breadcrumbs.push(parentPage);
      }
    }

    // 添加当前页面
    breadcrumbs.push(currentPage);

    return breadcrumbs;
  }

  // 获取页面导航（上一页/下一页）
  getPageNavigation(currentPageId: string, category?: string): {
    previous?: NavigationNode;
    next?: NavigationNode;
  } {
    const categoryPages = category 
      ? this.navigationData.filter(page => page.category === category)
      : this.navigationData;

    const currentIndex = categoryPages.findIndex(page => page.id === currentPageId);
    
    return {
      previous: currentIndex > 0 ? categoryPages[currentIndex - 1] : undefined,
      next: currentIndex < categoryPages.length - 1 ? categoryPages[currentIndex + 1] : undefined
    };
  }

  private getRecommendationReason(currentPage: NavigationNode, recommendedPage: NavigationNode): string {
    const commonTags = currentPage.tags.filter(tag => recommendedPage.tags.includes(tag));
    
    if (commonTags.length > 0) {
      return `Also covers: ${commonTags.join(', ')}`;
    }
    
    if (recommendedPage.category === 'tool' && currentPage.category === 'guide') {
      return 'Tools to help with this topic';
    }
    
    if (recommendedPage.category === 'job' && currentPage.category === 'guide') {
      return 'Apply what you learned';
    }
    
    return 'Related content';
  }

  private getRecommendationType(currentPage: NavigationNode, recommendedPage: NavigationNode): 'related' | 'next-step' | 'prerequisite' | 'complementary' {
    if (recommendedPage.category === 'tool' && currentPage.category === 'guide') {
      return 'complementary';
    }
    
    if (recommendedPage.category === 'job' && currentPage.category === 'guide') {
      return 'next-step';
    }
    
    return 'related';
  }
}

// 导出单例实例
export const linkEngine = new LinkRecommendationEngine();

// 工具函数
export function getPageById(id: string): NavigationNode | undefined {
  return navigationData.find(page => page.id === id);
}

export function getPagesByCategory(category: string): NavigationNode[] {
  return navigationData.filter(page => page.category === category);
}

export function searchPages(query: string): NavigationNode[] {
  const lowercaseQuery = query.toLowerCase();
  return navigationData.filter(page => 
    page.title.toLowerCase().includes(lowercaseQuery) ||
    page.description?.toLowerCase().includes(lowercaseQuery) ||
    page.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}
