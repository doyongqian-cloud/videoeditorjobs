"use client";

import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/contexts/AuthContext";
import AnalyticsProvider from "@/components/Analytics/AnalyticsProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <AuthProvider>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
