import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Assistant Video Editor",
  description: "Learn how we collect, use, and protect your personal information when you use our assistant video editor job platform.",
  keywords: ["privacy policy", "data protection", "personal information", "assistant video editor"],
};

export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="How we protect your personal information"
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
                🔒 Privacy & Security
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="text-lg text-body-color dark:text-body-color-dark max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
                <Link href="#information-collection" className="text-primary hover:text-primary/80 transition-colors">1. Information We Collect</Link>
                <Link href="#information-use" className="text-primary hover:text-primary/80 transition-colors">2. How We Use Your Information</Link>
                <Link href="#information-sharing" className="text-primary hover:text-primary/80 transition-colors">3. Information Sharing</Link>
                <Link href="#data-security" className="text-primary hover:text-primary/80 transition-colors">4. Data Security</Link>
                <Link href="#cookies-tracking" className="text-primary hover:text-primary/80 transition-colors">5. Cookies and Tracking</Link>
                <Link href="#your-rights" className="text-primary hover:text-primary/80 transition-colors">6. Your Rights</Link>
                <Link href="#contact-us" className="text-primary hover:text-primary/80 transition-colors">7. Contact Us</Link>
                <Link href="#policy-changes" className="text-primary hover:text-primary/80 transition-colors">8. Changes to This Policy</Link>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <section id="information-collection" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Information We Collect
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  apply for jobs, or contact us for support. This may include:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white">Personal Information</h4>
                    <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Name and contact information</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Email address and phone number</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Professional summary</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white">Professional Information</h4>
                    <ul className="space-y-2 text-sm text-body-color dark:text-body-color-dark">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Resume and portfolio information</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Job application details</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Skills and experience</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="information-use" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">2</span>
                  How We Use Your Information
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-6">
                  We use the information we collect to provide and improve our services:
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-lg border border-primary/20">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2 text-black dark:text-white">Job Matching</h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Match you with relevant job opportunities</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-lg border border-primary/20">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5v-5a7.5 7.5 0 0115 0v5z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2 text-black dark:text-white">Career Guidance</h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Send job alerts and career tips</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-lg border border-primary/20">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2 text-black dark:text-white">Platform Improvement</h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Analyze usage to improve our services</p>
                  </div>
                </div>
              </section>

              <section id="information-sharing" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Information Sharing
                </h2>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">We Do Not Sell Your Data</h4>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                        We do not sell, trade, or otherwise transfer your personal information to third parties 
                        without your consent, except as described in this policy.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-body-color dark:text-body-color-dark mb-4">We may share your information with:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      <strong>Employers</strong> when you apply for jobs (with your explicit consent)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      <strong>Service providers</strong> who assist us in operating our platform
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-body-color dark:text-body-color-dark">
                      <strong>Legal authorities</strong> when required by law or to protect our rights
                    </span>
                  </li>
                </ul>
              </section>

              <section id="data-security" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Data Security
                </h2>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Security Measures</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        We implement appropriate security measures to protect your personal information against 
                        unauthorized access, alteration, disclosure, or destruction.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-body-color dark:text-body-color-dark">
                  However, no method of transmission over the internet is 100% secure. While we strive to use 
                  commercially acceptable means to protect your personal information, we cannot guarantee its 
                  absolute security.
                </p>
              </section>

              <section id="cookies-tracking" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">5</span>
                  Cookies and Tracking
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-6">
                  We use cookies and similar technologies to enhance your experience, analyze usage, 
                  and provide personalized content. You can control cookie settings through your browser.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Additional Information</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
                    For detailed information about our cookie usage, please visit our 
                    <Link href="/cookies" className="underline hover:no-underline"> comprehensive Cookie Policy page</Link>.
                  </p>
                </div>
              </section>

              <section id="your-rights" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">6</span>
                  Your Rights
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-6">
                  You have the following rights regarding your personal information:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Access & Update
                    </h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      Access and update your personal information at any time through your account settings.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Deletion
                    </h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      Request deletion of your account and associated data.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Communication
                    </h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      Opt-out of marketing communications and newsletters.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-3 text-black dark:text-white flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Data Export
                    </h4>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      Request a copy of your data in a portable format.
                    </p>
                  </div>
                </div>
              </section>

              <section id="contact-us" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">7</span>
                  Contact Us
                </h2>
                <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-lg p-8 border border-primary/20">
                  <p className="text-body-color dark:text-body-color-dark mb-6">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-black dark:text-white">Email</p>
                        <a href="mailto:privacy@assistantvideoeditor.com" className="text-primary hover:text-primary/80 transition-colors">
                          privacy@assistantvideoeditor.com
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

              <section id="policy-changes" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold mr-3">8</span>
                  Changes to This Policy
                </h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <p className="text-body-color dark:text-body-color-dark">
                    We may update this Privacy Policy from time to time. We will notify you of any 
                    changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                  </p>
                  <p className="text-body-color dark:text-body-color-dark mt-4">
                    We encourage you to review this Privacy Policy periodically for any changes. 
                    Changes to this Privacy Policy are effective when they are posted on this page.
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
