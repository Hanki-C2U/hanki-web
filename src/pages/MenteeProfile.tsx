import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  MessageCircle,
  Github,
  Instagram,
  Linkedin,
  Globe,
  Target,
  User,
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

const MenteeProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  
  const [mentee, setMentee] = useState<Mentee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMentee = async () => {
      if (!id) {
        setError("No mentee ID provided");
        setLoading(false);
        return;
      }

      try {
        const { data: menteeData, error: menteeError } = await supabasase
          .from('mentee')
          .select('*')
          .eq('supabaseId', id)
          .single();

        if (menteeError) {
          console.error('Error fetching mentee:', menteeError);
          setError("Mentee not found");
          setLoading(false);
          return;
        }

        setMentee(menteeData);
        setLoading(false);
      } catch (err) {
        console.error('Error:', err);
        setError("Failed to load mentee profile");
        setLoading(false);
      }
    };

    fetchMentee();
  }, [id]);

  const getExperienceLabel = (years: number) => {
    if (years <= 1) return "Beginner";
    if (years <= 3) return "Intermediate";
    return "Advanced";
  };

  const handleStartChat = () => {
    if (mentee) {
      navigate(`/simple-chat/${mentee.supabaseId}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        <header className="bg-white shadow-subtle border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/discover-mentees" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4" />
                Back to Discovery
              </Link>
              <Link to="/mentee-dashboard" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
                SkillsConnect
              </Link>
            </div>
          </div>
        </header>
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-orange-600" />
            <p className="text-gray-600">Loading mentee profile...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !mentee) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
        <header className="bg-white shadow-subtle border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/discover-mentees" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4" />
                Back to Discovery
              </Link>
              <Link to="/mentee-dashboard" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
                SkillsConnect
              </Link>
            </div>
          </div>
        </header>
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center max-w-md mx-auto">
            <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Profile Not Found</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <Link 
              to="/discover-mentees"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
            >
              Back to Discovery
            </Link>
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
            <Link to="/discover-mentees" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4" />
              Back to Discovery
            </Link>
            <Link to="/mentee-dashboard" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              SkillsConnect
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-orange-500 to-blue-600 px-6 py-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-orange-600">
                {mentee.first_name.charAt(0)}{mentee.last_name.charAt(0)}
              </div>
              <div className="text-white">
                <h1 className="text-3xl font-bold mb-2">
                  {mentee.first_name} {mentee.last_name}
                </h1>
                <div className="flex items-center gap-4 text-orange-100">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{mentee.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {new Date(mentee.joined).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* About */}
                <div>
                  <h2 className="text-xl font-semibold mb-3">About</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {mentee.bio}
                  </p>
                </div>

                {/* Goals & Interests */}
                {mentee.goals && mentee.goals.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Goals & Interests
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {mentee.goals.map((goal, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                        >
                          {goal}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social Links */}
                {(mentee.Github || mentee.LinkedIn || mentee.Instagram || mentee.Website) && (
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Connect</h2>
                    <div className="flex gap-4">
                      {mentee.Github && (
                        <a 
                          href={mentee.Github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {mentee.LinkedIn && (
                        <a 
                          href={mentee.LinkedIn} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {mentee.Instagram && (
                        <a 
                          href={mentee.Instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <Instagram className="h-4 w-4" />
                          <span>Instagram</span>
                        </a>
                      )}
                      {mentee.Website && (
                        <a 
                          href={mentee.Website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <Globe className="h-4 w-4" />
                          <span>Website</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Quick Info</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience Level:</span>
                      <span className={`font-medium ${
                        mentee.experience <= 1 ? 'text-green-600' :
                        mentee.experience <= 3 ? 'text-blue-600' :
                        'text-purple-600'
                      }`}>
                        {getExperienceLabel(mentee.experience)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Years of Experience:</span>
                      <span className="font-medium">{mentee.experience} {mentee.experience === 1 ? 'year' : 'years'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Age:</span>
                      <span className="font-medium">{mentee.age} years old</span>
                    </div>
                  </div>
                </div>

                {/* Connect Section */}
                {user?.id !== mentee.supabaseId && (
                  <div className="space-y-3">
                    <button
                      onClick={handleStartChat}
                      className="w-full inline-flex items-center justify-center gap-2 h-11 px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 font-medium"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Start Chat
                    </button>
                    <p className="text-xs text-gray-600 text-center">
                      Connect with {mentee.first_name} to share experiences and learn together!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenteeProfile;
