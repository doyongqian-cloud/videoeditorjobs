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
    if (!enabled) return;

    // 初始化 dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // 定义 gtag 函数
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    // 配置GA4
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: true,
    });

  }, [measurementId, enabled]);

  // 只有在禁用时才不渲染GA4脚本
  if (!enabled) {
    return null;
  }

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive"
    />
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

