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
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthStore();

  useEffect(() => {
    loadJitsiAPI();
    
    return () => {
      if (apiRef.current) {
        apiRef.current.dispose();
        apiRef.current = null;
      }
    };
  }, [roomId]);

  const loadJitsiAPI = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Check if Jitsi API script is already loaded
      if (!window.JitsiMeetExternalAPI) {
        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;
        
        script.onload = () => {
          console.log('✅ Jitsi API loaded successfully');
          initializeJitsiMeeting();
        };
        
        script.onerror = () => {
          const errorMsg = 'Failed to load Jitsi API';
          setError(errorMsg);
          onError?.(errorMsg);
          setIsLoading(false);
        };
        
        document.head.appendChild(script);
      } else {
        initializeJitsiMeeting();
      }
    } catch (err) {
      const errorMsg = 'Error loading video session';
      setError(errorMsg);
      onError?.(errorMsg);
      setIsLoading(false);
    }
  };

  const initializeJitsiMeeting = () => {
    if (!containerRef.current || !window.JitsiMeetExternalAPI) return;

    try {
      const domain = 'meet.jit.si';
      const options = {
        roomName: roomId,
        parentNode: containerRef.current,
        userInfo: {
          displayName: user?.email ? `${user.email.split('@')[0]}` : 'User',
          email: user?.email || undefined,
        },
        configOverwrite: {
          startWithAudioMuted: !isHost, // Host starts unmuted
          startWithVideoMuted: false,
          enableWelcomePage: false,
          enableClosePage: false,
          prejoinPageEnabled: false,
          disableModeratorIndicator: false,
          startScreenSharing: false,
          enableEmailInStats: false,
        },
        interfaceConfigOverwrite: {
          TOOLBAR_BUTTONS: [
            'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
            'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
            'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
            'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
            'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone',
          ],
          SETTINGS_SECTIONS: ['devices', 'language', 'moderator', 'profile', 'calendar'],
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_BRAND_WATERMARK: false,
          BRAND_WATERMARK_LINK: '',
          SHOW_POWERED_BY: false,
          DISPLAY_WELCOME_PAGE_CONTENT: false,
          DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT: false,
          SHOW_CHROME_EXTENSION_BANNER: false,
        }
      };

      apiRef.current = new window.JitsiMeetExternalAPI(domain, options);

      // Event listeners
      apiRef.current.addEventListener('videoConferenceJoined', () => {
        console.log('✅ Successfully joined video session');
        setIsConnected(true);
        setIsLoading(false);
        onJoinSuccess?.();
      });

      apiRef.current.addEventListener('videoConferenceLeft', () => {
        console.log('👋 Left video session');
        setIsConnected(false);
        onLeaveSession?.();
      });

      apiRef.current.addEventListener('readyToClose', () => {
        console.log('🔒 Session ready to close');
        onLeaveSession?.();
      });

      apiRef.current.addEventListener('participantJoined', (participant: any) => {
        console.log('👥 Participant joined:', participant.displayName);
      });

      apiRef.current.addEventListener('participantLeft', (participant: any) => {
        console.log('👋 Participant left:', participant.displayName);
      });

      // Error handling
      apiRef.current.addEventListener('cameraError', () => {
        console.warn('⚠️ Camera error occurred');
      });

      apiRef.current.addEventListener('micError', () => {
        console.warn('⚠️ Microphone error occurred');
      });

    } catch (err) {
      console.error('Error initializing Jitsi meeting:', err);
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
          </div>
        </div>
      )}
      
      <div 
        ref={containerRef} 
        className="w-full h-96 bg-black rounded-lg"
        style={{ minHeight: '400px' }}
      />
      
      {isConnected && (
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
