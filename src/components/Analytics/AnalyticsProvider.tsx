'use client';

import { Suspense } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

function AnalyticsContent({ children }: AnalyticsProviderProps) {
  useAnalytics();
  return <>{children}</>;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  return (
    <Suspense fallback={<>{children}</>}>
      <AnalyticsContent>{children}</AnalyticsContent>
    </Suspense>
  );
}
