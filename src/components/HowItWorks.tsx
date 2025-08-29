import { Users, Target, Rocket, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl font-sans text-gray-600 mb-6">Simple steps to transform your career</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Start with 1 month free, then continue for just 5,000 RWF/month. 
            Affordable mentorship for every Rwandan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div className="text-center relative">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <Users className="w-8 h-8 text-emerald-600" />
              <div className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Create Your Profile</h3>
            <p className="font-sans text-gray-600 leading-relaxed">
              Tell us about your background, goals, and what kind of mentorship you're seeking.
            </p>
          </div>

          <div className="text-center relative">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <Target className="w-8 h-8 text-emerald-600" />
              <div className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Matched</h3>
            <p className="font-sans text-gray-600 leading-relaxed">
              We connect you with verified mentors based on your industry and career goals.
            </p>
          </div>

          <div className="text-center relative">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <Rocket className="w-8 h-8 text-emerald-600" />
              <div className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Growing</h3>
            <p className="font-sans text-gray-600 leading-relaxed">
              Begin your mentorship journey with regular sessions and track your progress.
            </p>
          </div>
        </div>

        <div className="text-center">
          <NavLink 
            to="/how-it-works" 
            className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            See the Full Process <ArrowRight className="ml-2 w-5 h-5" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}