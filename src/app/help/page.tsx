import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help Center | Assistant Video Editor",
  description: "Get help and support for using our assistant video editor job platform. Find answers to common questions and contact our support team.",
  keywords: ["help center", "support", "assistance", "troubleshooting", "assistant video editor"],
};

export default function HelpCenter() {
  return (
    <>
      <Breadcrumb
        pageName="Help Center"
        description="Get the support you need to succeed"
      />
      
      <section className="pt-16 pb-10">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Help Center
              </h1>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                Find answers to your questions and get the support you need to succeed in your video editing career.
              </p>
            </div>

            {/* Quick Help Sections */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
              <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Learn how to create an account and start your job search</p>
                <Link href="#getting-started" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Learn about getting started →
                </Link>
              </div>

              <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Job Applications</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Tips for applying to jobs and managing applications</p>
                <Link href="#job-applications" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Learn about job applications →
                </Link>
              </div>

              <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Account Settings</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Manage your profile, notifications, and preferences</p>
                <Link href="#account-settings" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Learn about account settings →
                </Link>
              </div>
            </div>

            {/* Help Content */}
            <div className="prose prose-lg max-w-none">
              <section id="getting-started">
                <h2>Getting Started</h2>
                <h3>Creating Your Account</h3>
                <ol>
                  <li>Click the &quot;Sign Up&quot; button in the top right corner</li>
                  <li>Enter your email address and create a secure password</li>
                  <li>Verify your email address through the confirmation link</li>
                  <li>Complete your profile with your professional information</li>
                </ol>

                <h3>Setting Up Your Profile</h3>
                <ul>
                  <li>Add your professional summary and experience</li>
                  <li>Upload your resume and portfolio samples</li>
                  <li>Set your job preferences and location</li>
                  <li>Enable job alerts for relevant opportunities</li>
                </ul>
              </section>

              <section id="job-applications">
                <h2>Job Applications</h2>
                <h3>Finding Jobs</h3>
                <ul>
                  <li>Use the search filters to narrow down opportunities</li>
                  <li>Browse by job type (full-time, freelance, remote)</li>
                  <li>Set up job alerts for specific criteria</li>
                  <li>Follow companies you&apos;re interested in</li>
                </ul>

                <h3>Applying for Jobs</h3>
                <ol>
                  <li>Review the job description carefully</li>
                  <li>Customize your resume and cover letter</li>
                  <li>Ensure your portfolio showcases relevant work</li>
                  <li>Submit your application before the deadline</li>
                </ol>

                <h3>Managing Applications</h3>
                <ul>
                  <li>Track application status in your dashboard</li>
                  <li>Follow up with employers when appropriate</li>
                  <li>Keep records of all communications</li>
                  <li>Learn from rejections to improve future applications</li>
                </ul>
              </section>

              <section id="account-settings">
                <h2>Account Settings</h2>
                <h3>Profile Management</h3>
                <ul>
                  <li>Update your contact information</li>
                  <li>Modify your professional summary</li>
                  <li>Add or remove portfolio samples</li>
                  <li>Change your profile visibility settings</li>
                </ul>

                <h3>Notification Preferences</h3>
                <ul>
                  <li>Job alert frequency and criteria</li>
                  <li>Email notifications for applications</li>
                  <li>Newsletter and career tips</li>
                  <li>System updates and maintenance</li>
                </ul>

                <h3>Privacy Settings</h3>
                <ul>
                  <li>Control who can see your profile</li>
                  <li>Manage data sharing preferences</li>
                  <li>Download or delete your account data</li>
                  <li>Update communication preferences</li>
                </ul>
              </section>

              <section>
                <h2>Common Issues</h2>
                <h3>Login Problems</h3>
                <ul>
                  <li>Reset your password using the &quot;Forgot Password&quot; link</li>
                  <li>Check your email for account verification</li>
                  <li>Clear your browser cache and cookies</li>
                  <li>Try using a different browser or incognito mode</li>
                </ul>

                <h3>Application Issues</h3>
                <ul>
                  <li>Ensure all required fields are completed</li>
                  <li>Check file size limits for uploads</li>
                  <li>Verify your internet connection</li>
                  <li>Try submitting during off-peak hours</li>
                </ul>

                <h3>Email Notifications</h3>
                <ul>
                  <li>Check your spam/junk folder</li>
                  <li>Add our email to your contacts</li>
                  <li>Verify your email address is correct</li>
                  <li>Update your notification preferences</li>
                </ul>
              </section>

              <section>
                <h2>Contact Support</h2>
                <p>
                  If you can&apos;t find the answer you&apos;re looking for, our support team is here to help:
                </p>
                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Email Support</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Get help via email within 24 hours
                    </p>
                    <a href="mailto:support@assistantvideoeditor.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      support@assistantvideoeditor.com
                    </a>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Live Chat</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Chat with us during business hours
                    </p>
                    <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Start Chat
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
