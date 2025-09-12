import { Users, Target, Rocket } from 'lucide-react';
         {/* CTA Card */}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-slate-800 py-16 lg:py-24 overflow-hidden">
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-300">Simple steps to transform your career</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-600/20 rounded-lg mb-4">
              <Users className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-emerald-400 text-sm font-semibold mb-2">STEP 01</div>
            <h3 className="text-white font-bold text-lg mb-3">Create Your Profile</h3>
            <p className="text-gray-300">
              Tell us about your goals, current experience, and what you're looking to achieve. We'll match you
              with the perfect mentor.
            </p>
          </div>

          {/* Step 2 */}
          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-600/20 rounded-lg mb-4">
              <Target className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-emerald-400 text-sm font-semibold mb-2">STEP 02</div>
            <h3 className="text-white font-bold text-lg mb-3">Get Matched</h3>
            <p className="text-gray-300">
              Our smart algorithm connects you with experienced professionals who have walked your path and 
              achieved success.
            </p>
          </div>

          {/* Step 3 */}
          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-600/20 rounded-lg mb-4">
              <Rocket className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-emerald-400 text-sm font-semibold mb-2">STEP 03</div>
            <h3 className="text-white font-bold text-lg mb-3">Start Growing</h3>
            <p className="text-gray-300">
              Begin your mentorship journey with regular sessions, goal setting, and continuous support. Track your
              progress and celebrate milestones together.
            </p>
          </div>

          {/* Success Rate Card */}
          <div className="lg:col-span-3 bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">85%</div>
              <div className="text-white font-semibold mb-2">Success Rate</div>
              <div className="text-gray-300 text-sm">of mentees achieve their career goals within 12 months</div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-3 bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-white text-lg font-bold mb-2">Ready to Start?</h3>
              <p className="text-gray-400 text-sm mb-4">Take the first step today</p>
              <button className="border border-emerald-500 text-emerald-400 hover:bg-emerald-600/10 hover:text-emerald-300 px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                Explore Options
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}