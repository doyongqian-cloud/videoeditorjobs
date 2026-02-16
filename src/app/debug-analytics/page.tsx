'use client';

import { useState, useEffect } from 'react';
import { 
  sendEvent, 
  sendPageView, 
  setUserProperties, 
  setUserId,
  trackJobView,
  trackJobApply,
  trackResumeDownload,
  trackSkillAssessment,
  trackUserRegistration,
  trackError,
  GA4_EVENTS,
  isGA4Available,
  GA4_CONFIG
} from '@/lib/analytics';

export default function DebugAnalyticsPage() {
  const [testResults, setTestResults] = useState<Array<{test: string, status: 'pending' | 'success' | 'error', message: string}>>([]);
  const [isGA4Ready, setIsGA4Ready] = useState(false);

  useEffect(() => {
    // 检查GA4是否可用
    const checkGA4 = () => {
      const available = isGA4Available();
      setIsGA4Ready(available);
      
      if (available) {
        addTestResult('GA4可用性检查', 'success', 'GA4已正确加载并可用');
      } else {
        addTestResult('GA4可用性检查', 'error', 'GA4未加载或不可用');
      }
    };

    // 延迟检查，确保GA4完全加载
    const timer = setTimeout(checkGA4, 2000);
    return () => clearTimeout(timer);
  }, []);

  const addTestResult = (test: string, status: 'pending' | 'success' | 'error', message: string) => {
    setTestResults(prev => [...prev, { test, status, message }]);
  };

  const runTest = async (testName: string, testFunction: () => void) => {
    addTestResult(testName, 'pending', '测试中...');
    
    try {
      testFunction();
      addTestResult(testName, 'success', '测试成功');
    } catch (error) {
      addTestResult(testName, 'error', `测试失败: ${error}`);
    }
  };

  const testPageView = () => {
    sendPageView('/debug-analytics', 'GA4调试页面');
  };

  const testCustomEvent = () => {
    sendEvent('debug_test', {
      event_category: 'debug',
      event_label: '手动测试事件',
      test_type: 'custom_event'
    });
  };

  const testJobTracking = () => {
    trackJobView('test-job-123', '测试职位', '测试公司');
  };

  const testJobApply = () => {
    trackJobApply('test-job-123', '测试职位', '测试公司');
  };

  const testResumeDownload = () => {
    trackResumeDownload('modern-video-editor', 'modern-video-editor-resume.pdf');
  };

  const testSkillAssessment = () => {
    trackSkillAssessment('video-editing', 85, 100);
  };

  const testUserRegistration = () => {
    trackUserRegistration('email', 'job_seeker');
  };

  const testErrorTracking = () => {
    trackError('测试错误', 'debug-analytics-page', 'TEST_ERROR_001');
  };

  const testUserProperties = () => {
    setUserProperties({
      user_type: 'job_seeker',
      experience_level: 'mid',
      location: 'Beijing',
      industry: 'video_production'
    });
  };

  const testUserId = () => {
    setUserId('test-user-12345');
  };

  const runAllTests = () => {
    setTestResults([]);
    
    setTimeout(() => runTest('页面浏览跟踪', testPageView), 100);
    setTimeout(() => runTest('自定义事件', testCustomEvent), 200);
    setTimeout(() => runTest('职位查看跟踪', testJobTracking), 300);
    setTimeout(() => runTest('职位申请跟踪', testJobApply), 400);
    setTimeout(() => runTest('简历下载跟踪', testResumeDownload), 500);
    setTimeout(() => runTest('技能评估跟踪', testSkillAssessment), 600);
    setTimeout(() => runTest('用户注册跟踪', testUserRegistration), 700);
    setTimeout(() => runTest('错误跟踪', testErrorTracking), 800);
    setTimeout(() => runTest('用户属性设置', testUserProperties), 900);
    setTimeout(() => runTest('用户ID设置', testUserId), 1000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'pending': return '⏳';
      default: return '❓';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600';
      case 'error': return 'text-red-600';
      case 'pending': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            GA4 跟踪验证工具
          </h1>
          
          {/* 配置信息 */}
          <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              当前配置
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">测量ID:</span>
                <span className="ml-2 text-gray-900 dark:text-white">{GA4_CONFIG.measurementId}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">启用状态:</span>
                <span className={`ml-2 ${GA4_CONFIG.enabled ? 'text-green-600' : 'text-red-600'}`}>
                  {GA4_CONFIG.enabled ? '已启用' : '已禁用'}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">调试模式:</span>
                <span className={`ml-2 ${GA4_CONFIG.debug ? 'text-yellow-600' : 'text-gray-600'}`}>
                  {GA4_CONFIG.debug ? '已启用' : '已禁用'}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">GA4状态:</span>
                <span className={`ml-2 ${isGA4Ready ? 'text-green-600' : 'text-red-600'}`}>
                  {isGA4Ready ? '已就绪' : '未就绪'}
                </span>
              </div>
            </div>
          </div>

          {/* 测试按钮 */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={runAllTests}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                运行所有测试
              </button>
              <button
                onClick={() => setTestResults([])}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                清除结果
              </button>
            </div>
          </div>

          {/* 单独测试按钮 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              单独测试
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              <button
                onClick={() => runTest('页面浏览', testPageView)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
              >
                页面浏览
              </button>
              <button
                onClick={() => runTest('自定义事件', testCustomEvent)}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm"
              >
                自定义事件
              </button>
              <button
                onClick={() => runTest('职位查看', testJobTracking)}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors text-sm"
              >
                职位查看
              </button>
              <button
                onClick={() => runTest('职位申请', testJobApply)}
                className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors text-sm"
              >
                职位申请
              </button>
              <button
                onClick={() => runTest('简历下载', testResumeDownload)}
                className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors text-sm"
              >
                简历下载
              </button>
              <button
                onClick={() => runTest('技能评估', testSkillAssessment)}
                className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors text-sm"
              >
                技能评估
              </button>
              <button
                onClick={() => runTest('用户注册', testUserRegistration)}
                className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors text-sm"
              >
                用户注册
              </button>
              <button
                onClick={() => runTest('错误跟踪', testErrorTracking)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
              >
                错误跟踪
              </button>
              <button
                onClick={() => runTest('用户属性', testUserProperties)}
                className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors text-sm"
              >
                用户属性
              </button>
              <button
                onClick={() => runTest('用户ID', testUserId)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
              >
                用户ID
              </button>
            </div>
          </div>

          {/* 测试结果 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              测试结果
            </h2>
            {testResults.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                点击上方按钮开始测试
              </p>
            ) : (
              <div className="space-y-3">
                {testResults.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{getStatusIcon(result.status)}</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {result.test}
                      </span>
                    </div>
                    <span className={`text-sm ${getStatusColor(result.status)}`}>
                      {result.message}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 使用说明 */}
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              使用说明
            </h3>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• 确保在浏览器开发者工具中打开控制台查看详细日志</li>
              <li>• 在GA4实时报告中查看事件是否成功发送</li>
              <li>• 检查网络面板确认请求是否发送到Google Analytics</li>
              <li>• 如果测试失败，请检查环境变量配置和网络连接</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

