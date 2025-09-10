export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="relative bg-slate-800 py-16 lg:py-24 overflow-hidden"
    >
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Empowering Rwanda's Next Generation
          </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Whether you're a diaspora professional ready to give back or a young Rwandan 
            looking to grow, ATLAS is your bridge to success.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Young Professionals Card */}
          <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-emerald-500/30 transition-all duration-300">
            {/* Icon */}
            <div className="w-16 h-16 border border-emerald-500/30 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              For Young Professionals
            </h3>
            <p className="text-gray-300 mb-6">
              Accelerate your career with guidance from successful Rwandan
              diaspora professionals
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border border-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">
                  Learn from successful Rwandan professionals
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border border-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">
                  Get personalized career guidance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border border-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">
                  Access exclusive resources and tools
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border border-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">
                  Join a supportive community
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="border border-emerald-500 text-emerald-400 hover:bg-emerald-600/10 hover:text-emerald-300 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Diaspora Professionals Card */}
          <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-emerald-500/30 transition-all duration-300">
            {/* Icon */}
            <div className="w-16 h-16 border border-emerald-500/30 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              For Diaspora Professionals
            </h3>
            <p className="text-gray-300 mb-6">
              Make a lasting impact by mentoring Rwanda's ambitious young
              professionals
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border border-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">
                  Give back to Rwanda's next generation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border border-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">
                  Share your expertise and experiences
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border border-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">
                  Build meaningful connections
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border border-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">
                  Flexible scheduling that works for you
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full border border-emerald-500 text-emerald-400 hover:bg-emerald-600/10 hover:text-emerald-300 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              Explore Mentoring
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
