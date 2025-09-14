import React, { useState } from 'react'
import { MessageCircle, Users, Search, Plus } from 'lucide-react'
import { useNavigate } from 'react-router'
import useRealtimeChat from '../hooks/useRealtimeChat'

interface MessagingInterfaceProps {
  className?: string
}

const MessagingInterface: React.FC<MessagingInterfaceProps> = ({ className = "" }) => {
  const {
    conversations,
    loading,
    error
  } = useRealtimeChat()
  
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  // Filter conversations based on search term
  const filteredConversations = conversations.filter(conversation =>
    conversation.otherParticipant?.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conversation.otherParticipant?.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conversation.lastMessage?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleConversationClick = (conversation: any) => {
    if (conversation.id) {
      // Navigate using the conversation id so ChatPage can load it directly
      navigate(`/chat/${conversation.id}`)
    }
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    
    if (days === 0) {
      return date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
    } else if (days === 1) {
      return 'Yesterday'
    } else if (days < 7) {
      return date.toLocaleDateString('en-US', { weekday: 'short' })
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      })
    }
  }

  if (loading) {
    return (
      <div className={`flex items-center justify-center py-12 ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading conversations...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-2">Unable to load messages</p>
        <p className="text-sm text-gray-500">{error}</p>
      </div>
    )
  }

  return (
    <div className={`h-full max-h-96 flex flex-col ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-emerald-600" />
          <h3 className="font-semibold text-gray-900">Messages</h3>
          {conversations.length > 0 && (
            <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
              {conversations.length}
            </span>
          )}
        </div>
        <button
          onClick={() => navigate('/discover-mentors')}
          className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
          title="Find mentors to message"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Search */}
      {conversations.length > 0 && (
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
      )}

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No conversations yet</h4>
            <p className="text-gray-600 mb-4">Start connecting with mentors to begin messaging</p>
            <button
              onClick={() => navigate('/discover-mentors')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Users className="h-4 w-4" />
              Find Mentors
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => handleConversationClick(conversation)}
                className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    {conversation.otherParticipant?.profile_picture ? (
                      <img
                        src={conversation.otherParticipant.profile_picture}
                        alt={`${conversation.otherParticipant.first_name} ${conversation.otherParticipant.last_name}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-emerald-100 flex items-center justify-center">
                        <span className="text-emerald-600 font-semibold text-sm">
                          {conversation.otherParticipant?.first_name?.[0]}
                          {conversation.otherParticipant?.last_name?.[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900 truncate">
                        {conversation.otherParticipant?.first_name} {conversation.otherParticipant?.last_name}
                      </h4>
                      <span className="text-xs text-gray-500 flex-shrink-0">
                        {formatTime(conversation.updatedAt)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate">
                        {conversation.lastMessage || 'No messages yet'}
                      </p>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full capitalize">
                        {conversation.otherParticipant?.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MessagingInterface
