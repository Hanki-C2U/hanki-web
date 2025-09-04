import React, { useEffect, useRef, useState } from 'react';
import { useAuthStore } from '../store/authStore';

interface JitsiMeetingProps {
  roomName: string;
  onApiReady?: (api: any) => void;
  onConnectionTest?: (status: 'connecting' | 'connected' | 'failed') => void;
}

const JitsiMeeting: React.FC<JitsiMeetingProps> = ({ 
  roomName, 
  onApiReady, 
  onConnectionTest 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<any>(null);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'connecting' | 'connected' | 'failed'>('idle');
  const { user } = useAuthStore();

  useEffect(() => {
    if (!containerRef.current) return;

    // Test connection without actually starting the meeting
    testJitsiConnection();

    return () => {
      // Cleanup
      if (apiRef.current) {
        apiRef.current.dispose();
        apiRef.current = null;
      }
    };
  }, [roomName]);

  const testJitsiConnection = async () => {
    try {
      setConnectionStatus('connecting');
      onConnectionTest?.('connecting');
      
      console.log('🔗 Testing Jitsi API connection...');
      
      // Test if Jitsi API is available
      if (typeof window === 'undefined') {
        throw new Error('Window object not available');
      }

      // Load Jitsi Meet API script dynamically for testing
      const scriptId = 'jitsi-meet-api';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;
        
        script.onload = () => {
          console.log('✅ Jitsi API script loaded successfully');
          initializeJitsiTest();
        };
        
        script.onerror = () => {
          console.error('❌ Failed to load Jitsi API script');
          setConnectionStatus('failed');
          onConnectionTest?.('failed');
        };
        
        document.head.appendChild(script);
      } else {
        // Script already loaded
        initializeJitsiTest();
      }
      
    } catch (error) {
      console.error('❌ Jitsi connection test failed:', error);
      setConnectionStatus('failed');
      onConnectionTest?.('failed');
    }
  };

  const initializeJitsiTest = () => {
    try {
      // Check if JitsiMeetExternalAPI is available
      if (typeof (window as any).JitsiMeetExternalAPI === 'undefined') {
        throw new Error('JitsiMeetExternalAPI not available');
      }

      console.log('🚀 JitsiMeetExternalAPI is available, testing connection...');
      
      // Create a minimal configuration for testing
      const domain = 'meet.jit.si';
      const options = {
        roomName: `test-${roomName}-${Date.now()}`,
        width: '100%',
        height: '400px',
        parentNode: containerRef.current,
        userInfo: {
          displayName: user?.email?.split('@')[0] || 'Test User',
          email: user?.email || ''
        },
        configOverwrite: {
          prejoinPageEnabled: false,
          startWithAudioMuted: true,
          startWithVideoMuted: true,
        },
        interfaceConfigOverwrite: {
          TOOLBAR_BUTTONS: ['microphone', 'camera', 'hangup'],
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
        }
      };

      // Initialize API for testing
      const api = new (window as any).JitsiMeetExternalAPI(domain, options);
      apiRef.current = api;

      // Test API events
      api.addEventListener('videoConferenceJoined', () => {
        console.log('✅ Jitsi connection test successful - joined conference');
        setConnectionStatus('connected');
        onConnectionTest?.('connected');
        onApiReady?.(api);
        
        // Immediately leave the test conference
        setTimeout(() => {
          api.dispose();
          console.log('🔄 Test conference disposed');
        }, 2000);
      });

      api.addEventListener('readyToClose', () => {
        console.log('🔄 Jitsi API ready to close');
      });

      api.addEventListener('videoConferenceLeft', () => {
        console.log('🚪 Left test conference');
      });

      // Set a timeout for connection test
      setTimeout(() => {
        if (connectionStatus === 'connecting') {
          console.log('⏰ Jitsi connection test timeout');
          setConnectionStatus('failed');
          onConnectionTest?.('failed');
          if (apiRef.current) {
            apiRef.current.dispose();
          }
        }
      }, 10000); // 10 second timeout

    } catch (error) {
      console.error('❌ Failed to initialize Jitsi test:', error);
      setConnectionStatus('failed');
      onConnectionTest?.('failed');
    }
  };

  const getStatusColor = () => {
    switch (connectionStatus) {
      case 'connecting': return 'text-yellow-600';
      case 'connected': return 'text-green-600';
      case 'failed': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusMessage = () => {
    switch (connectionStatus) {
      case 'connecting': return 'Testing Jitsi connection...';
      case 'connected': return 'Jitsi API connection successful!';
      case 'failed': return 'Jitsi API connection failed';
      default: return 'Ready to test connection';
    }
  };

  return (
    <div className="w-full">
      <div className={`mb-4 p-3 rounded-lg bg-gray-100 ${getStatusColor()}`}>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${
            connectionStatus === 'connecting' ? 'bg-yellow-500 animate-pulse' :
            connectionStatus === 'connected' ? 'bg-green-500' :
            connectionStatus === 'failed' ? 'bg-red-500' : 'bg-gray-400'
          }`}></div>
          <span className="font-medium">{getStatusMessage()}</span>
        </div>
        {connectionStatus === 'connected' && (
          <p className="text-sm text-gray-600 mt-1">
            Jitsi API is working! You can now start actual video sessions.
          </p>
        )}
        {connectionStatus === 'failed' && (
          <p className="text-sm text-gray-600 mt-1">
            Check console for error details. Ensure internet connection is stable.
          </p>
        )}
      </div>
      <div 
        ref={containerRef} 
        className="w-full h-96 bg-black rounded-lg flex items-center justify-center"
      >
        {connectionStatus === 'idle' && (
          <p className="text-white">Click "Start Session" to test Jitsi connection</p>
        )}
        {connectionStatus === 'connecting' && (
          <div className="text-white flex flex-col items-center gap-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <p>Testing connection...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JitsiMeeting;