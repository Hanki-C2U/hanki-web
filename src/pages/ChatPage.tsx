import React, { useState, useRef, useEffect } from 'react'
import { ArrowLeft, MoreVertical, Phone, Video, Send } from 'lucide-react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import useSessionStore from '../stateStore/useSessionStore'
import useRealtimeChat  from '../hooks/useRealtimeChat'

export default function ChatPage() {
  const navigate = useNavigate()
  const { conversationId } = useParams<{ conversationId?: string }>()
  const [searchParams] = useSearchParams()
  const { user, userRole } = useSessionStore()
  const { 
    conversations, 
    activeConversation, 
    setActiveConversation,
    messages, 
    sendMessage,
    loading,
    createOrFindConversation
  } = useRealtimeChat()
  
  const [newMessage, setNewMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [settingUpChat, setSettingUpChat] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Get URL parameters
  const mentorId = searchParams.get('mentorId')
  const menteeId = searchParams.get('menteeId')

  console.log('ChatPage loaded with:', { conversationId, mentorId, menteeId, userRole, userId: user?.id })

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Set active conversation if conversationId is provided
  useEffect(() => {
    if (conversationId && conversations.length > 0) {
      const conversation = conversations.find(c => c.id.toString() === conversationId)
      if (conversation) {
        setActiveConversation(conversation)
      }
    }
  }, [conversationId, conversations, setActiveConversation])

  // Handle URL parameters (mentorId & menteeId) to create/find conversation
  useEffect(() => {
    const setupConversationFromParams = async () => {
      // Don't try to setup if still loading conversations
      if (loading) {
        console.log('⏳ Still loading conversations, waiting...')
        return
      }
      
      if (mentorId && menteeId && user?.id && !conversationId && !activeConversation) {
        console.log('📋 Setting up conversation from URL params:', { mentorId, menteeId })
        console.log('📊 Current conversations count:', conversations.length)
        setSettingUpChat(true)
        
        try {
          // Check if conversation already exists in fetched conversations
          const existingConversation = conversations.find(c => 
            (c.mentorId === mentorId && c.menteeId === menteeId) ||
            (c.mentorId === menteeId && c.menteeId === mentorId)
          )
          
          if (existingConversation) {
            console.log('✅ Found existing conversation in list:', existingConversation.id)
            setActiveConversation(existingConversation)
            // Update URL to use conversation ID
            navigate(`/chat/${existingConversation.id}`, { replace: true })
          } else {
            console.log('⚠️ No conversation found in fetched list')
            console.log('📝 Available conversations:', conversations.map(c => ({ id: c.id, mentorId: c.mentorId, menteeId: c.menteeId })))
            
            // Try to create a new conversation
            console.log('🔄 Attempting to create new conversation...')
            try {
              const newConversation = await createOrFindConversation(mentorId, menteeId)
              
              if (newConversation) {
                console.log('✅ Successfully created new conversation:', newConversation.id)
                setActiveConversation(newConversation)
                navigate(`/chat/${newConversation.id}`, { replace: true })
                return
              } else {
                console.log('❌ Failed to create new conversation')
              }
            } catch (createError) {
              console.error('💥 Error creating conversation:', createError)
            }
            
            // If creation failed, show appropriate message
            if (conversations.length === 0) {
              console.log('📭 No conversations exist yet - creation also failed')
              alert('Unable to start chat. There might be a connection issue. Please try again later.')
            } else {
              console.log('🔍 Conversations exist but none match, and creation failed')
              alert('Unable to start a new conversation with this mentor. Please try again later.')
            }
            navigate('/mentee-dashboard')
          }
        } catch (error) {
          console.error('💥 Error setting up conversation:', error)
          alert('Error starting chat. Please try again.')
          navigate('/mentee-dashboard')
        } finally {
          setSettingUpChat(false)
        }
      }
    }

    setupConversationFromParams()
  }, [mentorId, menteeId, user?.id, conversationId, activeConversation, conversations, loading, navigate, setActiveConversation, createOrFindConversation])

  const handleSendMessage = async () => {
    if (!newMessage.trim() || sending || !activeConversation) return

    setSending(true)
    const success = await sendMessage(activeConversation.id, newMessage)
    if (success) {
      setNewMessage('')
    }
    setSending(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return 'Today'
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday'
    } else {
      return date.toLocaleDateString()
    }
  }

  const getOtherUser = () => {
    if (!activeConversation) return null
    // Determine the other user based on current user ID, not role
    return activeConversation.mentorId === user?.id ? activeConversation.mentee : activeConversation.mentor
  }

  const otherUser = getOtherUser()

  if (loading || settingUpChat) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
          <p className="text-gray-600">
            {loading ? 'Loading conversations...' : 'Setting up chat...'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Conversations Sidebar */}
      <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200 bg-green-600 text-white">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(userRole === 'mentor' ? '/mentor-dashboard' : '/mentee-dashboard')}
              className="p-2 hover:bg-green-700 rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h2 className="font-semibold">Messages</h2>
            <div className="w-9" /> {/* Spacer */}
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              <p>No conversations yet</p>
            </div>
          ) : (
            conversations.map((conversation) => {
              // Determine the other user based on current user ID, not role
              const other = conversation.mentorId === user?.id ? conversation.mentee : conversation.mentor
              if (!other) return null

              return (
                <div
                  key={conversation.id}
                  onClick={() => setActiveConversation(conversation)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                    activeConversation?.id === conversation.id ? 'bg-green-50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={other.profile_picture}
                      alt={`${other.first_name} ${other.last_name}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        {other.first_name} {other.last_name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {conversation.lastMessage || 'No messages yet'}
                      </p>
                    </div>
                    <div className="text-xs text-gray-400">
                      {formatTime(conversation.updatedAt)}
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {activeConversation && otherUser ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={otherUser.profile_picture}
                    alt={`${otherUser.first_name} ${otherUser.last_name}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {otherUser.first_name} {otherUser.last_name}
                    </h3>
                    <p className="text-sm text-gray-500 capitalize">
                      {activeConversation?.mentorId === user?.id ? 'Mentee' : 'Mentor'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Phone className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Video className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreVertical className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <p>Start your conversation!</p>
                </div>
              ) : (
                messages.map((message, index) => {
                  const isOwnMessage = message.senderId === user?.id
                  const prevMessage = messages[index - 1]
                  const showDate = !prevMessage || 
                    formatDate(message.createdAt) !== formatDate(prevMessage.createdAt)

                  return (
                    <div key={message.id}>
                      {showDate && (
                        <div className="text-center my-4">
                          <span className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 border">
                            {formatDate(message.createdAt)}
                          </span>
                        </div>
                      )}
                      <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            isOwnMessage
                              ? 'bg-green-500 text-white'
                              : 'bg-white text-gray-800 border'
                          }`}
                        >
                          <p className="break-words">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            isOwnMessage ? 'text-green-100' : 'text-gray-500'
                          }`}>
                            {formatTime(message.createdAt)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={1}
                    disabled={sending}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={sending || !newMessage.trim()}
                  className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center text-gray-500">
              <p>Select a conversation to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
