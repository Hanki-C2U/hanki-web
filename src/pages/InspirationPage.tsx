import { useState } from "react";
import { useNavigate } from "react-router";
import AuthHeader from "../components/AuthHeader";
import { Lightbulb, CheckCircle, Search, Filter, ArrowLeft } from "lucide-react";

const InspirationPage = () => {
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Success stories data (same as in MenteeDashboard but could be expanded)
  const successStories = [
    {
      id: 1,
      mentee: {
        name: "Jean Claude Mutoni",
        role: "Software Developer",
        location: "Kigali, Rwanda",
        image: null
      },
      mentor: {
        name: "Emmanuel Ntagungira",
        role: "CTO",
        location: "Berlin, Germany",
        image: null
      },
      story: "As a self-taught developer in Kigali, I struggled to find opportunities in the global tech market. Through ATLAS, I was matched with Emmanuel, a Rwandan tech leader now working in Europe. His guidance helped me improve my coding practices and understand international tech standards. After 8 months of mentorship, I secured a remote position with a European startup, doubling my income while staying in Rwanda.",
      outcomes: ["Secured remote job with European company", "Improved coding standards", "Built international network"],
      industry: "Technology",
      featured: true
    },
    {
      id: 2,
      mentee: {
        name: "Alice Ishimwe",
        role: "Digital Marketing Specialist",
        location: "Huye, Rwanda",
        image: null
      },
      mentor: {
        name: "Marie Claire Uwimana",
        role: "Marketing Director",
        location: "Toronto, Canada",
        image: null
      },
      story: "Living in Huye, my marketing knowledge was limited to local businesses. Marie Claire, who grew up nearby but built her career in North America, helped me understand global digital marketing strategies. She guided me through international certifications and helped me build an online portfolio. I now manage campaigns for clients across East Africa and have started training other young marketers in my community.",
      outcomes: ["Expanded client base across East Africa", "Completed international certifications", "Started local training program"],
      industry: "Marketing",
      featured: true
    },
    {
      id: 3,
      mentee: {
        name: "Eric Mugabo",
        role: "Agricultural Entrepreneur",
        location: "Musanze, Rwanda",
        image: null
      },
      mentor: {
        name: "James Karemera",
        role: "Agricultural Tech Consultant",
        location: "Amsterdam, Netherlands",
        image: null
      },
      story: "My family has farmed the same way for generations in northern Rwanda. Through ATLAS, I met James who introduced me to agricultural technologies being used across Europe that could work in Rwanda's climate. With his guidance, I implemented data-driven farming methods and secured funding to expand. Our crop yield has increased by 40%, and we now export organic produce to three countries.",
      outcomes: ["Increased crop yield by 40%", "Secured international export partnerships", "Implemented sustainable farming methods"],
      industry: "Agriculture",
      featured: false
    },
    {
      id: 4,
      mentee: {
        name: "Grace Umuhoza",
        role: "Healthcare Administrator",
        location: "Butare, Rwanda",
        image: null
      },
      mentor: {
        name: "Patrick Nduwimana",
        role: "Hospital Director",
        location: "Montreal, Canada",
        image: null
      },
      story: "After working in a small clinic for years, I wanted to improve our healthcare management systems but lacked the knowledge. Patrick, who had similar beginnings in Rwanda before moving to Canada, mentored me through implementing better patient care protocols and management systems. With his guidance, we've reduced patient wait times by 30% and improved treatment outcomes significantly.",
      outcomes: ["Reduced wait times by 30%", "Improved patient satisfaction scores", "Implemented digital health records"],
      industry: "Healthcare",
      featured: false
    },
    {
      id: 5,
      mentee: {
        name: "David Mugisha",
        role: "Graphic Designer",
        location: "Kigali, Rwanda",
        image: null
      },
      mentor: {
        name: "Olivier Ndahayo",
        role: "Creative Director",
        location: "Cape Town, South Africa",
        image: null
      },
      story: "I was a self-taught designer struggling to break into international markets. Olivier helped me understand design principles that transcend cultural boundaries while still celebrating our African heritage. He guided me through building a professional portfolio and navigating client relationships across borders. I now have clients from three continents and have doubled my income.",
      outcomes: ["Acquired international clients", "Developed unique design style", "Featured in African Design Magazine"],
      industry: "Design",
      featured: false
    }
  ];

  // Get all unique industries for filter dropdown
  const industries = [...new Set(successStories.map(story => story.industry))];

  // Filter stories based on search query and selected industry
  const filteredStories = successStories.filter(story => {
    const matchesIndustry = selectedIndustry ? story.industry === selectedIndustry : true;
    const matchesSearch = searchQuery.toLowerCase() === "" ? true : (
      story.mentee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.story.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.outcomes.some(outcome => outcome.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return matchesIndustry && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="mr-4 p-2 rounded-full hover:bg-gray-100"
            aria-label="Back"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <Lightbulb className="h-6 w-6 mr-2 text-emerald-600" />
              Success Stories
            </h1>
            <p className="text-gray-600 mt-1">
              Inspiring journeys of mentees who have achieved their goals through mentorship
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by keyword, skill, or name..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative min-w-[180px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
              <select
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full appearance-none bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={selectedIndustry || ""}
                onChange={(e) => setSelectedIndustry(e.target.value || null)}
              >
                <option value="">All Industries</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredStories.map((story) => (
              <div key={story.id} className={`bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${story.featured ? 'border-blue-300' : ''}`}>
                <div className="p-5">
                  {story.featured && (
                    <div className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium mb-3">
                      Featured Story
                    </div>
                  )}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h4 className="font-medium text-lg mb-2">{story.mentee.name}</h4>
                      <p className="text-sm text-gray-600">{story.mentee.role} • {story.mentee.location}</p>
                      <div className="mt-2 text-sm text-gray-500">Mentored by <span className="font-medium">{story.mentor.name}</span>, {story.mentor.role} in {story.mentor.location}</div>
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 self-start">
                      {story.industry}
                    </div>
                  </div>

                  <div className="text-gray-700 mt-3 mb-4">
                    "{story.story}"
                  </div>

                  <div className="mt-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Key Outcomes:</h5>
                    <div className="flex flex-wrap gap-2">
                      {story.outcomes.map((outcome, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <Lightbulb className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">No Stories Found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              No success stories match your current filters. Try adjusting your search criteria or viewing all stories.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedIndustry(null);
              }}
              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Share Your Story CTA */}
        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-6 border border-emerald-100">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Have a Success Story to Share?</h2>
            <p className="text-gray-600 mb-4 max-w-lg mx-auto">
              Has mentorship helped you achieve significant milestones in your career? Share your journey to inspire others.
            </p>
            <button
              onClick={() => navigate('/share-story')}
              className="px-5 py-2.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 inline-flex items-center"
            >
              Share Your Story
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InspirationPage;
