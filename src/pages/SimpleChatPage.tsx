import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router'
import { 
  ArrowLeft, 
  Send, 
  MessageCircle,
  Phone,
  Video,
  MoreVertical
} from 'lucide-react'
import { supabasase } from '../supabase_creds/supabase'
import { useAuthStore } from '../store/authStore'
// import { useNotifications } from '../contexts/NotificationContext'

interface Message {
  id: number
  conversationId: number
  senderId: string
  content: string
  messageType: 'TEXT' | 'IMAGE' | 'FILE' | 'SYSTEM'
  isRead: boolean
  createdAt: string
}

interface UserInfo {
  id: string
  first_name: string
  last_name: string
  profile_picture: string
  role: 'mentor' | 'mentee'
}

interface Conversation {
  id: number
  participant1Id: string
  participant2Id: string
  type: string
  createdAt: string
  updatedAt: string
  lastMessage: string | null
  isActive: boolean
}

const SimpleChatPage = () => {
  const { userId: targetUserId } = useParams()
  const navigate = useNavigate()
  const { user, userRole } = useAuthStore()
  // const { markAsRead } = useNotifications()
  
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [conversation, setConversation] = useState<Conversation | null>(null)
  const [targetUser, setTargetUser] = useState<UserInfo | null>(null)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Fetch target user info
  useEffect(() => {
    const fetchTargetUser = async () => {
      if (!targetUserId) {
        console.error('❌ No target user ID provided')
        setError('No user ID provided')
        return
      }

      try {
        console.log('🔍 Fetching target user:', targetUserId)
        
        // Try mentor table first
        const { data: mentorData, error: mentorError } = await supabasase
          .from('mentor')
          .select('supabaseId, first_name, last_name, profile_picture')
          .eq('supabaseId', targetUserId)
          .single()

        if (mentorData) {
          console.log('✅ Found mentor:', mentorData)
          setTargetUser({
            id: mentorData.supabaseId,
            first_name: mentorData.first_name,
            last_name: mentorData.last_name,
            profile_picture: mentorData.profile_picture,
            role: 'mentor'
          })
          return
        }

        // Try mentee table
        const { data: menteeData, error: menteeError } = await supabasase
          .from('mentee')
          .select('supabaseId, first_name, last_name, profile_picture')
          .eq('supabaseId', targetUserId)
          .single()

        if (menteeData) {
          console.log('✅ Found mentee:', menteeData)
          setTargetUser({
            id: menteeData.supabaseId,
            first_name: menteeData.first_name,
            last_name: menteeData.last_name,
            profile_picture: menteeData.profile_picture,
            role: 'mentee'
          })
          return
        }

        // If neither worked, log the errors
        console.error('❌ User not found in mentor table:', mentorError)
        console.error('❌ User not found in mentee table:', menteeError)
        setError('User not found in system')
      } catch (error) {
        console.error('❌ Error fetching target user:', error)
        setError('Failed to load user information')
      }
    }

    fetchTargetUser()
  }, [targetUserId])

  // Find or create conversation
  useEffect(() => {
    const setupConversation = async () => {
      if (!user?.id || !targetUserId || !targetUser) {
        console.log('⏳ Waiting for user data...', { user: !!user, targetUserId, targetUser: !!targetUser })
        return
      }

      try {
        setLoading(true)
        console.log('🔍 Setting up conversation between:', user.id, 'and', targetUserId)

        // Try to find existing conversation (check both participant orders)
        console.log('🔍 Searching for existing conversation...')
        
        // First check: current user as participant1, target as participant2
        const { data: conv1 } = await supabasase
          .from('conversations')
          .select('*')
          .eq('participant1Id', user.id)
          .eq('participant2Id', targetUserId)
          .eq('isActive', true)
          .single()

        // Second check: target as participant1, current user as participant2
        const { data: conv2 } = await supabasase
          .from('conversations')
          .select('*')
          .eq('participant1Id', targetUserId)
          .eq('participant2Id', user.id)
          .eq('isActive', true)
          .single()

        let conversation = conv1 || conv2
        
        if (conversation) {
          console.log('✅ Found existing conversation:', conversation.id)
        } else {
          console.log('📝 Creating new conversation...')
          
          // Small delay to prevent race conditions
          await new Promise(resolve => setTimeout(resolve, 100))
          
          // Create new conversation
          const conversationType = (userRole === 'mentor' && targetUser.role === 'mentee') || 
                                 (userRole === 'mentee' && targetUser.role === 'mentor') 
                                 ? 'MENTOR_MENTEE' 
                                 : 'PEER_TO_PEER'

          console.log('📋 Conversation type:', conversationType)

          const { data: newConv, error: createError } = await supabasase
            .from('conversations')
            .insert([{
              participant1Id: user.id,
              participant2Id: targetUserId,
              type: conversationType,
              isActive: true,
              updatedAt: new Date().toISOString()
            }])
            .select('*')
            .single()

          if (createError) {
            console.error('❌ Error creating conversation:', createError)
            
            // If it's a unique constraint violation, try to find the conversation again
            if (createError.code === '23505') {
              console.log('🔄 Conversation already exists, searching again...')
              
              // Try both directions again
              const { data: retryConv1 } = await supabasase
                .from('conversations')
                .select('*')
                .eq('participant1Id', user.id)
                .eq('participant2Id', targetUserId)
                .eq('isActive', true)
                .single()

              const { data: retryConv2 } = await supabasase
                .from('conversations')
                .select('*')
                .eq('participant1Id', targetUserId)
                .eq('participant2Id', user.id)
                .eq('isActive', true)
                .single()

              conversation = retryConv1 || retryConv2
              
              if (conversation) {
                console.log('✅ Found conversation after retry:', conversation.id)
              } else {
                setError('Failed to create or find conversation')
                return
              }
            } else {
              setError('Failed to create conversation')
              return
            }
          } else {
            conversation = newConv
            console.log('✅ Created new conversation:', conversation.id)
          }
        }

        if (conversation) {
          setConversation(conversation)
          fetchMessages(conversation.id)
          // Mark messages as read when opening this conversation
          // markAsRead(conversation.id)
        }
      } catch (error) {
        console.error('Error setting up conversation:', error)
        setError('Failed to set up conversation')
      } finally {
        setLoading(false)
      }
    }

    setupConversation()
  }, [user?.id, targetUserId, targetUser, userRole])

  // Fetch messages
  const fetchMessages = async (conversationId: number) => {
    try {
      const { data, error } = await supabasase
        .from('messages')
        .select('*')
        .eq('conversationId', conversationId)
        .order('createdAt', { ascending: true })

      if (error) throw error
      setMessages(data || [])
      
      // Mark all messages in this conversation as read
      if (user?.id) {
        await supabasase
          .from('messages')
          .update({ isRead: true })
          .eq('conversationId', conversationId)
          .neq('senderId', user.id)
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
      setError('Failed to load messages')
    }
  }

  // Send message
  const handleSendMessage = async () => {
    if (!newMessage.trim() || !conversation || sending) return

    const messageContent = newMessage.trim()
    setSending(true)
    setError(null)

    try {
      // Optimistic update
      const tempMessage: Message = {
        id: Date.now(),
        conversationId: conversation.id,
        senderId: user!.id,
        content: messageContent,
        messageType: 'TEXT',
        isRead: false,
        createdAt: new Date().toISOString()
      }
      
      setMessages(prev => [...prev, tempMessage])
      setNewMessage('')

      // Send to database
      const { data, error } = await supabasase
        .from('messages')
        .insert([{
          conversationId: conversation.id,
          senderId: user!.id,
          content: messageContent,
          messageType: 'TEXT'
        }])
        .select()
        .single()

      if (error) throw error

      // Replace optimistic message with real one
      setMessages(prev => 
        prev.map(msg => msg.id === tempMessage.id ? data as Message : msg)
      )

      // Update conversation last message
      await supabasase
        .from('conversations')
        .update({
          lastMessage: messageContent,
          updatedAt: new Date().toISOString()
        })
        .eq('id', conversation.id)

    } catch (error) {
      console.error('Error sending message:', error)
      setError('Failed to send message')
      // Remove optimistic message on error
      setMessages(prev => prev.filter(msg => msg.id !== Date.now()))
      setNewMessage(messageContent) // Restore message
    } finally {
      setSending(false)
    }
  }

  // Real-time subscription for new messages
  useEffect(() => {
    if (!conversation?.id) return

    const channel = supabasase
      .channel(`messages:${conversation.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversationId=eq.${conversation.id}`
        },
        (payload) => {
          const newMsg = payload.new as Message
          // Only add if it's not from current user (to avoid duplicates with optimistic updates)
          if (newMsg.senderId !== user?.id) {
            setMessages(prev => [...prev, newMsg])
          }
        }
      )
      .subscribe()

    return () => {
      supabasase.removeChannel(channel)
    }
  }, [conversation?.id, user?.id])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto mb-2"></div>
          <p className="text-gray-600">Loading chat...</p>
        </div>
      </div>
    )
  }

  if (!targetUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <h3 className="font-semibold mb-2">Chat Error</h3>
            <p>{error || 'User not found'}</p>
          </div>
          <div className="space-y-2 text-sm text-gray-600 mb-4">
            <p><strong>Target User ID:</strong> {targetUserId}</p>
            <p><strong>Current User:</strong> {user?.id}</p>
            <p><strong>User Role:</strong> {userRole}</p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <img
              src={targetUser.profile_picture}
              alt={`${targetUser.first_name} ${targetUser.last_name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">
                {targetUser.first_name} {targetUser.last_name}
              </h3>
              <p className="text-sm text-gray-500 capitalize">
                {targetUser.role}
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
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <span>{error}</span>
          </div>
        )}

        {messages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p>Start your conversation with {targetUser.first_name}!</p>
          </div>
        ) : (
          messages.map((message) => {
            const isOwnMessage = message.senderId === user?.id
            return (
              <div key={message.id} className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    isOwnMessage
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-gray-800 border'
                  } ${
                    // Opacity for optimistic messages
                    isOwnMessage && message.id > 1000000000000 ? 'opacity-75' : ''
                  }`}
                >
                  <p className="break-words">{message.content}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className={`text-xs ${
                      isOwnMessage ? 'text-green-100' : 'text-gray-500'
                    }`}>
                      {formatTime(message.createdAt)}
                    </p>
                    {isOwnMessage && (
                      <span className={`text-xs ml-2 ${
                        isOwnMessage ? 'text-green-100' : 'text-gray-500'
                      }`}>
                        {message.id > 1000000000000 ? '⏳' : '✓'}
                      </span>
                    )}
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
              placeholder={`Message ${targetUser.first_name}...`}
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
            {sending ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SimpleChatPage
