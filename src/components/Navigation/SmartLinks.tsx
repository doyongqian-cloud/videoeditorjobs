import React from 'react';
import Link from 'next/link';
import { linkEngine, LinkRecommendation } from '@/lib/navigation';

interface SmartLinksProps {
  currentPageId: string;
  type?: 'related' | 'learning-path' | 'both';
  limit?: number;
  title?: string;
  className?: string;
}

export function SmartLinks({ 
  currentPageId, 
  type = 'both', 
  limit = 4, 
  title = "Related Content",
  className = ""
}: SmartLinksProps) {
  const relatedPages = linkEngine.getRelatedPages(currentPageId, limit);
  const learningPathPages = linkEngine.getLearningPathRecommendations(currentPageId);
  
  let recommendations: LinkRecommendation[] = [];
  
  if (type === 'related') {
    recommendations = relatedPages;
  } else if (type === 'learning-path') {
    recommendations = learningPathPages;
  } else {
    // 合并并去重
    const allRecommendations = [...relatedPages, ...learningPathPages];
    const uniqueRecommendations = allRecommendations.filter((rec, index, self) => 
      index === self.findIndex(r => r.pageId === rec.pageId)
    );
    recommendations = uniqueRecommendations.slice(0, limit);
  }

  if (recommendations.length === 0) return null;

  return (
    <div className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {recommendations.map((rec) => (
          <Link
            key={rec.pageId}
            href={rec.path}
            className="group p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 hover:shadow-md"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                  rec.type === 'next-step' 
                    ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                    : rec.type === 'complementary'
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                    : 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
                }`}>
                  {rec.type === 'next-step' ? '→' : rec.type === 'complementary' ? '🛠️' : '📚'}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {rec.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {rec.reason}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

interface PageNavigationProps {
  currentPageId: string;
  category?: string;
  className?: string;
}

export function PageNavigation({ currentPageId, category, className = "" }: PageNavigationProps) {
  const navigation = linkEngine.getPageNavigation(currentPageId, category);
  
  if (!navigation.previous && !navigation.next) return null;

  return (
    <div className={`flex justify-between items-center py-6 border-t border-gray-200 dark:border-gray-700 ${className}`}>
      {navigation.previous ? (
        <Link
          href={navigation.previous.path}
          className="group flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div>
            <div className="text-sm font-medium">Previous</div>
            <div className="text-xs">{navigation.previous.title}</div>
          </div>
        </Link>
      ) : (
        <div></div>
      )}

      {navigation.next ? (
        <Link
          href={navigation.next.path}
          className="group flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <div className="text-right">
            <div className="text-sm font-medium">Next</div>
            <div className="text-xs">{navigation.next.title}</div>
          </div>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}

interface BreadcrumbNavigationProps {
  currentPageId: string;
  className?: string;
}

export function BreadcrumbNavigation({ currentPageId, className = "" }: BreadcrumbNavigationProps) {
  const breadcrumbs = linkEngine.getBreadcrumbs(currentPageId);
  
  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`}>
      <Link
        href="/"
        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        Home
      </Link>
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={crumb.id}>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {index === breadcrumbs.length - 1 ? (
            <span className="text-gray-900 dark:text-white font-medium">
              {crumb.title}
            </span>
          ) : (
            <Link
              href={crumb.path}
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {crumb.title}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

interface LearningPathProps {
  currentPageId: string;
  className?: string;
}

export function LearningPath({ currentPageId, className = "" }: LearningPathProps) {
  const recommendations = linkEngine.getLearningPathRecommendations(currentPageId);
  
  if (recommendations.length === 0) return null;

  return (
    <div className={`bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        🎯 Continue Your Learning Journey
      </h3>
      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <Link
            key={rec.pageId}
            href={rec.path}
            className="group flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-200"
          >
            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-xs font-medium text-blue-600 dark:text-blue-400">
              {index + 1}
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {rec.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {rec.reason}
              </p>
            </div>
            <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
