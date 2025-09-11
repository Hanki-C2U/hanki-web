import React, { useState, useRef, useEffect } from 'react';
import { Send, Search, MoreVertical, Phone, Video, RefreshCw } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import useRealtimeChat from '../hooks/useRealtimeChat';

interface MessagingInterfaceProps {
  className?: string;
}

const MessagingInterface: React.FC<MessagingInterfaceProps> = ({ className = "" }) => {
  const { user, userRole } = useAuthStore();
  const {
    conversations,
    activeConversation,
    setActiveConversation,
    messages,
    sendMessage,
    loading,
    sendingMessage,
    refreshConversations
  } = useRealtimeChat();

  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Debug logging for conversations
  useEffect(() => {
    console.log('🔍 MessagingInterface - Conversations updated:', conversations.length);
    conversations.forEach((conv, index) => {
      console.log(`📋 Conversation ${index}:`, {
        id: conv.id,
        otherParticipant: conv.otherParticipant,
        lastMessage: conv.lastMessage
      });
    });
  }, [conversations]);

  // Debug logging for active conversation
  useEffect(() => {
    if (activeConversation) {
      console.log('💬 Active conversation changed:', {
        id: activeConversation.id,
        otherParticipant: activeConversation.otherParticipant
      });
    }
  }, [activeConversation]);

  // Filter conversations based on search
  const filteredConversations = conversations.filter(conv => {
    if (!searchTerm) return true;
    const otherParticipant = conv.otherParticipant;
    if (!otherParticipant) return false;
    
    const fullName = `${otherParticipant.first_name} ${otherParticipant.last_name}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeConversation || sendingMessage) return;

    const success = await sendMessage(activeConversation.id, newMessage.trim());
    if (success) {
      setNewMessage('');
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (days === 1) {
      return 'Yesterday';
    } else if (days < 7) {
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  if (loading) {
    return (
      <div className={`flex items-center justify-center h-96 ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
        <span className="ml-2 text-gray-600">Loading messages...</span>
      </div>
    );
  }

  return (
    <div className={`h-96 border rounded-lg overflow-hidden ${className}`}>
      <div className="flex h-full">
        {/* Conversations List */}
        <div className="w-1/3 border-r bg-gray-50">
          {/* Search Header */}
          <div className="p-4 border-b bg-white">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-900">Conversations</h3>
              <button
                onClick={refreshConversations}
                className="p-1 text-gray-400 hover:text-gray-600 rounded"
                title="Refresh conversations"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="overflow-y-auto h-full">
            {filteredConversations.length === 0 ? (
              <div className="p-4 text-center text-gray-500 text-sm">
                {conversations.length === 0 ? 'No conversations yet' : 'No conversations found'}
              </div>
            ) : (
              filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setActiveConversation(conversation)}
                  className={`p-4 border-b hover:bg-white cursor-pointer transition-colors ${
                    activeConversation?.id === conversation.id ? 'bg-white border-l-4 border-l-emerald-500' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-emerald-100 flex items-center justify-center">
                      {conversation.otherParticipant?.profile_picture ? (
                        <img
                          src={conversation.otherParticipant.profile_picture}
                          alt={`${conversation.otherParticipant.first_name}'s profile`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-emerald-600 font-medium text-sm">
                          {conversation.otherParticipant?.first_name?.charAt(0) || '?'}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {conversation.otherParticipant
                            ? `${conversation.otherParticipant.first_name || 'Unknown'} ${conversation.otherParticipant.last_name || 'User'}`
                            : 'Loading...'}
                        </p>
                        <span className="text-xs text-gray-500">
                          {formatTime(conversation.updatedAt)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 truncate">
                        {conversation.otherParticipant?.role 
                          ? (conversation.otherParticipant.role === 'mentor' ? 'Mentor' : 'Mentee')
                          : 'Participant'}
                      </p>
                      {conversation.lastMessage && (
                        <p className="text-xs text-gray-600 truncate mt-1">
                          {conversation.lastMessage}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {activeConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b bg-white flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-100 flex items-center justify-center">
                    {activeConversation.otherParticipant?.profile_picture ? (
                      <img
                        src={activeConversation.otherParticipant.profile_picture}
                        alt={`${activeConversation.otherParticipant.first_name}'s profile`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-emerald-600 font-medium text-xs">
                        {activeConversation.otherParticipant?.first_name?.charAt(0) || '?'}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {activeConversation.otherParticipant
                        ? `${activeConversation.otherParticipant.first_name || 'Unknown'} ${activeConversation.otherParticipant.last_name || 'User'}`
                        : 'Loading...'}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {activeConversation.otherParticipant?.role 
                        ? (activeConversation.otherParticipant.role === 'mentor' ? 'Mentor' : 'Mentee')
                        : 'Participant'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                    <Phone className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                    <Video className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 text-sm mt-8">
                    No messages yet. Start the conversation!
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.senderId === user?.id ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.senderId === user?.id
                            ? 'bg-emerald-500 text-white'
                            : 'bg-white text-gray-900 border'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.senderId === user?.id ? 'text-emerald-100' : 'text-gray-500'
                          }`}
                        >
                          {formatTime(message.createdAt)}
                        </p>
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-4 border-t bg-white">
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    disabled={sendingMessage}
                  />
                  <button
                    type="submit"
                    disabled={!newMessage.trim() || sendingMessage}
                    className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center text-gray-500">
                <p className="text-lg font-medium">Select a conversation</p>
                <p className="text-sm">Choose a conversation from the left to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagingInterface;
