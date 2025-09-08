import { Link ,useNavigate} from "react-router";
import {
  Calendar,
  Users,
  Clock,
  TrendingUp,
  MessageCircle,
  Video,
  Star,
  Loader2
} from "lucide-react";
import { useAuthStore } from "../store/authStore";
import { supabasase } from "../supabase_creds/supabase";
import { useEffect, useState ,useLayoutEffect} from "react";
import NotificationBell from "../components/NotificationBell";

const MentorDashboard = () => {
  const { userRole, roleLoading, user } = useAuthStore()
  const navigate = useNavigate()
  const [username, setUserName] = useState('')
  const [upcomingSessions, setUpcomingSessions] = useState<any[]>([])
  const [sessionsLoading, setSessionsLoading] = useState(false)
  const [pendingRequests, setPendingRequests] = useState<any[]>([])

  // Debug logging
  console.log('MentorDashboard - userRole:', userRole, 'roleLoading:', roleLoading, 'user:', user?.id)

  // Redirect if explicitly not a mentor (don't redirect on null/unknown role)
  useLayoutEffect(() => {
    // Only perform redirections when role is not loading
    if (!roleLoading) {
      // If user has no role, redirect to onboarding
      if (userRole === null) {
        console.log('No role assigned, redirecting to onboarding');
        navigate('/onboarding', { replace: true });
      }
      // If user is a mentee, deny access and redirect
      else if (userRole === 'mentee') {
        console.log('Access denied: Mentee trying to access mentor dashboard, redirecting to mentee dashboard');
        navigate('/mentee-dashboard', { replace: true });
      }
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
  
  // Fetch mentor's sessions and requests
  useEffect(() => {
    const fetchMentorSessions = async () => {
      if (userRole === 'mentor' && user?.id) {
        setSessionsLoading(true);
        try {
          // Fetch upcoming sessions where the mentor is involved
          const { data: sessionsData, error: sessionsError } = await supabasase
            .from('sessions')
            .select(`
              *,
              mentee:menteeId (
                first_name,
                last_name,
                profile_picture
              )
            `)
            .eq('mentorId', user.id)
            .gte('sessionDate', new Date().toISOString().split('T')[0])
            .order('sessionDate', { ascending: true });

          if (sessionsError) {
            console.error('Error fetching sessions:', sessionsError);
          } else {
            setUpcomingSessions(sessionsData || []);
          }

          // Fetch pending session requests (status = PENDING)
          const { data: requestsData, error: requestsError } = await supabasase
            .from('sessions')
            .select(`
              *,
              mentee:menteeId (
                first_name,
                last_name,
                profile_picture
              )
            `)
            .eq('mentorId', user.id)
            .eq('status', 'PENDING')
            .order('createdAt', { ascending: false });

          if (requestsError) {
            console.error('Error fetching requests:', requestsError);
          } else {
            setPendingRequests(requestsData || []);
          }
        } catch (error) {
          console.error('Error fetching mentor data:', error);
        } finally {
          setSessionsLoading(false);
        }
      }
    };

    fetchMentorSessions();
  }, [userRole, user?.id]);

  // Handle session approval/rejection
  const handleSessionAction = async (sessionId: number, action: 'ACCEPTED' | 'REJECTED') => {
    try {
      const { error } = await supabasase
        .from('sessions')
        .update({ 
          status: action,
          statusUpdatedAt: new Date().toISOString(),
          statusUpdatedBy: user?.id
        })
        .eq('id', sessionId);

      if (error) {
        console.error('Error updating session:', error);
        alert('Failed to update session. Please try again.');
        return;
      }

      // Remove from pending requests and optionally add to upcoming sessions
      setPendingRequests(prev => prev.filter(req => req.id !== sessionId));
      
      if (action === 'ACCEPTED') {
        // Refetch upcoming sessions to include the newly accepted session
        const { data: updatedSession } = await supabasase
          .from('sessions')
          .select(`
            *,
            mentee:menteeId (
              first_name,
              last_name,
              profile_picture
            )
          `)
          .eq('id', sessionId)
          .single();

        if (updatedSession) {
          setUpcomingSessions(prev => [...prev, updatedSession].sort((a, b) => 
            new Date(a.sessionDate).getTime() - new Date(b.sessionDate).getTime()
          ));
        }
      }

      alert(`Session ${action.toLowerCase()} successfully!`);
    } catch (error) {
      console.error('Error handling session action:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Show loading spinner while checking access permissions
  if (roleLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Verifying access permissions...</p>
        </div>
      </div>
    );
  }

  // Show access denied message if user is not a mentor
  if (userRole !== 'mentor') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">You don't have permission to access the mentor dashboard.</p>
          <p className="text-sm text-gray-500">Redirecting you to the appropriate page...</p>
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
              <Link to="/home" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
                SkillsConnect
              </Link>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-professional-blue-light text-professional-blue">
                Mentor Dashboard
              </span>
            </div>
            <div className="flex items-center gap-3">
              <NotificationBell />
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
              {sessionsLoading ? (
                <div className="text-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-orange-600" />
                  <p className="text-gray-600">Loading upcoming sessions...</p>
                </div>
              ) : upcomingSessions.length > 0 ? (
                upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{session.title}</h4>
                      <p className="text-sm text-professional-blue">
                        with {session.mentee?.first_name} {session.mentee?.last_name}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {new Date(session.sessionDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'short', 
                          day: 'numeric' 
                        })} at {session.startTime}
                      </p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                        session.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                        session.status === 'ACCEPTED' ? 'bg-green-100 text-green-800' :
                        session.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {session.status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {session.status === 'ACCEPTED' && (
                        <button
                          onClick={() => navigate(`/session/${session.id}`)}
                          className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          title="Join video session (testing mode - no time restrictions)"
                        >
                          <Video className="h-4 w-4" />
                          Join Session
                        </button>
                      )}
                      <button 
                        onClick={() => navigate(`/simple-chat/${session.menteeId}`)}
                        className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Chat
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">No upcoming sessions</p>
                  <p className="text-sm text-gray-500">Sessions will appear here once mentees book with you.</p>
                </div>
              )}
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
              {sessionsLoading ? (
                <div className="text-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-orange-600" />
                  <p className="text-gray-600">Loading requests...</p>
                </div>
              ) : pendingRequests.length > 0 ? (
                pendingRequests.map((request) => (
                  <div key={request.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">
                        {request.mentee?.first_name} {request.mentee?.last_name}
                      </h4>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </div>
                    <p className="text-sm font-medium text-professional-blue mb-1">{request.title}</p>
                    {request.description && (
                      <p className="text-sm text-gray-600 mb-2">{request.description}</p>
                    )}
                    <p className="text-xs text-gray-500 mb-3">
                      Requested for {new Date(request.sessionDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'short', 
                        day: 'numeric' 
                      })} at {request.startTime}
                    </p>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleSessionAction(request.id, 'ACCEPTED')}
                        className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Accept
                      </button>
                      <button 
                        onClick={() => handleSessionAction(request.id, 'REJECTED')}
                        className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Decline
                      </button>
                      <button 
                        onClick={() => navigate(`/simple-chat/${request.menteeId}`)}
                        className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Message
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">No pending requests</p>
                  <p className="text-sm text-gray-500">New mentee requests will appear here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorDashboard;