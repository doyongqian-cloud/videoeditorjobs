'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { sendPageView, sendEvent, GA4_EVENTS } from '@/lib/analytics';

// 页面浏览跟踪Hook
export function usePageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 构建完整URL
    const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    
    // 发送页面浏览事件
    sendPageView(url);
    
    // 发送自定义页面浏览事件
    sendEvent(GA4_EVENTS.PAGE_VIEW, {
      event_category: 'navigation',
      page_path: pathname,
      page_search: searchParams.toString(),
    });
  }, [pathname, searchParams]);
}

// 滚动跟踪Hook
export function useScrollTracking() {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let maxScroll = 0;

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // 跟踪25%, 50%, 75%, 100%的滚动
      if (scrollPercent >= 25 && maxScroll < 25) {
        sendEvent(GA4_EVENTS.SCROLL, {
          event_category: 'engagement',
          event_label: '25%',
          scroll_depth: 25,
        });
        maxScroll = 25;
      } else if (scrollPercent >= 50 && maxScroll < 50) {
        sendEvent(GA4_EVENTS.SCROLL, {
          event_category: 'engagement',
          event_label: '50%',
          scroll_depth: 50,
        });
        maxScroll = 50;
      } else if (scrollPercent >= 75 && maxScroll < 75) {
        sendEvent(GA4_EVENTS.SCROLL, {
          event_category: 'engagement',
          event_label: '75%',
          scroll_depth: 75,
        });
        maxScroll = 75;
      } else if (scrollPercent >= 100 && maxScroll < 100) {
        sendEvent(GA4_EVENTS.SCROLL, {
          event_category: 'engagement',
          event_label: '100%',
          scroll_depth: 100,
        });
        maxScroll = 100;
      }

      // 防抖处理
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // 可以在这里添加额外的滚动分析
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
}

// 点击跟踪Hook
export function useClickTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // 跟踪按钮点击
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.closest('button') || target;
        const buttonText = button.textContent?.trim() || '';
        const buttonClass = button.className || '';
        
        sendEvent(GA4_EVENTS.CLICK, {
          event_category: 'interaction',
          event_label: buttonText,
          element_type: 'button',
          element_class: buttonClass,
        });
      }
      
      // 跟踪链接点击
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.closest('a') || target;
        const linkText = link.textContent?.trim() || '';
        const linkHref = (link as HTMLAnchorElement).href || '';
        const isExternal = linkHref && !linkHref.startsWith(window.location.origin);
        
        sendEvent(GA4_EVENTS.CLICK, {
          event_category: 'interaction',
          event_label: linkText,
          element_type: 'link',
          link_url: linkHref,
          is_external: isExternal,
        });
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
}

// 搜索跟踪Hook
export function useSearchTracking() {
  const trackSearch = (searchTerm: string, resultsCount?: number) => {
    sendEvent(GA4_EVENTS.SEARCH, {
      event_category: 'engagement',
      event_label: searchTerm,
      search_term: searchTerm,
      results_count: resultsCount || 0,
    });
  };

  return { trackSearch };
}

// 错误跟踪Hook
export function useErrorTracking() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      sendEvent(GA4_EVENTS.ERROR, {
        event_category: 'error',
        event_label: event.message,
        error_message: event.message,
        error_filename: event.filename,
        error_lineno: event.lineno,
        error_colno: event.colno,
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      sendEvent(GA4_EVENTS.ERROR, {
        event_category: 'error',
        event_label: 'Unhandled Promise Rejection',
        error_message: event.reason?.toString() || 'Unknown error',
        error_type: 'unhandled_rejection',
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);
}

// 综合分析Hook
export function useAnalytics() {
  usePageTracking();
  useScrollTracking();
  useClickTracking();
  useErrorTracking();
  
  const { trackSearch } = useSearchTracking();
  
  return {
    trackSearch,
  };
}
