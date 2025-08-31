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

  // Fetch all conversations for current user
  const fetchConversations = useCallback(async () => {
    if (!user?.id || !userRole) return

    try {
      setLoading(true)
      const { data, error } = await supabasase
        .from('conversations')
        .select(`
          *,
          mentor:mentor(first_name, last_name, profile_picture),
          mentee:mentee(first_name, last_name, profile_picture)
        `)
        .or(`mentorId.eq.${user.id},menteeId.eq.${user.id}`)
        .order('updatedAt', { ascending: false })

      if (error) {
        console.error('Error fetching conversations:', error)
        return
      }

      console.log('Conversations fetched:', data)
      setConversations(data || [])
    } catch (err) {
      console.error('Unexpected error:', err)
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
    if (!user?.id || !userRole || !content.trim()) return

    try {
      const { error } = await supabasase
        .from('messages')
        .insert([
          {
            conversationId,
            senderId: user.id,
            senderRole: userRole,
            content: content.trim(),
            messageType: 'text'
          }
        ])

      if (error) {
        console.error('Error sending message:', error)
        return false
      }

      // Update conversation's lastMessage and updatedAt
      await supabasase
        .from('conversations')
        .update({
          lastMessage: content.trim(),
          updatedAt: new Date().toISOString()
        })
        .eq('id', conversationId)

      return true
    } catch (err) {
      console.error('Unexpected error:', err)
      return false
    }
  }, [user?.id, userRole])

  // Create or find conversation
  const createOrFindConversation = useCallback(async (mentorId: string, menteeId: string) => {
    try {
      // Try to find existing conversation
      const { data: existing, error: findError } = await supabasase
        .from('conversations')
        .select('*')
        .eq('mentorId', mentorId)
        .eq('menteeId', menteeId)
        .single()

      if (existing && !findError) {
        return existing
      }

      // Create new conversation
      const { data: newConversation, error: createError } = await supabasase
        .from('conversations')
        .insert([
          {
            mentorId: mentorId,
            menteeId: menteeId
          }
        ])
        .select('*')
        .single()

      if (createError) {
        console.error('Error creating conversation:', createError)
        return null
      }

      return newConversation
    } catch (err) {
      console.error('Unexpected error:', err)
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

    // Subscribe to new messages
    const messageChannel = supabasase
      .channel(`user-messages:${user.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages'
        },
        (payload) => {
          console.log('New message:', payload.new)
          const newMessage = payload.new as Message
          
          // Add to messages if it's for the active conversation
          if (activeConversation && newMessage.conversationId === activeConversation.id) {
            setMessages(prev => [...prev, newMessage])
          }
          
          // Refresh conversations to update last message
          fetchConversations()
        }
      )
      .subscribe()

    return () => {
      conversationChannel.unsubscribe()
      messageChannel.unsubscribe()
    }
  }, [user?.id, activeConversation, fetchConversations])

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
    fetchConversations
  }
}

export default useRealtimeChat