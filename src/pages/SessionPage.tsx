import React, { useState } from 'react'
import { MicOff, Mic, Video, VideoOff, MonitorUp, MonitorOff } from 'lucide-react'
import useSessionStore from '../stateStore/useSessionStore'

const MicOn = () => <Mic color='red' />
const MicOffIcon = () => <MicOff color='red' />
const VidOn = () => <Video color='red' />
const VidOff = () => <VideoOff color='red' />
const ShareScreen = () => <MonitorUp color='red' />
const NoShare = () => <MonitorOff color='red' />

function SessionPage() {
  const {user} = useSessionStore()
  console.log(user?.id)
  const [micOn, setMicOn] = useState(false)
  const [vidOn, setVidOn] = useState(false)
  const [screenOn, setScreenOn] = useState(false)

  return (
    <div className='flex flex-col gap-5 justify-center items-center py-10'>
      <div className='w-2/3 h-96 bg-black rounded-lg'></div>
      
      <div className='w-1/3 h-15 bg-black rounded-lg flex items-center justify-around p-3'>
        <button onClick={() => setMicOn(!micOn)}>
          {micOn ? <MicOn /> : <MicOffIcon />}
        </button>

        <button onClick={() => setVidOn(!vidOn)}>
          {vidOn ? <VidOn /> : <VidOff />}
        </button>

        <button onClick={() => setScreenOn(!screenOn)}>
          {screenOn ? <ShareScreen /> : <NoShare />}
        </button>
      </div>
    </div>
  )
}

export default SessionPage
