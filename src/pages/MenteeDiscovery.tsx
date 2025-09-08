import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { 
  Search, 
  Filter, 
  MapPin, 
  User, 
  MessageCircle,
  Users,
  Target,
  Calendar,
  Github,
  Instagram,
  Linkedin,
  Globe,
  Loader2
} from "lucide-react";
import { supabasase } from '../supabase_creds/supabase';
import { useAuthStore } from "../store/authStore";

interface Mentee {
  id: number;
  supabaseId: string;
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
  goals: string[];
  experience: number;
  location: string;
  profile_picture: string;
  age: number;
  joined: string;
  Github?: string;
  Instagram?: string;
  LinkedIn?: string;
  Website?: string;
}

const MenteeDiscovery = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  
  const [mentees, setMentees] = useState<Mentee[]>([]);
  const [filteredMentees, setFilteredMentees] = useState<Mentee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  
  // Dynamic filter options
  const [locations, setLocations] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);

  // Fetch mentees from database
  useEffect(() => {
    const fetchMentees = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabasase
          .from('mentee')
          .select('*')
          .order('joined', { ascending: false });

        if (error) {
          console.error('Error fetching mentees:', error);
          setError('Failed to load mentees');
          return;
        }

        // Filter out current user
        const filteredData = data?.filter(mentee => mentee.supabaseId !== user?.id) || [];
        setMentees(filteredData);
        setFilteredMentees(filteredData);

        // Extract unique locations and goals for filters
        const uniqueLocations = [...new Set(filteredData.map(m => m.location).filter(Boolean))];
        const allGoals = filteredData.flatMap(m => m.goals || []);
        const uniqueGoals = [...new Set(allGoals)];
        
        setLocations(uniqueLocations);
        setGoals(uniqueGoals);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load mentees');
      } finally {
        setLoading(false);
      }
    };

    fetchMentees();
  }, [user?.id]);

  // Filter mentees based on search criteria
  useEffect(() => {
    let filtered = mentees;

    // Search by name, bio, or goals
    if (searchTerm) {
      filtered = filtered.filter(mentee =>
        mentee.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentee.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentee.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentee.goals?.some(goal => goal.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by location
    if (selectedLocation) {
      filtered = filtered.filter(mentee => mentee.location === selectedLocation);
    }

    // Filter by goal/interest
    if (selectedGoal) {
      filtered = filtered.filter(mentee => 
        mentee.goals?.includes(selectedGoal)
      );
    }

    // Filter by experience level
    if (experienceLevel) {
      if (experienceLevel === "beginner") {
        filtered = filtered.filter(mentee => mentee.experience <= 1);
      } else if (experienceLevel === "intermediate") {
        filtered = filtered.filter(mentee => mentee.experience > 1 && mentee.experience <= 3);
      } else if (experienceLevel === "advanced") {
        filtered = filtered.filter(mentee => mentee.experience > 3);
      }
    }

    setFilteredMentees(filtered);
  }, [searchTerm, selectedLocation, selectedGoal, experienceLevel, mentees]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLocation("");
    setSelectedGoal("");
    setExperienceLevel("");
  };

  const getExperienceLabel = (years: number) => {
    if (years <= 1) return "Beginner";
    if (years <= 3) return "Intermediate";
    return "Advanced";
  };

  const handleStartChat = (menteeId: string) => {
    // Navigate to simple chat with the target mentee's ID
    console.log('🎯 Starting chat with mentee:', menteeId)
    console.log('👤 Current user:', user?.id)
    console.log('🔄 Navigating to:', `/simple-chat/${menteeId}`)
    navigate(`/simple-chat/${menteeId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        <header className="bg-white shadow-subtle border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/mentee-dashboard" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
                SkillsConnect
              </Link>
            </div>
          </div>
        </header>
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-orange-600" />
            <p className="text-gray-600">Loading fellow mentees...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        <header className="bg-white shadow-subtle border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/mentee-dashboard" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
                SkillsConnect
              </Link>
            </div>
          </div>
        </header>
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-subtle border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/mentee-dashboard" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
                SkillsConnect
              </Link>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-blue-100 text-blue-800">
                Discover Mentees
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link 
                to="/mentor-discovery"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Users className="h-4 w-4" />
                Find Mentors
              </Link>
              <Link 
                to="/chat"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700"
              >
                <MessageCircle className="h-4 w-4" />
                Messages
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Debug Banner */}
      <div className="bg-blue-100 border-b border-blue-200 px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-blue-800">
            🐛 <strong>Debug Mode:</strong> Chat functionality with enhanced logging - Check browser console for details
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            Connect with Fellow Mentees
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Build your network, share experiences, and learn together with mentees who share your goals and interests.
          </p>
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-sm border">
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{mentees.length} Mentees</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                <span>Peer Chat</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="h-4 w-4" />
                <span>Shared Goals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search by name, interests, or bio..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Interest/Goal Filter */}
            <div>
              <select
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
              >
                <option value="">All Interests</option>
                {goals.map(goal => (
                  <option key={goal} value={goal}>{goal}</option>
                ))}
              </select>
            </div>

            {/* Experience Filter */}
            <div>
              <select
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
              >
                <option value="">All Levels</option>
                <option value="beginner">Beginner (0-1 years)</option>
                <option value="intermediate">Intermediate (2-3 years)</option>
                <option value="advanced">Advanced (4+ years)</option>
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {(searchTerm || selectedLocation || selectedGoal || experienceLevel) && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {filteredMentees.length} of {mentees.length} mentees
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-900"
              >
                <Filter className="h-4 w-4" />
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Mentees Grid */}
        {filteredMentees.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentees.map((mentee) => (
              <div key={mentee.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="p-6">
                  {/* Profile Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {mentee.first_name.charAt(0)}{mentee.last_name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">
                        {mentee.first_name} {mentee.last_name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{mentee.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Joined {new Date(mentee.joined).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div className="mb-3">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      mentee.experience <= 1 ? 'bg-green-100 text-green-800' :
                      mentee.experience <= 3 ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {getExperienceLabel(mentee.experience)} • {mentee.experience} {mentee.experience === 1 ? 'year' : 'years'}
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {mentee.bio}
                  </p>

                  {/* Goals/Interests */}
                  {mentee.goals && mentee.goals.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Interests</h4>
                      <div className="flex flex-wrap gap-1">
                        {mentee.goals.slice(0, 3).map((goal, index) => (
                          <span
                            key={index}
                            className="inline-block px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs"
                          >
                            {goal}
                          </span>
                        ))}
                        {mentee.goals.length > 3 && (
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                            +{mentee.goals.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Social Links */}
                  {(mentee.Github || mentee.LinkedIn || mentee.Instagram || mentee.Website) && (
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Connect</h4>
                      <div className="flex gap-2">
                        {mentee.Github && (
                          <a href={mentee.Github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {mentee.LinkedIn && (
                          <a href={mentee.LinkedIn} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {mentee.Instagram && (
                          <a href={mentee.Instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
                            <Instagram className="h-4 w-4" />
                          </a>
                        )}
                        {mentee.Website && (
                          <a href={mentee.Website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                            <Globe className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleStartChat(mentee.supabaseId)}
                      className="flex-1 inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat
                    </button>
                    <Link
                      to={`/mentee/${mentee.supabaseId}`}
                      className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No mentees found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || selectedLocation || selectedGoal || experienceLevel
                ? "Try adjusting your filters to see more results."
                : "Be the first to join this amazing community!"}
            </p>
            {(searchTerm || selectedLocation || selectedGoal || experienceLevel) && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default MenteeDiscovery;
