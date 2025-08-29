import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Co-Founder & Program Lead",
      description: "Passionate about building inclusive learning ecosystems.",
      image: "/api/placeholder/150/150" // Placeholder image
    },
    {
      name: "John Doe",
      role: "Technical Lead",
      description: "Focused on creating scalable and user-friendly solutions.",
      image: "/api/placeholder/150/150" // Placeholder image
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Welcome to SkillsConnect, a mentorship community built to connect Rwandan youth
            with experienced diaspora professionals. Our mission is simple: unlock the potential
            of young people by giving them access to guidance, networks, and career readiness support.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that mentorship can transform lives. By bridging the gap between local
              youth and the Rwandan diaspora, we aim to equip young people with the skills,
              confidence, and global perspectives they need for meaningful employment.
            </p>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mentorship Connections</h3>
              <p className="text-gray-600">
                Youth can easily find and book sessions with diaspora mentors based on career interests.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Resources</h3>
              <p className="text-gray-600">
                Access practical tools like CV templates, interview tips, and shared advice from mentors.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600">
                A growing space where mentors and mentees exchange knowledge, share opportunities, and track impact together.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sign Up</h3>
                <p className="text-gray-600">Create your profile as a mentor or mentee.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Match</h3>
                <p className="text-gray-600">Browse available mentors or request guidance based on your goals.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect</h3>
                <p className="text-gray-600">Book a session, join a conversation, and start learning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="mb-16">
          <div className="bg-emerald-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Commitment</h2>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              We are dedicated to making mentorship accessible, inclusive, and impactful for every
              youth and mentor who joins us. Together, we're building a sustainable bridge between
              the diaspora and Rwanda's future leaders.
            </p>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}

            {/* Add Team Member Card */}
            <div className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 p-6 text-center flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm">Add your team members here</p>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="text-center">
          <div className="bg-emerald-600 text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Join Us</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you are looking for guidance or want to give back as a mentor, SkillsConnect
              welcomes you. Together, we can shape a future where mentorship unlocks opportunities for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Become a Mentor
              </button>
              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-800 transition-colors border border-emerald-700">
                Find a Mentor
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
