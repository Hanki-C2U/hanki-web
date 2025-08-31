import { Link ,useNavigate} from "react-router";
import {
  Calendar,
  Users,
  Clock,
  TrendingUp,
  MessageCircle,
  Video,
  Star,
  Bell
} from "lucide-react";
import useSessionStore from "../stateStore/useSessionStore";
import { supabasase } from "../supabase_creds/supabase";
import { useEffect, useState ,useLayoutEffect} from "react";

const MentorDashboard = () => {
  const { userRole, roleLoading, user } = useSessionStore()
  const navigate = useNavigate()
  const [username, setUserName] = useState('')

  // Debug logging
  console.log('MentorDashboard - userRole:', userRole, 'roleLoading:', roleLoading, 'user:', user?.id)

  // Redirect if explicitly not a mentor (don't redirect on null/unknown role)
  useLayoutEffect(() => {
    if (!roleLoading && userRole !== null && userRole !== 'mentor') {
      console.log('Redirecting to mentee dashboard - userRole:', userRole)
      navigate('/mentee-dashboard')
    }
  }, [roleLoading, userRole, navigate])

  // Fetch username when role is confirmed as mentor
  useEffect(() => {
    const fetchUsername = async () => {
      if (userRole === 'mentor' && user?.id) {
        try {
          const res = await supabasase.from('mentor').select('first_name').eq('supabaseId', user.id).single()
          if (res?.data?.first_name) {
            setUserName(res.data.first_name)
          }
        } catch (error) {
          console.error('Error fetching username:', error)
        }
      }
    }
    
    fetchUsername()
  }, [userRole, user?.id])

  // Early return while checking role (only if we don't have a role yet)
  if (roleLoading && userRole === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Verifying access...</p>
        </div>
      </div>
    )
  }

  // If not a mentor, show redirect message
  if (userRole !== 'mentor') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Redirecting to mentee dashboard...</p>
        </div>
      </div>
    )
  }
  const upcomingSessions = [
    {
      id: 1,
      mentee: "Alice Mukamana",
      topic: "Career Transition to Tech",
      time: "Today, 2:00 PM",
      duration: "1 hour"
    },
    {
      id: 2,
      mentee: "David Nshuti",
      topic: "Startup Strategy Review",
      time: "Tomorrow, 10:00 AM",
      duration: "45 minutes"
    }
  ];

  const pendingRequests = [
    {
      id: 1,
      mentee: "Sarah Uwimana",
      topic: "Marketing Career Guidance",
      message: "I'm looking for guidance on transitioning from traditional marketing to digital marketing..."
    },
    {
      id: 2,
      mentee: "Jean Baptiste",
      topic: "Engineering Leadership",
      message: "I'd like to discuss leadership skills and career advancement in tech..."
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
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-professional-blue-light text-professional-blue">
                Mentor Dashboard
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                <Bell className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                <Link to="/chat" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Messages
                </Link>
              </button>
              <button className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                <Link to="/resources">Resources</Link>
              </button>
              <button className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                <Link to="/login">Sign Out</Link>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {username}!</h1>
          <p className="text-muted-foreground">You're making a difference in young professionals' lives.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Mentees</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Sessions This Month</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <Video className="h-8 w-8 text-accent" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Hours Contributed</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <Clock className="h-8 w-8 text-professional-blue" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Average Rating</p>
                  <p className="text-2xl font-bold flex items-center gap-1">
                    4.9
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <h4 className="font-medium">{session.mentee}</h4>
                    <p className="text-sm text-muted-foreground">{session.topic}</p>
                    <p className="text-xs text-muted-foreground">{session.time} • {session.duration}</p>
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

          {/* Pending Requests */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Mentee Requests
              </h3>
              <p className="text-sm text-gray-600">New mentoring requests waiting for your response</p>
            </div>
            <div className="p-6 pt-0 space-y-4">
              {pendingRequests.map((request) => (
                <div key={request.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{request.mentee}</h4>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900">New</span>
                  </div>
                  <p className="text-sm font-medium text-professional-blue mb-1">{request.topic}</p>
                  <p className="text-sm text-muted-foreground mb-3">{request.message}</p>
                  <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Accept</button>
                    <button className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Decline</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorDashboard;