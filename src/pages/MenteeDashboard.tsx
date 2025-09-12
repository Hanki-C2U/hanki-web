import { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import {
  Calendar,
  Search,
  BookOpen,
  TrendingUp,
  Video,
  Star,
  Target,
  Lightbulb,
  CheckCircle,
  X,
  MapPin,
  Clock,
  Linkedin,
  Globe,
  MessageCircle
} from "lucide-react";
import AuthHeader from "../components/AuthHeader";
import { useAuthStore } from "../store/authStore";
import { supabasase } from "../supabase_creds/supabase";
import { getProfilePictureUrl } from "../utils/profilePicture";
import useRealtimeChat from "../hooks/useRealtimeChat";
import MessagingInterface from "../components/MessagingInterface";

// Import the helper function from utils/timezones.ts
import { getCurrentTimeInTimezone as getTimeInTimezone, getTimezoneOffset } from "../utils/timezones";

// Helper function to get current time in mentee's timezone
const getCurrentTimeInTimezone = (timezone: string): string => {
  // Use the imported function for timezone handling
  return getTimeInTimezone(timezone);
};

const MenteeDashboard = () => {
  const { userRole, roleLoading, user } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'profile' | 'goals' | 'skills' | 'inspiration' | 'messages'>('profile');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [username, setUserName] = useState('');
  const [mentors, setMentors] = useState<any[]>([]);
  // const [mentorsLoading, setMentorsLoading] = useState(true);
  const [upcomingSessions, setUpcomingSessions] = useState<any[]>([]);
  const [sessionsLoading, setSessionsLoading] = useState(true);
  const [menteeData, setMenteeData] = useState<any>(null);
  const [menteeDataLoading, setMenteeDataLoading] = useState(true);
  
  // Add the chat hook (keeping for future use)
  const { } = useRealtimeChat();

  // Debug logging
  console.log('MenteeDashboard - userRole:', userRole, 'roleLoading:', roleLoading, 'user:', user?.id);

  // Check for success message in navigation state
  useEffect(() => {
    if (location.state && location.state.message) {
      setSuccessMessage(location.state.message);

      // Clear the message after 5 seconds
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  // Redirect if explicitly not a mentee (don't redirect on null/unknown role)
  useLayoutEffect(() => {
    // Only perform actions when role is not loading and user exists
    if (!roleLoading && user) {
      // If user is a mentor, deny access and redirect
      if (userRole === 'mentor') {
        console.log('MenteeDashboard: Access denied - Mentor trying to access mentee dashboard, redirecting to mentor dashboard');
        navigate('/mentor-dashboard', { replace: true });
      }
      // Only redirect to onboarding if we have confirmed the user has no role
      // AND they have a valid session (to avoid race conditions)
      else if (userRole === null) {
        console.log('MenteeDashboard: User has session but no role after role check complete, redirecting to onboarding');
        navigate('/onboarding', { replace: true });
      }
      // If we reach here and userRole is 'mentee', stay on dashboard
      else if (userRole === 'mentee') {
        console.log('✅ MenteeDashboard: User confirmed as mentee, staying on dashboard');
      }
    } else if (!roleLoading && !user) {
      console.log('MenteeDashboard: No user session, letting AuthProvider handle...');
    } else {
      console.log('MenteeDashboard: Role is still loading, waiting...');
    }
  }, [roleLoading, userRole, user, navigate]);

  // Fetch username when role is confirmed as mentee
  useEffect(() => {
    const fetchUsername = async () => {
      if (userRole === 'mentee' && user?.id) {
        try {
          const res = await supabasase.from('mentee').select('first_name').eq('supabaseId', user.id).single();
          if (res?.data?.first_name) {
            setUserName(res.data.first_name);
          }
        } catch (error) {
          console.error('Error fetching username:', error);
        }
      }
    };
    
    fetchUsername();
  }, [userRole, user?.id]);

  // Fetch real mentee data from database
  useEffect(() => {
    const fetchMenteeData = async () => {
      if (userRole === 'mentee' && user?.id) {
        try {
          setMenteeDataLoading(true);
          console.log('🔄 Fetching mentee data for user:', user.id);
          
          const { data: menteeProfile, error } = await supabasase
            .from('mentee')
            .select('*')
            .eq('supabaseId', user.id)
            .single();

          if (error) {
            console.error('❌ Error fetching mentee data:', error);
            // Fallback to mock data structure with user's name
            setMenteeData({
              firstName: username || 'User',
              lastName: '',
              role: 'Software Developer',
              organization: 'Tech Startup',
              location: 'Kigali, Rwanda',
              timezone: 'Africa/Kigali',
              languages: ['English', 'Kinyarwanda', 'French'],
              profilePicture: '/professional-headshot-of-young-hispanic-freelancer.png',
              bio: 'Welcome to your mentorship journey! Please update your profile to get started.',
              skills: [
                { name: 'JavaScript', level: 75, category: 'Programming' },
                { name: 'React', level: 70, category: 'Frontend' },
                { name: 'Node.js', level: 65, category: 'Backend' },
                { name: 'Project Management', level: 60, category: 'Soft Skills' },
                { name: 'Problem Solving', level: 80, category: 'Soft Skills' }
              ],
              goals: [
                'Advance to Senior Software Developer position within 18 months',
                'Master system design and architecture principles',
                'Develop leadership and team collaboration skills',
                'Build expertise in cloud technologies (AWS/Azure)'
              ],
              socials: {
                linkedin: '',
                website: ''
              },
              professionalBackground: {
                education: 'Bachelor of Science in Computer Science - University of Rwanda (2021)',
                experience: [
                  {
                    title: 'Junior Software Developer',
                    company: 'KigaliTech Solutions',
                    duration: '2022 - Present',
                    description: 'Developing web applications using React and Node.js, collaborating with cross-functional teams to deliver high-quality software solutions.'
                  },
                  {
                    title: 'Software Development Intern',
                    company: 'Rwanda Development Board - ICT',
                    duration: 'Jun 2021 - Dec 2021',
                    description: 'Assisted in building internal tools and gained hands-on experience with modern web technologies and agile development practices.'
                  }
                ]
              },
              learningPreferences: {
                mentorshipStyle: 'Goal-oriented with regular check-ins and structured feedback sessions',
                preferredSessionFormat: 'Video calls with screen sharing for technical topics, 45-60 minute sessions',
                learningGoals: 'Advance to senior developer role, improve system design skills, and develop leadership capabilities',
                availability: 'Weekday evenings (6-9 PM EAT) and Saturday mornings (9 AM - 12 PM EAT)'
              },
              achievementBadges: [
                { id: 1, name: 'First Session', icon: '🎯', earned: false },
                { id: 2, name: 'Goal Setter', icon: '📈', earned: false },
                { id: 3, name: 'Skill Builder', icon: '🛠️', earned: false },
                { id: 4, name: 'Networker', icon: '🤝', earned: false }
              ]
            });
          } else if (menteeProfile) {
            console.log('✅ Mentee data fetched successfully:', menteeProfile);
            
            // Fetch profile picture from Supabase Storage
            const profilePicUrl = await getProfilePictureUrl(user.id, 'mentee');
            
            // Map database fields to component structure
            setMenteeData({
              firstName: menteeProfile.first_name || 'User',
              lastName: menteeProfile.last_name || '',
              role: 'Software Developer', // Will be stored in DB in future
              organization: 'Tech Startup', // Will be stored in DB in future
              location: menteeProfile.location || 'Kigali, Rwanda',
              timezone: 'Africa/Kigali', // Default timezone
              languages: ['English', 'Kinyarwanda', 'French'], // Will be stored in DB in future
              profilePicture: profilePicUrl,
              bio: menteeProfile.bio || 'Welcome to your mentorship journey! Please update your profile to get started.',
              skills: [
                { name: 'JavaScript', level: 75, category: 'Programming' },
                { name: 'React', level: 70, category: 'Frontend' },
                { name: 'Node.js', level: 65, category: 'Backend' },
                { name: 'Project Management', level: 60, category: 'Soft Skills' },
                { name: 'Problem Solving', level: 80, category: 'Soft Skills' }
              ],
              goals: menteeProfile.Interests && menteeProfile.Interests.length > 0 ? menteeProfile.Interests : [
                'Advance to Senior Software Developer position within 18 months',
                'Master system design and architecture principles',
                'Develop leadership and team collaboration skills',
                'Build expertise in cloud technologies (AWS/Azure)'
              ],
              socials: {
                linkedin: menteeProfile.LinkedIn || '',
                website: menteeProfile.Website || ''
              },
              professionalBackground: {
                education: 'Bachelor of Science in Computer Science - University of Rwanda (2021)',
                experience: [
                  {
                    title: 'Junior Software Developer',
                    company: 'KigaliTech Solutions',
                    duration: '2022 - Present',
                    description: 'Developing web applications using React and Node.js, collaborating with cross-functional teams to deliver high-quality software solutions.'
                  },
                  {
                    title: 'Software Development Intern',
                    company: 'Rwanda Development Board - ICT',
                    duration: 'Jun 2021 - Dec 2021',
                    description: 'Assisted in building internal tools and gained hands-on experience with modern web technologies and agile development practices.'
                  }
                ]
              },
              learningPreferences: {
                mentorshipStyle: 'Goal-oriented with regular check-ins and structured feedback sessions',
                preferredSessionFormat: 'Video calls with screen sharing for technical topics, 45-60 minute sessions',
                learningGoals: 'Advance to senior developer role, improve system design skills, and develop leadership capabilities',
                availability: 'Weekday evenings (6-9 PM EAT) and Saturday mornings (9 AM - 12 PM EAT)'
              },
              achievementBadges: [
                { id: 1, name: 'First Session', icon: '🎯', earned: false },
                { id: 2, name: 'Goal Setter', icon: '📈', earned: menteeProfile.Interests && menteeProfile.Interests.length > 0 },
                { id: 3, name: 'Skill Builder', icon: '🛠️', earned: false },
                { id: 4, name: 'Networker', icon: '🤝', earned: false }
              ]
            });
          }
        } catch (error) {
          console.error('💥 Unexpected error fetching mentee data:', error);
          // Set fallback data
          setMenteeData({
            firstName: username || 'User',
            lastName: '',
            role: 'Software Developer',
            organization: 'Tech Startup',
            location: 'Kigali, Rwanda',
            timezone: 'Africa/Kigali',
            languages: ['English', 'Kinyarwanda', 'French'],
            profilePicture: '/professional-headshot-of-young-hispanic-freelancer.png',
            bio: 'Welcome to your mentorship journey! Please update your profile to get started.',
            skills: [
              { name: 'JavaScript', level: 75, category: 'Programming' },
              { name: 'React', level: 70, category: 'Frontend' },
              { name: 'Node.js', level: 65, category: 'Backend' },
              { name: 'Project Management', level: 60, category: 'Soft Skills' },
              { name: 'Problem Solving', level: 80, category: 'Soft Skills' }
            ],
            goals: [
              'Advance to Senior Software Developer position within 18 months',
              'Master system design and architecture principles',
              'Develop leadership and team collaboration skills',
              'Build expertise in cloud technologies (AWS/Azure)'
            ],
            socials: { linkedin: '', website: '' },
            professionalBackground: { 
              education: 'Bachelor of Science in Computer Science - University of Rwanda (2021)',
              experience: [
                {
                  title: 'Junior Software Developer',
                  company: 'KigaliTech Solutions',
                  duration: '2022 - Present',
                  description: 'Developing web applications using React and Node.js, collaborating with cross-functional teams to deliver high-quality software solutions.'
                },
                {
                  title: 'Software Development Intern',
                  company: 'Rwanda Development Board - ICT',
                  duration: 'Jun 2021 - Dec 2021',
                  description: 'Assisted in building internal tools and gained hands-on experience with modern web technologies and agile development practices.'
                }
              ]
            },
            learningPreferences: { 
              mentorshipStyle: 'Goal-oriented with regular check-ins and structured feedback sessions',
              preferredSessionFormat: 'Video calls with screen sharing for technical topics, 45-60 minute sessions',
              learningGoals: 'Advance to senior developer role, improve system design skills, and develop leadership capabilities',
              availability: 'Weekday evenings (6-9 PM EAT) and Saturday mornings (9 AM - 12 PM EAT)'
            },
            achievementBadges: [
              { id: 1, name: 'First Session', icon: '🎯', earned: false },
              { id: 2, name: 'Goal Setter', icon: '📈', earned: false },
              { id: 3, name: 'Skill Builder', icon: '🛠️', earned: false },
              { id: 4, name: 'Networker', icon: '🤝', earned: false }
            ]
          });
        } finally {
          setMenteeDataLoading(false);
        }
      } else {
        setMenteeDataLoading(false);
      }
    };
    
    fetchMenteeData();
  }, [userRole, user?.id, username]);

  // Fetch real mentors from database - Using select all fields approach
  useEffect(() => {
    const fetchMentors = async () => {
      console.log('🔄 Fetching mentors - userRole:', userRole, 'roleLoading:', roleLoading);
      
      // Don't fetch if still loading role
      if (roleLoading) {
        console.log('⏳ Role still loading, skipping mentor fetch');
        return;
      }
      
      if (userRole === 'mentee') {
        try {
          // setMentorsLoading(true);
          console.log('📡 Fetching mentors from database...');
          
          const { data: mentor, error } = await supabasase
            .from('mentor')
            .select('*');
          
          if (error) {
            console.error('❌ Error fetching mentors:', error);
            setMentors([]);
          } else {
            console.log('✅ Mentors fetched successfully. Count:', mentor?.length || 0);
            setMentors(mentor || []);
          }
        } catch (error: any) {
          console.error('💥 Unexpected error fetching mentors:', error);
          setMentors([]);
        } finally {
          console.log('🏁 Setting mentorsLoading to false');
          setMentorsLoading(false);
        }
      } else {
        console.log('🚫 Not fetching mentors - userRole is:', userRole);
        setMentorsLoading(false);
      }
    };
    
    fetchMentors();
  }, [userRole, user?.id, roleLoading]);

  // Early return while role is unknown (only if we don't have a role yet)
  if (roleLoading && userRole === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  // If not a mentee, show redirect message
  if (userRole !== 'mentee') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="text-gray-600">Redirecting to mentor dashboard...</p>
        </div>
      </div>
    );
  }

  // Fetch upcoming sessions when role is confirmed as mentee
  useEffect(() => {
    const fetchUpcomingSessions = async () => {
      if (userRole === 'mentee' && user?.id) {
        try {
          setSessionsLoading(true);
          
          // Use today's date string for better date comparison
          const today = new Date().toISOString().split('T')[0];
          
          const { data: sessions, error } = await supabasase
            .from('sessions')
            .select(`
              *,
              mentor:mentorId (
                supabaseId,
                first_name,
                last_name,
                expertise
              )
            `)
            .eq('menteeId', user.id)
            .gte('sessionDate', today)
            .order('sessionDate', { ascending: true })
            .order('startTime', { ascending: true })
            .limit(10);

          console.log('🔍 Session query params:', {
            menteeId: user.id,
            today,
            userIdType: typeof user.id
          });

          if (error) {
            console.error('❌ Error fetching sessions:', error);
          } else {
            console.log('📅 Fetched mentee sessions:', sessions?.length || 0, 'sessions found');
            console.log('📋 Session details:', sessions);
            setUpcomingSessions(sessions || []);
          }
        } catch (error) {
          console.error('Error fetching sessions:', error);
        } finally {
          setSessionsLoading(false);
        }
      }
    };
    
    fetchUpcomingSessions();

    // Set up real-time subscription for session updates
    const channel = supabasase
      .channel('mentee-sessions')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'sessions',
          filter: `menteeId=eq.${user?.id}`
        },
        (payload) => {
          console.log('📅 Session update received:', payload);
          fetchUpcomingSessions(); // Refetch sessions when changes occur
        }
      )
      .subscribe();

    return () => {
      supabasase.removeChannel(channel);
    };
  }, [userRole, user?.id]);

  // Update current time
  useEffect(() => {
    const timezone = 'Africa/Kigali'; // Default to Rwanda timezone for mentee data
    setCurrentTime(getCurrentTimeInTimezone(timezone));
    
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTimeInTimezone(timezone));
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Mock data for recommended mentors
  const recommendedMentors = [
    {
      id: 1,
      name: "Emmanuel Ntagungira",
      expertise: "Engineering Leadership",
      rating: 4.9,
      location: "Berlin, Germany",
      sessions: 16,
      image: "/emmanuel-portrait.png"
    },
    {
      id: 2,
      name: "Marie Claire Ingabire",
      expertise: "Digital Marketing",
      rating: 4.8,
      location: "London, UK",
      sessions: 24,
      image: "/claudine-portrait.png"
    }
  ];

  // Mock data for featured mentees
  const featuredMentees = [
    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      company: "TechCorp",
      skills: [
        { name: "React", level: 75, category: "Technical" },
        { name: "TypeScript", level: 70, category: "Technical" },
        { name: "CSS", level: 80, category: "Technical" }
      ],
      image: null
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Data Analyst",
      company: "DataFlow",
      skills: [
        { name: "Python", level: 85, category: "Technical" },
        { name: "SQL", level: 90, category: "Technical" },
        { name: "Tableau", level: 75, category: "Technical" }
      ],
      image: null
    }
  ];

  // Success stories for Inspiration tab
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
      story: {
        text: "As a self-taught developer in Kigali, I struggled to find opportunities in the global tech market. Through Skills Connect, I was matched with Emmanuel, a Rwandan tech leader now working in Europe. His guidance helped me improve my coding practices and understand international tech standards.",
        highlight: "After 8 months of mentorship, I secured a remote position with a European startup, doubling my income while staying in Rwanda."
      },
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
      story: {
        text: "Living in Huye, my marketing knowledge was limited to local businesses. Marie Claire, who grew up nearby but built her career in North America, helped me understand global digital marketing strategies. She guided me through international certifications and helped me build an online portfolio.",
        highlight: "I now manage campaigns for clients across East Africa and have started training other young marketers in my community."
      },
      outcomes: ["Expanded client base across East Africa", "Completed international certifications", "Started local training program"],
      industry: "Marketing",
      featured: true
    }
  ];

  // Achievement badge hover state
  const [, setHoveredBadge] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      {/* Show loading spinner if mentee data is still loading */}
      {menteeDataLoading ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading your profile...</p>
            </div>
          </div>
        </div>
      ) : !menteeData ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <p className="text-gray-600">Unable to load your profile. Please try refreshing the page.</p>
          </div>
        </div>
      ) : (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success message notification */}
        {successMessage && (
          <div className="mb-6 flex items-center justify-between p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>{successMessage}</span>
            </div>
            <button
              onClick={() => setSuccessMessage(null)}
              className="p-1 rounded-full hover:bg-emerald-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Quick Actions (Top Section on Mobile, Right Side on Desktop) */}
        <div className="grid grid-cols-3 md:hidden gap-3 mb-6">
          <button
            onClick={() => navigate('/discover-mentors')}
            className="flex flex-col items-center justify-center gap-1 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-50 mb-1">
              <Search className="h-4 w-4 text-orange-500" />
            </div>
            <span className="text-xs font-medium">Find Mentors</span>
            <span className="text-[10px] text-gray-500 sr-only">Browse experts</span>
          </button>

          <button
            onClick={() => navigate('/resources')}
            className="flex flex-col items-center justify-center gap-1 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-50 mb-1">
              <BookOpen className="h-4 w-4 text-emerald-500" />
            </div>
            <span className="text-xs font-medium">Resources</span>
            <span className="text-[10px] text-gray-500">& Opportunities</span>
          </button>

          <button
            onClick={() => navigate('/progress')}
            className="flex flex-col items-center justify-center gap-1 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 mb-1">
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </div>
            <span className="text-xs font-medium">Progress</span>
            <span className="text-[10px] text-gray-500 sr-only">Track growth</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Information */}
          <div className="md:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative">
              <button
                onClick={() => navigate('/edit-profile')}
                className="absolute top-3 right-3 p-2 text-gray-500 hover:text-emerald-600 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                aria-label="Edit profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </button>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={menteeData.profilePicture}
                    alt={`${menteeData.firstName} ${menteeData.lastName}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-bold">{menteeData.firstName} {menteeData.lastName}</h1>
                <p className="text-gray-600">{menteeData.role} at {menteeData.organization}</p>

                <div className="flex flex-wrap justify-center gap-1 mt-3">
                  {menteeData.languages.map((language: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                </div>

                {/* Location */}
                <div className="mt-3 flex items-center gap-1.5 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{menteeData.location}</span>
                </div>

                {/* Timezone and Current Time */}
                <div className="mt-2 flex items-center gap-1.5 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{currentTime} ({getTimezoneOffset(menteeData.timezone)})</span>
                </div>

                {/* Social Links */}
                {menteeData.socials && (
                  <div className="mt-3 flex items-center justify-center gap-3">
                    {menteeData.socials.linkedin && (
                      <a
                        href={menteeData.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {menteeData.socials.website && (
                      <a
                        href={menteeData.socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-emerald-600 transition-colors"
                        aria-label="Personal Website"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                )}

                {/* Sessions and Mentors count */}
                <div className="flex justify-center gap-8 mt-4 w-full border-t border-gray-100 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-emerald-600">{upcomingSessions.length}</div>
                    <div className="text-xs text-gray-600">Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-emerald-600">{mentors.length}</div>
                    <div className="text-xs text-gray-600">Mentors</div>
                  </div>
                </div>

                {/* Skills */}
                <div className="w-full mt-4 border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-700">Skills</h3>
                    <button
                      onClick={() => navigate('/progress?tab=skills')}
                      className="text-xs text-emerald-600 hover:underline cursor-pointer"
                    >
                      View All
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {menteeData.skills.slice(0, 3).map((skill: any, index: number) => (
                      <div key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Goals */}
                <div className="w-full mt-4 border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-700">Goals</h3>
                    <button
                      onClick={() => navigate('/progress?tab=goals')}
                      className="text-xs text-emerald-600 hover:underline cursor-pointer"
                    >
                      Manage Goals
                    </button>
                  </div>
                  <ul className="text-left text-sm pl-5 space-y-1">
                    {menteeData.goals.slice(0, 2).map((goal: string, index: number) => (
                      <li key={index} className="list-disc text-gray-700">{goal}</li>
                    ))}
                  </ul>
                </div>

                {/* Achievement Badges */}
                <div className="w-full mt-4 border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-700">Achievement Badges</h3>
                    <button
                      onClick={() => navigate('/progress?tab=badges')}
                      className="text-xs text-emerald-600 hover:underline cursor-pointer"
                    >
                      View All
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {menteeData.achievementBadges.filter((badge: any) => badge.earned).map((badge: any) => (
                      <div
                        key={badge.id}
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setHoveredBadge(badge.id)}
                        onMouseLeave={() => setHoveredBadge(null)}
                      >
                        <div className="w-10 h-10 flex items-center justify-center text-2xl bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg border border-gray-200 shadow-sm">
                          {badge.icon}
                        </div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none text-center">
                          {badge.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Content Area */}
          <div className="md:col-span-2 space-y-6">
            {/* Quick Actions - Desktop */}
            <div className="hidden md:grid md:grid-cols-3 gap-4 mb-6">
              <button
                onClick={() => navigate('/discover-mentors')}
                className="flex items-center px-6 py-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-50 mr-3">
                  <Search className="h-5 w-5 text-orange-500" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Find Mentors</div>
                  <div className="text-xs text-gray-500">Browse experts</div>
                </div>
              </button>

              <button
                onClick={() => navigate('/resources')}
                className="flex items-center px-6 py-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-50 mr-3">
                  <BookOpen className="h-5 w-5 text-emerald-500" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Resources & Opportunities</div>
                  <div className="text-xs text-gray-500">Career tools and job listings</div>
                </div>
              </button>

              <button
                onClick={() => navigate('/progress')}
                className="flex items-center px-6 py-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 mr-3">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Progress</div>
                  <div className="text-xs text-gray-500">Track growth</div>
                </div>
              </button>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="border-b">
                <nav className="flex" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-4 py-4 text-sm font-medium border-b-2 ${activeTab === 'profile'
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('goals')}
                    className={`px-4 py-4 text-sm font-medium border-b-2 ${activeTab === 'goals'
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    Goals
                  </button>
                  <button
                    onClick={() => setActiveTab('skills')}
                    className={`px-4 py-4 text-sm font-medium border-b-2 ${activeTab === 'skills'
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => setActiveTab('inspiration')}
                    className={`px-4 py-4 text-sm font-medium border-b-2 ${activeTab === 'inspiration'
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    Inspiration
                  </button>
                  <button
                    onClick={() => setActiveTab('messages')}
                    className={`px-4 py-4 text-sm font-medium border-b-2 ${activeTab === 'messages'
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    Messages
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'profile' && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold">About Me</h3>
                      <button
                        onClick={() => navigate('/edit-profile')}
                        className="text-gray-400 hover:text-emerald-600 flex items-center gap-1.5 text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                        Edit profile
                      </button>
                    </div>
                    <p className="text-gray-700 mb-6">{menteeData.bio}</p>

                    {/* Professional Background Section */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 pb-2 border-b border-gray-100">Professional Background</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Education</h4>
                          <p className="text-gray-600 mt-1">{menteeData.professionalBackground.education}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Experience</h4>
                          <ul className="mt-1 space-y-2">
                            {menteeData.professionalBackground.experience.map((exp: any, index: number) => (
                              <li key={index} className="text-gray-600">
                                <div className="font-medium">{exp.position}</div>
                                <div className="text-sm">{exp.company} • {exp.duration}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Learning Preferences Section */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 pb-2 border-b border-gray-100">Learning Preferences</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Mentorship Style</h4>
                          <p className="text-gray-600 mt-1">{menteeData.learningPreferences.mentorshipStyle}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Session Format</h4>
                          <p className="text-gray-600 mt-1">{menteeData.learningPreferences.preferredSessionFormat}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Learning Focus</h4>
                          <p className="text-gray-600 mt-1">{menteeData.learningPreferences.learningGoals}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Availability</h4>
                          <p className="text-gray-600 mt-1">{menteeData.learningPreferences.availability}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'goals' && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">My Learning Goals</h3>
                      <button
                        onClick={() => navigate('/progress?tab=goals')}
                        className="text-sm px-3 py-1.5 text-emerald-600 border border-emerald-600 rounded-md hover:bg-emerald-50">
                        Manage Goals
                      </button>
                    </div>

                    {menteeData.goals.map((goal: string, index: number) => (
                      <div key={index} className="mb-3 p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-center gap-3">
                        <Target className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">My Skills</h3>
                      <button
                        onClick={() => navigate('/progress?tab=skills')}
                        className="text-sm px-3 py-1.5 text-emerald-600 border border-emerald-600 rounded-md hover:bg-emerald-50">
                        Manage Skills
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {menteeData.skills.map((skill: any, index: number) => (
                        <div key={index} className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                          {skill.name}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h4 className="font-medium mb-3">Skill Progress</h4>
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">React</span>
                            <span className="text-sm text-gray-500">70%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-emerald-500 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-2">
                            <span className="font-medium">Learning Goal:</span> Build complex applications with React hooks and context API
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">JavaScript</span>
                            <span className="text-sm text-gray-500">85%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-emerald-500 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-2">
                            <span className="font-medium">Learning Goal:</span> Master advanced JavaScript concepts and design patterns
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">SQL</span>
                            <span className="text-sm text-gray-500">60%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-emerald-500 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-2">
                            <span className="font-medium">Learning Goal:</span> Learn database optimization and complex query patterns
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'inspiration' && (
                  <div className="py-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                        <Lightbulb className="h-5 w-5 mr-2" />
                        Success Stories
                      </h3>
                      <button
                        onClick={() => navigate('/inspiration')}
                        className="text-sm px-3 py-1.5 text-emerald-600 border border-emerald-600 rounded-md hover:bg-emerald-50">
                        Browse All Stories
                      </button>
                    </div>
                    <p className="text-gray-600 mb-5">Read inspiring stories from mentees who have achieved their goals with the help of their mentors.</p>

                    {/* Featured story - always show the first featured story */}
                    {successStories.filter(story => story.featured)[0] && (
                      <div className="mb-6 bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border-blue-300">
                        <div className="p-5">
                          <div className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium mb-3">
                            Featured Story
                          </div>
                          {(() => {
                            const story = successStories.filter(story => story.featured)[0];
                            return (
                              <>
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
                                  "{story.story.text} <span className="font-bold">{story.story.highlight}</span>"
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
                              </>
                            );
                          })()}
                        </div>
                      </div>
                    )}

                    {/* More stories summary */}
                    <div className="flex items-center justify-between mt-6 border-t pt-4 border-gray-100">
                      <div>
                        <h4 className="font-medium">More Success Stories</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {successStories.length - 1} more stories from various industries including
                          {" "}
                          {successStories
                            .filter(story => !story.featured)
                            .map(story => story.industry)
                            .filter((industry, index, self) => self.indexOf(industry) === index)
                            .slice(0, 2)
                            .join(", ")}
                          {successStories.filter(story => !story.featured).length > 2 ? " and more" : ""}
                        </p>
                      </div>
                      <button
                        onClick={() => navigate('/inspiration')}
                        className="px-3 py-1.5 bg-emerald-50 text-emerald-600 text-sm rounded-md hover:bg-emerald-100">
                        View All
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'messages' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Messages</h3>
                    <MessagingInterface className="w-full" />
                  </div>
                )}
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-600" />
                Upcoming Sessions
              </h3>

              {sessionsLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading upcoming sessions...</p>
                </div>
              ) : upcomingSessions.length > 0 ? (
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{session.title}</h4>
                        <p className="text-sm text-emerald-600 font-medium">
                          with {session.mentor?.first_name} {session.mentor?.last_name}
                        </p>
                        {session.mentor?.expertise && session.mentor.expertise.length > 0 && (
                          <p className="text-xs text-gray-600">
                            {session.mentor.expertise.join(', ')}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">
                          📅 {new Date(session.sessionDate).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })} ⏰ {session.startTime} - {session.endTime}
                        </p>
                        {session.description && (
                          <p className="text-xs text-gray-600 mt-1 italic">"{session.description}"</p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            session.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                            session.status === 'ACCEPTED' ? 'bg-green-100 text-green-800' :
                            session.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                            session.status === 'COMPLETED' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {session.status === 'PENDING' ? '⏳ Pending Approval' :
                             session.status === 'ACCEPTED' ? '✅ Confirmed' :
                             session.status === 'REJECTED' ? '❌ Declined' :
                             session.status === 'COMPLETED' ? '✨ Completed' :
                             session.status}
                          </span>
                          {session.status === 'PENDING' && (
                            <span className="text-xs text-gray-500">Waiting for mentor response</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {session.status === 'ACCEPTED' && (
                          <button
                            onClick={() => navigate(`/session/${session.id}`)}
                            className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            title="Join video session"
                          >
                            <Video className="h-4 w-4" />
                            Join Session
                          </button>
                        )}
                        <button 
                          onClick={() => navigate(`/simple-chat/${session.mentorId}`)}
                          className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Chat
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 bg-gray-50 rounded-lg">
                  <Calendar className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">No upcoming sessions</p>
                  <button 
                    onClick={() => navigate('/discover-mentors')}
                    className="mt-3 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                  >
                    Book a Session
                  </button>
                </div>
              )}

              {upcomingSessions.length > 0 && (
                <button 
                  onClick={() => navigate('/discover-mentors')}
                  className="w-full mt-4 inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  <Search className="h-4 w-4" />
                  Book More Sessions
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Recommended Mentors */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Recommended Mentors</h3>
            <button
              onClick={() => navigate('/discover-mentors')}
              className="text-sm px-3 py-1.5 text-emerald-600 border border-emerald-600 rounded-md hover:bg-emerald-50"
            >
              View More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Show real mentors if available, otherwise show mock data */}
            {(mentors.length > 0 ? mentors.slice(0, 3) : recommendedMentors).map((mentor, index) => (
              <div key={mentor.id || mentor.supabaseId || index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {mentor.image || mentor.profile_picture ? (
                        <img
                          src={mentor.image || mentor.profile_picture}
                          alt={mentor.name || `${mentor.first_name} ${mentor.last_name}`}
                          className="h-14 w-14 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center">
                          <span className="text-lg font-semibold text-emerald-600">
                            {mentor.name ? mentor.name.split(' ').map((n: string) => n[0]).join('') : 
                             `${mentor.first_name?.[0] || ''}${mentor.last_name?.[0] || ''}`}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{mentor.name || `${mentor.first_name} ${mentor.last_name}`}</h4>
                      <p className="text-sm text-emerald-600">
                        {mentor.expertise ? 
                          (Array.isArray(mentor.expertise) ? mentor.expertise.slice(0, 2).join(', ') : mentor.expertise) :
                          'Professional Mentor'}
                      </p>
                      <p className="text-xs text-gray-500">{mentor.location || 'Location not specified'}</p>
                      {mentor.rating && (
                        <div className="flex items-center mt-1">
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                          <span className="text-xs text-gray-600 ml-1">{mentor.rating} • {mentor.sessions} sessions</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                    <button
                      onClick={() => navigate(`/mentor/${mentor.id || mentor.supabaseId}`)}
                      className="px-3 py-1.5 bg-emerald-600 text-white text-sm rounded-md hover:bg-emerald-700"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connect with Peers Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Connect with Peers in Your Field</h3>
            <button
              onClick={() => navigate('/discover-mentees')}
              className="text-sm px-3 py-1.5 text-emerald-600 border border-emerald-600 rounded-md hover:bg-emerald-50"
            >
              View More
            </button>
          </div>
          <p className="text-gray-600 mb-4">Mentees with similar skills and learning goals</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMentees.map(mentee => (
              <div key={mentee.id} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                    {mentee.image ? (
                      <img
                        src={mentee.image}
                        alt={mentee.name}
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-lg font-semibold text-emerald-600">
                        {mentee.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <h4 className="font-medium">{mentee.name}</h4>
                  <p className="text-sm text-gray-600">{mentee.role}</p>
                  <p className="text-xs text-gray-500">{mentee.company}</p>

                  <div className="flex flex-wrap justify-center gap-1 mt-3 mb-3">
                    {mentee.skills.slice(0, 2).map((skill, i) => (
                      <span key={i} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                        {skill.name}
                      </span>
                    ))}
                    {mentee.skills.length > 2 && (
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                        +{mentee.skills.length - 2}
                      </span>
                    )}
                  </div>

                  <button
                    className="text-xs w-full mt-1 px-3 py-1.5 border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50"
                    onClick={() => navigate(`/mentee/${mentee.id}`)}
                  >
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      )}
    </div>
  );
};

export default MenteeDashboard;
