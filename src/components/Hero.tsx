export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900 py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-emerald-100 border border-emerald-200 rounded-full px-3 py-1.5 mb-6">
            <span className="text-emerald-700 text-xs font-medium">
              🇷🇼 Empowering Rwanda's Future
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="text-gray-900">Connecting Rwanda's</span>
            <br />
            <span className="text-emerald-600">Future with its Success</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Bridge the gap between Rwandan diaspora professionals and local
            youth through meaningful mentorship connections
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 transform flex items-center gap-2 min-w-[180px] justify-center hover:cursor-pointer">
              Join as Mentee
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
            <button className="bg-emerald-50 hover:bg-emerald-100 text-emerald-600 hover:text-emerald-700 px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 min-w-[180px] hover:cursor-pointer">
              Become a Mentor
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
                500+
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-wide">
                Active Mentors
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
                2,000+
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-wide">
                Mentees Matched
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
                85%
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-wide">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
