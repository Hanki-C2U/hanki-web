import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Calendar, Clock, Video, MessageCircle, ArrowLeft } from 'lucide-react'
import { supabasase } from '../supabase_creds/supabase'
import { useAuthStore } from '../store/authStore'
import VideoSession from '../components/VideoSession'

interface SessionDetails {
  id: number
  title: string
  description: string
  sessionDate: string
  startTime: string
  endTime: string
  jitsiRoomId: string
  status: string
  menteeId: string
  mentorId: string
  mentee: {
    first_name: string
    last_name: string
    profile_picture: string
  }
  mentor: {
    first_name: string
    last_name: string
    profile_picture: string
  }
}

const SessionRoom: React.FC = () => {
  const { sessionId } = useParams()
  const navigate = useNavigate()
  const { user, userRole } = useAuthStore()
  
  const [session, setSession] = useState<SessionDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isInMeeting, setIsInMeeting] = useState(false)
  const [sessionStarted, setSessionStarted] = useState(false)

  useEffect(() => {
    console.log('🚀 SessionRoom: useEffect triggered');
    console.log('📍 SessionRoom: sessionId:', sessionId);
    console.log('👤 SessionRoom: user:', user?.id);
    console.log('🎭 SessionRoom: userRole:', userRole);
    
    if (sessionId && user?.id) {
      console.log('✅ SessionRoom: Prerequisites met, fetching session details');
      fetchSessionDetails()
    } else {
      console.log('⏳ SessionRoom: Waiting for sessionId and user...');
    }
  }, [sessionId, user?.id])

  const fetchSessionDetails = async () => {
    try {
      console.log('🔍 SessionRoom: Fetching session details for ID:', sessionId);
      console.log('👤 SessionRoom: Current user:', user?.id);
      console.log('🎭 SessionRoom: User role:', userRole);
      
      setLoading(true)
      
      const { data, error } = await supabasase
        .from('sessions')
        .select(`
          *,
          mentee:menteeId (first_name, last_name, profile_picture),
          mentor:mentorId (first_name, last_name, profile_picture)
        `)
        .eq('id', sessionId)
        .single()

      console.log('📊 SessionRoom: Session data:', data);
      console.log('❌ SessionRoom: Session error:', error);

      if (error) throw error

      // Check if user is authorized for this session
      if (data.menteeId !== user?.id && data.mentorId !== user?.id) {
        console.log('🚫 SessionRoom: User not authorized for session');
        console.log('🔍 SessionRoom: Session menteeId:', data.menteeId);
        console.log('🔍 SessionRoom: Session mentorId:', data.mentorId);
        console.log('🔍 SessionRoom: Current user ID:', user?.id);
        setError('You are not authorized to access this session')
        return
      }

      console.log('✅ SessionRoom: Session loaded successfully');
      setSession(data)
    } catch (err) {
      console.error('Error fetching session:', err)
      setError('Failed to load session details')
    } finally {
      setLoading(false)
    }
  }

  const updateSessionStatus = async (status: string) => {
    if (!session) return

    try {
      await supabasase
        .from('sessions')
        .update({ 
          status,
          statusUpdatedAt: new Date().toISOString(),
          statusUpdatedBy: user?.id
        })
        .eq('id', session.id)

      setSession(prev => prev ? { ...prev, status } : null)
    } catch (err) {
      console.error('Error updating session status:', err)
    }
  }

  const handleJoinSession = () => {
    setIsInMeeting(true)
    setSessionStarted(true)
    if (session?.status === 'ACCEPTED') {
      // Don't update status if already accepted, but we could track "IN_PROGRESS" if needed
    }
  }

  const handleLeaveSession = async () => {
    console.log('🚪 SessionRoom: handleLeaveSession called');
    console.log('🔍 SessionRoom: isInMeeting:', isInMeeting);
    console.log('🔍 SessionRoom: sessionStarted:', sessionStarted);
    
    // Only process if user was actually in a meeting
    if (!isInMeeting && !sessionStarted) {
      console.log('⚠️ SessionRoom: Not in meeting, preventing redirect');
      return;
    }
    
    setIsInMeeting(false)
    
    // If session was completed, update status
    if (userRole === 'mentor' && session) {
      await updateSessionStatus('COMPLETED')
    }

    // Add a small delay before navigation to prevent immediate redirect
    setTimeout(() => {
      console.log('🔄 SessionRoom: Navigating back to dashboard');
      navigate(userRole === 'mentor' ? '/mentor-dashboard' : '/mentee-dashboard')
    }, 1000);
  }

  const handleSessionError = (errorMsg: string) => {
    setError(errorMsg)
    setIsInMeeting(false)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':')
    const date = new Date()
    date.setHours(parseInt(hours), parseInt(minutes))
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const isHost = userRole === 'mentor'
  const otherUser = isHost ? session?.mentee : session?.mentor
  const isSessionTime = () => {
    // For testing: Always allow access to accepted sessions
    return session?.status === 'ACCEPTED'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading session details...</p>
        </div>
      </div>
    )
  }

  if (error || !session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error || 'Session not found'}
          </div>
          <button
            onClick={() => navigate(userRole === 'mentor' ? '/mentor-dashboard' : '/mentee-dashboard')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(userRole === 'mentor' ? '/mentor-dashboard' : '/mentee-dashboard')}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">{session.title}</h1>
              <p className="text-sm text-gray-500">
                Session with {otherUser?.first_name} {otherUser?.last_name}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              session.status === 'ACCEPTED' ? 'bg-green-100 text-green-800' :
              session.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
              session.status === 'COMPLETED' ? 'bg-blue-100 text-blue-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {session.status}
            </span>
          </div>
        </div>
      </div>

      {/* Testing Mode Banner */}
      <div className="bg-orange-100 border-b border-orange-200 px-6 py-2">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-orange-800">
            🧪 <strong>Testing Mode:</strong> Time restrictions disabled - You can join any accepted session immediately
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Session Area */}
          <div className="lg:col-span-2">
            {isInMeeting ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Live Session</h2>
                  <div className="flex items-center space-x-2 text-red-600">
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">LIVE</span>
                  </div>
                </div>
                <VideoSession
                  roomId={session.jitsiRoomId}
                  sessionId={session.id}
                  isHost={isHost}
                  onJoinSuccess={handleJoinSession}
                  onLeaveSession={handleLeaveSession}
                  onError={handleSessionError}
                />
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="text-center">
                  <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {sessionStarted ? 'Session Ended' : 'Ready to Join Session?'}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {sessionStarted 
                      ? 'You have left the video session. You can rejoin if needed.'
                      : 'Click the button below to start your video session with Jitsi Meet. (Testing mode - no time restrictions)'
                    }
                  </p>
                  
                  {isSessionTime() || sessionStarted ? (
                    <button
                      onClick={() => setIsInMeeting(true)}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
                    >
                      <Video className="h-5 w-5" />
                      <span>{sessionStarted ? 'Rejoin Session' : 'Join Video Session'}</span>
                    </button>
                  ) : (
                    <div className="text-center">
                      <p className="text-amber-600 mb-4">
                        This session is not yet confirmed or available.
                      </p>
                      <button
                        disabled
                        className="px-6 py-3 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed flex items-center space-x-2 mx-auto"
                      >
                        <Video className="h-5 w-5" />
                        <span>Session Not Available</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Session Details Sidebar */}
          <div className="space-y-6">
            {/* Session Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Date</p>
                    <p className="text-sm text-gray-600">{formatDate(session.sessionDate)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Time</p>
                    <p className="text-sm text-gray-600">
                      {formatTime(session.startTime)} - {formatTime(session.endTime)}
                    </p>
                  </div>
                </div>
                {session.description && (
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Description</p>
                    <p className="text-sm text-gray-600">{session.description}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Participant Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isHost ? 'Mentee' : 'Mentor'} Information
              </h3>
              {otherUser && (
                <div className="flex items-center space-x-3">
                  <img
                    src={otherUser.profile_picture}
                    alt={`${otherUser.first_name} ${otherUser.last_name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">
                      {otherUser.first_name} {otherUser.last_name}
                    </p>
                    <p className="text-sm text-gray-600 capitalize">
                      {isHost ? 'Mentee' : 'Mentor'}
                    </p>
                  </div>
                </div>
              )}
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => navigate(`/simple-chat/${isHost ? session.menteeId : session.mentorId}`)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                {isHost && session.status === 'PENDING' && (
                  <button
                    onClick={() => updateSessionStatus('ACCEPTED')}
                    className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Accept Session
                  </button>
                )}
                <button
                  onClick={() => navigate(`/simple-chat/${isHost ? session.menteeId : session.mentorId}`)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Open Chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SessionRoom
