import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Assistant Video Editor",
  description: "Read our terms of service and understand the rules and guidelines for using our assistant video editor job platform.",
  keywords: ["terms of service", "user agreement", "legal terms", "assistant video editor", "job platform"],
};

export default function TermsOfService() {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Service"
        description="Our terms and conditions for using our platform"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-blue-500/5 to-primary/10 dark:from-primary/10 dark:via-blue-500/10 dark:to-primary/20 pt-16 pb-10">
        {/* Decorative Elements */}
        <div className="absolute right-0 top-0 -z-10 opacity-30">
          <div className="w-72 h-72 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute left-0 bottom-0 -z-10 opacity-30">
          <div className="w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-primary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 dark:bg-primary/20 dark:text-primary/80 dark:border-primary/30">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                📋 Terms & Conditions
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
              Terms of Service
            </h1>
            <p className="text-lg text-body-color dark:text-body-color-dark max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our assistant video editor job platform.
            </p>
            <p className="mt-4 text-sm text-body-color dark:text-body-color-dark">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="mx-auto max-w-4xl">

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Table of Contents</h3>
              <div className="grid gap-2 md:grid-cols-2">
                <Link href="#acceptance" className="text-primary hover:text-primary/80 transition-colors">1. Acceptance of Terms</Link>
                <Link href="#description" className="text-primary hover:text-primary/80 transition-colors">2. Service Description</Link>
                <Link href="#user-accounts" className="text-primary hover:text-primary/80 transition-colors">3. User Accounts</Link>
                <Link href="#user-conduct" className="text-primary hover:text-primary/80 transition-colors">4. User Conduct</Link>
                <Link href="#job-postings" className="text-primary hover:text-primary/80 transition-colors">5. Job Postings & Applications</Link>
                <Link href="#intellectual-property" className="text-primary hover:text-primary/80 transition-colors">6. Intellectual Property</Link>
                <Link href="#disclaimers" className="text-primary hover:text-primary/80 transition-colors">7. Disclaimers</Link>
                <Link href="#limitation-liability" className="text-primary hover:text-primary/80 transition-colors">8. Limitation of Liability</Link>
                <Link href="#termination" className="text-primary hover:text-primary/80 transition-colors">9. Termination</Link>
                <Link href="#governing-law" className="text-primary hover:text-primary/80 transition-colors">10. Governing Law</Link>
                <Link href="#contact-us" className="text-primary hover:text-primary/80 transition-colors">11. Contact Us</Link>
                <Link href="#changes" className="text-primary hover:text-primary/80 transition-colors">12. Changes to Terms</Link>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <section id="acceptance" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Acceptance of Terms
                </h2>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Important Notice</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        By accessing or using our platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-body-color dark:text-body-color-dark mb-6">
                  These Terms of Service (&quot;Terms&quot;) govern your use of our assistant video editor job platform 
                  (&quot;Service&quot;) operated by us (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). 
                  By accessing or using our Service, you agree to be bound by these Terms.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white">Agreement to Terms</h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      If you do not agree with any part of these terms, then you may not access the Service.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white">Eligibility</h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      You must be at least 18 years old to use our Service. By using our Service, you represent and warrant that you meet this age requirement.
                    </p>
                  </div>
                </div>
              </section>

              <section id="description" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Service Description
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-6">
                  Our platform connects assistant video editors with job opportunities and provides career resources. 
                  We offer the following services:
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-lg border border-primary/20">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2 text-black dark:text-white">Job Listings</h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Browse and apply for assistant video editor positions</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-lg border border-primary/20">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2 text-black dark:text-white">Career Resources</h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Access guides, tools, and career development materials</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-lg border border-primary/20">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2 text-black dark:text-white">Community</h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Connect with other professionals in the industry</p>
                  </div>
                </div>
              </section>

              <section id="user-accounts" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">3</span>
                  User Accounts
                </h2>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Account Security</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        You are responsible for maintaining the confidentiality of your account and password. 
                        You agree to accept responsibility for all activities that occur under your account.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-body-color dark:text-body-color-dark mb-4">When creating an account, you agree to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      Provide accurate, current, and complete information
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      Maintain and update your information to keep it accurate
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      Notify us immediately of any unauthorized use of your account
                    </span>
                  </li>
                </ul>
              </section>

              <section id="user-conduct" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">4</span>
                  User Conduct
                </h2>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 dark:text-red-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Prohibited Activities</h4>
                      <p className="text-red-700 dark:text-red-300 text-sm">
                        You agree not to engage in any activities that violate these terms or applicable laws.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-body-color dark:text-body-color-dark mb-4">You agree not to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      Post false, misleading, or fraudulent information
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      Harass, abuse, or harm other users
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      Violate any intellectual property rights
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      Attempt to gain unauthorized access to our systems
                    </span>
                  </li>
                </ul>
              </section>

              <section id="job-postings" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">5</span>
                  Job Postings & Applications
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-6">
                  Our platform facilitates connections between job seekers and employers. We provide tools and 
                  resources to help you find and apply for assistant video editor positions.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white">Job Applications</h4>
                    <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Apply directly to job postings</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Track your application status</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Receive job recommendations</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white">Employer Relations</h4>
                    <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>We do not guarantee job placement</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Employers are responsible for their own hiring decisions</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>We facilitate connections but do not control outcomes</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="intellectual-property" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">6</span>
                  Intellectual Property
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-6">
                  The Service and its original content, features, and functionality are and will remain the 
                  exclusive property of the Company and its licensors.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white">Our Content</h4>
                    <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>All content on our platform is protected by copyright</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>You may not reproduce or distribute our content without permission</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Our trademarks and logos are our property</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white">Your Content</h4>
                    <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>You retain ownership of content you post</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>You grant us a license to use your content on our platform</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>You are responsible for ensuring you have rights to post content</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="disclaimers" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">7</span>
                  Disclaimers
                </h2>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Service Availability</h4>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                        The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. 
                        We do not guarantee that the Service will be available at all times.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-body-color dark:text-body-color-dark mb-4">We make no warranties regarding:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      The accuracy, reliability, or completeness of job postings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      The success of job applications or career outcomes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      The availability or performance of third-party services
                    </span>
                  </li>
                </ul>
              </section>

              <section id="limitation-liability" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">8</span>
                  Limitation of Liability
                </h2>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 dark:text-red-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Limitation of Liability</h4>
                      <p className="text-red-700 dark:text-red-300 text-sm">
                        In no event shall the Company be liable for any indirect, incidental, special, 
                        consequential, or punitive damages arising out of your use of the Service.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-body-color dark:text-body-color-dark mb-4">Our liability is limited to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      The maximum amount you paid us in the 12 months preceding the claim
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      Direct damages only, not indirect or consequential damages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      Damages that are reasonably foreseeable
                    </span>
                  </li>
                </ul>
              </section>

              <section id="termination" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">9</span>
                  Termination
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-6">
                  We may terminate or suspend your account and bar access to the Service immediately, 
                  without prior notice or liability, under our sole discretion, for any reason whatsoever.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white">Account Termination</h4>
                    <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>We may terminate accounts for violations of these terms</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>You may terminate your account at any time</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Termination does not affect your obligations under these terms</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white">Effect of Termination</h4>
                    <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Your right to use the Service will cease immediately</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>We may delete your account and data</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Certain provisions will survive termination</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="governing-law" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">10</span>
                  Governing Law
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-6">
                  These Terms shall be interpreted and governed by the laws of the jurisdiction in which 
                  our Company is located, without regard to its conflict of law provisions.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Dispute Resolution</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
                    Any disputes arising out of or relating to these Terms or the Service will be resolved 
                    through binding arbitration in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>
              </section>

              <section id="contact-us" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">11</span>
                  Contact Us
                </h2>
                <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-lg p-8 border border-primary/20">
                  <p className="text-body-color dark:text-body-color-dark mb-6">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-black dark:text-white">Email</p>
                        <a href="mailto:legal@assistvideoeditorjobs.com" className="text-primary hover:text-primary/80 transition-colors">
                          legal@assistvideoeditorjobs.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-black dark:text-white">Address</p>
                        <p className="text-body-color dark:text-body-color-dark">[Your Company Address]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">12</span>
                  Changes to Terms
                </h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <p className="text-body-color dark:text-body-color-dark mb-4">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                    If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                  <p className="text-body-color dark:text-body-color-dark">
                    By continuing to access or use our Service after those revisions become effective, 
                    you agree to be bound by the revised terms. If you do not agree to the new terms, 
                    please stop using the Service.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
