import { Link,redirect,useNavigate } from "react-router";
import {
  Calendar,
  Search,
  BookOpen,
  TrendingUp,
  Video,
  User,
  Bell,
  MessageCircle
} from "lucide-react";
import { useAuthStore } from "../store/authStore";
import { supabasase } from "../supabase_creds/supabase";
import { useEffect, useState,useLayoutEffect } from "react";
import useRealtimeChat from "../hooks/useRealtimeChat";

const MenteeDashboard = () => {
  const { userRole, roleLoading, user } = useAuthStore()
  const navigate = useNavigate()
  const [username, setUserName] = useState('')
  const [mentors, setMentors] = useState<any[]>([])
  const [mentorsLoading, setMentorsLoading] = useState(true)
  
  // Add the chat hook (keeping for future use)
  const { } = useRealtimeChat()

  // Debug logging
  console.log('MenteeDashboard - userRole:', userRole, 'roleLoading:', roleLoading, 'user:', user?.id)

  // Redirect if explicitly not a mentee (don't redirect on null/unknown role)
  useLayoutEffect(() => {
    // If role is loading, don't redirect yet - wait for it to complete
    if (roleLoading) {
      console.log('MenteeDashboard: Role is still loading, waiting...');
      return;
    }
    
    // If user has no session, let AuthProvider handle it
    if (!user) {
      console.log('MenteeDashboard: No user session, letting AuthProvider handle...');
      return;
    }
    
    // If user is a mentor, deny access and redirect
    if (userRole === 'mentor') {
      console.log('MenteeDashboard: Access denied - Mentor trying to access mentee dashboard, redirecting to mentor dashboard');
      navigate('/mentor-dashboard', { replace: true });
      return;
    }
    
    // Only redirect to onboarding if we have confirmed the user has no role
    // AND they have a valid session (to avoid race conditions)
    if (userRole === null && user) {
      console.log('MenteeDashboard: User has session but no role after role check complete, redirecting to onboarding');
      navigate('/onboarding', { replace: true });
      return;
    }
    
    // If we reach here and userRole is 'mentee', stay on dashboard
    if (userRole === 'mentee') {
      console.log('✅ MenteeDashboard: User confirmed as mentee, staying on dashboard');
    }
  }, [roleLoading, userRole, user, navigate])

  // Fetch username when role is confirmed as mentee
  useEffect(() => {
    const fetchUsername = async () => {
      if (userRole === 'mentee' && user?.id) {
        try {
          const res = await supabasase.from('mentee').select('first_name').eq('supabaseId', user.id).single()
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

  // Fetch real mentors from database - Using select all fields approach
  useEffect(() => {
    const fetchMentors = async () => {
      console.log('🔄 Fetching mentors - userRole:', userRole, 'roleLoading:', roleLoading)
      
      // Don't fetch if still loading role
      if (roleLoading) {
        console.log('⏳ Role still loading, skipping mentor fetch')
        return
      }
      
      if (userRole === 'mentee') {
        try {
          setMentorsLoading(true)
          console.log('📡 Fetching mentors from database...')
          
          const { data: mentor, error } = await supabasase
            .from('mentor')
            .select('*')
          
          if (error) {
            console.error('❌ Error fetching mentors:', error)
            setMentors([])
          } else {
            console.log('✅ Mentors fetched successfully. Count:', mentor?.length || 0)
            setMentors(mentor || [])
          }
        } catch (error: any) {
          console.error('💥 Unexpected error fetching mentors:', error)
          setMentors([])
        } finally {
          console.log('🏁 Setting mentorsLoading to false')
          setMentorsLoading(false)
        }
      } else {
        console.log('🚫 Not fetching mentors - userRole is:', userRole)
        setMentorsLoading(false)
      }
    }
    
    fetchMentors()
  }, [userRole, user?.id, roleLoading])

  // Handle starting a chat with a mentor
  const handleStartChat = async (mentorId: string) => {
    console.log('🔥 CHAT BUTTON CLICKED!')
    console.log('User ID:', user?.id)
    console.log('Mentor ID:', mentorId)
    console.log('User Role:', userRole)
    
    if (!user?.id) {
      console.error('❌ No user ID available')
      alert('Error: User not logged in')
      return
    }

    // TEMPORARY FIX: Navigate directly to chat page with mentor info
    // We'll pass mentor and mentee IDs as URL params for now
    console.log('🚀 TEMPORARY: Navigating directly to chat page')
    const chatUrl = `/chat?mentorId=${mentorId}&menteeId=${user.id}`
    console.log('📍 Navigating to:', chatUrl)
    navigate(chatUrl)
    
    return

    // OLD CODE - Commented out due to database timeout issues
    /*
    try {
      console.log('📞 Calling createOrFindConversation...')
      const conversation = await createOrFindConversation(mentorId, user.id)
      console.log('📊 Conversation result:', conversation)
      
      if (conversation) {
        console.log('✅ Success! Conversation ID:', conversation.id)
        console.log('🚀 Navigating to:', `/chat/${conversation.id}`)
        navigate(`/chat/${conversation.id}`)
        
        // Check navigation after a brief delay
        setTimeout(() => {
          console.log('📍 Current location:', window.location.pathname)
        }, 500)
      } else {
        console.error('❌ Failed to create/find conversation')
        alert('Error: Could not start chat. Please try again.')
      }
    } catch (error) {
      console.error('💥 Error starting chat:', error)
      alert('Error: Something went wrong. Please try again.')
    }
    */
  }

  // Early return while role is unknown (only if we don't have a role yet)
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

  // If not a mentee, show redirect message
  if (userRole !== 'mentee') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Redirecting to mentor dashboard...</p>
        </div>
      </div>
    )
  }

  const upcomingSessions = [
    {
      id: 1,
      mentor: "Dr. John Smith",
      expertise: "Software Engineering",
      time: "Tomorrow, 2:00 PM",
      topic: "Career Path Discussion"
    },
    {
      id: 2,
      mentor: "Marie Claire Uwimana",
      expertise: "Digital Marketing",
      time: "Friday, 11:00 AM",
      topic: "Marketing Strategy Review"
    }
  ];

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

  // Show access denied message if user is not a mentee
  if (userRole !== 'mentee') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">You don't have permission to access the mentee dashboard.</p>
          <p className="text-sm text-gray-500">Redirecting you to the appropriate page...</p>
        </div>
      </div>
    );
  }

  const handleJoinSession = () => {
    redirect('/session-page')
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
          <h1 className="text-3xl font-bold mb-2">Welcome back, {username}!</h1>
          <p className="text-muted-foreground">Continue your professional growth journey.</p>
          
          {/* Simple Debug Info */}
          <div className="mt-2 p-2 bg-gray-100 border rounded text-xs">
            <strong>Debug:</strong> Role: {userRole || 'null'} | Loading: {roleLoading ? 'true' : 'false'} | User: {user?.id || 'null'} | Mentors: {mentors.length} | Loading: {mentorsLoading ? 'true' : 'false'}
          </div>
          
          {/* Debug: Test conversations table access */}
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
            <p className="text-sm text-red-800 mb-2">🔧 Debug: Test Database Access</p>
            <button 
              onClick={async () => {
                console.log('🧪 Testing conversations table access...')
                try {
                  const result = await supabasase.from('conversations').select('count')
                  console.log('🧪 Conversations count test:', result)
                  alert(`Conversations table test: ${JSON.stringify(result)}`)
                } catch (err) {
                  console.error('🧪 Conversations table error:', err)
                  alert(`Conversations error: ${err}`)
                }
              }}
              className="mr-2 px-2 py-1 bg-red-500 text-white rounded text-xs"
            >
              Test Conversations Table
            </button>
            <button 
              onClick={async () => {
                console.log('🧪 Testing simple conversation insert...')
                try {
                  const testData = {
                    mentorId: 'test-mentor',
                    menteeId: 'test-mentee',
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  }
                  const result = await supabasase.from('conversations').insert([testData]).select()
                  console.log('🧪 Simple insert test:', result)
                  alert(`Insert test: ${JSON.stringify(result)}`)
                } catch (err) {
                  console.error('🧪 Insert test error:', err)
                  alert(`Insert error: ${err}`)
                }
              }}
              className="px-2 py-1 bg-orange-500 text-white rounded text-xs"
            >
              Test Insert
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-card transition-smooth">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Find</p>
                <p className="text-lg font-semibold">Mentors</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-card transition-smooth">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-professional-blue/10">
                <Calendar className="h-5 w-5 text-professional-blue" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Schedule</p>
                <p className="text-lg font-semibold">Sessions</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-card transition-smooth">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Access</p>
                <p className="text-lg font-semibold">Resources</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-card transition-smooth">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Track</p>
                <p className="text-lg font-semibold">Progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Overview */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Your Progress</h3>
                <p className="text-sm text-gray-600">Track your mentoring journey</p>
              </div>
              <div className="p-6 pt-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">4</div>
                    <p className="text-sm text-muted-foreground">Sessions Completed</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-professional-blue/5 to-professional-blue/10 rounded-lg">
                    <div className="text-2xl font-bold text-professional-blue">2</div>
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
                  <button onClick={()=>handleJoinSession} className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
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

        {/* Available Mentors */}
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm mt-8">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5" />
              Available Mentors
            </h3>
            <p className="text-sm text-gray-600">Connect with professional mentors in your field</p>
          </div>
          <div className="p-6 pt-0">
            {mentorsLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="mt-2 text-muted-foreground">Loading mentors...</p>
              </div>
            ) : mentors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mentors.map((mentor) => (
                  <div key={mentor.supabaseId} className="p-4 border rounded-lg hover:shadow-card transition-smooth">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 mx-auto mb-3 relative">
                        {mentor.profile_picture ? (
                          <img 
                            src={mentor.profile_picture} 
                            alt={`${mentor.first_name} ${mentor.last_name}`}
                            className="w-full h-full rounded-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-professional-blue rounded-full flex items-center justify-center text-white font-semibold text-lg" style={{display: mentor.profile_picture ? 'none' : 'flex'}}>
                          {mentor.first_name?.[0]}{mentor.last_name?.[0]}
                        </div>
                      </div>
                      <h3 className="font-semibold">{mentor.first_name} {mentor.last_name}</h3>
                      <p className="text-sm text-professional-blue">
                        {mentor.expertise?.length ? mentor.expertise.slice(0, 2).join(', ') : 'Professional Mentor'}
                      </p>
                      <p className="text-xs text-muted-foreground">{mentor.location || 'Location not specified'}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {mentor.bio || 'Experienced professional ready to guide your career journey.'}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        className="flex-1 inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        onClick={() => navigate(`/mentor/${mentor.supabaseId}`)}
                      >
                        View Profile
                      </button>
                      {/* <button
                        className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        onClick={() => {
                          console.log('💬 Chat button clicked for mentor:', mentor.supabaseId)
                          handleStartChat(mentor.supabaseId)
                        }}
                      >
                        <MessageCircle className="h-4 w-4" />
                      </button> */}
                      <button className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                        Start Session
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-muted-foreground">No mentors available at the moment.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-2 text-primary hover:underline"
                >
                  Refresh
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenteeDashboard;