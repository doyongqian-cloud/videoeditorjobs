// GA4 配置和工具函数

export const GA4_CONFIG = {
  measurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-VZZMFQ9BWE',
  enabled: process.env.NEXT_PUBLIC_GA4_ENABLED === 'true' && process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'development',
};

// 事件类型定义
export const GA4_EVENTS = {
  // 页面浏览
  PAGE_VIEW: 'page_view',
  
  // 用户交互
  CLICK: 'click',
  SCROLL: 'scroll',
  SEARCH: 'search',
  
  // 业务事件
  JOB_VIEW: 'job_view',
  JOB_APPLY: 'job_apply',
  RESUME_DOWNLOAD: 'resume_download',
  SKILL_ASSESSMENT: 'skill_assessment',
  USER_REGISTER: 'user_register',
  USER_LOGIN: 'user_login',
  
  // 转化事件
  CONVERSION: 'conversion',
  PURCHASE: 'purchase',
  
  // 错误跟踪
  ERROR: 'error',
  EXCEPTION: 'exception',
} as const;

// 事件参数类型
export interface GA4EventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

// 用户属性类型
export interface GA4UserProperties {
  user_type?: 'job_seeker' | 'employer' | 'guest';
  subscription_tier?: 'free' | 'premium' | 'enterprise';
  experience_level?: 'entry' | 'mid' | 'senior' | 'executive';
  location?: string;
  industry?: string;
  [key: string]: any;
}

// 检查GA4是否可用
export const isGA4Available = (): boolean => {
  return typeof window !== 'undefined' && 
         window.gtag && 
         GA4_CONFIG.enabled;
};

// 发送事件到GA4
export const sendEvent = (eventName: string, parameters?: GA4EventParams): void => {
  if (!isGA4Available()) {
    if (GA4_CONFIG.debug) {
      console.log(`[GA4 Debug] Event: ${eventName}`, parameters);
    }
    return;
  }

  try {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      ...parameters,
    });
  } catch (error) {
    console.error('GA4 Event Error:', error);
  }
};

// 发送页面浏览事件
export const sendPageView = (url: string, title?: string): void => {
  if (!isGA4Available()) {
    if (GA4_CONFIG.debug) {
      console.log(`[GA4 Debug] Page View: ${url}`, { title });
    }
    return;
  }

  try {
    window.gtag('config', GA4_CONFIG.measurementId, {
      page_title: title || document.title,
      page_location: url,
    });
  } catch (error) {
    console.error('GA4 Page View Error:', error);
  }
};

// 设置用户属性
export const setUserProperties = (properties: GA4UserProperties): void => {
  if (!isGA4Available()) {
    if (GA4_CONFIG.debug) {
      console.log('[GA4 Debug] User Properties:', properties);
    }
    return;
  }

  try {
    window.gtag('set', 'user_properties', properties);
  } catch (error) {
    console.error('GA4 User Properties Error:', error);
  }
};

// 设置用户ID
export const setUserId = (userId: string): void => {
  if (!isGA4Available()) {
    if (GA4_CONFIG.debug) {
      console.log(`[GA4 Debug] User ID: ${userId}`);
    }
    return;
  }

  try {
    window.gtag('config', GA4_CONFIG.measurementId, {
      user_id: userId,
    });
  } catch (error) {
    console.error('GA4 User ID Error:', error);
  }
};

// 业务特定事件跟踪
export const trackJobView = (jobId: string, jobTitle: string, company: string) => {
  sendEvent(GA4_EVENTS.JOB_VIEW, {
    event_category: 'job_interaction',
    event_label: jobTitle,
    job_id: jobId,
    company_name: company,
  });
};

export const trackJobApply = (jobId: string, jobTitle: string, company: string) => {
  sendEvent(GA4_EVENTS.JOB_APPLY, {
    event_category: 'conversion',
    event_label: jobTitle,
    job_id: jobId,
    company_name: company,
    value: 1,
  });
};

export const trackResumeDownload = (templateType: string, fileName: string) => {
  sendEvent(GA4_EVENTS.RESUME_DOWNLOAD, {
    event_category: 'file_download',
    event_label: templateType,
    file_name: fileName,
    value: 1,
  });
};

export const trackSkillAssessment = (skillType: string, score: number, totalQuestions: number) => {
  sendEvent(GA4_EVENTS.SKILL_ASSESSMENT, {
    event_category: 'engagement',
    event_label: skillType,
    skill_type: skillType,
    score: score,
    total_questions: totalQuestions,
    completion_rate: (score / totalQuestions) * 100,
  });
};

export const trackUserRegistration = (method: 'email' | 'google', userType: string) => {
  sendEvent(GA4_EVENTS.USER_REGISTER, {
    event_category: 'conversion',
    event_label: method,
    registration_method: method,
    user_type: userType,
    value: 1,
  });
};

export const trackError = (errorMessage: string, errorLocation: string, errorCode?: string) => {
  sendEvent(GA4_EVENTS.ERROR, {
    event_category: 'error',
    event_label: errorLocation,
    error_message: errorMessage,
    error_location: errorLocation,
    error_code: errorCode,
  });
};

// 隐私控制
export const setConsent = (analytics: boolean, ads: boolean) => {
  if (!isGA4Available()) return;

  try {
    window.gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: ads ? 'granted' : 'denied',
      ad_user_data: ads ? 'granted' : 'denied',
      ad_personalization: ads ? 'granted' : 'denied',
    });
  } catch (error) {
    console.error('GA4 Consent Error:', error);
  }
};

// 初始化隐私设置
export const initializeConsent = () => {
  if (!isGA4Available()) return;

  try {
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  } catch (error) {
    console.error('GA4 Consent Initialization Error:', error);
  }
};

