/**
 * 内容扩展管理器
 * 用于动态添加新页面和更新链接关系
 */

import { NavigationNode, pageRelations, learningPaths } from './navigation';

export interface NewPageData {
  id: string;
  title: string;
  path: string;
  description: string;
  category: 'guide' | 'job' | 'tool' | 'blog' | 'page';
  priority: number;
  tags: string[];
  relatedPages?: string[];
  parentId?: string;
  children?: NewPageData[];
}

export class ContentManager {
  /**
   * 添加新页面到导航系统
   */
  static addNewPage(pageData: NewPageData): {
    navigationUpdate: NavigationNode;
    relationUpdates: Record<string, string[]>;
    learningPathUpdates: Record<string, string[]>;
  } {
    // 创建导航节点
    const navigationNode: NavigationNode = {
      ...pageData,
      lastModified: new Date(),
      isActive: true
    };

    // 更新页面关系
    const relationUpdates: Record<string, string[]> = {};
    if (pageData.relatedPages) {
      relationUpdates[pageData.id] = pageData.relatedPages;
      
      // 双向关系
      pageData.relatedPages.forEach(relatedId => {
        if (!pageRelations[relatedId]) {
          pageRelations[relatedId] = [];
        }
        if (!pageRelations[relatedId].includes(pageData.id)) {
          pageRelations[relatedId].push(pageData.id);
          relationUpdates[relatedId] = pageRelations[relatedId];
        }
      });
    }

    // 学习路径更新（可选）
    const learningPathUpdates: Record<string, string[]> = {};

    return {
      navigationUpdate: navigationNode,
      relationUpdates,
      learningPathUpdates
    };
  }

  /**
   * 批量添加相关页面
   */
  static addRelatedPages(
    basePageId: string, 
    relatedPageIds: string[]
  ): Record<string, string[]> {
    const updates: Record<string, string[]> = {};
    
    // 更新基础页面的关系
    if (!pageRelations[basePageId]) {
      pageRelations[basePageId] = [];
    }
    pageRelations[basePageId] = [
      ...new Set([...pageRelations[basePageId], ...relatedPageIds])
    ];
    updates[basePageId] = pageRelations[basePageId];

    // 更新相关页面的反向关系
    relatedPageIds.forEach(relatedId => {
      if (!pageRelations[relatedId]) {
        pageRelations[relatedId] = [];
      }
      if (!pageRelations[relatedId].includes(basePageId)) {
        pageRelations[relatedId].push(basePageId);
        updates[relatedId] = pageRelations[relatedId];
      }
    });

    return updates;
  }

  /**
   * 创建内容系列
   */
  static createContentSeries(
    seriesId: string,
    seriesTitle: string,
    pages: NewPageData[]
  ): {
    seriesNavigation: NavigationNode;
    pageUpdates: NavigationNode[];
    relationUpdates: Record<string, string[]>;
  } {
    const seriesNavigation: NavigationNode = {
      id: seriesId,
      title: seriesTitle,
      path: `/series/${seriesId}`,
      description: `Complete ${seriesTitle} series`,
      category: 'guide',
      priority: 8,
      tags: ['series', 'comprehensive'],
      children: pages.map(page => ({
        ...page,
        parentId: seriesId,
        category: page.category,
        priority: page.priority,
        tags: page.tags
      }))
    };

    const pageUpdates: NavigationNode[] = pages.map(page => ({
      ...page,
      parentId: seriesId,
      lastModified: new Date(),
      isActive: true
    }));

    // 创建系列内部的关系链
    const relationUpdates: Record<string, string[]> = {};
    for (let i = 0; i < pages.length - 1; i++) {
      const currentId = pages[i].id;
      const nextId = pages[i + 1].id;
      
      if (!relationUpdates[currentId]) {
        relationUpdates[currentId] = [];
      }
      relationUpdates[currentId].push(nextId);
    }

    return {
      seriesNavigation,
      pageUpdates,
      relationUpdates
    };
  }

  /**
   * 生成页面模板代码
   */
  static generatePageTemplate(pageData: NewPageData): string {
    const componentName = pageData.id
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    return `import { PageTemplate, generatePageMetadata } from '@/components/Layout/PageTemplate';

export const metadata = generatePageMetadata('${pageData.id}');

const ${componentName} = () => {
  return (
    <PageTemplate
      pageId="${pageData.id}"
      pageName="${pageData.title}"
      description="${pageData.description}"
    >
      {/* 页面内容 */}
      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ${pageData.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            ${pageData.description}
          </p>
        </section>
      </div>
    </PageTemplate>
  );
};

export default ${componentName};`;
  }

  /**
   * 更新学习路径
   */
  static updateLearningPath(
    pathName: string,
    pageIds: string[]
  ): Record<string, string[]> {
    learningPaths[pathName] = pageIds;
    return { [pathName]: pageIds };
  }

  /**
   * 获取内容扩展建议
   */
  static getContentExpansionSuggestions(): {
    missingTopics: string[];
    suggestedSeries: string[];
    highPriorityPages: string[];
  } {
    const existingTags = new Set<string>();
    const existingCategories = new Set<string>();

    // 分析现有内容
    Object.values(pageRelations).forEach(relatedPages => {
      relatedPages.forEach(pageId => {
        // 这里应该从实际的导航数据中获取标签和分类
        // 为了示例，我们使用硬编码的数据
      });
    });

    return {
      missingTopics: [
        'color-grading',
        'motion-graphics',
        'audio-editing',
        'workflow-optimization',
        'client-management'
      ],
      suggestedSeries: [
        'Complete Video Editing Mastery',
        'Freelance Success Guide',
        'Industry Software Deep Dive',
        'Career Advancement Path'
      ],
      highPriorityPages: [
        'color-grading-basics',
        'motion-graphics-intro',
        'client-communication',
        'pricing-strategies'
      ]
    };
  }
}

// 预定义的内容模板
export const contentTemplates = {
  guide: {
    structure: [
      'Introduction',
      'Step-by-step instructions',
      'Best practices',
      'Common mistakes',
      'Resources and tools',
      'Next steps'
    ],
    tags: ['guide', 'tutorial', 'how-to'],
    priority: 8
  },
  tool: {
    structure: [
      'Tool overview',
      'Key features',
      'Pricing information',
      'Pros and cons',
      'Alternatives',
      'Getting started'
    ],
    tags: ['tool', 'software', 'review'],
    priority: 7
  },
  job: {
    structure: [
      'Job description',
      'Requirements',
      'Salary range',
      'Company information',
      'Application process',
      'Interview tips'
    ],
    tags: ['job', 'career', 'opportunity'],
    priority: 9
  },
  blog: {
    structure: [
      'Introduction',
      'Main content',
      'Examples',
      'Conclusion',
      'Related resources'
    ],
    tags: ['blog', 'article', 'insights'],
    priority: 6
  }
};

// 内容扩展工作流
export class ContentExpansionWorkflow {
  /**
   * 创建新页面的完整工作流
   */
  static async createNewPage(pageData: NewPageData): Promise<{
    success: boolean;
    filesCreated: string[];
    updatesNeeded: string[];
    nextSteps: string[];
  }> {
    const filesCreated: string[] = [];
    const updatesNeeded: string[] = [];
    const nextSteps: string[] = [];

    try {
      // 1. 生成页面模板
      const template = ContentManager.generatePageTemplate(pageData);
      filesCreated.push(`src/app${pageData.path}/page.tsx`);

      // 2. 更新导航数据
      const { navigationUpdate, relationUpdates } = ContentManager.addNewPage(pageData);
      updatesNeeded.push('src/lib/navigation.ts');
      updatesNeeded.push('src/components/Header/menuData.tsx');
      updatesNeeded.push('src/app/sitemap.ts');

      // 3. 更新相关页面
      if (pageData.relatedPages) {
        Object.keys(relationUpdates).forEach(pageId => {
          nextSteps.push(`Update ${pageId} page to include links to new page`);
        });
      }

      // 4. 生成下一步建议
      nextSteps.push('Add internal links to existing related pages');
      nextSteps.push('Update sitemap and robots.txt');
      nextSteps.push('Test all navigation links');
      nextSteps.push('Add page to search functionality');

      return {
        success: true,
        filesCreated,
        updatesNeeded,
        nextSteps
      };
    } catch (error) {
      return {
        success: false,
        filesCreated: [],
        updatesNeeded: [],
        nextSteps: ['Fix errors and retry']
      };
    }
  }
}
