'use client';

import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface PageAnalyticsProps {
  pageName?: string;
  pageCategory?: string;
  customData?: Record<string, any>;
  children?: React.ReactNode;
}

export default function PageAnalytics({ 
  pageName, 
  pageCategory = 'page',
  customData = {},
  children 
}: PageAnalyticsProps) {
  const { trackSearch } = useAnalytics();

  useEffect(() => {
    // 发送页面特定的自定义事件
    if (pageName) {
      // 这里可以添加页面特定的跟踪逻辑
      console.log(`[Analytics] Page loaded: ${pageName}`, customData);
    }
  }, [pageName, customData]);

  return children || null; // 渲染子组件或返回null
}

// 高阶组件，用于包装页面组件并自动添加分析
export function withAnalytics<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  analyticsConfig?: {
    pageName?: string;
    pageCategory?: string;
  }
) {
  return function AnalyticsWrappedComponent(props: P) {
    return (
      <>
        <PageAnalytics 
          pageName={analyticsConfig?.pageName}
          pageCategory={analyticsConfig?.pageCategory}
        />
        <WrappedComponent {...props} />
      </>
    );
  };
}

