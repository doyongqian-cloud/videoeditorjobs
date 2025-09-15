import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-12 pt-[120px] dark:bg-gray-dark md:pb-[100px] md:pt-[150px] xl:pb-[120px] xl:pt-[180px] 2xl:pb-[140px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 px-6 py-3 text-sm font-medium text-primary border border-primary/20">
                  <span className="text-lg">🎬</span>
                  <span>Start Your Video Editing Career</span>
                </div>

                {/* Main Heading */}
                <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Master Video Editing, <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Land Your Dream Job</span>
                </h1>

                {/* Subtitle */}
                <p className="mb-8 text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl md:text-2xl max-w-4xl mx-auto">
                  Get expert guidance, professional tools, and job opportunities to launch your video editing career
                </p>

                {/* Stats Grid */}
                <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-2xl mx-auto">
                  <div className="group flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition-all duration-300">
                    <div className="mb-2 text-3xl">📈</div>
                    <div className="text-2xl font-bold text-primary mb-1">35%</div>
                    <div className="text-sm text-body-color dark:text-body-color-dark text-center">Job Growth Rate</div>
                  </div>
                  <div className="group flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition-all duration-300">
                    <div className="mb-2 text-3xl">💰</div>
                    <div className="text-2xl font-bold text-primary mb-1">$75K+</div>
                    <div className="text-sm text-body-color dark:text-body-color-dark text-center">Average Salary</div>
                  </div>
                  <div className="group flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition-all duration-300">
                    <div className="mb-2 text-3xl">🌍</div>
                    <div className="text-2xl font-bold text-primary mb-1">85%</div>
                    <div className="text-sm text-body-color dark:text-body-color-dark text-center">Remote Jobs</div>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="mb-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                  <Link
                    href="/guides"
                    className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="mr-2 text-lg">🎯</span>
                    Learn Skills
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/tools"
                    className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-gray-900 to-black px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 dark:from-white/10 dark:to-white/5 dark:hover:from-white/20 dark:hover:to-white/10"
                  >
                    <span className="mr-2 text-lg">⚡</span>
                    Get Tools
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/jobs"
                    className="group relative inline-flex items-center justify-center rounded-xl border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="mr-2 text-lg">💼</span>
                    Find Jobs
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Social Proof */}
                <div className="flex items-center justify-center space-x-8 text-sm text-body-color dark:text-body-color-dark">
                  <div className="flex items-center">
                    <div className="mr-3 flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white dark:border-gray-800"></div>
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-white dark:border-gray-800"></div>
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white dark:border-gray-800"></div>
                    </div>
                    <span>
                      <span className="font-semibold text-primary">10,000+</span> successful editors
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="184.389"
                y1="69.2405"
                x2="69.2405"
                y2="184.389"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="184.389"
                y2="69.2405"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.389"
                y1="69.2405"
                x2="69.2405"
                y2="184.389"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="184.389"
                y2="69.2405"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="184.389"
                y1="69.2405"
                x2="69.2405"
                y2="184.389"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="69.2405"
                y2="184.389"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
