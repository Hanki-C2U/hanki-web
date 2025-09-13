import { useState } from 'react'
import { MicOff, Mic, Video, VideoOff, MonitorUp, MonitorOff, Play, Square } from 'lucide-react'
import useSessionStore from '../stateStore/useSessionStore'
import JitsiMeeting from '../components/JitsiMeeting'
import { Button } from '../components/ui/Button'

const MicOn = () => <Mic color='red' />
const MicOffIcon = () => <MicOff color='red' />
const VidOn = () => <Video color='red' />
const VidOff = () => <VideoOff color='red' />
const ShareScreen = () => <MonitorUp color='red' />
const NoShare = () => <MonitorOff color='red' />

function SessionPage() {
  const { user } = useSessionStore()
  console.log(user?.id)
  
  const [micOn, setMicOn] = useState(false)
  const [vidOn, setVidOn] = useState(false)
  const [screenOn, setScreenOn] = useState(false)
  const [sessionStarted, setSessionStarted] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'connecting' | 'connected' | 'failed'>('idle')
  const [jitsiApi, setJitsiApi] = useState<any>(null)

  // Generate a unique room name for testing
  const roomName = `test-session-${user?.id || 'anonymous'}-${Date.now()}`

  const handleStartSession = () => {
    console.log('🚀 Starting session test with room:', roomName)
    setSessionStarted(true)
  }

  const handleEndSession = () => {
    console.log('🛑 Ending session test')
    setSessionStarted(false)
    setConnectionStatus('idle')
    if (jitsiApi) {
      jitsiApi.dispose()
      setJitsiApi(null)
    }
  }

  const handleConnectionTest = (status: 'connecting' | 'connected' | 'failed') => {
    console.log('📡 Connection status:', status)
    setConnectionStatus(status)
  }

  const handleApiReady = (api: any) => {
    console.log('✅ Jitsi API ready:', api)
    setJitsiApi(api)
    
    // You can add additional API event listeners here for testing
    api.addEventListener('participantJoined', (participant: any) => {
      console.log('👤 Participant joined:', participant)
    })
    
    api.addEventListener('participantLeft', (participant: any) => {
      console.log('👋 Participant left:', participant)
    })
  }

  return (
    <div className='flex flex-col gap-5 justify-center items-center py-10 max-w-4xl mx-auto px-4'>
      {/* Session Header */}
      <div className='w-full text-center mb-4'>
        <h1 className='text-2xl font-bold text-gray-800 mb-2'>Session Testing Page</h1>
        <p className='text-gray-600'>Test Jitsi API connection and video conferencing functionality</p>
        {user && (
          <p className='text-sm text-gray-500 mt-1'>User ID: {user.id}</p>
        )}
      </div>

      {/* Connection Status */}
      <div className='w-full max-w-2xl'>
        <div className={`p-4 rounded-lg border-2 ${
          connectionStatus === 'connected' ? 'border-green-500 bg-green-50' :
          connectionStatus === 'connecting' ? 'border-yellow-500 bg-yellow-50' :
          connectionStatus === 'failed' ? 'border-red-500 bg-red-50' :
          'border-gray-300 bg-gray-50'
        }`}>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className={`w-4 h-4 rounded-full ${
                connectionStatus === 'connected' ? 'bg-green-500' :
                connectionStatus === 'connecting' ? 'bg-yellow-500 animate-pulse' :
                connectionStatus === 'failed' ? 'bg-red-500' :
                'bg-gray-400'
              }`}></div>
              <span className='font-medium'>
                {connectionStatus === 'idle' && 'Ready to start session'}
                {connectionStatus === 'connecting' && 'Testing connection...'}
                {connectionStatus === 'connected' && 'Connection successful!'}
                {connectionStatus === 'failed' && 'Connection failed'}
              </span>
            </div>
            <div className='flex gap-2'>
              {!sessionStarted ? (
                <Button 
                  onClick={handleStartSession}
                  className='flex items-center gap-2 bg-green-600 hover:bg-green-700'
                >
                  <Play size={16} />
                  Start Session Test
                </Button>
              ) : (
                <Button 
                  onClick={handleEndSession}
                  className='flex items-center gap-2 bg-red-600 hover:bg-red-700'
                >
                  <Square size={16} />
                  End Session
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Video Area */}
      <div className='w-full max-w-4xl'>
        {sessionStarted ? (
          <JitsiMeeting 
            roomName={roomName}
            onApiReady={handleApiReady}
            onConnectionTest={handleConnectionTest}
          />
        ) : (
          <div className='w-full h-96 bg-black rounded-lg flex items-center justify-center'>
            <div className='text-center text-white'>
              <div className='text-6xl mb-4'>🎥</div>
              <h2 className='text-xl font-semibold mb-2'>Session Preview</h2>
              <p className='text-gray-300'>Click "Start Session Test" to test Jitsi API connection</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Control Panel */}
      <div className='w-full max-w-md'>
        <div className='h-15 bg-black rounded-lg flex items-center justify-around p-3'>
          <button 
            onClick={() => setMicOn(!micOn)}
            className={`p-2 rounded-full transition-colors ${
              micOn ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
            }`}
            title={micOn ? 'Mute microphone' : 'Unmute microphone'}
          >
            {micOn ? <MicOn /> : <MicOffIcon />}
          </button>

          <button 
            onClick={() => setVidOn(!vidOn)}
            className={`p-2 rounded-full transition-colors ${
              vidOn ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
            }`}
            title={vidOn ? 'Turn off camera' : 'Turn on camera'}
          >
            {vidOn ? <VidOn /> : <VidOff />}
          </button>

          <button 
            onClick={() => setScreenOn(!screenOn)}
            className={`p-2 rounded-full transition-colors ${
              screenOn ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
            }`}
            title={screenOn ? 'Stop screen share' : 'Start screen share'}
          >
            {screenOn ? <ShareScreen /> : <NoShare />}
          </button>
        </div>
      </div>

      {/* Debug Information */}
      {sessionStarted && (
        <div className='w-full max-w-2xl mt-6'>
          <div className='bg-gray-100 rounded-lg p-4'>
            <h3 className='font-medium text-gray-800 mb-2'>Debug Information</h3>
            <div className='text-sm text-gray-600 space-y-1'>
              <p><strong>Room Name:</strong> {roomName}</p>
              <p><strong>Connection Status:</strong> {connectionStatus}</p>
              <p><strong>Jitsi API:</strong> {jitsiApi ? 'Ready' : 'Not initialized'}</p>
              <p><strong>Microphone:</strong> {micOn ? 'On' : 'Off'}</p>
              <p><strong>Camera:</strong> {vidOn ? 'On' : 'Off'}</p>
              <p><strong>Screen Share:</strong> {screenOn ? 'On' : 'Off'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SessionPage
