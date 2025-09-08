import React, { useState } from 'react';
import { Bell, MessageCircle, X } from 'lucide-react';
import { useNotifications } from '../contexts/NotificationContext';
import { useNavigate } from 'react-router';

const NotificationBell: React.FC = () => {
  const { notifications, unreadCount, markAsRead, markAllAsRead, markMessageAsReadInDB } = useNotifications();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Debug logging
  console.log('🔔 NotificationBell Debug:', {
    notifications: notifications.length,
    unreadCount,
    notificationsList: notifications,
    unreadNotifications: notifications.filter(n => !n.isRead)
  });

  const handleNotificationClick = async (notification: any) => {
    // Mark as read locally
    markAsRead(notification.id);
    
    // Mark as read in database
    await markMessageAsReadInDB(notification.id);
    
    setIsOpen(false);
    // Navigate to the chat with the sender
    navigate(`/simple-chat/${notification.senderId}`);
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const truncateMessage = (content: string, maxLength: number = 50) => {
    return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
  };

  const handleBellClick = () => {
    if (unreadCount > 0) {
      // If there are notifications, open dropdown to show them
      setIsOpen(!isOpen);
    } else {
      // If no notifications, go directly to messages page
      navigate('/chat');
    }
  };

  return (
    <div className="relative">
      {/* Bell Button */}
      <button
        onClick={handleBellClick}
        className={`relative p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 rounded-full transition-colors ${
          unreadCount > 0 
            ? 'text-red-500 hover:text-red-600' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
        title={unreadCount > 0 ? `${unreadCount} unread messages` : 'No new messages - Click to view all messages'}
      >
        <Bell className={`h-6 w-6 ${unreadCount > 0 ? 'animate-pulse fill-red-500' : ''}`} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full animate-bounce">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
              {unreadCount > 0 && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  {unreadCount} new
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={() => {
                    markAllAsRead();
                    setIsOpen(false);
                  }}
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium px-2 py-1 rounded hover:bg-orange-50"
                >
                  Mark all read
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    !notification.isRead ? 'bg-orange-50 border-l-4 border-l-orange-500' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        !notification.isRead ? 'bg-orange-200' : 'bg-orange-100'
                      }`}>
                        <MessageCircle className={`h-4 w-4 ${
                          !notification.isRead ? 'text-orange-700' : 'text-orange-600'
                        }`} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={`text-sm truncate ${
                          !notification.isRead ? 'font-semibold text-gray-900' : 'font-medium text-gray-900'
                        }`}>
                          {notification.senderName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatTimestamp(notification.timestamp)}
                        </p>
                      </div>
                      <p className={`text-sm mt-1 ${
                        !notification.isRead ? 'text-gray-800 font-medium' : 'text-gray-600'
                      }`}>
                        {truncateMessage(notification.content)}
                      </p>
                      {!notification.isRead && (
                        <div className="flex items-center gap-1 mt-2">
                          <div className="h-2 w-2 bg-orange-600 rounded-full"></div>
                          <span className="text-xs text-orange-600 font-medium">New</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">No notifications</p>
                <p className="text-sm text-gray-500">You're all caught up!</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/chat');
                }}
                className="flex-1 text-center text-sm bg-orange-600 text-white py-2 px-3 rounded-md hover:bg-orange-700 font-medium transition-colors"
              >
                📬 View All Messages
              </button>
              {notifications.length === 0 && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/discover-mentors');
                  }}
                  className="flex-1 text-center text-sm bg-gray-600 text-white py-2 px-3 rounded-md hover:bg-gray-700 font-medium transition-colors"
                >
                  💬 Start Chat
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default NotificationBell;