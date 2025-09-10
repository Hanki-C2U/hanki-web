import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  Search,
  MapPin,
  Star,
  ArrowLeft,
  Calendar
} from "lucide-react";

const MentorDiscovery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const navigate = useNavigate()

  const mentors = [
    {
      id: 1,
      name: "Emmanuel Ntagungira",
      expertise: "Software Engineering",
      specializations: ["AI/ML", "Cloud Computing", "System Design"],
      location: "Toronto, Canada",
      rating: 4.9,
      sessions: 120,
      bio: "15+ years in tech industry, currently Principal Engineer at Microsoft. Passionate about helping African youth break into tech.",
      avatar: "EN",
      availability: "Available this week",
      languages: ["English", "French", "Kinyarwanda"],
      yearsOfExperience: 15,
      highlightedCredential: "Microsoft Principal Engineer"
    },
    {
      id: 2,
      name: "Marie Claire Uwimana",
      expertise: "Digital Marketing",
      specializations: ["Social Media", "Content Strategy", "Analytics"],
      location: "London, UK",
      rating: 4.8,
      sessions: 85,
      bio: "Marketing Director with expertise in building global brands. Former Google and Facebook marketing executive.",
      avatar: "MU",
      availability: "Available next week",
      languages: ["English", "French", "Kinyarwanda"],
      yearsOfExperience: 10,
      highlightedCredential: "Former Google Marketing Executive"
    },
    {
      id: 3,
      name: "James Gasana",
      expertise: "Data Science",
      specializations: ["Machine Learning", "Statistics", "Business Intelligence"],
      location: "Boston, USA",
      rating: 4.9,
      sessions: 95,
      bio: "Data Science Lead at Harvard Medical School. PhD in Statistics with focus on healthcare analytics.",
      avatar: "JG",
      availability: "Available this week",
      languages: ["English", "French", "Swahili"],
      yearsOfExperience: 8,
      highlightedCredential: "Harvard Data Science Lead"
    },
    {
      id: 4,
      name: "Sarah Mukamana",
      expertise: "Product Management",
      specializations: ["Product Strategy", "User Research", "Agile"],
      location: "San Francisco, USA",
      rating: 4.7,
      sessions: 75,
      bio: "Senior Product Manager at Airbnb. Expert in building user-centric products and leading cross-functional teams.",
      avatar: "SM",
      availability: "Available in 2 days",
      languages: ["English", "Kinyarwanda", "Spanish"],
      yearsOfExperience: 6,
      highlightedCredential: "Airbnb Senior PM"
    },
    {
      id: 5,
      name: "David Nkurunziza",
      expertise: "Entrepreneurship",
      specializations: ["Startup Strategy", "Fundraising", "Business Development"],
      location: "Dubai, UAE",
      rating: 4.8,
      sessions: 65,
      bio: "Serial entrepreneur with 3 successful exits. Currently Partner at venture capital firm focused on African startups.",
      avatar: "DN",
      availability: "Available this week",
      languages: ["English", "Arabic", "Kinyarwanda"],
      yearsOfExperience: 12,
      highlightedCredential: "VC Partner"
    },
    {
      id: 6,
      name: "Grace Uwamahoro",
      expertise: "Finance",
      specializations: ["Investment Banking", "Financial Modeling", "Corporate Finance"],
      location: "New York, USA",
      rating: 4.9,
      sessions: 110,
      bio: "VP at Goldman Sachs with 12 years in investment banking. Specialized in emerging markets and infrastructure finance.",
      avatar: "GU",
      availability: "Available next week",
      languages: ["English", "French", "Kinyarwanda"],
      yearsOfExperience: 12,
      highlightedCredential: "Goldman Sachs VP"
    }
  ];

  const expertiseAreas = [
    "All Expertise Areas",
    "Software Engineering",
    "Digital Marketing",
    "Data Science",
    "Product Management",
    "Entrepreneurship",
    "Finance",
    "Healthcare",
    "Legal"
  ];

  const locations = [
    "All Locations",
    "North America",
    "Europe",
    "Asia",
    "Africa",
    "Australia"
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.specializations.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesExpertise = !selectedExpertise || selectedExpertise === "All Expertise Areas" ||
      mentor.expertise === selectedExpertise;

    const matchesLocation = !selectedLocation || selectedLocation === "All Locations" ||
      mentor.location.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchesSearch && matchesExpertise && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-subtle border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/mentee-dashboard" className="flex items-center gap-2 text-gray-600 hover:text-emerald-700 transition-smooth">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-semibold">Discover Mentors</h1>
            </div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              ATLAS
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Your Perfect Mentor</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search by name, expertise, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <select
              value={selectedExpertise}
              onChange={(e) => setSelectedExpertise(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            >
              <option value="">Expertise Area</option>
              {expertiseAreas.map((area) => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            >
              <option value="">Location</option>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="text-gray-600">
              Showing {filteredMentors.length} mentor{filteredMentors.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-elevated transition-smooth">
              <div className="p-6">
                {/* Mentor Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {mentor.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">{mentor.name}</h3>
                    <p className="text-emerald-600 font-medium">{mentor.expertise}</p>
                    {mentor.highlightedCredential && (
                      <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-md mb-1">
                        {mentor.highlightedCredential}
                      </div>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-3 w-3 text-gray-400" />
                      <span className="text-sm text-gray-600">{mentor.location}</span>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                {mentor.languages && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">Languages</p>
                    <div className="flex flex-wrap gap-1">
                      {mentor.languages.map((language, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specializations */}
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-1">Specializations</p>
                  <div className="flex flex-wrap gap-1">
                    {mentor.specializations.map((spec, index) => (
                      <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-emerald-50 text-emerald-700">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                {mentor.yearsOfExperience && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">Experience</p>
                    <p className="text-sm font-medium text-gray-700">{mentor.yearsOfExperience}+ years in {mentor.expertise}</p>
                  </div>
                )}

                {/* Bio */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {mentor.bio}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{mentor.rating}</span>
                    <span className="text-gray-600">({mentor.sessions} sessions)</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-emerald-600 font-medium">{mentor.availability}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    onClick={() => navigate(`/mentor/${mentor.id}`)
                    }
                  >
                    View Profile
                  </button>
                  <button
                    className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    onClick={() => navigate(`/book-session/${mentor.id}`)
                    }
                  >
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <Search className="h-12 w-12 text-emerald-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No mentors found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all mentors.</p>
            <button
              className="mt-4 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-md hover:bg-emerald-100 transition-colors"
              onClick={() => {
                setSearchTerm("");
                setSelectedExpertise("");
                setSelectedLocation("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default MentorDiscovery;