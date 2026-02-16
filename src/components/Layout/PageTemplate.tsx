import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { SmartLinks, PageNavigation, BreadcrumbNavigation, LearningPath } from '@/components/Navigation/SmartLinks';
import { getPageById } from '@/lib/navigation';

interface PageTemplateProps {
  children: React.ReactNode;
  pageId: string;
  pageName: string;
  description: string;
  showSmartLinks?: boolean;
  showPageNavigation?: boolean;
  showLearningPath?: boolean;
  showBreadcrumb?: boolean;
  className?: string;
}

export function PageTemplate({
  children,
  pageId,
  pageName,
  description,
  showSmartLinks = true,
  showPageNavigation = true,
  showLearningPath = true,
  showBreadcrumb = true,
  className = ""
}: PageTemplateProps) {
  const pageData = getPageById(pageId);

  return (
    <div className={className}>
      {/* 面包屑导航 */}
      {showBreadcrumb && (
        <div className="container py-4">
          <BreadcrumbNavigation currentPageId={pageId} />
        </div>
      )}

      {/* 页面标题区域 */}
      <Breadcrumb pageName={pageName} description={description} />

      {/* 主要内容 */}
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* 主要内容区域 */}
            <div className="lg:col-span-3">
              {children}
            </div>

            {/* 侧边栏 - 智能链接推荐 */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* 相关页面推荐 */}
                {showSmartLinks && (
                  <SmartLinks 
                    currentPageId={pageId}
                    type="related"
                    limit={3}
                    title="Related Guides"
                  />
                )}

                {/* 学习路径推荐 */}
                {showLearningPath && (
                  <LearningPath currentPageId={pageId} />
                )}

                {/* 页面分类信息 */}
                {pageData && (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Page Info
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Category:</span>
                        <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                          {pageData.category}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Priority:</span>
                        <span className="ml-2 text-sm text-gray-900 dark:text-white">
                          {pageData.priority}/10
                        </span>
                      </div>
                      {pageData.tags.length > 0 && (
                        <div>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Tags:</span>
                          <div className="mt-2 flex flex-wrap gap-1">
                            {pageData.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 页面导航 */}
      {showPageNavigation && (
        <PageNavigation currentPageId={pageId} />
      )}
    </div>
  );
}

// 生成页面元数据的辅助函数
export function generatePageMetadata(
  pageId: string,
  customTitle?: string,
  customDescription?: string
): Metadata {
  const pageData = getPageById(pageId);
  
  if (!pageData) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    };
  }

  const title = customTitle || pageData.title;
  const description = customDescription || pageData.description || '';

  return {
    title: `${title} | Assistant Video Editor Jobs`,
    description,
    keywords: pageData.tags,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://assistantvideoeditorjobs.com${pageData.path}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://assistantvideoeditorjobs.com${pageData.path}`
    }
  };
}
