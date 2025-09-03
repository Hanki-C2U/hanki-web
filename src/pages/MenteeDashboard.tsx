import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Calendar,
  Search,
  BookOpen,
  TrendingUp,
  Video,
  Star,
  Target,
  Code
} from "lucide-react";
import AuthHeader from "../components/AuthHeader";

const MenteeDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'goals' | 'skills'>('profile');

  // Mock mentee data
  const menteeData = {
    id: 1,
    firstName: "Bienvenu",
    lastName: "Cyuzuzo",
    role: "Student",
    organization: "African Leadership University",
    profilePicture: "/professional-headshot-of-confident-hispanic-sales-.png",
    bio: "I'm a software engineering student passionate about building web applications. I'm currently focused on full-stack development using JavaScript, React, and SQL. I'm seeking mentorship to strengthen my system design, problem-solving, and career navigation skills.",
    languages: ["English", "français, langue française", "Ikinyarwanda"],
    badges: [
      { name: "Coding Enthusiast", icon: "Code" },
      { name: "Fast Learner", icon: "Zap" },
    ],
    skills: ["React", "JavaScript", "Node.js", "SQL", "HTML/CSS"],
    goals: ["Master system design patterns", "Improve problem-solving skills", "Prepare for technical interviews", "Build a professional network"]
  };

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

  const renderBadge = (name: string) => {
    const icons = {
      Code: <Code className="h-4 w-4 text-purple-500" />,
      Zap: <TrendingUp className="h-4 w-4 text-yellow-500" />
    };

    return (
      <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-xs">
        {name === "Coding Enthusiast" ? icons.Code : icons.Zap}
        <span>{name}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Information */}
          <div className="md:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
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

                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {menteeData.badges.map((badge, index) => (
                    <div key={index}>
                      {renderBadge(badge.name)}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => navigate('/discover-mentors')}
                className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Search className="h-5 w-5 text-emerald-600" />
                <span>Find a Mentor</span>
              </button>

              <button
                onClick={() => navigate('/resources')}
                className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <BookOpen className="h-5 w-5 text-emerald-600" />
                <span>Learning Resources</span>
              </button>

              <button
                onClick={() => navigate('/progress')}
                className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                <span>Track Progress</span>
              </button>
            </div>
          </div>

          {/* Middle Column - Content Area */}
          <div className="md:col-span-2 space-y-6">
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
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'profile' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">About Me</h3>
                    <p className="text-gray-700 mb-6">{menteeData.bio}</p>

                    <div className="mt-6">
                      <h4 className="font-medium mb-3">Edit Profile Information</h4>
                      <div className="flex flex-col gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Bio
                          </label>
                          <textarea
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="Tell mentors about yourself..."
                            defaultValue={menteeData.bio}
                          />
                        </div>
                        <div className="mt-2">
                          <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'goals' && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">My Learning Goals</h3>
                      <button className="text-sm px-3 py-1.5 text-emerald-600 border border-emerald-600 rounded-md hover:bg-emerald-50">
                        Add Goal
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
                      <button className="text-sm px-3 py-1.5 text-emerald-600 border border-emerald-600 rounded-md hover:bg-emerald-50">
                        Add Skill
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

        {/* Similar Industry Mentees */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Featured Mentees in Similar Industries</h3>
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

                  <div className="flex flex-wrap justify-center gap-1 mt-3">
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