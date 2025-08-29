import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WhyRwandaPage() {
  const opportunities = [
    {
      title: "Tech Hub of East Africa",
      description: "Rwanda is rapidly becoming the Silicon Valley of Africa with growing tech infrastructure and innovation centers.",
      stats: "250+ tech companies",
      icon: "💻"
    },
    {
      title: "Young & Educated Population", 
      description: "67% of Rwanda's population is under 30, with increasing access to quality education and skills training.",
      stats: "67% under 30",
      icon: "🎓"
    },
    {
      title: "Business-Friendly Environment",
      description: "Ranked #2 in Africa for ease of doing business, with strong government support for entrepreneurship.",
      stats: "#2 in Africa",
      icon: "🏢"
    },
    {
      title: "Strong Diaspora Network",
      description: "Over 500,000 skilled Rwandans globally, eager to contribute to their homeland's development.",
      stats: "500K+ diaspora",
      icon: "🌍"
    }
  ];

  const successStories = [
    {
      name: "Marie Umwiza",
      field: "Digital Marketing",
      story: "Connected with mentor Sarah in London. Now leads marketing for a major Rwandan fintech startup.",
      before: "Recent graduate, unemployed",
      after: "Marketing Manager, 3x salary increase",
      mentor: "Sarah Mukamana, London"
    },
    {
      name: "Claude Nkubito", 
      field: "Software Engineering",
      story: "Mentored by David in Silicon Valley. Built skills and network that led to founding his own tech company.",
      before: "Self-taught programmer",
      after: "Tech entrepreneur, 15 employees",
      mentor: "David Nkurunziza, San Francisco"
    },
    {
      name: "Grace Uwimana",
      field: "Business Strategy",
      story: "Guidance from mentor in Toronto helped her transition from teacher to business consultant.",
      before: "High school teacher",
      after: "Senior Business Consultant",
      mentor: "Jean-Baptiste Habimana, Toronto"
    }
  ];

  const culturalValues = [
    {
      title: "Ubuntu Philosophy",
      description: "\"I am because we are\" - our collective success drives individual growth",
      icon: "🤝"
    },
    {
      title: "Kwihangana (Perseverance)",
      description: "The Rwandan spirit of resilience that has rebuilt our nation",
      icon: "💪"
    },
    {
      title: "Ubwiyunge (Reconciliation)",
      description: "Bringing together diaspora and local youth for mutual growth",
      icon: "🕊️"
    },
    {
      title: "Ubwoba bwa Gasana (Shared Responsibility)",
      description: "Every success story strengthens our entire community",
      icon: "⭐"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="mb-6">
            <span className="text-6xl">🇷🇼</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Rwanda? Why Now?
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Rwanda represents one of Africa's greatest transformation stories. Our mentorship platform 
            harnesses this momentum by connecting local talent with global expertise to accelerate 
            our nation's continued rise.
          </p>
        </section>

        {/* The Opportunity */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Rwanda Opportunity</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{opportunity.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {opportunity.stats}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Real Success Stories</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-blue-600 h-2"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-emerald-600 font-semibold text-lg">
                        {story.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{story.name}</h3>
                      <p className="text-emerald-600 text-sm">{story.field}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">"{story.story}"</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Before:</span>
                      <span className="text-sm text-gray-700">{story.before}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">After:</span>
                      <span className="text-sm font-semibold text-emerald-600">{story.after}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-3">
                    <p className="text-xs text-gray-500">Mentored by: <span className="font-medium">{story.mentor}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Foundation */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Built on Rwandan Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {culturalValues.map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{value.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision 2050 Alignment */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Aligned with Vision 2050</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Rwanda's Vision 2050 aims to transform our nation into a high-income country with improved 
                quality of life for all citizens. SkillsConnect directly supports this vision by:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Human Capital Development</h4>
                    <p className="text-gray-600">Bridging skills gaps and building professional capabilities</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Innovation & Technology</h4>
                    <p className="text-gray-600">Connecting youth with global tech expertise and networks</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Diaspora Engagement</h4>
                    <p className="text-gray-600">Harnessing diaspora knowledge for national development</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Economic Transformation</h4>
                    <p className="text-gray-600">Creating pathways to higher-value employment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Government Support */}
        <section className="mb-16">
          <div className="bg-emerald-600 text-white rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Strong Government Backing</h2>
              <p className="text-xl opacity-90">
                Rwanda's leadership recognizes mentorship as key to national development
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Policy Support</h3>
                <p className="opacity-90">National employment and skills development policies</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Financial Incentives</h3>
                <p className="opacity-90">Tax benefits and funding support for skill development</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Infrastructure</h3>
                <p className="opacity-90">World-class digital infrastructure and connectivity</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Be Part of Rwanda's Story</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether you're a young Rwandan seeking guidance or a diaspora professional ready 
              to give back, you have a role in writing the next chapter of our nation's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink 
                to="/get-started" 
                className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors"
              >
                Join the Movement
              </NavLink>
              <NavLink 
                to="/how-it-works" 
                className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold border border-emerald-600 hover:bg-emerald-50 transition-colors"
              >
                See How It Works
              </NavLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
