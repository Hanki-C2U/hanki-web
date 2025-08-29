import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HowItWorksPage() {
  const menteeSteps = [
    {
      step: "1",
      title: "Create Your Profile",
      description: "Tell us about your goals, interests, and what kind of guidance you're seeking.",
      details: ["Add your educational background", "Specify career interests", "Set learning objectives"]
    },
    {
      step: "2", 
      title: "Browse & Match",
      description: "Discover mentors based on your field of interest, career goals, and availability.",
      details: ["Filter by industry & expertise", "View mentor profiles & reviews", "Check availability calendars"]
    },
    {
      step: "3",
      title: "Book Your Session",
      description: "Schedule 1-on-1 video calls or join group discussions with your chosen mentors.",
      details: ["Choose session format", "Select convenient time slots", "Prepare questions in advance"]
    },
    {
      step: "4",
      title: "Learn & Grow",
      description: "Get personalized guidance, industry insights, and build your professional network.",
      details: ["Receive career advice", "Get CV/portfolio feedback", "Access exclusive opportunities"]
    }
  ];

  const mentorSteps = [
    {
      step: "1",
      title: "Join as a Mentor", 
      description: "Share your expertise and professional background with Rwanda's next generation.",
      details: ["Verify your professional experience", "Set your availability", "Choose mentoring areas"]
    },
    {
      step: "2",
      title: "Connect with Mentees",
      description: "Review mentee profiles and accept session requests that align with your expertise.",
      details: ["Browse mentee requests", "Review career goals", "Accept suitable matches"]
    },
    {
      step: "3", 
      title: "Share Your Knowledge",
      description: "Conduct mentoring sessions and provide valuable career guidance.",
      details: ["Host video sessions", "Share industry insights", "Provide actionable feedback"]
    },
    {
      step: "4",
      title: "Track Impact",
      description: "See how your guidance helps mentees achieve their career goals.",
      details: ["Monitor mentee progress", "Receive feedback", "Build mentoring reputation"]
    }
  ];

  const pricingFeatures = [
    "1-on-1 mentoring sessions",
    "Group discussions and workshops", 
    "Career resources and templates",
    "Professional network access",
    "Progress tracking tools",
    "Certificate of completion"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How SkillsConnect Works
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our platform creates meaningful connections between Rwandan youth and diaspora professionals 
            through structured mentorship programs designed for real career impact.
          </p>
        </section>

        {/* For Mentees */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Mentees</h2>
            <p className="text-lg text-gray-600">Your journey to career success starts here</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menteeSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-500 flex items-center">
                      <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* For Mentors */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Mentors</h2>
            <p className="text-lg text-gray-600">Give back and shape Rwanda's future leaders</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentorSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-500 flex items-center">
                      <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Model */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Accessible & Sustainable</h2>
              <p className="text-lg text-gray-600">Start free, continue affordably</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-emerald-600 mb-2">Free Trial</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-1">1 Month</div>
                  <p className="text-gray-600">Complete access to get started</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {pricingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-emerald-200">
                <div className="text-center mb-6">
                  <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600 mb-2">Monthly Plan</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-1">5,000 <span className="text-lg">RWF</span></div>
                  <p className="text-gray-600">After your free month</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {pricingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-sm text-emerald-700 text-center">
                    <strong>Why affordable?</strong> Because every Rwandan youth deserves access to mentorship, 
                    regardless of financial background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Built for Real Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                <p className="text-gray-600">Mentees set goals and track their career development journey with measurable milestones.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Matching</h3>
                <p className="text-gray-600">Our algorithm ensures mentees connect with mentors who have relevant experience and expertise.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Results</h3>
                <p className="text-gray-600">Most mentees see improvement in confidence and career clarity within their first month.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-emerald-600 text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Bridge the Gap?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of Rwandan youth and diaspora professionals who are already building 
              meaningful connections and advancing careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink 
                to="/get-started" 
                className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Free Month
              </NavLink>
              <NavLink 
                to="/why-rwanda" 
                className="bg-emerald-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-800 transition-colors border border-emerald-700"
              >
                Why Rwanda?
              </NavLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
