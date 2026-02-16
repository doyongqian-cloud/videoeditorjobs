'use client';

import { useState, Suspense } from 'react';
import { 
  trackJobView, 
  trackJobApply, 
  trackResumeDownload, 
  trackSkillAssessment,
  trackUserRegistration,
  trackError,
  sendEvent,
  GA4_EVENTS 
} from '@/lib/analytics';
import PageAnalytics from '@/components/Analytics/PageAnalytics';

export default function AnalyticsDemo() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleJobView = () => {
    trackJobView('job-123', 'Senior Video Editor', 'Creative Studios Inc.');
  };

  const handleJobApply = () => {
    trackJobApply('job-123', 'Senior Video Editor', 'Creative Studios Inc.');
  };

  const handleResumeDownload = () => {
    trackResumeDownload('modern-video-editor', 'resume.pdf');
  };

  const handleSkillAssessment = () => {
    trackSkillAssessment('video-editing', 8, 10);
  };

  const handleUserRegistration = () => {
    trackUserRegistration('email', 'job_seeker');
  };

  const handleError = () => {
    trackError('Demo error message', 'analytics-demo', 'DEMO_ERROR');
  };

  const handleCustomEvent = () => {
    sendEvent(GA4_EVENTS.CLICK, {
      event_category: 'demo',
      event_label: 'Custom Event Button',
      custom_parameter: 'demo_value',
    });
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      sendEvent(GA4_EVENTS.SEARCH, {
        event_category: 'demo',
        event_label: searchTerm,
        search_term: searchTerm,
      });
    }
  };

  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">Loading...</div>}>
      <PageAnalytics 
        pageName="Analytics Demo"
        pageCategory="demo"
        customData={{ demo: true }}
      >
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              GA4 分析功能演示
            </h1>
            
            <div className="space-y-6">
              {/* 搜索演示 */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  搜索跟踪
                </h2>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="输入搜索词..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    onClick={handleSearch}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    搜索
                  </button>
                </div>
              </div>

              {/* 业务事件演示 */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  业务事件跟踪
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={handleJobView}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    跟踪职位浏览
                  </button>
                  <button
                    onClick={handleJobApply}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                  >
                    跟踪职位申请
                  </button>
                  <button
                    onClick={handleResumeDownload}
                    className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                  >
                    跟踪简历下载
                  </button>
                  <button
                    onClick={handleSkillAssessment}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    跟踪技能评估
                  </button>
                </div>
              </div>

              {/* 用户事件演示 */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  用户事件跟踪
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={handleUserRegistration}
                    className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                  >
                    跟踪用户注册
                  </button>
                  <button
                    onClick={handleCustomEvent}
                    className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
                  >
                    跟踪自定义事件
                  </button>
                </div>
              </div>

              {/* 错误跟踪演示 */}
              <div className="pb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  错误跟踪
                </h2>
                <button
                  onClick={handleError}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  触发错误事件
                </button>
              </div>

              {/* 说明信息 */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  说明
                </h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• 在开发环境中，事件会在控制台显示调试信息</li>
                  <li>• 在生产环境中，事件会发送到Google Analytics 4</li>
                  <li>• 所有事件都包含隐私保护配置</li>
                  <li>• 用户可以通过隐私横幅控制数据收集</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </PageAnalytics>
    </Suspense>
  );
}

