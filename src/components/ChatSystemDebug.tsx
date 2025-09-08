import React, { useEffect, useState } from 'react'
import { supabasase } from '../supabase_creds/supabase'
import { useAuthStore } from '../store/authStore'
import useUsers from '../hooks/useUsers'
import useRealtimeChat from '../hooks/useRealtimeChat'

const ChatSystemDebug: React.FC = () => {
  const { user, userRole } = useAuthStore()
  const { mentors, mentees, allUsers, loading } = useUsers()
  const { conversations, loading: chatLoading } = useRealtimeChat()
  const [connectionStatus, setConnectionStatus] = useState<string>('Checking...')

  // Test database connection
  useEffect(() => {
    const testConnection = async () => {
      try {
        const { error } = await supabasase.from('mentor').select('count').limit(1)
        if (error) {
          setConnectionStatus(`Error: ${error.message}`)
        } else {
          setConnectionStatus('✅ Connected')
        }
      } catch (err) {
        setConnectionStatus(`Connection failed: ${err}`)
      }
    }
    testConnection()
  }, [])

  // Test real-time subscription
  const testRealtime = async () => {
    const channel = supabasase
      .channel('test-channel')
      .on('broadcast', { event: 'test' }, (payload) => {
        console.log('Real-time test received:', payload)
        alert('Real-time working! ✅')
      })
      .subscribe((status) => {
        console.log('Test subscription status:', status)
        if (status === 'SUBSCRIBED') {
          // Send test message
          channel.send({
            type: 'broadcast',
            event: 'test',
            payload: { message: 'Hello real-time!' }
          })
        }
      })

    setTimeout(() => {
      channel.unsubscribe()
    }, 3000)
  }

  return (
    <div className="p-6 bg-white border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">🔧 Chat System Debug Panel</h2>
      
      {/* Connection Status */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Database Connection</h3>
        <p className="text-sm text-gray-600">{connectionStatus}</p>
      </div>

      {/* User Info */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Current User</h3>
        <div className="text-sm text-gray-600">
          <p>ID: {user?.id || 'Not logged in'}</p>
          <p>Role: {userRole || 'Unknown'}</p>
          <p>Email: {user?.email || 'N/A'}</p>
        </div>
      </div>

      {/* Users Data */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Users Fetched</h3>
        <div className="text-sm text-gray-600">
          <p>Mentors: {loading ? 'Loading...' : mentors.length}</p>
          <p>Mentees: {loading ? 'Loading...' : mentees.length}</p>
          <p>Total Users: {loading ? 'Loading...' : allUsers.length}</p>
        </div>
      </div>

      {/* Chat Data */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Chat System</h3>
        <div className="text-sm text-gray-600">
          <p>Conversations: {chatLoading ? 'Loading...' : conversations.length}</p>
          <p>Real-time Status: {chatLoading ? 'Initializing...' : 'Ready'}</p>
        </div>
      </div>

      {/* Database Tables */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Database Tables</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p>✅ mentors</p>
            <p>✅ mentees</p>
          </div>
          <div>
            <p>✅ conversations</p>
            <p>✅ messages</p>
          </div>
        </div>
      </div>

      {/* Test Actions */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Test Actions</h3>
        <div className="space-y-2">
          <button
            onClick={testRealtime}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Test Real-time Connection
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Refresh Data
          </button>
        </div>
      </div>

      {/* Recent Conversations (if any) */}
      {conversations.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Recent Conversations</h3>
          <div className="space-y-2">
            {conversations.slice(0, 3).map((conv) => (
              <div key={conv.id} className="p-2 bg-gray-50 rounded text-sm">
                <p>ID: {conv.id}</p>
                <p>Participant1: {conv.participant1Id}</p>
                <p>Participant2: {conv.participant2Id}</p>
                <p>Last: {conv.lastMessage || 'No messages'}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-xs text-gray-500 mt-4">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  )
}

export default ChatSystemDebug
