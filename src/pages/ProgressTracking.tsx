import { useState } from "react";
import { Link } from "react-router";
import {
  TrendingUp,
  Target,
  Award,
  Clock,
  CheckCircle,
  Star,
  ArrowLeft,
  Users,
  Video,
  Trophy
} from "lucide-react";

const ProgressTracking = () => {
  const [activeTab, setActiveTab] = useState("goals");
  const goals = [
    {
      id: 1,
      title: "Transition to Software Engineering",
      progress: 75,
      status: "In Progress",
      dueDate: "March 2024",
      milestones: [
        { title: "Complete JavaScript Fundamentals", completed: true },
        { title: "Build Portfolio Project", completed: true },
        { title: "Technical Interview Practice", completed: false },
        { title: "Apply to 10 Companies", completed: false }
      ]
    },
    {
      id: 2,
      title: "Build Professional Network",
      progress: 60,
      status: "In Progress",
      dueDate: "February 2024",
      milestones: [
        { title: "Connect with 50 Professionals", completed: true },
        { title: "Attend 3 Industry Events", completed: true },
        { title: "Schedule 5 Informational Interviews", completed: false },
        { title: "Join Professional Organizations", completed: false }
      ]
    },
    {
      id: 3,
      title: "Develop Leadership Skills",
      progress: 40,
      status: "In Progress",
      dueDate: "June 2024",
      milestones: [
        { title: "Complete Leadership Course", completed: true },
        { title: "Lead Team Project", completed: false },
        { title: "Mentor Junior Colleagues", completed: false },
        { title: "Present at Industry Conference", completed: false }
      ]
    }
  ];

  const badges = [
    { id: 1, name: "First Session Complete", icon: "🎯", earned: true, date: "Jan 15, 2024" },
    { id: 2, name: "Goal Setter", icon: "📋", earned: true, date: "Jan 10, 2024" },
    { id: 3, name: "Network Builder", icon: "🤝", earned: true, date: "Jan 20, 2024" },
    { id: 4, name: "Knowledge Seeker", icon: "📚", earned: true, date: "Jan 25, 2024" },
    { id: 5, name: "Mentor Favorite", icon: "⭐", earned: false, date: null },
    { id: 6, name: "Career Changer", icon: "🚀", earned: false, date: null },
    { id: 7, name: "Interview Master", icon: "💼", earned: false, date: null },
    { id: 8, name: "Industry Expert", icon: "🏆", earned: false, date: null }
  ];

  const sessions = [
    {
      id: 1,
      mentor: "Dr. Emmanuel Ntagungira",
      date: "Jan 15, 2024",
      topic: "Career Transition Planning",
      duration: "60 min",
      rating: 5,
      notes: "Excellent session on mapping out career transition steps. Dr. Emmanuel provided specific resources and action items."
    },
    {
      id: 2,
      mentor: "Sarah Mukamana",
      date: "Jan 22, 2024",
      topic: "Product Management Fundamentals",
      duration: "45 min",
      rating: 5,
      notes: "Great overview of PM role and responsibilities. Received framework for analyzing product decisions."
    },
    {
      id: 3,
      mentor: "Marie Claire Uwimana",
      date: "Jan 29, 2024",
      topic: "Digital Marketing Strategy",
      duration: "60 min",
      rating: 4,
      notes: "Learned about social media marketing strategies and analytics. Need to implement learnings in practice project."
    }
  ];

  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 70 },
    { name: "Project Management", level: 65 },
    { name: "Communication", level: 85 },
    { name: "Leadership", level: 60 },
    { name: "Data Analysis", level: 45 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-subtle border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/mentee-dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-semibold">Progress Tracking</h1>
            </div>
            <Link to="/" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              SkillsConnect
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Video className="h-8 w-8 text-orange-500" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Hours of Mentoring</p>
                  <p className="text-2xl font-bold">18</p>
                </div>
                <Clock className="h-8 w-8 text-accent" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Goals Achieved</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <Target className="h-8 w-8 text-green-500" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Badges Earned</p>
                  <p className="text-2xl font-bold">4</p>
                </div>
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <button
              onClick={() => setActiveTab("goals")}
              className={`flex items-center justify-center gap-2 h-10 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 rounded-md ${activeTab === "goals"
                  ? "bg-white shadow-sm border border-gray-200"
                  : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <Target className="h-4 w-4" />
              Goals
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`flex items-center justify-center gap-2 h-10 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 rounded-md ${activeTab === "skills"
                  ? "bg-white shadow-sm border border-gray-200"
                  : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <TrendingUp className="h-4 w-4" />
              Skills
            </button>
            <button
              onClick={() => setActiveTab("badges")}
              className={`flex items-center justify-center gap-2 h-10 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 rounded-md ${activeTab === "badges"
                  ? "bg-white shadow-sm border border-gray-200"
                  : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <Award className="h-4 w-4" />
              Badges
            </button>
            <button
              onClick={() => setActiveTab("sessions")}
              className={`flex items-center justify-center gap-2 h-10 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 rounded-md ${activeTab === "sessions"
                  ? "bg-white shadow-sm border border-gray-200"
                  : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <Users className="h-4 w-4" />
              Sessions
            </button>
          </div>

          {/* Goals Tab */}
          {activeTab === "goals" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Career Goals</h2>
                <button className="inline-flex items-center gap-2 h-10 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  <Target className="h-4 w-4" />
                  Add New Goal
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {goals.map((goal) => (
                  <div key={goal.id} className="rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">{goal.title}</h3>
                          <p className="text-sm text-gray-600">Due: {goal.dueDate}</p>
                        </div>
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${goal.status === "Completed"
                            ? "border-transparent bg-green-100 text-green-800"
                            : "border-transparent bg-gray-100 text-gray-800"
                          }`}>
                          {goal.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm text-gray-600">{goal.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${goal.progress}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Milestones</h4>
                        <div className="space-y-2">
                          {goal.milestones.map((milestone, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle
                                className={`h-4 w-4 ${milestone.completed
                                    ? 'text-green-500'
                                    : 'text-gray-400'
                                  }`}
                              />
                              <span
                                className={`text-sm ${milestone.completed
                                    ? 'text-gray-900 line-through'
                                    : 'text-gray-600'
                                  }`}
                              >
                                {milestone.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Skill Development</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="p-6">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold">{skill.name}</h3>
                          <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <p className="text-sm text-gray-600">
                          {skill.level >= 80 ? "Advanced" :
                            skill.level >= 60 ? "Intermediate" :
                              skill.level >= 40 ? "Beginner" : "Starting"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Badges Tab */}
          {activeTab === "badges" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Achievement Badges</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`rounded-lg border border-gray-200 bg-white shadow-sm text-center ${badge.earned ? 'bg-gradient-to-br from-orange-50 to-blue-50' : 'opacity-60'
                      }`}
                  >
                    <div className="p-6">
                      <div className="text-4xl mb-3">{badge.icon}</div>
                      <h3 className="font-semibold mb-2">{badge.name}</h3>
                      {badge.earned ? (
                        <div>
                          <span className="inline-flex items-center rounded-full border-transparent bg-green-100 text-green-800 px-2.5 py-0.5 text-xs font-semibold mb-2">
                            Earned
                          </span>
                          <p className="text-xs text-gray-600">{badge.date}</p>
                        </div>
                      ) : (
                        <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                          Not Earned
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sessions Tab */}
          {activeTab === "sessions" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Mentoring Sessions</h2>

              <div className="space-y-4">
                {sessions.map((session) => (
                  <div key={session.id} className="rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{session.topic}</h3>
                          <p className="text-blue-600 font-medium">{session.mentor}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            {[...Array(session.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-sm text-gray-600">{session.date}</p>
                          <p className="text-sm text-gray-600">{session.duration}</p>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">Session Notes</h4>
                        <p className="text-sm text-gray-600">{session.notes}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProgressTracking;