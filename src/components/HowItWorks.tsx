import { Users, Target, Rocket } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl font-sans text-gray-600">Simple steps to transform your career</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center relative">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <Users className="w-8 h-8 text-emerald-600" />
              <div className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Create Your Profile</h3>
            <p className="font-sans text-gray-600 leading-relaxed">
              Tell us about your background, goals, and what kind of mentorship you're seeking. Our matching algorithm
              will find the perfect mentor for you.
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
              We connect you with mentors based on your industry, career goals, and personal interests. Meet your
              mentor through a virtual introduction session.
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
              Begin your mentorship journey with regular sessions, goal setting, and continuous support. Track your
              progress and celebrate milestones together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}