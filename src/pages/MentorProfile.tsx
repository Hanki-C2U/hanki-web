import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { supabasase } from "../supabase_creds/supabase";
import WorkExperienceDisplay from "../components/ui/WorkExperienceDisplay";
import {
  ArrowLeft,
  MapPin,
  Star,
  Calendar,
  MessageCircle,
  Briefcase,
  Linkedin,
  Twitter,
  Globe,
  Mail,
  User
} from "lucide-react";

interface Mentor {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
  location: string;
  profile_picture: string;
  expertise: string[];
  experience: any[];
  ratings: number;
  supabaseId: string;
  LinkedIn: string;
  Twitter?: string;
  Website?: string;
  Github?: string;
  Instagram?: string;
  joined: string;
}

const MentorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("experience");
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const fetchMentor = async () => {
      if (!id) {
        setError('Mentor ID not provided');
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabasase
          .from('mentor')
          .select('*')
          .eq('supabaseId', id)
          .single();

        if (error) {
          throw error;
        }

        if (!data) {
          setError('Mentor not found');
          return;
        }

        console.log('Fetched mentor data:', data);
        console.log('Experience data type:', typeof data.experience);
        console.log('Experience data value:', data.experience);
        setMentor(data);
      } catch (err) {
        console.error('Error fetching mentor:', err);
        setError('Failed to load mentor profile');
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, [id]);

  const handleStartConversation = async () => {
    if (!mentor) return;
    
    try {
      // Navigate to messaging or create conversation
      navigate(`/simple-chat/${mentor.supabaseId}`);
    } catch (err) {
      console.error('Error starting conversation:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !mentor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Mentor Not Found</h2>
          <p className="text-gray-600 mb-4">{error || 'The requested mentor profile could not be found.'}</p>
          <Link 
            to="/discover-mentors" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Discovery
          </Link>
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
              <Link to="/discover-mentors" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-smooth">
                <ArrowLeft className="h-4 w-4" />
                Back to Discovery
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-semibold">Mentor Profile</h1>
            </div>
            <Link to="/" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              SkillsConnect
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Section */}
          <div className="lg:col-span-2">
            {/* Profile Header */}
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm mb-8">
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-professional-blue rounded-full flex items-center justify-center text-white font-semibold text-2xl">
                    {mentor.profile_picture ? (
                      <img 
                        src={mentor.profile_picture} 
                        alt={`${mentor.first_name} ${mentor.last_name}`}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-12 w-12" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{mentor.first_name} {mentor.last_name}</h1>
                    <div className="flex items-center gap-4 mb-4">
                      {mentor.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{mentor.location}</span>
                        </div>
                      )}
                      {mentor.ratings > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{mentor.ratings}</span>
                          <span className="text-gray-600">rating</span>
                        </div>
                      )}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 mb-4">
                      {mentor.LinkedIn && (
                        <a 
                          href={mentor.LinkedIn} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {mentor.Twitter && (
                        <a 
                          href={mentor.Twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-600"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {mentor.Website && (
                        <a 
                          href={mentor.Website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800"
                        >
                          <Globe className="h-5 w-5" />
                        </a>
                      )}
                      <a 
                        href={`mailto:${mentor.email}`}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>

                    {/* Expertise Tags */}
                    {mentor.expertise && mentor.expertise.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {mentor.expertise.map((skill, index) => (
                          <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {mentor.bio && (
                      <p className="text-gray-600">{mentor.bio}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="space-y-6">
              {/* Tab Navigation */}
              <div className="grid grid-cols-2 bg-gray-100 rounded-lg p-1">
                {[
                  { id: "experience", label: "Experience" },
                  { id: "about", label: "About" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab.id
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Experience Tab */}
              {activeTab === "experience" && (
                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      Professional Experience
                    </h3>
                  </div>
                  <div className="p-6 pt-0">
                    {(() => {
                      try {
                        // Safely parse experience data
                        let experiences = mentor.experience;
                        
                        console.log('Processing experience data:', experiences);
                        console.log('Type:', typeof experiences);
                        
                        // If it's a string, try to parse it as JSON
                        if (typeof experiences === 'string') {
                          console.log('Parsing JSON string...');
                          experiences = JSON.parse(experiences);
                          console.log('Parsed result:', experiences);
                        }
                        
                        // Ensure it's an array
                        if (!Array.isArray(experiences)) {
                          console.warn('Experience is not an array:', experiences);
                          return <p className="text-gray-600 text-center py-8">No work experience information available.</p>;
                        }
                        
                        // Validate each experience object
                        const validExperiences = experiences.filter(exp => {
                          if (!exp || typeof exp !== 'object') {
                            console.warn('Invalid experience object:', exp);
                            return false;
                          }
                          return true;
                        });
                        
                        console.log('Valid array with length:', validExperiences.length);
                        
                        if (validExperiences.length > 0) {
                          console.log('Rendering WorkExperienceDisplay with:', validExperiences);
                          return <WorkExperienceDisplay experiences={validExperiences} />;
                        } else {
                          return <p className="text-gray-600 text-center py-8">No work experience information available.</p>;
                        }
                      } catch (error) {
                        console.error('Error parsing experience data:', error, mentor.experience);
                        return <p className="text-gray-600 text-center py-8">Error loading work experience information.</p>;
                      }
                    })()}
                  </div>
                </div>
              )}

              {/* About Tab */}
              {activeTab === "about" && (
                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <User className="h-5 w-5" />
                      About {mentor.first_name}
                    </h3>
                  </div>
                  <div className="p-6 pt-0">
                    {mentor.bio ? (
                      <p className="text-gray-700 leading-relaxed">{mentor.bio}</p>
                    ) : (
                      <p className="text-gray-600 text-center py-8">No additional information available.</p>
                    )}
                    
                    {/* Quick Stats */}
                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-medium text-gray-900 mb-4">Quick Stats</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-lg font-semibold text-gray-900">
                            {new Date(mentor.joined).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long' 
                            })}
                          </div>
                          <div className="text-sm text-gray-600">Member since</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-lg font-semibold text-gray-900">{mentor.ratings}</div>
                          <div className="text-sm text-gray-600">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Sidebar */}
          <div>
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm sticky top-8">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Connect with {mentor.first_name}
                </h3>
                <p className="text-sm text-gray-600">
                  Start your mentoring journey today
                </p>
              </div>
              <div className="p-6 pt-0 space-y-4">
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => setShowBooking(true)}
                    className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-orange-500 text-white hover:bg-orange-600"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Session
                  </button>

                  <button 
                    onClick={handleStartConversation}
                    className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send Message
                  </button>
                </div>

                {/* Rating Display */}
                {mentor.ratings > 0 && (
                  <div className="text-center pt-4 border-t">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-lg">{mentor.ratings}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Mentor rating
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Session Booking Modal */}
        {showBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Book a Session with {mentor.first_name} {mentor.last_name}</h3>
                  <button
                    onClick={() => setShowBooking(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-center text-gray-600">
                    Session booking functionality coming soon! 
                    <br />
                    For now, please use the "Send Message" button to connect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MentorProfile;