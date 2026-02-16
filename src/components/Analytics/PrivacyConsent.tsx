'use client';

import { useState, useEffect } from 'react';
import { setConsent, initializeConsent } from '@/lib/analytics';

interface PrivacyConsentProps {
  onConsentChange?: (analytics: boolean, ads: boolean) => void;
}

export default function PrivacyConsent({ onConsentChange }: PrivacyConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [adsConsent, setAdsConsent] = useState(false);

  useEffect(() => {
    // 检查是否已有同意记录
    const savedConsent = localStorage.getItem('ga4-consent');
    if (savedConsent) {
      const consent = JSON.parse(savedConsent);
      setAnalyticsConsent(consent.analytics);
      setAdsConsent(consent.ads);
      setConsent(consent.analytics, consent.ads);
    } else {
      // 默认允许分析，拒绝广告
      const defaultConsent = { analytics: true, ads: false };
      localStorage.setItem('ga4-consent', JSON.stringify(defaultConsent));
      setAnalyticsConsent(true);
      setAdsConsent(false);
      setConsent(true, false);
      // 不显示横幅，因为已经默认允许分析
      setShowBanner(false);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = { analytics: true, ads: true };
    localStorage.setItem('ga4-consent', JSON.stringify(consent));
    setAnalyticsConsent(true);
    setAdsConsent(true);
    setConsent(true, true);
    setShowBanner(false);
    onConsentChange?.(true, true);
  };

  const handleRejectAll = () => {
    const consent = { analytics: false, ads: false };
    localStorage.setItem('ga4-consent', JSON.stringify(consent));
    setAnalyticsConsent(false);
    setAdsConsent(false);
    setConsent(false, false);
    setShowBanner(false);
    onConsentChange?.(false, false);
  };

  const handleCustomSettings = () => {
    const consent = { analytics: analyticsConsent, ads: adsConsent };
    localStorage.setItem('ga4-consent', JSON.stringify(consent));
    setConsent(analyticsConsent, adsConsent);
    setShowBanner(false);
    onConsentChange?.(analyticsConsent, adsConsent);
  };

  const handleAnalyticsChange = (checked: boolean) => {
    setAnalyticsConsent(checked);
  };

  const handleAdsChange = (checked: boolean) => {
    setAdsConsent(checked);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4 shadow-lg z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Privacy Settings
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              We use cookies and similar technologies to improve your experience, analyze website traffic, and personalize content.
              You can choose to accept all cookies or customize your settings.
            </p>
            
            {/* Custom Settings */}
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={analyticsConsent}
                  onChange={(e) => handleAnalyticsChange(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Analytics Cookies - Help us understand website usage
                </span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={adsConsent}
                  onChange={(e) => handleAdsChange(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Advertising Cookies - Used for personalized ads
                </span>
              </label>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={handleCustomSettings}
              className="px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            >
              Save Settings
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

