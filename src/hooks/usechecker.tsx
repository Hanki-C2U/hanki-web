import { useEffect, useState } from 'react'
import { supabasase } from '../supabase_creds/supabase'
import useSessionStore from '../stateStore/useSessionStore'

function usechecker() {
  const session = useSessionStore(state => state.session)
  const user = useSessionStore(state => state.user)
  const [presentUser, setPresentUser] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      if (!user?.id) {
        setIsChecking(false)
        return
      }
      try {
        setIsChecking(true)
        const res = await supabasase.from('mentee').select('*').eq('supabaseId', user.id)
        if (res?.data && res.data.length > 0 && res.data[0]?.supabaseId) {
          setPresentUser(true)
        } else {
          setPresentUser(false)
        }
      } catch (error) {
        console.error('Error checking user:', error)
        setPresentUser(false)
      } finally {
        setIsChecking(false)
      }
    }
    
    checkUser()
  }, [user?.id]) 

  // useEffect(() => {
  //   if (!isChecking && session && navigation.location?.pathname === '/mentee-dashboard' && !presentUser) {
  //     navigate('/mentor-dashboard')
  //   }
  // }, [isChecking, session, navigation.location?.pathname, presentUser, navigate])

  return { 
    isMentee: presentUser, 
    isChecking,
    shouldRedirectToMentor: !isChecking && !presentUser && session
  }
}

export default usechecker
