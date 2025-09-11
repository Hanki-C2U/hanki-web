import { useEffect, useState, useCallback } from 'react'
import { supabasase } from '../supabase_creds/supabase'
import { useAuthStore } from '../store/authStore'

interface Message {
  id: number
  conversationId: number
  senderId: string
  content: string
  messageType: string
  isRead: boolean
  createdAt: string
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
  messages?: Message[]
  // Dynamic fields based on participants
  otherParticipant?: {
    id: string
    first_name: string
    last_name: string
    profile_picture: string
    role: 'mentor' | 'mentee'
  }
}

function useRealtimeChat() {
  const { user, userRole } = useAuthStore()
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sendingMessage, setSendingMessage] = useState(false)

  // Fetch all conversations for current user (debounced to avoid excessive calls)
  const fetchConversations = useCallback(async () => {
    if (!user?.id || !userRole) return

    try {
      console.log('📊 Fetching conversations for user:', user.id, 'role:', userRole)
      
      const { data, error } = await supabasase
        .from('conversations')
        .select('*')
        .or(`participant1Id.eq.${user.id},participant2Id.eq.${user.id}`)
        .eq('isActive', true)
        .order('updatedAt', { ascending: false })

      if (error) {
        console.error('❌ Error fetching conversations:', error)
        return
      }

      console.log('✅ Conversations fetched:', data?.length || 0, 'conversations')
      
      // Enrich conversations with participant details
      const enrichedConversations = await Promise.all(
        (data || []).map(async (conv) => {
          const otherParticipantId = conv.participant1Id === user.id 
            ? conv.participant2Id 
            : conv.participant1Id

          // Try to fetch from mentor table first, then mentee table
          let otherParticipant = null

          // First try mentor table
          const { data: mentorData, error: mentorError } = await supabasase
            .from('mentor')
            .select('supabaseId, first_name, last_name, profile_picture')
            .eq('supabaseId', otherParticipantId)
            .single()

          if (mentorData && !mentorError) {
            otherParticipant = { ...mentorData, id: mentorData.supabaseId, role: 'mentor' as const }
          } else {
            // If not found in mentor table, try mentee table
            const { data: menteeData, error: menteeError } = await supabasase
              .from('mentee')
              .select('supabaseId, first_name, last_name, profile_picture')
              .eq('supabaseId', otherParticipantId)
              .single()

            if (menteeData && !menteeError) {
              otherParticipant = { ...menteeData, id: menteeData.supabaseId, role: 'mentee' as const }
            } else {
              console.warn('❌ Could not find participant details for:', otherParticipantId, {
                mentorError: mentorError?.message,
                menteeError: menteeError?.message
              })
            }
          }

          return {
            ...conv,
            otherParticipant
          }
        })
      )
      
      setConversations(enrichedConversations)
    } catch (err) {
      console.error('💥 Unexpected error fetching conversations:', err)
    } finally {
      setLoading(false)
    }
  }, [user?.id, userRole])

  // Force refresh conversations (useful when participant data is missing)
  const refreshConversations = useCallback(async () => {
    console.log('🔄 Force refreshing conversations...');
    await fetchConversations();
  }, [fetchConversations]);

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

      // Mark all messages in this conversation as read (except user's own messages)
      if (user?.id && data && data.length > 0) {
        const unreadMessages = data.filter(msg => !msg.isRead && msg.senderId !== user.id);
        if (unreadMessages.length > 0) {
          console.log('📖 Marking', unreadMessages.length, 'messages as read');
          await supabasase
            .from('messages')
            .update({ isRead: true })
            .eq('conversationId', conversationId)
            .neq('senderId', user.id)
            .eq('isRead', false);
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }, [user?.id])

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
        content: messageContent,
        messageType: 'TEXT',
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
            content: messageContent,
            messageType: 'TEXT'
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
  const createOrFindConversation = useCallback(async (participant1Id: string, participant2Id: string) => {
    console.log('🚀 createOrFindConversation called with:', { participant1Id, participant2Id })
    
    try {
      // Try to find existing conversation (check both directions)
      console.log('🔍 Searching for existing conversation...')
      
      try {
        const { data: existingConversations, error: findError } = await supabasase
          .from('conversations')
          .select('*')
          .or(`and(participant1Id.eq.${participant1Id},participant2Id.eq.${participant2Id}),and(participant1Id.eq.${participant2Id},participant2Id.eq.${participant1Id})`)
          .eq('isActive', true)

        console.log('🔍 Find result - Data:', existingConversations)
        console.log('🔍 Find result - Error:', findError)

        // Check if we found an existing conversation
        const existing = existingConversations && existingConversations.length > 0 ? existingConversations[0] : null

        if (existing && !findError) {
          console.log('✅ Found existing conversation:', existing)
          
          // Enrich with participant details
          const otherParticipantId = existing.participant1Id === user?.id 
            ? existing.participant2Id 
            : existing.participant1Id

          let otherParticipant = null
          
          try {
            const { data: mentorData } = await supabasase
              .from('mentor')
              .select('supabaseId, first_name, last_name, profile_picture')
              .eq('supabaseId', otherParticipantId)
              .single()

            if (mentorData) {
              otherParticipant = { ...mentorData, id: mentorData.supabaseId, role: 'mentor' as const }
            }
          } catch (e) {
            try {
              const { data: menteeData } = await supabasase
                .from('mentee')
                .select('supabaseId, first_name, last_name, profile_picture')
                .eq('supabaseId', otherParticipantId)
                .single()

              if (menteeData) {
                otherParticipant = { ...menteeData, id: menteeData.supabaseId, role: 'mentee' as const }
              }
            } catch (e2) {
              console.warn('Could not find participant details for:', otherParticipantId)
            }
          }

          return { ...existing, otherParticipant }
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
        participant1Id: participant1Id,
        participant2Id: participant2Id,
        type: 'MENTOR_MENTEE',
        createdAt: now,
        updatedAt: now,
        isActive: true
      }
      console.log('📝 Insert data:', insertData)
      
      try {
        const { data: newConversation, error: createError } = await supabasase
          .from('conversations')
          .insert([insertData])
          .select('*')
          .single()

        console.log('➕ Create result - Data:', newConversation)
        console.log('➕ Create result - Error:', createError)

        if (createError) {
          console.error('❌ Error creating conversation:', createError)
          
          // Check if this is a duplicate key error (conversation already exists)
          if (createError.code === '23505') {
            console.log('🔄 Duplicate key error - conversation already exists, trying to fetch it...')
            
            try {
              const { data: existingConv, error: fetchError } = await supabasase
                .from('conversations')
                .select('*')
                .or(`and(participant1Id.eq.${participant1Id},participant2Id.eq.${participant2Id}),and(participant1Id.eq.${participant2Id},participant2Id.eq.${participant1Id})`)
                .eq('isActive', true)
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
  }, [user?.id])

  // Set up real-time subscriptions for conversations
  useEffect(() => {
    if (!user?.id) return

    console.log('🔌 Setting up real-time conversation subscriptions for user:', user.id)

    // Subscribe to new/updated conversations
    const conversationChannel = supabasase
      .channel(`user-conversations:${user.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'conversations',
          filter: `participant1Id=eq.${user.id}`
        },
        (payload) => {
          console.log('🔔 Conversation update (as participant1):', payload.eventType, payload.new)
          fetchConversations()
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'conversations',
          filter: `participant2Id=eq.${user.id}`
        },
        (payload) => {
          console.log('🔔 Conversation update (as participant2):', payload.eventType, payload.new)
          fetchConversations()
        }
      )
      .subscribe((status) => {
        console.log('📡 Conversation subscription status:', status)
        if (status === 'SUBSCRIBED') {
          console.log('✅ Successfully subscribed to real-time conversations!')
        } else if (status === 'CHANNEL_ERROR') {
          console.error('💥 Conversation subscription error - check if Realtime is enabled on conversations table')
        }
      })

    return () => {
      console.log('🧹 Cleaning up conversation subscription')
      conversationChannel.unsubscribe()
    }
  }, [user?.id, fetchConversations])

  // Separate subscription for messages that depends on active conversation
  useEffect(() => {
    if (!user?.id || !activeConversation) return

    console.log('🔌 Setting up message subscription for conversation:', activeConversation.id)

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
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'messages',
          filter: `conversationId=eq.${activeConversation.id}`
        },
        (payload) => {
          console.log('🔄 MESSAGE UPDATED VIA REAL-TIME:', payload.new)
          const updatedMessage = payload.new as Message
          
          // Update the message in the list (useful for read status, etc.)
          setMessages(prev => 
            prev.map(msg => 
              msg.id === updatedMessage.id ? updatedMessage : msg
            )
          )
        }
      )
      .subscribe((status) => {
        console.log('📡 Message subscription status:', status)
        if (status === 'SUBSCRIBED') {
          console.log('✅ Successfully subscribed to real-time messages!')
        } else if (status === 'CLOSED') {
          console.log('❌ Real-time subscription closed')
        } else if (status === 'CHANNEL_ERROR') {
          console.error('💥 Real-time subscription error - check if Realtime is enabled on messages table')
        }
      })

    return () => {
      console.log('🧹 Cleaning up message subscription for conversation:', activeConversation.id)
      messageChannel.unsubscribe()
    }
  }, [user?.id, activeConversation?.id, fetchConversations])

  // Initial fetch when hook mounts
  useEffect(() => {
    if (user?.id && userRole) {
      setLoading(true)
      fetchConversations()
    }
  }, [user?.id, userRole, fetchConversations])

  // Fetch messages when active conversation changes
  useEffect(() => {
    if (activeConversation) {
      fetchMessages(activeConversation.id)
    }
  }, [activeConversation, fetchMessages])

  // Mark all messages in a conversation as read
  const markConversationAsRead = useCallback(async (conversationId: number) => {
    if (!user?.id) return;

    try {
      console.log('📖 Marking conversation as read:', conversationId);
      await supabasase
        .from('messages')
        .update({ isRead: true })
        .eq('conversationId', conversationId)
        .neq('senderId', user.id)
        .eq('isRead', false);
      
      console.log('✅ Conversation marked as read');
    } catch (error) {
      console.error('❌ Error marking conversation as read:', error);
    }
  }, [user?.id]);

  return {
    conversations,
    activeConversation,
    setActiveConversation,
    messages,
    loading,
    sendMessage,
    createOrFindConversation,
    fetchConversations,
    refreshConversations,
    markConversationAsRead,
    error,
    sendingMessage
  }
}

export default useRealtimeChat