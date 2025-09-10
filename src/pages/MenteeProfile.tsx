import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router";
import {
  TrendingUp,
  Target,
  Lightbulb,
  CheckCircle,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  MapPin,
  MessageSquare,
  Clock
} from "lucide-react";
import AuthHeader from "../components/AuthHeader";
import getMentee from "../services/getMentee";
import { getCurrentTimeInTimezone, getTimezoneOffset } from "../utils/timezones";

// Define types for our data structures
interface Experience {
  position: string;
  company: string;
  duration: string;
}

interface ProfessionalBackground {
  education: string;
  experience: Experience[];
}

interface LearningPreferences {
  mentorshipStyle: string;
  preferredSessionFormat: string;
  learningGoals: string;
  availability: string;
}

interface Badge {
  id: number;
  name: string;
  icon: string;
  earned: boolean;
}

interface SkillProgress {
  skill: string;
  progress: number;
  learningGoal?: string;
}

interface Milestone {
  name: string;
  date: string;
}

interface MenteeData {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  organization: string;
  profilePicture: string;
  bio: string;
  languages: string[];
  achievementBadges: Badge[];
  skills: string[];
  goals: string[];
  professionalBackground: ProfessionalBackground;
  learningPreferences: LearningPreferences;
  progressData: SkillProgress[];
  completedMilestones: Milestone[];
  location: string;
  timezone: string;
}

export default function MenteeProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [menteeData, setMenteeData] = useState<MenteeData | null>(null);
  const [activeTab, setActiveTab] = useState<'profile' | 'goals' | 'skills' | 'progress'>('profile');
  const [, setHoveredBadge] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");

  // Mocked data for mentee profiles
  // In a real app, this would be loaded from an API
  const menteesData = useMemo<MenteeData[]>(() => [
    {
      id: 1,
      firstName: "Bienvenu",
      lastName: "Cyuzuzo",
      role: "Student",
      organization: "African Leadership University",
      profilePicture: "/professional-headshot-of-confident-hispanic-sales-.png",
      bio: "I'm a software engineering student passionate about building web applications. I'm currently focused on full-stack development using JavaScript, React, and SQL. I'm seeking mentorship to strengthen my system design, problem-solving, and career navigation skills.",
      languages: ["English", "Français", "Ikinyarwanda"],
      achievementBadges: [
        { id: 1, name: "First Session Complete", icon: "🎯", earned: true },
        { id: 2, name: "Goal Setter", icon: "📋", earned: true },
        { id: 3, name: "Network Builder", icon: "🤝", earned: true },
        { id: 4, name: "Knowledge Seeker", icon: "📚", earned: true },
      ],
      skills: ["React", "JavaScript", "Node.js", "SQL", "HTML/CSS"],
      goals: ["Master system design patterns", "Improve problem-solving skills", "Prepare for technical interviews", "Build a professional network"],
      professionalBackground: {
        education: "B.S. Computer Science, African Leadership University, 2025 (Expected)",
        experience: [
          { position: "Software Engineering Intern", company: "Andela", duration: "Summer 2024" },
          { position: "Web Developer", company: "Student Projects", duration: "2023 - Present" }
        ],
      },
      learningPreferences: {
        mentorshipStyle: "Practical guidance with hands-on examples",
        preferredSessionFormat: "1:1 video calls with follow-up tasks",
        learningGoals: "Career development and technical skill improvement",
        availability: "Evenings and weekends",
      },
      progressData: [
        { skill: "React", progress: 70, learningGoal: "Build complex applications with React hooks and context API" },
        { skill: "JavaScript", progress: 85, learningGoal: "Master advanced JavaScript concepts and design patterns" },
        { skill: "SQL", progress: 60, learningGoal: "Learn database optimization and complex query patterns" },
        { skill: "Node.js", progress: 55, learningGoal: "Develop RESTful APIs and microservices architecture" },
        { skill: "HTML/CSS", progress: 90, learningGoal: "Master responsive design and CSS animations" }
      ],
      completedMilestones: [
        { name: "Built first React application", date: "June 15, 2025" },
        { name: "Completed SQL fundamentals course", date: "July 3, 2025" },
        { name: "Created personal portfolio website", date: "August 20, 2025" }
      ],
      location: "Kigali, Rwanda",
      timezone: "GMT+02:00"
    },
    {
      id: 2,
      firstName: "Alice",
      lastName: "Mukamana",
      role: "Frontend Developer",
      organization: "TechRwanda",
      profilePicture: "/professional-headshot-of-african-woman-hr-professi.png",
      bio: "Frontend developer with 2 years of experience. Passionate about creating beautiful and accessible user interfaces. Looking to advance my career and take on more challenging projects.",
      languages: ["English", "Français", "Ikinyarwanda"],
      achievementBadges: [
        { id: 1, name: "First Session Complete", icon: "🎯", earned: true },
        { id: 2, name: "Goal Setter", icon: "📋", earned: true },
        { id: 5, name: "UI Master", icon: "🎨", earned: true },
        { id: 6, name: "Consistent Learner", icon: "📆", earned: true },
      ],
      skills: ["React", "Angular", "UI/UX", "CSS", "JavaScript"],
      goals: ["Become a senior developer", "Master advanced React patterns", "Improve UI/UX skills", "Learn about design systems"],
      professionalBackground: {
        education: "B.S. Information Technology, University of Rwanda, 2023",
        experience: [
          { position: "Frontend Developer", company: "TechRwanda", duration: "2023 - Present" },
          { position: "Web Design Intern", company: "Digital Solutions Ltd", duration: "2022 - 2023" }
        ],
      },
      learningPreferences: {
        mentorshipStyle: "Detailed code reviews and UI feedback",
        preferredSessionFormat: "Video calls and pair programming sessions",
        learningGoals: "Frontend specialization and UI/UX mastery",
        availability: "Weekday evenings",
      },
      progressData: [
        { skill: "React", progress: 80, learningGoal: "Master React state management libraries like Redux" },
        { skill: "Angular", progress: 65, learningGoal: "Learn advanced component architecture and state management" },
        { skill: "UI/UX", progress: 85, learningGoal: "Improve accessibility implementation and user testing methods" },
        { skill: "CSS", progress: 90, learningGoal: "Master CSS Grid and advanced animations" },
        { skill: "JavaScript", progress: 75, learningGoal: "Improve knowledge of ES6+ features and functional programming" }
      ],
      completedMilestones: [
        { name: "Redesigned company website", date: "May 10, 2025" },
        { name: "Implemented accessible UI components", date: "July 25, 2025" },
        { name: "Completed Advanced React Patterns course", date: "August 15, 2025" }
      ],
      location: "Kigali, Rwanda",
      timezone: "GMT+02:00"
    }
  ], []);

  // Fetch mentee data - combining service data with mock data
  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        // Try to get data from service
        const data = await getMentee(id);

        // For demo purposes, if real data is not available, use mock data
        const mockData = menteesData.find(mentee => mentee.id === Number(id));

        if (data) {
          // Combine real data with mock data for a complete profile
          setMenteeData({
            ...mockData,
            ...data
          } as MenteeData);
        } else if (mockData) {
          // Fallback to mock data if service fails
          setMenteeData(mockData as MenteeData);
        } else {
          // No data available
          navigate("/discover-mentees");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        // Try to use mock data on error
        const mockData = menteesData.find(mentee => mentee.id === Number(id));
        if (mockData) {
          setMenteeData(mockData as MenteeData);
        }
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchUser();
  }, [id, navigate, menteesData]);

  // Update the current time every minute
  useEffect(() => {
    if (!menteeData?.timezone) return;

    const updateTime = () => {
      setCurrentTime(getCurrentTimeInTimezone(menteeData.timezone));
    };

    // Set initial time
    updateTime();

    // Update time every minute
    const timer = setInterval(updateTime, 60000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [menteeData?.timezone]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (!menteeData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Mentee Not Found</h2>
          <p className="text-gray-500 mb-4">We couldn't find this mentee profile.</p>
          <Link
            to="/discover-mentees"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Mentees
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link
            to="/discover-mentees"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Mentees
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Information */}
          <div className="md:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 relative">
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

                {/* Message Button */}
                <button
                  onClick={() => navigate(`/messages/mentee/${id}`)}
                  className="mt-4 w-full inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message {menteeData.firstName}
                </button>

                {/* Achievement Badges */}
                <div className="w-full mt-4 border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-700">Achievement Badges</h3>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2 justify-center">
                    {menteeData.achievementBadges.filter((badge: Badge) => badge.earned).map((badge: Badge) => (
                      <div
                        key={badge.id}
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setHoveredBadge(badge.id)}
                        onMouseLeave={() => setHoveredBadge(null)}
                      >
                        <div className="w-10 h-10 flex items-center justify-center text-2xl bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg border border-gray-200 shadow-sm">
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

            {/* Skills Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              <div className="space-y-4">
                {menteeData.progressData.map((item: { skill: string; progress: number; learningGoal?: string }, index: number) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{item.skill}</span>
                      <span className="text-sm text-gray-500">{item.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full mb-1">
                      <div
                        className="h-2 bg-emerald-500 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    {item.learningGoal && (
                      <p className="text-xs text-gray-600 mt-1">
                        <span className="font-medium">Goal:</span> {item.learningGoal}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Goals Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Learning Goals</h3>
              <ul className="space-y-2">
                {menteeData.goals.map((goal: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Content Area */}
          <div className="md:col-span-2 space-y-6">
            {/* Progress Highlights Card - Featured prominently */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                Progress Highlights
              </h3>

              <div className="space-y-4">
                {menteeData.completedMilestones.map((milestone: { name: string; date: string }, index: number) => (
                  <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{milestone.name}</h4>
                      <p className="text-sm text-gray-500">{milestone.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-1 text-emerald-600 font-medium text-sm">
                  <TrendingUp className="h-4 w-4" />
                  Making consistent progress
                </span>
              </div>
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
                    onClick={() => setActiveTab('progress')}
                    className={`px-4 py-4 text-sm font-medium border-b-2 ${activeTab === 'progress'
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    Progress
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'profile' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">About</h3>
                    <p className="text-gray-700 mb-6">{menteeData.bio}</p>

                    {/* Professional Background Section */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 pb-2 border-b border-gray-100">Professional Background</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 text-emerald-600" />
                            Education
                          </h4>
                          <p className="text-gray-600 mt-1">{menteeData.professionalBackground.education}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-emerald-600" />
                            Experience
                          </h4>
                          <ul className="mt-1 space-y-2">
                            {menteeData.professionalBackground.experience.map((exp: Experience, index: number) => (
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
                    <h3 className="text-lg font-semibold mb-4">Learning Goals</h3>

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
                    <h3 className="text-lg font-semibold mb-4">Skills Overview</h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {menteeData.skills.map((skill: string, index: number) => (
                        <div key={index} className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                          {skill}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h4 className="font-medium mb-3">Skill Progress</h4>
                      <div className="space-y-6">
                        {menteeData.progressData.map((item: { skill: string; progress: number; learningGoal?: string }, index: number) => (
                          <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">{item.skill}</span>
                              <span className="text-sm text-gray-500">{item.progress}%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-200 rounded-full mb-3">
                              <div
                                className="h-2 bg-emerald-500 rounded-full"
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                            <div className="flex items-center">
                              <span className="text-xs font-medium bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                                {item.progress >= 80 ? "Advanced" :
                                  item.progress >= 60 ? "Intermediate" :
                                    item.progress >= 40 ? "Beginner" : "Starting"}
                              </span>
                            </div>
                            {item.learningGoal && (
                              <div className="mt-3 pt-3 border-t border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <span className="font-medium">Learning Goal:</span> {item.learningGoal}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'progress' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Progress Journey</h3>

                    {/* Progress Timeline */}
                    <div className="relative pl-6 pb-4 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-emerald-200">
                      {menteeData.completedMilestones.map((milestone: { name: string; date: string }, index: number) => (
                        <div key={index} className="mb-6 relative">
                          <div className="absolute left-[-24px] top-1 h-5 w-5 rounded-full border-2 border-emerald-500 bg-white"></div>
                          <div className="bg-white rounded-lg border border-gray-200 p-4">
                            <div className="text-sm text-gray-500 mb-1">{milestone.date}</div>
                            <h4 className="font-medium">{milestone.name}</h4>
                            <div className="mt-2 flex gap-2">
                              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-800">
                                Milestone
                              </span>
                              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">
                                Completed
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Current Focus */}
                      <div className="mb-6 relative">
                        <div className="absolute left-[-24px] top-1 h-5 w-5 rounded-full border-2 border-emerald-500 bg-emerald-500"></div>
                        <div className="bg-emerald-50 rounded-lg border border-emerald-200 p-4">
                          <div className="text-sm text-emerald-700 mb-1">In Progress</div>
                          <h4 className="font-medium">{menteeData.goals[0]}</h4>
                          <div className="mt-2 flex gap-2">
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-800">
                              Current Focus
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Stats */}
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-emerald-600">6</div>
                        <div className="text-sm text-gray-600">Sessions Completed</div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-emerald-600">3</div>
                        <div className="text-sm text-gray-600">Milestones Achieved</div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-emerald-600">{Math.round(menteeData.progressData.reduce((acc: number, item: { progress: number }) => acc + item.progress, 0) / menteeData.progressData.length)}%</div>
                        <div className="text-sm text-gray-600">Average Progress</div>
                      </div>
                    </div>

                    {/* Success Stories */}
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-emerald-600" />
                        Learning Insights
                      </h4>
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <Lightbulb className="h-4 w-4 text-blue-700" />
                          </div>
                          <div className="font-medium text-blue-800">Progress Pattern</div>
                        </div>
                        <p className="text-blue-700 text-sm">
                          {menteeData.firstName} is making consistent progress in their key skills, with particular growth in
                          {" "}
                          {menteeData.progressData.sort((a: SkillProgress, b: SkillProgress) => b.progress - a.progress)[0].skill}.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}