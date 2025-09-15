import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Search,
  MapPin,
  Star,
  Clock,
  Calendar,
  Loader2,
  MessageCircle
} from "lucide-react";
import { supabasase } from "../supabase_creds/supabase";
import { useAuthStore } from "../store/authStore";
import AuthHeader from "../components/AuthHeader";

const MentorDiscovery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [mentors, setMentors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { userRole } = useAuthStore();

  // Fetch mentors from database
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        setLoading(true);
        const { data: mentorsData, error: mentorsError } = await supabasase
          .from('mentor')
          .select('*')
          .order('ratings', { ascending: false });

        if (mentorsError) {
          console.error('Error fetching mentors:', mentorsError);
          setError("Failed to load mentors. Please try again.");
        } else {
          setMentors(mentorsData || []);
        }
      } catch (err) {
        console.error('Error:', err);
        setError("An error occurred while loading mentors.");
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  // Dynamic expertise areas from mentors data
  const expertiseAreas = [
    "All Expertise Areas",
    ...Array.from(new Set(mentors.flatMap(mentor => mentor.expertise || []))).sort()
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
    const fullName = `${mentor.first_name} ${mentor.last_name}`.toLowerCase();
    const expertiseArray = Array.isArray(mentor.expertise) ? mentor.expertise : [mentor.expertise];
    
    const matchesSearch = fullName.includes(searchTerm.toLowerCase()) ||
      expertiseArray.some((exp: string) => exp?.toLowerCase().includes(searchTerm.toLowerCase())) ||
      mentor.bio?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesExpertise = !selectedExpertise || selectedExpertise === "All Expertise Areas" ||
      expertiseArray.some((exp: string) => exp === selectedExpertise);

    const matchesLocation = !selectedLocation || selectedLocation === "All Locations" ||
      mentor.location?.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchesSearch && matchesExpertise && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Header */}
      <AuthHeader />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(userRole === 'mentor' ? '/mentor-dashboard' : '/mentee-dashboard')}
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              ← Back to Dashboard
            </button>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-xl font-semibold text-gray-900">Discover Mentors</h1>
            <div className="h-6 w-px bg-gray-300" />
            <button
              onClick={() => navigate('/discover-mentees')}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Find Mentees
            </button>
          </div>
        </div>
      </div>

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
        {loading ? (
          <div className="text-center py-12">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-emerald-600" />
            <p className="text-gray-600">Loading mentors...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Mentors</h3>
              <p className="text-gray-600 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => {
              // Generate avatar initials from name
              const getInitials = (firstName: string = '', lastName: string = '') => {
                return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
              };

              // Handle expertise display (could be string or array)
              const expertiseDisplay = Array.isArray(mentor.expertise) 
                ? mentor.expertise.join(', ') 
                : mentor.expertise || 'Mentor';

              // Handle specializations (use expertise if specializations not available)
              const specializations = mentor.specializations || 
                (Array.isArray(mentor.expertise) ? mentor.expertise : [mentor.expertise]).filter(Boolean);

              return (
                <div key={mentor.id} className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-elevated transition-smooth">
                  <div className="p-6">
                    {/* Mentor Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-professional-blue rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {mentor.profile_picture ? (
                          <img 
                            src={mentor.profile_picture} 
                            alt={`${mentor.first_name} ${mentor.last_name}`}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          getInitials(mentor.first_name, mentor.last_name)
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">
                          {mentor.first_name} {mentor.last_name}
                        </h3>
                        <p className="text-professional-blue font-medium">{expertiseDisplay}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="h-3 w-3 text-gray-400" />
                          <span className="text-sm text-gray-600">{mentor.location || 'Location not specified'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Specializations */}
                    {specializations.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {specializations.slice(0, 3).map((spec: string, index: number) => (
                            <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900">
                              {spec}
                            </span>
                          ))}
                          {specializations.length > 3 && (
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900">
                              +{specializations.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Bio */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {mentor.bio || 'Experienced mentor ready to help you achieve your goals.'}
                    </p>

                    {/* Interests / Expertise Tags */}
                    {specializations && specializations.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Interests</p>
                        <div className="flex flex-wrap gap-2">
                          {specializations.slice(0, 4).map((int: string, idx: number) => (
                            <span key={idx} className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-800">
                              {int}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{mentor.ratings || 'New'}</span>
                        <span className="text-gray-600">
                          ({(() => {
                            // Calculate years of experience from experience array
                            try {
                              let experiences = mentor.experience;
                              if (typeof experiences === 'string') {
                                experiences = JSON.parse(experiences);
                              }
                              if (Array.isArray(experiences) && experiences.length > 0) {
                                return `${experiences.length} position${experiences.length !== 1 ? 's' : ''}`;
                              }
                              return '0 positions';
                            } catch {
                              return '0 positions';
                            }
                          })()})
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-success font-medium">
                        <Clock className="h-4 w-4" />
                        Free
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span className="text-sm text-accent font-medium">Available for sessions</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        onClick={() => navigate(`/mentor/${mentor.supabaseId}`)}
                      >
                        View Profile
                      </button>
                      <button
                        className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        onClick={() => navigate(`/book-session/${mentor.supabaseId}`)}
                      >
                        Book Session
                      </button>
                    </div>
                    <div className="mt-2">
                      <button
                        className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        onClick={() => navigate(`/simple-chat/${mentor.supabaseId}`)}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Chat with Mentor
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!loading && !error && filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No mentors found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all mentors.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default MentorDiscovery;