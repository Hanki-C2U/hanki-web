import React, { useEffect, useRef, useState } from 'react';
import { useAuthStore } from '../store/authStore';

interface SimpleVideoSessionProps {
  roomId: string;
  sessionId?: number;
  isHost?: boolean;
  onJoinSuccess?: () => void;
  onLeaveSession?: () => void;
  onError?: (error: string) => void;
}

const SimpleVideoSession: React.FC<SimpleVideoSessionProps> = ({ 
  roomId, 
  isHost = false,
  onJoinSuccess, 
  onLeaveSession
}) => {
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Create a simple iframe URL with parameters to avoid authentication
  const createJitsiUrl = () => {
    const baseUrl = 'https://meet.jit.si';
    const displayName = user?.email ? `${user.email.split('@')[0]}${isHost ? ' (Host)' : ''}` : (isHost ? 'Host' : 'User');
    
    // Create URL with parameters that bypass authentication
    const params = new URLSearchParams({
      'config.startWithAudioMuted': (!isHost).toString(),
      'config.startWithVideoMuted': 'false',
      'config.prejoinPageEnabled': 'false',
      'config.enableWelcomePage': 'false',
      'config.enableClosePage': 'false',
      'config.enableLobby': 'false',
      'config.enableKnockingLobby': 'false',
      'config.enableUserRolesBasedOnToken': 'false',
      'config.enableFeaturesBasedOnToken': 'false',
      'config.requireDisplayName': 'false',
      'config.enableAuthenticationUI': 'false',
      'config.enableModeratedMode': 'false',
      'interfaceConfig.SHOW_JITSI_WATERMARK': 'false',
      'interfaceConfig.SHOW_WATERMARK_FOR_GUESTS': 'false',
      'interfaceConfig.AUTHENTICATION_ENABLE': 'false',
      'userInfo.displayName': displayName,
    });
    
    return `${baseUrl}/${roomId}?${params.toString()}`;
  };

  useEffect(() => {
    console.log('🎬 SimpleVideoSession: Loading iframe for room:', roomId);
    console.log('🎭 SimpleVideoSession: Is host:', isHost);
    
    setIsLoading(true);
    setError(null);
    
    // Simulate successful load after iframe loads
    const handleIframeLoad = () => {
      console.log('✅ SimpleVideoSession: Iframe loaded successfully');
      setIsLoading(false);
      onJoinSuccess?.();
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
      
      // Set a timeout to hide loading even if load event doesn't fire
      const loadTimeout = setTimeout(() => {
        console.log('⏰ SimpleVideoSession: Load timeout, assuming success');
        setIsLoading(false);
        onJoinSuccess?.();
      }, 10000);

      return () => {
        iframe.removeEventListener('load', handleIframeLoad);
        clearTimeout(loadTimeout);
      };
    }
  }, [roomId, isHost, onJoinSuccess]);

  const handleLeaveSession = () => {
    console.log('🚪 SimpleVideoSession: User clicked leave session');
    onLeaveSession?.();
  };

  if (error) {
    return (
      <div className="w-full h-96 bg-red-50 border-2 border-red-200 rounded-lg flex flex-col items-center justify-center p-6">
        <div className="text-red-600 text-center">
          <h3 className="text-lg font-semibold mb-2">Video Session Error</h3>
          <p className="text-sm mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Reload Page
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
            <h3 className="text-lg font-semibold mb-2">Loading Video Session</h3>
            <p className="text-sm opacity-75">Setting up your video call...</p>
            <button
              onClick={() => setIsLoading(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Skip Loading
            </button>
          </div>
        </div>
      )}
      
      <iframe
        ref={iframeRef}
        src={createJitsiUrl()}
        className="w-full h-96 bg-black rounded-lg"
        style={{ minHeight: '400px', border: 'none' }}
        allow="camera; microphone; fullscreen; display-capture"
        allowFullScreen
        title={`Video Session - ${roomId}`}
      />
      
      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={handleLeaveSession}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Leave Session
        </button>
        <button
          onClick={() => window.open(createJitsiUrl(), '_blank')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Open in New Tab
        </button>
      </div>
    </div>
  );
};

export default SimpleVideoSession;
