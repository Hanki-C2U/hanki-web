import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import {
  Search,
  Filter,
  MapPin,
  Star,
  Briefcase,
  ArrowLeft,
  GraduationCap,
  Target,
  User,
  MessageCircle,

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
  const [selectedField, setSelectedField] = useState("");
  const [selectedSkills, setSelectedSkills] = useState("");
  
  // Dynamic filter options
  const [locations, setLocations] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);

  // Mock data for enhanced UI display
  const fields = [
    "All Fields",
    "Software Engineering",
    "Web Development", 
    "Data Science",
    "Product Management",
    "Agriculture",
    "Finance",
    "Marketing",
    "Design"
  ];

  const skillsList = [
    "All Skills",
    "React",
    "JavaScript",
    "Python",
    "SQL",
    "Machine Learning",
    "Agile",
    "Product Strategy",
    "UI/UX",
    "Data Visualization",
    "Business Development"
  ];

  // Fetch mentees from database (original functionality)
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

  // Enhanced filter logic combining original and new UI filters
  useEffect(() => {
    let filtered = mentees;

    // Search by name, bio, or goals (original functionality)
    if (searchTerm) {
      filtered = filtered.filter(mentee =>
        mentee.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentee.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentee.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentee.goals?.some(goal => goal.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Enhanced field filtering (UI improvement with fallback)
    if (selectedField && selectedField !== "All Fields") {
      // Since we don't have field in database, filter by goals containing field keywords
      filtered = filtered.filter(mentee => 
        mentee.goals?.some(goal => 
          goal.toLowerCase().includes(selectedField.toLowerCase()) ||
          selectedField.toLowerCase().includes(goal.toLowerCase())
        )
      );
    }

    // Enhanced skills filtering (UI improvement with fallback)
    if (selectedSkills && selectedSkills !== "All Skills") {
      // Filter by goals containing skill keywords
      filtered = filtered.filter(mentee =>
        mentee.goals?.some(goal => 
          goal.toLowerCase().includes(selectedSkills.toLowerCase()) ||
          selectedSkills.toLowerCase().includes(goal.toLowerCase())
        )
      );
    }

    setFilteredMentees(filtered);
  }, [searchTerm, selectedField, selectedSkills, mentees]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedField("");
    setSelectedSkills("");
  };

  const handleStartChat = (menteeId: string) => {
    // Navigate to simple chat with the target mentee's ID (original functionality)
    console.log('🎯 Starting chat with mentee:', menteeId)
    console.log('👤 Current user:', user?.id)
    console.log('🔄 Navigating to:', `/simple-chat/${menteeId}`)
    navigate(`/simple-chat/${menteeId}`);
  };

  // Enhanced mentee display data (combines database with mock data for UI)
  const getEnhancedMenteeData = (mentee: Mentee) => {
    return {
      ...mentee,
      name: `${mentee.first_name} ${mentee.last_name}`,
      role: "Student", // Mock - not in database
      organization: "University", // Mock - not in database
      field: mentee.goals?.[0] || "General", // Use first goal as field
      skills: mentee.goals?.slice(0, 5) || ["Learning"], // Use goals as skills
      rating: 4.8, // Mock - not in database
      sessions: Math.floor(Math.random() * 10) + 1, // Mock - not in database
      profilePicture: mentee.profile_picture
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
        <header className="bg-white shadow-subtle border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link to="/mentor-dashboard" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-smooth">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Dashboard
                </Link>
                <div className="h-6 w-px bg-gray-300" />
                <h1 className="text-xl font-semibold">Discover Mentees</h1>
              </div>
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                SkillsConnect
              </Link>
            </div>
          </div>
        </header>
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-emerald-600" />
            <p className="text-gray-600">Loading fellow mentees...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
        <header className="bg-white shadow-subtle border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link to="/mentor-dashboard" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-smooth">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Dashboard
                </Link>
                <div className="h-6 w-px bg-gray-300" />
                <h1 className="text-xl font-semibold">Discover Mentees</h1>
              </div>
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
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
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Header - New UI Style */}
      <header className="bg-white shadow-subtle border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/mentor-dashboard" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-smooth">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-semibold">Discover Mentees</h1>
            </div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              SkillsConnect
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section - New UI Style */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Find Mentees to Connect With</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search by name, interests, or bio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            >
              <option value="">Field of Interest</option>
              {fields.map((field) => (
                <option key={field} value={field}>{field}</option>
              ))}
            </select>

            <select
              value={selectedSkills}
              onChange={(e) => setSelectedSkills(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            >
              <option value="">Skills</option>
              {skillsList.map((skill) => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="text-gray-600">
              Showing {filteredMentees.length} mentee{filteredMentees.length !== 1 ? 's' : ''}
            </p>
            {(searchTerm || selectedField || selectedSkills) && (
              <button 
                onClick={clearFilters}
                className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                <Filter className="h-4 w-4 mr-2" />
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Mentees Grid - New UI Style with Original Data */}
        {filteredMentees.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentees.map((mentee) => {
              const enhancedData = getEnhancedMenteeData(mentee);
              return (
                <div key={mentee.id} className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-elevated transition-smooth">
                  <div className="p-6">
                    {/* Mentee Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        {enhancedData.profilePicture ? (
                          <img
                            src={enhancedData.profilePicture}
                            alt={enhancedData.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white font-semibold text-lg">
                            {mentee.first_name.charAt(0)}{mentee.last_name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{enhancedData.name}</h3>
                        <p className="text-emerald-600 font-medium">{enhancedData.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="h-3 w-3 text-gray-400" />
                          <span className="text-sm text-gray-600">{mentee.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Organization */}
                    <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                      <Briefcase className="h-4 w-4 text-gray-400" />
                      <span>{enhancedData.organization}</span>
                    </div>

                    {/* Skills (using goals as skills) */}
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-1">Interests</p>
                      <div className="flex flex-wrap gap-1">
                        {enhancedData.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-emerald-100 text-emerald-800">
                            {skill}
                          </span>
                        ))}
                        {enhancedData.skills.length > 3 && (
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-700">
                            +{enhancedData.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Goals */}
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-1 flex items-center gap-1">
                        <Target className="h-3.5 w-3.5 text-emerald-600" />
                        Learning Goals
                      </p>
                      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                        {mentee.goals?.slice(0, 2).map((goal, index) => (
                          <li key={index} className="line-clamp-1">{goal}</li>
                        ))}
                        {(mentee.goals?.length || 0) > 2 && (
                          <li className="text-emerald-600 hover:underline cursor-pointer">
                            +{(mentee.goals?.length || 0) - 2} more goals
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{enhancedData.rating}</span>
                        <span className="text-gray-600">({enhancedData.sessions} sessions)</span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-600 font-medium">
                        <GraduationCap className="h-4 w-4" />
                        {enhancedData.field}
                      </div>
                    </div>

                    {/* Social Links (Original functionality) */}
                    {(mentee.Github || mentee.LinkedIn || mentee.Instagram || mentee.Website) && (
                      <div className="mb-4">
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

                    {/* Actions - Original functionality with New UI */}
                    <div className="flex gap-2">
                      <Link
                        to={`/mentee/${mentee.supabaseId}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        View Profile
                      </Link>
                      <button
                        className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        onClick={() => handleStartChat(mentee.supabaseId)}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Chat
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No mentees found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || selectedField || selectedSkills
                ? "Try adjusting your search criteria or browse all mentees."
                : "Be the first to join this amazing community!"}
            </p>
            {(searchTerm || selectedField || selectedSkills) && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
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
