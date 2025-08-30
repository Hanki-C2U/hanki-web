import { Link } from "react-router";
import {
  Calendar,
  Search,
  BookOpen,
  TrendingUp,
  Video,
  User,
  Bell,
  Star
} from "lucide-react";

const MenteeDashboard = () => {
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

  const recommendedMentors = [
    {
      id: 1,
      name: "Dr. James Gasana",
      expertise: "Data Science",
      rating: 4.9,
      location: "Toronto, Canada",
      sessions: 45
    },
    {
      id: 2,
      name: "Sarah Mukamana",
      expertise: "Product Management",
      rating: 4.8,
      location: "London, UK",
      sessions: 32
    },
    {
      id: 3,
      name: "David Nkurunziza",
      expertise: "Entrepreneurship",
      rating: 4.9,
      location: "San Francisco, USA",
      sessions: 28
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-subtle border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
                SkillsConnect
              </Link>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-accent/20 text-accent">
                Mentee Dashboard
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                <Bell className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                <Link to="/resources">Resources</Link>
              </button>
              <button className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                <Link to="/discover-mentors">Find Mentors</Link>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alice!</h1>
          <p className="text-muted-foreground">Continue your professional growth journey.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm gradient-card shadow-card cursor-pointer hover:shadow-elevated transition-smooth">
            <div className="p-6">
              <Link to="/discover-mentors" className="flex items-center gap-4">
                <Search className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Find a Mentor</h3>
                  <p className="text-sm text-muted-foreground">Browse expert professionals</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm gradient-card shadow-card cursor-pointer hover:shadow-elevated transition-smooth">
            <div className="p-6">
              <Link to="/resources" className="flex items-center gap-4">
                <BookOpen className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="font-semibold">Career Resources</h3>
                  <p className="text-sm text-muted-foreground">Tools and guides</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm gradient-card shadow-card cursor-pointer hover:shadow-elevated transition-smooth">
            <div className="p-6">
              <Link to="/progress" className="flex items-center gap-4">
                <TrendingUp className="h-8 w-8 text-professional-blue" />
                <div>
                  <h3 className="font-semibold">Track Progress</h3>
                  <p className="text-sm text-muted-foreground">See your growth</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Overview */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Your Progress
              </h3>
              <p className="text-sm text-gray-600">Track your mentorship journey</p>
            </div>
            <div className="p-6 pt-0 space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Career Development</span>
                  <span className="text-sm text-muted-foreground">75%</span>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full bg-orange-500 transition-all" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Technical Skills</span>
                  <span className="text-sm text-muted-foreground">60%</span>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full bg-orange-500 transition-all" style={{ width: '60%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Professional Network</span>
                  <span className="text-sm text-muted-foreground">45%</span>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full bg-orange-500 transition-all" style={{ width: '45%' }}></div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">6</p>
                    <p className="text-sm text-muted-foreground">Sessions Completed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">3</p>
                    <p className="text-sm text-muted-foreground">Active Mentors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Sessions
              </h3>
              <p className="text-sm text-gray-600">Your scheduled mentoring sessions</p>
            </div>
            <div className="p-6 pt-0 space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{session.mentor}</h4>
                    <p className="text-sm text-professional-blue">{session.expertise}</p>
                    <p className="text-xs text-muted-foreground">{session.time}</p>
                    <p className="text-xs text-muted-foreground">{session.topic}</p>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    <Video className="h-4 w-4 mr-2" />
                    Join
                  </button>
                </div>
              ))}
              <button className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                View All Sessions
              </button>
            </div>
          </div>
        </div>

        {/* Recommended Mentors */}
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm mt-8">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5" />
              Recommended Mentors
            </h3>
            <p className="text-sm text-gray-600">Professionals that match your interests and goals</p>
          </div>
          <div className="p-6 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedMentors.map((mentor) => (
                <div key={mentor.id} className="p-4 border rounded-lg hover:shadow-card transition-smooth">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-professional-blue rounded-full mx-auto mb-3 flex items-center justify-center text-white font-semibold text-lg">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-semibold">{mentor.name}</h3>
                    <p className="text-sm text-professional-blue">{mentor.expertise}</p>
                    <p className="text-xs text-muted-foreground">{mentor.location}</p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{mentor.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{mentor.sessions} sessions</span>
                  </div>

                  <button
                    className="w-full inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    onClick={() => window.location.href = `/mentor/${mentor.id}`}
                  >
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenteeDashboard;