import { MapPin, Star, Users } from 'lucide-react';
import type { Mentor } from '../types';

export default function MentorShowcase() {
  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Dr. Patricia Nkunda",
      role: "Senior Data Scientist",
      company: "Google",
      location: "London, UK",
      avatar: "PN",
      rating: 4.9,
      sessionsCompleted: 45,
      expertise: ["Data Science", "Machine Learning", "Career Transition"],
      bio: "PhD in Computer Science, 8+ years at Google. Passionate about helping Rwandan youth break into tech.",
      mentees: 23
    },
    {
      id: 2,
      name: "Eric Gasana",
      role: "Product Manager",
      company: "Meta",
      location: "San Francisco, USA",
      avatar: "EG",
      rating: 4.8,
      sessionsCompleted: 38,
      expertise: ["Product Management", "Strategy", "Leadership"],
      bio: "Leading product teams at Meta. Expertise in building products for emerging markets.",
      mentees: 19
    },
    {
      id: 3,
      name: "Aline Uwimana",
      role: "Marketing Director",
      company: "Shopify",
      location: "Toronto, Canada",
      avatar: "AU",
      rating: 5.0,
      sessionsCompleted: 52,
      expertise: ["Digital Marketing", "Brand Strategy", "Growth"],
      bio: "10+ years in marketing at top tech companies. Passionate about empowering women in business.",
      mentees: 31
    }
  ];

  return (
    <section id="mentor-showcase" className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Mentors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with successful Rwandan professionals working at top global companies, 
            ready to guide your career journey.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Avatar and Basic Info */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {mentor.avatar}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {mentor.name}
                </h3>
                <p className="text-emerald-600 font-medium mb-1">
                  {mentor.role}
                </p>
                <p className="text-gray-600 text-sm font-medium mb-2">
                  {mentor.company}
                </p>
                <div className="flex items-center justify-center gap-1 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{mentor.location}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-center gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">
                      {mentor.rating}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">Rating</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-gray-900">
                      {mentor.mentees}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">Mentees</span>
                </div>
              </div>

              {/* Bio */}
              <div className="flex-grow">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {mentor.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {mentor.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA - This will always be at the bottom */}
              <div className="mt-auto">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                  Connect with {mentor.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
            View All Mentors
          </button>
        </div>
      </div>
    </section>
  );
}
