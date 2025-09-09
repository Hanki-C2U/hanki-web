import React, { useEffect, useRef, useState } from 'react';
import { useAuthStore } from '../store/authStore';

interface VideoSessionProps {
  roomId: string;
  sessionId: number;
  isHost?: boolean;
  onJoinSuccess?: () => void;
  onLeaveSession?: () => void;
  onError?: (error: string) => void;
}

declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}

const VideoSession: React.FC<VideoSessionProps> = ({ 
  roomId, 
  sessionId,
  isHost = false,
  onJoinSuccess, 
  onLeaveSession,
  onError 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthStore();
  
  // Unique instance identifier
  const instanceId = useRef(`video-session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
  
  console.log('🎭 VideoSession: Component rendered with instance:', instanceId.current);

  useEffect(() => {
    console.log('🎬 VideoSession: useEffect triggered');
    console.log('📍 VideoSession: roomId:', roomId);
    console.log('🎭 VideoSession: isHost:', isHost);
    
    // Clear any existing API instance first
    if (apiRef.current) {
      console.log('🧹 VideoSession: Cleaning up existing API instance');
      apiRef.current.dispose();
      apiRef.current = null;
    }
    
    loadJitsiAPI();
    
    return () => {
      console.log('🧹 VideoSession: Component cleanup');
      if (apiRef.current) {
        apiRef.current.dispose();
        apiRef.current = null;
      }
    };
  }, [roomId, isHost]); // Add isHost to dependencies to recreate when role changes

  const loadJitsiAPI = async () => {
    try {
      console.log('🚀 VideoSession: Starting Jitsi API load process');
      setIsLoading(true);
      setError(null);

      // Check if Jitsi API script is already loaded
      if (!window.JitsiMeetExternalAPI) {
        console.log('📦 VideoSession: Jitsi API not found, loading script...');
        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;
        
        script.onload = () => {
          console.log('✅ VideoSession: Jitsi API loaded successfully');
          initializeJitsiMeeting();
        };
        
        script.onerror = () => {
          console.error('❌ VideoSession: Failed to load Jitsi API');
          const errorMsg = 'Failed to load Jitsi API';
          setError(errorMsg);
          onError?.(errorMsg);
          setIsLoading(false);
        };
        
        document.head.appendChild(script);
      } else {
        console.log('✅ VideoSession: Jitsi API already loaded, initializing meeting');
        initializeJitsiMeeting();
      }
    } catch (err) {
      console.error('💥 VideoSession: Error loading video session:', err);
      const errorMsg = 'Error loading video session';
      setError(errorMsg);
      onError?.(errorMsg);
      setIsLoading(false);
    }
  };

  const initializeJitsiMeeting = () => {
    console.log('🎬 VideoSession: Initializing Jitsi meeting');
    console.log('📍 VideoSession: Room ID:', roomId);
    console.log('👤 VideoSession: User:', user?.email);
    console.log('🎭 VideoSession: Is Host:', isHost);
    console.log('📦 VideoSession: Container ref exists:', !!containerRef.current);
    console.log('🌐 VideoSession: JitsiMeetExternalAPI available:', !!window.JitsiMeetExternalAPI);
    console.log('🔍 VideoSession: Current API instance:', !!apiRef.current);
    
    if (!containerRef.current || !window.JitsiMeetExternalAPI) {
      console.error('❌ VideoSession: Missing container or Jitsi API');
      setIsLoading(false);
      return;
    }

    // Double check for existing instance
    if (apiRef.current) {
      console.warn('⚠️ VideoSession: API instance already exists, disposing first');
      apiRef.current.dispose();
      apiRef.current = null;
    }

    // Clear any existing iframes in the container
    if (containerRef.current) {
      console.log('🧹 VideoSession: Clearing container content');
      containerRef.current.innerHTML = '';
    }

    try {
      const domain = 'meet.jit.si';
      const options = {
        roomName: roomId,
        parentNode: containerRef.current,
        userInfo: {
          displayName: user?.email ? `${user.email.split('@')[0]}${isHost ? ' (Host)' : ' (Guest)'}` : (isHost ? 'Host' : 'Guest'),
          email: user?.email || undefined,
        },
        configOverwrite: {
          startWithAudioMuted: !isHost, // Host starts unmuted, guests start muted
          startWithVideoMuted: false,
          enableWelcomePage: false,
          enableClosePage: false,
          prejoinPageEnabled: false,
          disableModeratorIndicator: false,
          startScreenSharing: false,
          enableEmailInStats: false,
          // Security settings to prevent guest login requirements
          enableUserRolesBasedOnToken: false,
          enableInsecureRoomNameWarning: false,
          enableNoisyMicDetection: true,
          requireDisplayName: false,
          enableAutomaticIceFailover: true,
          enableP2P: true,
          p2p: {
            enabled: true,
            stunServers: [
              { urls: 'stun:meet-jit-si-turnrelay.jitsi.net:443' }
            ]
          },
          enableFeaturesBasedOnToken: false,
          disableDeepLinking: true,
          // Prevent any lobby or moderation requirements
          enableLobby: false,
          enableKnockingLobby: false,
          // Disable authentication completely
          enableAuthenticationUI: false,
          enableGuestDomain: true,
          guestDomain: '',
          // Moderator settings - everyone joins as equal participants
          moderatedRoomServiceUrl: '',
          enableModeratedMode: false,
        },
        interfaceConfigOverwrite: {
          TOOLBAR_BUTTONS: isHost ? [
            'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
            'fodeviceselection', 'hangup', 'chat', 'settings', 'raisehand',
            'videoquality', 'filmstrip', 'tileview', 'videobackgroundblur',
            'invite', 'mute-everyone', 'security'
          ] : [
            'microphone', 'camera', 'hangup', 'chat', 'raisehand',
            'videoquality', 'tileview', 'videobackgroundblur'
          ],
          SETTINGS_SECTIONS: isHost ? ['devices', 'language', 'profile', 'moderator'] : ['devices', 'language', 'profile'],
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_BRAND_WATERMARK: false,
          BRAND_WATERMARK_LINK: '',
          SHOW_POWERED_BY: false,
          DISPLAY_WELCOME_PAGE_CONTENT: false,
          DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT: false,
          SHOW_CHROME_EXTENSION_BANNER: false,
          // Prevent authentication flows
          HIDE_INVITE_MORE_HEADER: !isHost, // Only hosts can invite
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
          DISABLE_PRESENCE_STATUS: true,
          DISABLE_FOCUS_INDICATOR: true,
          // Remove authentication and moderator-related options for guests
          AUTHENTICATION_ENABLE: false,
          ENABLE_DIAL_OUT: isHost, // Only hosts can dial out
          ENABLE_FEEDBACK_ANIMATION: false,
        }
      };

      console.log('⚙️ VideoSession: Creating Jitsi API with options:', options);
      apiRef.current = new window.JitsiMeetExternalAPI(domain, options);

      console.log('✅ VideoSession: Jitsi API instance created:', !!apiRef.current);

      // Event listeners
      apiRef.current.addEventListener('videoConferenceJoined', () => {
        console.log('✅ VideoSession: Successfully joined video session');
        setIsLoading(false);
        clearTimeout(loadingTimeout);
        onJoinSuccess?.();
      });

      apiRef.current.addEventListener('videoConferenceLeft', (data: any) => {
        console.log('👋 VideoSession: Left video session');
        console.log('📊 VideoSession: Leave data:', data);
        // Don't call onLeaveSession immediately to prevent redirect
        // onLeaveSession?.();
      });

      apiRef.current.addEventListener('readyToClose', (data: any) => {
        console.log('🔒 VideoSession: Session ready to close');
        console.log('📊 VideoSession: Close data:', data);
        // Only call onLeaveSession if user explicitly left
        onLeaveSession?.();
      });

      apiRef.current.addEventListener('participantJoined', (participant: any) => {
        console.log('👥 VideoSession: Participant joined:', participant.displayName);
      });

      apiRef.current.addEventListener('participantLeft', (participant: any) => {
        console.log('👋 VideoSession: Participant left:', participant.displayName);
      });

      // Additional event listeners for debugging
      apiRef.current.addEventListener('videoConferenceWillJoin', () => {
        console.log('🚀 VideoSession: Will join video conference');
      });

      apiRef.current.addEventListener('authenticationRequired', () => {
        console.log('🔐 VideoSession: Authentication required (this should not happen)');
      });

      apiRef.current.addEventListener('moderationRequired', () => {
        console.log('👮 VideoSession: Moderation required (this should not happen)');
      });

      // Error handling
      apiRef.current.addEventListener('cameraError', () => {
        console.warn('⚠️ VideoSession: Camera error occurred');
      });

      apiRef.current.addEventListener('micError', () => {
        console.warn('⚠️ VideoSession: Microphone error occurred');
      });

      // Add timeout to prevent infinite loading
      const loadingTimeout = setTimeout(() => {
        if (isLoading) {
          console.warn('⏰ VideoSession: Loading timeout reached, forcing loading to false');
          setIsLoading(false);
        }
      }, 15000); // 15 second timeout

      // Clear timeout when component unmounts or loads successfully
      apiRef.current.addEventListener('videoConferenceJoined', () => {
        clearTimeout(loadingTimeout);
      });

    } catch (err) {
      console.error('💥 VideoSession: Error initializing Jitsi meeting:', err);
      const errorMsg = 'Failed to initialize video session';
      setError(errorMsg);
      onError?.(errorMsg);
      setIsLoading(false);
    }
  };

  const leaveSession = () => {
    if (apiRef.current) {
      apiRef.current.executeCommand('hangup');
    }
  };

  const toggleAudio = () => {
    if (apiRef.current) {
      apiRef.current.executeCommand('toggleAudio');
    }
  };

  const toggleVideo = () => {
    if (apiRef.current) {
      apiRef.current.executeCommand('toggleVideo');
    }
  };

  if (error) {
    return (
      <div className="w-full h-96 bg-red-50 border-2 border-red-200 rounded-lg flex flex-col items-center justify-center p-6">
        <div className="text-red-600 text-center">
          <h3 className="text-lg font-semibold mb-2">Video Session Error</h3>
          <p className="text-sm mb-4">{error}</p>
          <button
            onClick={loadJitsiAPI}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 rounded-lg flex flex-col items-center justify-center z-10">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Connecting to Video Session</h3>
            <p className="text-sm opacity-75">Please wait while we set up your video call...</p>
            <button
              onClick={() => {
                console.log('🔄 VideoSession: User cancelled loading');
                setIsLoading(false);
              }}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Cancel Loading
            </button>
          </div>
        </div>
      )}
      
      <div 
        ref={containerRef} 
        id={instanceId.current}
        className="w-full h-96 bg-black rounded-lg"
        style={{ minHeight: '400px' }}
      />
      
      {/* Always show control buttons when not loading */}
      {!isLoading && (
        <div className="mt-4 flex justify-center space-x-4">
          <button
            onClick={toggleAudio}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Toggle Audio
          </button>
          <button
            onClick={toggleVideo}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Toggle Video
          </button>
          <button
            onClick={leaveSession}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Leave Session
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoSession;
