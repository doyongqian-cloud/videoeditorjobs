'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
  enabled?: boolean;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics({ 
  measurementId, 
  enabled = true 
}: GoogleAnalyticsProps) {
  useEffect(() => {
    // 在开发环境或禁用时，不执行GA4初始化
    if (!enabled || process.env.NODE_ENV === 'development') {
      return;
    }

    // 初始化 dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // 定义 gtag 函数
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    // 配置GA4
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      // 性能优化配置
      send_page_view: true,
      transport_type: 'beacon',
      // 隐私保护配置
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      // 增强测量配置
      enhanced_measurements: {
        scrolls: true,
        outbound_clicks: true,
        site_search: true,
        video_engagement: true,
        file_downloads: true,
        page_changes: true,
        form_interactions: true,
      },
      // 自定义参数
      custom_map: {
        'custom_parameter_1': 'user_type',
        'custom_parameter_2': 'page_category',
      },
    });

    // 设置隐私友好的配置
    window.gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
    });

  }, [measurementId, enabled]);

  // 在开发环境或禁用时，不渲染GA4脚本
  if (!enabled || process.env.NODE_ENV === 'development') {
    return null;
  }

  return (
    <>
      {/* Google Analytics 4 脚本 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('GA4 script loaded successfully');
        }}
        onError={() => {
          console.error('Failed to load GA4 script');
        }}
      />
    </>
  );
}

// 自定义事件跟踪函数
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters?.label || '',
      value: parameters?.value || 0,
      ...parameters,
    });
  }
};

// 页面浏览跟踪
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID!, {
      page_title: title || document.title,
      page_location: url,
    });
  }
};

// 用户属性设置
export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', properties);
  }
};

// 转化跟踪
export const trackConversion = (conversionId: string, value?: number, currency?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value || 0,
      currency: currency || 'USD',
    });
  }
};

