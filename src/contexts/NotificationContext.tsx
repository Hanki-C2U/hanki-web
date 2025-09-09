import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { supabasase } from '../supabase_creds/supabase';
import { useAuthStore } from '../store/authStore';

interface Notification {
  id: number;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  conversationId: number;
  isRead: boolean;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (notificationId: number) => void;
  markAllAsRead: () => void;
  addNotification: (notification: Notification) => void;
  markMessageAsReadInDB: (messageId: number) => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { user } = useAuthStore();

  useEffect(() => {
    // Only proceed if user is available
    if (!user?.id) {
      // Clear notifications if no user
      setNotifications([]);
      return;
    }

    // Fetch all conversations and messages for the user (no limits, get everything)
    const fetchNotifications = async () => {
      try {
        console.log('🔍 Fetching ALL conversations and messages for user:', user.id);
        
        // First, get all conversations the user is part of
        const { data: conversations, error: convError } = await supabasase
          .from('conversations')
          .select('*')
          .or(`participant1Id.eq.${user.id},participant2Id.eq.${user.id}`)
          .order('updatedAt', { ascending: false });

        if (convError) {
          console.error('Error fetching conversations:', convError);
          return;
        }

        if (!conversations || conversations.length === 0) {
          console.log('No conversations found for user');
          setNotifications([]);
          return;
        }

        console.log('📊 Found conversations:', conversations.length);

        // Get all conversation IDs
        const conversationIds = conversations.map(conv => conv.id);

        // Fetch ONLY UNREAD messages from these conversations (excluding user's own messages)
        const { data: messages, error: msgError } = await supabasase
          .from('messages')
          .select('*')
          .in('conversationId', conversationIds)
          .neq('senderId', user.id)
          .eq('isRead', false)
          .order('createdAt', { ascending: false });

        if (msgError) {
          console.error('Error fetching messages:', msgError);
          return;
        }

        console.log('📊 Found UNREAD messages from others:', messages?.length || 0);

        if (messages && messages.length > 0) {
          // Get sender information for each message
          const senderIds = [...new Set(messages.map(msg => msg.senderId))];
          
          console.log('👥 Getting sender info for:', senderIds.length, 'unique senders');

          // Fetch from both mentor and mentee tables
          const [mentorSenders, menteeSenders] = await Promise.all([
            supabasase
              .from('mentor')
              .select('supabaseId, first_name, last_name')
              .in('supabaseId', senderIds),
            supabasase
              .from('mentee')
              .select('supabaseId, first_name, last_name')
              .in('supabaseId', senderIds)
          ]);

          const allSenders = [...(mentorSenders.data || []), ...(menteeSenders.data || [])];
          console.log('👥 Found senders:', allSenders.length);

          const notificationData: Notification[] = messages.map(msg => {
            const sender = allSenders.find(s => s.supabaseId === msg.senderId);
            return {
              id: msg.id,
              senderId: msg.senderId,
              senderName: sender ? `${sender.first_name} ${sender.last_name}` : 'Unknown User',
              content: msg.content,
              timestamp: msg.createdAt,
              conversationId: msg.conversationId,
              isRead: false
            };
          });

          console.log('✅ Created ALL notifications:', notificationData.length);
          setNotifications(notificationData);
        } else {
          console.log('No messages found from other users');
          setNotifications([]);
        }
      } catch (error) {
        console.error('Error in fetchNotifications:', error);
      }
    };

    fetchNotifications();

    // Set up real-time subscriptions
    const messageChannel = supabasase
      .channel('notifications')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `senderId.neq.${user.id}`
        },
        async (payload) => {
          console.log('🔥 Real-time message received:', payload);
          const newMessage = payload.new as any;
          
          // Check if this message is for the current user
          const { data: conversation } = await supabasase
            .from('conversations')
            .select('participant1Id, participant2Id')
            .eq('id', newMessage.conversationId)
            .single();

          console.log('🔍 Conversation check:', {
            conversationId: newMessage.conversationId,
            conversation,
            currentUserId: user.id,
            isForCurrentUser: conversation && (conversation.participant1Id === user.id || conversation.participant2Id === user.id)
          });

          if (conversation && (conversation.participant1Id === user.id || conversation.participant2Id === user.id)) {
            // Get sender information
            const { data: sender } = await supabasase
              .from('mentor')
              .select('first_name, last_name')
              .eq('supabaseId', newMessage.senderId)
              .single();

            let senderName = 'Unknown User';
            if (sender) {
              senderName = `${sender.first_name} ${sender.last_name}`;
            } else {
              const { data: menteeSender } = await supabasase
                .from('mentee')
                .select('first_name, last_name')
                .eq('supabaseId', newMessage.senderId)
                .single();
              
              if (menteeSender) {
                senderName = `${menteeSender.first_name} ${menteeSender.last_name}`;
              }
            }

            const notification: Notification = {
              id: newMessage.id,
              senderId: newMessage.senderId,
              senderName,
              content: newMessage.content,
              timestamp: newMessage.createdAt,
              conversationId: newMessage.conversationId,
              isRead: false
            };

            console.log('📬 Adding new notification:', notification);
            setNotifications(prev => {
              // Add the new notification to the beginning and keep ALL messages (no limit)
              const updated = [notification, ...prev];
              console.log('📮 Updated notifications array:', updated.length, 'total notifications');
              return updated;
            });
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'messages',
          filter: `isRead.eq.true`
        },
        async (payload) => {
          console.log('📖 Message marked as read:', payload);
          const updatedMessage = payload.new as any;
          
          // Remove this message from notifications if it exists
          setNotifications(prev => {
            const filtered = prev.filter(notification => notification.id !== updatedMessage.id);
            console.log('🗑️ Removed read notification, remaining:', filtered.length);
            return filtered;
          });
        }
      )
      .subscribe();

    return () => {
      supabasase.removeChannel(messageChannel);
    };
  }, [user?.id]);

  const markAsRead = (notificationId: number) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === notificationId
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const addNotification = (notification: Notification) => {
    setNotifications(prev => [notification, ...prev]); // Keep ALL notifications
  };

  const markMessageAsReadInDB = async (messageId: number) => {
    try {
      console.log('📖 Marking message as read in database:', messageId);
      
      const { error } = await supabasase
        .from('messages')
        .update({ isRead: true })
        .eq('id', messageId);

      if (error) {
        console.error('❌ Error marking message as read:', error);
      } else {
        console.log('✅ Message marked as read in database:', messageId);
      }
    } catch (error) {
      console.error('💥 Unexpected error marking message as read:', error);
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  // Debug logging
  console.log('📨 NotificationContext Debug:', {
    totalNotifications: notifications.length,
    unreadCount,
    notifications: notifications.map(n => ({
      id: n.id,
      sender: n.senderName,
      content: n.content.substring(0, 30) + '...',
      isRead: n.isRead
    }))
  });

  const value: NotificationContextType = {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    addNotification,
    markMessageAsReadInDB
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
