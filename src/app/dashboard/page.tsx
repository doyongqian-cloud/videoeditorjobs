"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user, loading, session } = useAuth();
  const router = useRouter();
  const [debugInfo, setDebugInfo] = useState<any>(null);

  useEffect(() => {
    // 添加调试信息
    setDebugInfo({
      user: user ? { id: user.id, email: user.email } : null,
      loading,
      session: session ? { access_token: session.access_token ? 'present' : 'missing' } : null,
      timestamp: new Date().toISOString()
    });

    console.log('Dashboard debug:', {
      user: user ? { id: user.id, email: user.email } : null,
      loading,
      session: session ? { access_token: session.access_token ? 'present' : 'missing' } : null
    });
  }, [user, loading, router, session]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
          {debugInfo && (
            <div className="mt-4 p-4 bg-gray-100 rounded text-sm">
              <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">No user found, redirecting to signin...</p>
          {debugInfo && (
            <div className="mt-4 p-4 bg-gray-100 rounded text-sm">
              <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="shadow-three dark:bg-dark mx-auto max-w-[800px] rounded-sm bg-white px-6 py-10 sm:p-[60px]">
              <h1 className="mb-6 text-center text-3xl font-bold text-black dark:text-white">
                Welcome to your Dashboard
              </h1>
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <h2 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    User Information
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Email:</strong> {user.email}
                  </p>
                  {user.user_metadata?.full_name && (
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Name:</strong> {user.user_metadata.full_name}
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>User ID:</strong> {user.id}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Email Verified:</strong> {user.email_confirmed_at ? "Yes" : "No"}
                  </p>
                </div>
                
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <h2 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    Authentication Status
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    You are successfully authenticated! This is a protected route that only authenticated users can access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
