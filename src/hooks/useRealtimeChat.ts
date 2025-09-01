import { useEffect, useState, useCallback } from 'react'
import { supabasase } from '../supabase_creds/supabase'
import useSessionStore from '../stateStore/useSessionStore'

interface Message {
  id: number
  conversationId: number
  senderId: string
  senderRole: 'mentor' | 'mentee'
  content: string
  messageType: string
  isRead: boolean
  createdAt: string
}

interface Conversation {
  id: number
  mentorId: string
  menteeId: string
  createdAt: string
  updatedAt: string
  lastMessage: string | null
  messages?: Message[]
  mentor?: {
    first_name: string
    last_name: string
    profile_picture: string
  }
  mentee?: {
    first_name: string
    last_name: string
    profile_picture: string
  }
}

function useRealtimeChat() {
  const { user, userRole } = useSessionStore()
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sendingMessage, setSendingMessage] = useState(false)

  // Fetch all conversations for current user
  const fetchConversations = useCallback(async () => {
    if (!user?.id || !userRole) return

    try {
      setLoading(true)
      console.log('Fetching conversations for user:', user.id, 'role:', userRole)
      
      const { data, error } = await supabasase
        .from('conversations')
        .select(`
          *,
          mentor:mentor(first_name, last_name, profile_picture, expertise, location),
          mentee:mentee(first_name, last_name, profile_picture, Interests, location)
        `)
        .or(`mentorId.eq.${user.id},menteeId.eq.${user.id}`)
        .order('updatedAt', { ascending: false })

      if (error) {
        console.error('Error fetching conversations:', error)
        return
      }

      console.log('Raw conversations fetched:', data)
      console.log('Current user ID:', user.id)
      console.log('Current user role:', userRole)
      
      // Filter and log each conversation to debug
      const filteredData = (data || []).filter(conv => {
        const isUserInConversation = conv.mentorId === user.id || conv.menteeId === user.id
        console.log(`Conversation ${conv.id}: mentorId=${conv.mentorId}, menteeId=${conv.menteeId}, userInConv=${isUserInConversation}`)
        return isUserInConversation
      })
      
      console.log('Filtered conversations:', filteredData)
      setConversations(filteredData)
    } catch (err) {
      console.error('Unexpected error fetching conversations:', err)
    } finally {
      setLoading(false)
    }
  }, [user?.id, userRole])

  // Fetch messages for specific conversation
  const fetchMessages = useCallback(async (conversationId: number) => {
    try {
      const { data, error } = await supabasase
        .from('messages')
        .select('*')
        .eq('conversationId', conversationId)
        .order('createdAt', { ascending: true })

      if (error) {
        console.error('Error fetching messages:', error)
        return
      }

      setMessages(data || [])
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }, [])

  // Send a message
  const sendMessage = useCallback(async (conversationId: number, content: string) => {
    if (!user?.id || !userRole || !content.trim()) return false

    const messageContent = content.trim()
    const tempId = Date.now() // Temporary ID for optimistic update

    try {
      setSendingMessage(true)
      setError(null) // Clear any previous errors

      // Optimistic update: Add message to UI immediately
      const optimisticMessage: Message = {
        id: tempId,
        conversationId,
        senderId: user.id,
        senderRole: userRole,
        content: messageContent,
        messageType: 'text',
        isRead: false,
        createdAt: new Date().toISOString()
      }

      console.log('📤 Sending message (optimistic update):', optimisticMessage)
      
      // Add to UI immediately for instant feedback
      setMessages(prev => [...prev, optimisticMessage])

      // Send to database
      const { data, error } = await supabasase
        .from('messages')
        .insert([
          {
            conversationId,
            senderId: user.id,
            senderRole: userRole,
            content: messageContent,
            messageType: 'text'
          }
        ])
        .select()
        .single()

      if (error) {
        console.error('❌ Error sending message to database:', error)
        
        // Remove the optimistic message on error
        setMessages(prev => prev.filter(msg => msg.id !== tempId))
        
        // Set user-friendly error message
        let errorMessage = 'Failed to send message. Please try again.'
        if (error.code === 'PGRST301') {
          errorMessage = 'You do not have permission to send messages.'
        } else if (error.message?.includes('network')) {
          errorMessage = 'Network error. Check your connection and try again.'
        } else if (error.message?.includes('timeout')) {
          errorMessage = 'Request timed out. Please try again.'
        }
        
        setError(errorMessage)
        
        // Auto-clear error after 5 seconds
        setTimeout(() => setError(null), 5000)
        
        return false
      }

      console.log('✅ Message sent to database:', data)

      // Replace optimistic message with real one from database
      if (data) {
        setMessages(prev => 
          prev.map(msg => msg.id === tempId ? data as Message : msg)
        )
      }

      // Update conversation's lastMessage and updatedAt
      try {
        await supabasase
          .from('conversations')
          .update({
            lastMessage: messageContent,
            updatedAt: new Date().toISOString()
          })
          .eq('id', conversationId)
      } catch (updateError) {
        console.warn('⚠️ Failed to update conversation lastMessage:', updateError)
        // Non-critical error, don't show to user
      }

      return true
    } catch (err) {
      console.error('💥 Unexpected error sending message:', err)
      
      // Remove the optimistic message on error
      setMessages(prev => prev.filter(msg => msg.id !== tempId))
      
      // Set generic error message
      setError('Something went wrong. Please try again.')
      
      // Auto-clear error after 5 seconds
      setTimeout(() => setError(null), 5000)
      
      return false
    } finally {
      setSendingMessage(false)
    }
  }, [user?.id, userRole])

  // Create or find conversation
  const createOrFindConversation = useCallback(async (mentorId: string, menteeId: string) => {
    console.log('🚀 createOrFindConversation called with:', { mentorId, menteeId })
    
    try {
      // Try to find existing conversation
      console.log('🔍 Searching for existing conversation...')
      console.log('🔍 Query params: mentorId =', mentorId, 'menteeId =', menteeId)
      
      try {
        // Add timeout to prevent hanging
        const queryPromise = supabasase
          .from('conversations')
          .select(`
            *,
            mentor:mentor(first_name, last_name, profile_picture, expertise, location),
            mentee:mentee(first_name, last_name, profile_picture, Interests, location)
          `)
          .eq('mentorId', mentorId)
          .eq('menteeId', menteeId)

        console.log('🔍 Query built, executing...')
        
        // Create a timeout promise
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Query timeout after 5 seconds')), 5000)
        })

        // Race between query and timeout
        const result = await Promise.race([queryPromise, timeoutPromise]) as any

        console.log('🔍 Query completed!')
        console.log('🔍 Find result - Data:', result.data)
        console.log('🔍 Find result - Error:', result.error)

        const existingList = result.data
        const findError = result.error

        // Check if we found an existing conversation
        const existing = existingList && existingList.length > 0 ? existingList[0] : null

        if (existing && !findError) {
          console.log('✅ Found existing conversation:', existing)
          return existing
        } else {
          console.log('❌ No existing conversation found, will create new one')
        }
      } catch (timeoutError) {
        console.error('⏰ Query timed out or failed:', timeoutError)
        console.log('🔄 Skipping to conversation creation due to timeout')
      }

      // Create new conversation
      console.log('➕ Creating new conversation...')
      const now = new Date().toISOString()
      const insertData = {
        mentorId: mentorId,
        menteeId: menteeId,
        createdAt: now,
        updatedAt: now
      }
      console.log('📝 Insert data:', insertData)
      
      try {
        // Add timeout to conversation creation as well
        const createPromise = supabasase
          .from('conversations')
          .insert([insertData])
          .select('*')
          .single()

        console.log('➕ Insert query built, executing...')
        
        // Create a timeout promise
        const createTimeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Create query timeout after 10 seconds')), 10000)
        })

        // Race between create query and timeout
        const result = await Promise.race([createPromise, createTimeoutPromise]) as any

        console.log('➕ Create query completed!')
        console.log('➕ Create result - Data:', result.data)
        console.log('➕ Create result - Error:', result.error)

        const newConversation = result.data
        const createError = result.error

        if (createError) {
          console.error('❌ Error creating conversation:', createError)
          
          // Check if this is a duplicate key error (conversation already exists)
          if (createError.code === '23505') {
            console.log('🔄 Duplicate key error - conversation already exists, trying to fetch it...')
            
            try {
              // Try to fetch the existing conversation with full details
              const { data: existingConv, error: fetchError } = await supabasase
                .from('conversations')
                .select(`
                  *,
                  mentor:mentor(first_name, last_name, profile_picture, expertise, location),
                  mentee:mentee(first_name, last_name, profile_picture, Interests, location)
                `)
                .eq('mentorId', mentorId)
                .eq('menteeId', menteeId)
                .single()

              if (fetchError) {
                console.error('❌ Error fetching existing conversation:', fetchError)
                return null
              }

              console.log('✅ Successfully fetched existing conversation:', existingConv)
              return existingConv
            } catch (fetchErr) {
              console.error('💥 Error fetching existing conversation after duplicate:', fetchErr)
              return null
            }
          }
          
          return null
        }

        console.log('✅ Successfully created conversation:', newConversation)
        return newConversation
        
      } catch (createTimeoutError) {
        console.error('⏰ Create query timed out or failed:', createTimeoutError)
        console.log('💥 Unable to create conversation due to timeout')
        return null
      }
    } catch (err) {
      console.error('💥 Unexpected error in createOrFindConversation:', err)
      return null
    }
  }, [])

  // Set up real-time subscriptions
  useEffect(() => {
    if (!user?.id) return

    console.log('Setting up real-time subscriptions for user:', user.id)

    // Subscribe to new/updated conversations
    const conversationChannel = supabasase
      .channel(`user-conversations:${user.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'conversations',
          filter: `mentorId=eq.${user.id}`
        },
        (payload) => {
          console.log('Conversation update (as mentor):', payload)
          fetchConversations()
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'conversations',
          filter: `menteeId=eq.${user.id}`
        },
        (payload) => {
          console.log('Conversation update (as mentee):', payload)
          fetchConversations()
        }
      )
      .subscribe()

    return () => {
      console.log('Cleaning up conversation subscription')
      conversationChannel.unsubscribe()
    }
  }, [user?.id, fetchConversations])

  // Separate subscription for messages that depends on active conversation
  useEffect(() => {
    if (!user?.id || !activeConversation) return

    console.log('🔌 Setting up message subscription for conversation:', activeConversation.id)

    // Test if real-time is working by subscribing to a simple channel first
    const testChannel = supabasase
      .channel('test-connection')
      .subscribe((status) => {
        console.log('🧪 Test connection status:', status)
      })

    // Subscribe to new messages for the active conversation
    const messageChannel = supabasase
      .channel(`conversation-messages:${activeConversation.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversationId=eq.${activeConversation.id}`
        },
        (payload) => {
          console.log('🔔 NEW MESSAGE RECEIVED VIA REAL-TIME:', payload.new)
          const newMessage = payload.new as Message
          
          // Add to messages immediately for real-time effect
          setMessages(prev => {
            // Check if message already exists to avoid duplicates
            if (prev.find(msg => msg.id === newMessage.id)) {
              console.log('⚠️ Duplicate message detected, skipping')
              return prev
            }
            console.log('✅ Adding new message to UI')
            return [...prev, newMessage]
          })
          
          // Also refresh conversations to update last message
          fetchConversations()
        }
      )
      .subscribe((status) => {
        console.log('📡 Message subscription status:', status)
        if (status === 'SUBSCRIBED') {
          console.log('✅ Successfully subscribed to real-time messages!')
        } else if (status === 'CLOSED') {
          console.log('❌ Real-time subscription closed')
        } else {
          console.log('⚠️ Real-time subscription status:', status)
        }
      })

    // Fallback: Poll for new messages every 2 seconds if real-time fails
    const pollInterval = setInterval(async () => {
      console.log('🔄 Polling for new messages (fallback)')
      try {
        const { data: latestMessages } = await supabasase
          .from('messages')
          .select('*')
          .eq('conversationId', activeConversation.id)
          .order('createdAt', { ascending: true })

        if (latestMessages && latestMessages.length > 0) {
          setMessages(prevMessages => {
            // Only update if we have new messages
            if (latestMessages.length > prevMessages.length) {
              console.log('📨 Found new messages via polling, updating UI')
              return latestMessages
            }
            return prevMessages
          })
        }
      } catch (error) {
        console.error('❌ Error polling messages:', error)
      }
    }, 2000)

    return () => {
      console.log('🧹 Cleaning up message subscription for conversation:', activeConversation.id)
      testChannel.unsubscribe()
      messageChannel.unsubscribe()
      clearInterval(pollInterval)
    }
  }, [user?.id, activeConversation?.id, fetchConversations])

  // Initial fetch
  useEffect(() => {
    fetchConversations()
  }, [fetchConversations])

  // Fetch messages when active conversation changes
  useEffect(() => {
    if (activeConversation) {
      fetchMessages(activeConversation.id)
    }
  }, [activeConversation, fetchMessages])

  return {
    conversations,
    activeConversation,
    setActiveConversation,
    messages,
    loading,
    sendMessage,
    createOrFindConversation,
    fetchConversations,
    error,
    sendingMessage
  }
}

export default useRealtimeChat