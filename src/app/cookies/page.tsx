import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Assistant Video Editor Jobs",
  description: "Comprehensive cookie policy explaining how we use cookies and similar technologies to enhance your experience on our video editor job platform.",
  keywords: ["cookie policy", "cookies", "tracking", "privacy", "assistant video editor", "job platform", "GDPR compliance"],
};

export default function CookiePolicy() {
  return (
    <>
      <Breadcrumb
        pageName="Cookie Policy"
        description="How we use cookies and similar technologies"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-800 dark:via-blue-800 dark:to-indigo-800 pt-20 pb-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute right-10 top-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute left-10 bottom-20 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-8">
              <span className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-2xl">🍪</span>
                Cookie Policy & Privacy
              </span>
            </div>
            
            <h1 className="mb-8 text-6xl font-black leading-tight text-white md:text-7xl lg:text-8xl bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-2xl">
              Cookie Policy
            </h1>
            <p className="text-2xl text-blue-100 max-w-5xl mx-auto leading-relaxed mb-8 font-light">
              Transparent information about how we use cookies and similar technologies to enhance your experience on our video editor job platform.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-green-400/20 rounded-xl mb-4 mx-auto">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">GDPR Compliant</h3>
                <p className="text-blue-200 text-sm">Fully compliant with European data protection regulations</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-400/20 rounded-xl mb-4 mx-auto">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Always Updated</h3>
                <p className="text-blue-200 text-sm">Last updated: January 2025</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-400/20 rounded-xl mb-4 mx-auto">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Secure & Trusted</h3>
                <p className="text-blue-200 text-sm">Your privacy and security are our top priorities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container">
          <div className="mx-auto max-w-6xl">

            {/* Table of Contents */}
            <div className="mb-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-10 border border-white/20 dark:border-slate-700/50 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 dark:text-white">Table of Contents</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link href="#what-are-cookies" className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-1">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">1</span>
                  <span className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">What Are Cookies?</span>
                </Link>
                <Link href="#how-we-use-cookies" className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-1">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">2</span>
                  <span className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">How We Use Cookies</span>
                </Link>
                <Link href="#cookie-types" className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-1">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">3</span>
                  <span className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">Cookie Types</span>
                </Link>
                <Link href="#third-party-cookies" className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-1">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">4</span>
                  <span className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">Third-Party Cookies</span>
                </Link>
                <Link href="#managing-cookies" className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-1">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">5</span>
                  <span className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">Managing Cookies</span>
                </Link>
                <Link href="#cookie-retention" className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-1">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">6</span>
                  <span className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">Cookie Retention</span>
                </Link>
                <Link href="#impact-disabling" className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-1">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">7</span>
                  <span className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">Impact of Disabling</span>
                </Link>
                <Link href="#gdpr-compliance" className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-1">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">8</span>
                  <span className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">GDPR Compliance</span>
                </Link>
                <Link href="#contact-us" className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-1">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">9</span>
                  <span className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">Contact Us</span>
                </Link>
              </div>
            </div>

            <div className="space-y-20">
              <section id="what-are-cookies" className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-10 border border-white/20 dark:border-slate-700/50 shadow-2xl">
                <div className="flex items-center mb-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">
                    1
                  </div>
                  <h2 className="text-4xl font-bold text-slate-800 dark:text-white">What Are Cookies?</h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-10">
                  <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-3">Simple Explanation</h4>
                        <p className="text-blue-700 dark:text-blue-300 text-lg leading-relaxed">
                          Cookies are small text files that help websites remember information about your visit, 
                          making your browsing experience more personalized and efficient.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-3">Why We Use Them</h4>
                        <p className="text-green-700 dark:text-green-300 text-lg leading-relaxed">
                          They help us provide better job matching, remember your preferences, and improve 
                          our platform&apos;s functionality for video editor professionals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                    Cookies are small text files that are placed on your computer or mobile device when you 
                    visit a website. They are widely used to make websites work more efficiently and to 
                    provide information to website owners about user behavior and preferences.
                  </p>
                  <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                    Think of cookies as a memory system that helps websites remember your preferences, 
                    login status, job search filters, and other information to provide you with a 
                    personalized and seamless experience on our video editor job platform.
                  </p>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-4 flex items-center">
                      <span className="text-3xl mr-4">🍪</span>
                      Cookie Analogy
                    </h4>
                    <p className="text-purple-700 dark:text-purple-300 text-lg leading-relaxed">
                      Just like a restaurant remembering your favorite table and usual order, cookies help our 
                      website remember your preferences, job search criteria, and browsing patterns to serve 
                      you better content and job opportunities.
                    </p>
                  </div>
                </div>
              </section>

              <section id="how-we-use-cookies" className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-10 border border-white/20 dark:border-slate-700/50 shadow-2xl">
                <div className="flex items-center mb-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">
                    2
                  </div>
                  <h2 className="text-4xl font-bold text-slate-800 dark:text-white">How We Use Cookies</h2>
                </div>
                
                <p className="text-xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed">
                  We use cookies and similar technologies to enhance your experience on our video editor job platform, 
                  analyze usage patterns, provide personalized job recommendations, and improve our services. 
                  Here&apos;s how we use them:
                </p>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-10">
                  <div className="group text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Essential</h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Required for basic functionality</p>
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
                      Always Active
                    </div>
                  </div>
                  
                  <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Analytics</h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Help us improve our platform</p>
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                      Optional
                    </div>
                  </div>
                  
                  <div className="group text-center p-8 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl border border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Functional</h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Remember your preferences</p>
                    <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
                      Recommended
                    </div>
                  </div>
                  
                  <div className="group text-center p-8 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl border border-orange-200 dark:border-orange-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Marketing</h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Personalized job alerts</p>
                    <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-semibold">
                      Optional
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 border border-slate-200 dark:border-slate-600">
                  <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                    <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Specific Use Cases for Video Editor Jobs
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6 text-slate-700 dark:text-slate-300">
                    <ul className="space-y-3">
                      <li className="flex items-center text-lg"><span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>Job search filters and preferences</li>
                      <li className="flex items-center text-lg"><span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>Application tracking and status</li>
                      <li className="flex items-center text-lg"><span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>Portfolio viewing history</li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center text-lg"><span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>Skill assessment progress</li>
                      <li className="flex items-center text-lg"><span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>Resume builder preferences</li>
                      <li className="flex items-center text-lg"><span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>Notification settings</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="cookie-types" className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-10 border border-white/20 dark:border-slate-700/50 shadow-2xl">
                <div className="flex items-center mb-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mr-6 shadow-lg">
                    3
                  </div>
                  <h2 className="text-4xl font-bold text-slate-800 dark:text-white">Cookie Types</h2>
                </div>
                
                <div className="space-y-8">
                  <div className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold mb-6 text-green-800 dark:text-green-200 flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      Essential Cookies
                    </h3>
                    <p className="text-green-700 dark:text-green-300 mb-6 text-lg leading-relaxed">
                      These cookies are necessary for the website to function properly. They enable basic 
                      functions like page navigation, access to secure areas, and remembering your preferences.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-4"></span>
                        <span className="text-green-700 dark:text-green-300">Session management</span>
                      </div>
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-4"></span>
                        <span className="text-green-700 dark:text-green-300">User authentication</span>
                      </div>
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-4"></span>
                        <span className="text-green-700 dark:text-green-300">Security features</span>
                      </div>
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-4"></span>
                        <span className="text-green-700 dark:text-green-300">Load balancing</span>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold mb-6 text-blue-800 dark:text-blue-200 flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      Analytics Cookies
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-6 text-lg leading-relaxed">
                      These cookies help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
                        <span className="text-blue-700 dark:text-blue-300">Google Analytics - Website traffic analysis</span>
                      </div>
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
                        <span className="text-blue-700 dark:text-blue-300">Page view tracking</span>
                      </div>
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
                        <span className="text-blue-700 dark:text-blue-300">User behavior analysis</span>
                      </div>
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
                        <span className="text-blue-700 dark:text-blue-300">Performance monitoring</span>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-200 flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 text-white rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      Functional Cookies
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-6 text-lg leading-relaxed">
                      These cookies enable enhanced functionality and personalization, such as remembering 
                      your preferences and settings.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-4"></span>
                        <span className="text-purple-700 dark:text-purple-300">Language preferences</span>
                      </div>
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-4"></span>
                        <span className="text-purple-700 dark:text-purple-300">Theme settings (dark/light mode)</span>
                      </div>
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-4"></span>
                        <span className="text-purple-700 dark:text-purple-300">Job search filters</span>
                      </div>
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-4"></span>
                        <span className="text-purple-700 dark:text-purple-300">User interface preferences</span>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold mb-6 text-orange-800 dark:text-orange-200 flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                      </div>
                      Marketing Cookies
                    </h3>
                    <p className="text-orange-700 dark:text-orange-300 mb-6 text-lg leading-relaxed">
                      These cookies are used to track visitors across websites to display relevant and 
                      engaging advertisements.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-orange-500 rounded-full mr-4"></span>
                        <span className="text-orange-700 dark:text-orange-300">Social media integration</span>
                      </div>
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-orange-500 rounded-full mr-4"></span>
                        <span className="text-orange-700 dark:text-orange-300">Advertising personalization</span>
                      </div>
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-orange-500 rounded-full mr-4"></span>
                        <span className="text-orange-700 dark:text-orange-300">Campaign tracking</span>
                      </div>
                      <div className="flex items-center text-lg">
                        <span className="w-3 h-3 bg-orange-500 rounded-full mr-4"></span>
                        <span className="text-orange-700 dark:text-orange-300">Retargeting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Additional Sections */}
              <section className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-10 border border-white/20 dark:border-slate-700/50 shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-10">
                  {/* Third-Party Cookies */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      Third-Party Cookies
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                      We may also use third-party cookies from trusted partners to enhance our services:
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-4 mt-3"></span>
                        <div>
                          <strong className="text-slate-800 dark:text-white">Google Analytics:</strong>
                          <span className="text-slate-700 dark:text-slate-300 ml-2">Website analytics and performance tracking</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-4 mt-3"></span>
                        <div>
                          <strong className="text-slate-800 dark:text-white">Social Media Platforms:</strong>
                          <span className="text-slate-700 dark:text-slate-300 ml-2">Social sharing and login functionality</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-4 mt-3"></span>
                        <div>
                          <strong className="text-slate-800 dark:text-white">Job Boards:</strong>
                          <span className="text-slate-700 dark:text-slate-300 ml-2">Integration with external job posting platforms</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-4 mt-3"></span>
                        <div>
                          <strong className="text-slate-800 dark:text-white">Email Services:</strong>
                          <span className="text-slate-700 dark:text-slate-300 ml-2">Newsletter and communication management</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Managing Cookies */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      Managing Cookies
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                      You have several options for managing cookies:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl p-4 border border-emerald-200 dark:border-emerald-800">
                        <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Browser Settings</h4>
                        <p className="text-emerald-700 dark:text-emerald-300 text-sm">Most web browsers allow you to control cookies through their settings</p>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Opt-Out Options</h4>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">You can opt out of specific cookie types and services</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-12 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 border border-slate-200 dark:border-slate-600">
                  <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                    <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Quick Cookie Settings
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                    You can manage your cookie preferences using our cookie consent banner when you first 
                    visit our website, or by adjusting your browser settings at any time.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h5 className="font-bold text-slate-800 dark:text-white mb-2">Google Analytics</h5>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Opt out of Google Analytics tracking</p>
                    </a>
                    
                    <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                      </div>
                      <h5 className="font-bold text-slate-800 dark:text-white mb-2">Advertising</h5>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Manage advertising preferences</p>
                    </a>
                    
                    <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h5 className="font-bold text-slate-800 dark:text-white mb-2">EU Choices</h5>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">European advertising choices</p>
                    </a>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                  <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                    <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="mailto:privacy@assistantvideoeditor.com" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      privacy@assistantvideoeditor.com
                    </a>
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
