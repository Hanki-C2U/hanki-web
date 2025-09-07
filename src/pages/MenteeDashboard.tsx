import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import {
  Calendar,
  Search,
  BookOpen,
  TrendingUp,
  Video,
  Star,
  Target,
  Lightbulb,
  CheckCircle
} from "lucide-react";
import AuthHeader from "../components/AuthHeader";

const MenteeDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'goals' | 'skills' | 'inspiration'>('profile');

  // Default mentee data follows

  // Default mentee data - wrapped in useMemo to prevent recreating on each render
  const defaultMenteeData = useMemo(() => ({
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
    }
  }), []);

  // State to store mentee data
  const [menteeData, setMenteeData] = useState(defaultMenteeData);

  // Load mentee data from localStorage if available
  useEffect(() => {
    // This simulates fetching user data from a backend
    // In a real app, this would be replaced with an API call to Supabase
    const savedProfile = localStorage.getItem("menteeProfile");

    if (savedProfile) {
      try {
        const profileData = JSON.parse(savedProfile);

        // Merge with default data to ensure all required fields exist
        // This ensures backwards compatibility if the data structure changes
        setMenteeData({
          ...defaultMenteeData,
          ...profileData,
          // Make sure nested objects are properly merged
          professionalBackground: {
            ...defaultMenteeData.professionalBackground,
            ...profileData.professionalBackground
          },
          learningPreferences: {
            ...defaultMenteeData.learningPreferences,
            ...profileData.learningPreferences
          },
          // Keep achievement badges from default data
          achievementBadges: defaultMenteeData.achievementBadges
        });
      } catch (error) {
        console.error("Error parsing profile data:", error);
      }
    }
  }, [defaultMenteeData]);

  const upcomingSessions = [
    {
      id: 1,
      mentor: "Dr. Emmanuel Ntagungira",
      expertise: "Software Engineering",
      time: "Today, 2:00 PM",
      topic: "Career Planning Discussion"
    },
    {
      id: 2,
      mentor: "Marie Claire Uwimana",
      expertise: "Digital Marketing",
      time: "Friday, 11:00 AM",
      topic: "Marketing Strategy Review"
    }
  ];

  const featuredMentees = [
    {
      id: 1,
      name: "Alice Mukamana",
      role: "Frontend Developer",
      company: "TechRwanda",
      image: null,
      skills: ["React", "Angular", "UI/UX"]
    },
    {
      id: 2,
      name: "David Nshuti",
      role: "Data Scientist",
      company: "DataInsights Africa",
      image: null,
      skills: ["Python", "Machine Learning", "Data Visualization"]
    }
  ];

  const recommendedMentors = [
    {
      id: 1,
      name: "Denys Pavlenko",
      expertise: "Engineering Leadership",
      rating: 4.9,
      location: "Berlin, Germany",
      sessions: 16,
      image: "/professional-headshot-of-young-hispanic-freelancer.png"
    },
    {
      id: 2,
      name: "Catalina Vrabie",
      expertise: "Agile Coaching",
      rating: 4.8,
      location: "Bucharest, Romania",
      sessions: 24,
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
        name: "Dr. Emmanuel Ntagungira",
        role: "CTO",
        location: "Berlin, Germany",
        image: null
      },
      story: "As a self-taught developer in Kigali, I struggled to find opportunities in the global tech market. Through Skills Connect, I was matched with Dr. Emmanuel, a Rwandan tech leader now working in Europe. His guidance helped me improve my coding practices and understand international tech standards. After 6 months of mentorship, I secured a remote position with a European startup, doubling my income while staying in Rwanda.",
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
      story: "My family has farmed the same way for generations in northern Rwanda. Through Skills Connect, I met James who introduced me to agricultural technologies being used across Europe that could work in Rwanda's climate. With his guidance, I implemented data-driven farming methods and secured funding to expand. Our crop yield has increased by 40%, and we now export organic produce to three countries.",
      outcomes: ["Increased crop yield by 40%", "Secured international export partnerships", "Implemented sustainable farming methods"],
      industry: "Agriculture",
      featured: false
    }
  ];

  // Achievement badge hover state
  const [, setHoveredBadge] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          </button>          <button
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
                  {menteeData.languages.map((language, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                </div>

                {/* Sessions and Mentors count */}
                <div className="flex justify-center gap-8 mt-4 w-full border-t border-gray-100 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-emerald-600">6</div>
                    <div className="text-xs text-gray-600">Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-emerald-600">3</div>
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
                    {menteeData.skills.slice(0, 3).map((skill, index) => (
                      <div key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                        {skill}
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
                    {menteeData.goals.slice(0, 2).map((goal, index) => (
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
                    {menteeData.achievementBadges.filter(badge => badge.earned).map((badge) => (
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
                            {menteeData.professionalBackground.experience.map((exp, index) => (
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

                    {menteeData.goals.map((goal, index) => (
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
                      {menteeData.skills.map((skill, index) => (
                        <div key={index} className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                          {skill}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h4 className="font-medium mb-3">Skill Progress</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">React</span>
                            <span className="text-sm text-gray-500">70%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-emerald-500 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">JavaScript</span>
                            <span className="text-sm text-gray-500">85%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-emerald-500 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">SQL</span>
                            <span className="text-sm text-gray-500">60%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-emerald-500 rounded-full" style={{ width: '60%' }}></div>
                          </div>
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
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-600" />
                Upcoming Sessions
              </h3>

              {upcomingSessions.length > 0 ? (
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{session.mentor}</h4>
                        <p className="text-sm text-emerald-600">{session.expertise}</p>
                        <p className="text-xs text-gray-500">{session.time}</p>
                        <p className="text-xs text-gray-500">{session.topic}</p>
                      </div>
                      <button className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
                        <Video className="h-4 w-4" />
                        <span>Join</span>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 bg-gray-50 rounded-lg">
                  <Calendar className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">No upcoming sessions</p>
                  <button className="mt-3 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
                    Book a Session
                  </button>
                </div>
              )}
            </div>
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
                        {skill}
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

        {/* Recommended Mentors */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Recommended Mentors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedMentors.map(mentor => (
              <div key={mentor.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {mentor.image ? (
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="h-14 w-14 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center">
                          <span className="text-lg font-semibold text-emerald-600">
                            {mentor.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{mentor.name}</h4>
                      <p className="text-sm text-emerald-600">{mentor.expertise}</p>
                      <p className="text-xs text-gray-500">{mentor.location}</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-gray-600 ml-1">{mentor.rating} • {mentor.sessions} sessions</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                    <button
                      onClick={() => navigate(`/mentor/${mentor.id}`)}
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
      </main>
    </div>
  );
};

export default MenteeDashboard;