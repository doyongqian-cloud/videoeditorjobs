"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function AuthCodeErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const errorCode = searchParams.get('error_code');
  const errorDescription = searchParams.get('error_description');

  const getErrorMessage = () => {
    if (errorCode === 'otp_expired') {
      return {
        title: "Email Link Expired",
        message: "Your email confirmation link has expired. Please request a new one.",
        action: "Request New Confirmation Email"
      };
    }
    
    if (error === 'access_denied') {
      return {
        title: "Access Denied",
        message: "There was an issue with your authentication. Please try again.",
        action: "Try Again"
      };
    }

    return {
      title: "Authentication Error",
      message: "There was an error with your authentication. This could be due to:",
      action: "Try Again"
    };
  };

  const errorInfo = getErrorMessage();

  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="shadow-three dark:bg-dark mx-auto max-w-[500px] rounded-sm bg-white px-6 py-10 sm:p-[60px]">
              <div className="text-center">
                <div className="mb-6">
                  <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                
                <h3 className="mb-3 text-2xl font-bold text-black sm:text-3xl dark:text-white">
                  {errorInfo.title}
                </h3>
                
                <p className="text-body-color mb-8 text-base font-medium">
                  {errorInfo.message}
                </p>

                {errorCode === 'otp_expired' && (
                  <div className="mb-8 rounded-xs bg-yellow-50 border border-yellow-200 px-4 py-3 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-400">
                    <p className="text-sm">
                      <strong>What to do next:</strong>
                    </p>
                    <ul className="mt-2 text-sm text-left">
                      <li>• Go back to the sign-up page</li>
                      <li>• Enter your email and password again</li>
                      <li>• Check your email for a new confirmation link</li>
                      <li>• Click the new link within 24 hours</li>
                    </ul>
                  </div>
                )}

                {error !== 'access_denied' && errorCode !== 'otp_expired' && (
                  <ul className="text-body-color mb-8 text-left text-sm">
                    <li className="mb-2">• The authentication code has expired</li>
                    <li className="mb-2">• The authentication was cancelled</li>
                    <li className="mb-2">• There was a network error</li>
                    <li className="mb-2">• The email link is invalid or has been used</li>
                  </ul>
                )}

                <div className="space-y-4">
                  <Link
                    href="/signup"
                    className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300"
                  >
                    {errorCode === 'otp_expired' ? 'Request New Confirmation' : errorInfo.action}
                  </Link>
                  
                  <Link
                    href="/signin"
                    className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary flex w-full items-center justify-center rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:hover:shadow-none"
                  >
                    Sign In Instead
                  </Link>
                  
                  <Link
                    href="/"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary text-sm underline"
                  >
                    Go Home
                  </Link>
                </div>

                {errorDescription && (
                  <div className="mt-6 rounded-xs bg-gray-50 border border-gray-200 px-4 py-3 text-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                    <p className="text-xs">
                      <strong>Technical details:</strong> {errorDescription}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AuthCodeError() {
  return (
    <Suspense fallback={
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three dark:bg-dark mx-auto max-w-[500px] rounded-sm bg-white px-6 py-10 sm:p-[60px]">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    }>
      <AuthCodeErrorContent />
    </Suspense>
  );
}
