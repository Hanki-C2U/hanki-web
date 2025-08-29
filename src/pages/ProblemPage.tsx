import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProblemPage() {
  const statistics = [
    {
      number: "60%",
      label: "Youth Unemployment Rate",
      description: "Of Rwandan youth aged 16-30 struggle to find meaningful employment"
    },
    {
      number: "500K+",
      label: "Diaspora Population",
      description: "Experienced Rwandans living abroad with valuable skills and networks"
    },
    {
      number: "85%",
      label: "Skills Gap",
      description: "Of employers report difficulty finding candidates with right skills"
    }
  ];

  const challenges = [
    {
      title: "Limited Access to Mentorship",
      description: "Young Rwandans lack connections to experienced professionals who can guide their career development and provide industry insights.",
      icon: "👥"
    },
    {
      title: "Skills-Industry Mismatch",
      description: "Educational institutions often don't align with current market demands, leaving graduates unprepared for available opportunities.",
      icon: "🎯"
    },
    {
      title: "Weak Professional Networks",
      description: "Without established connections, youth struggle to learn about opportunities and industry best practices.",
      icon: "🌐"
    },
    {
      title: "Disconnected Diaspora",
      description: "Successful Rwandans abroad want to give back but lack structured ways to connect with and mentor local youth.",
      icon: "✈️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Challenge Facing Rwanda's Youth
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Despite Rwanda's remarkable economic growth, a significant gap exists between young talent 
            and meaningful employment opportunities. The disconnect between education, skills, and 
            industry needs leaves many capable youth without proper guidance.
          </p>
        </section>

        {/* Statistics Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Numbers Tell the Story</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Challenges</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{challenge.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{challenge.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Real Stories */}
        <section className="mb-16">
          <div className="bg-gray-100 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Real Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">A</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Aline, 24</h3>
                    <p className="text-gray-600 text-sm">Computer Science Graduate</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "I graduated with good grades but had no idea how to navigate the job market. 
                  I needed someone to show me what employers really look for and how to build a professional network."
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald-600 font-semibold">J</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Jean-Paul</h3>
                    <p className="text-gray-600 text-sm">Software Engineer, Toronto</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "I've been successful in my career abroad and want to give back to Rwanda's youth, 
                  but I didn't have a structured way to connect and share my experience effectively."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Opportunity */}
        <section className="mb-16">
          <div className="bg-emerald-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">But There's Hope</h2>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Rwanda has an incredible resource: a skilled diaspora population eager to contribute 
                to the country's development. These professionals have navigated global markets, 
                built successful careers, and possess exactly the knowledge and networks that local 
                youth need.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                What's missing is a bridge - a structured, accessible way to connect willing mentors 
                with eager mentees. That's exactly what we're building.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink 
                  to="/how-it-works" 
                  className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors"
                >
                  See Our Solution
                </NavLink>
                <NavLink 
                  to="/why-rwanda" 
                  className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold border border-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  Why Rwanda?
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
