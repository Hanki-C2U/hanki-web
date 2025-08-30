import { useEffect } from 'react';
import { supabasase } from '../supabase_creds/supabase';
import useSessionStore from '../stateStore/useSessionStore';

/**
 * Hook to initialize authentication state from Supabase
 * Should be called once at the app root level
 */
export const useAuthInit = () => {
  const setSession = useSessionStore((state) => state.setSession);
  const clearSession = useSessionStore((state) => state.clearSession);
  const setLoading = useSessionStore((state) => state.setLoading);
  const setUserRole = useSessionStore((state) => state.setUserRole);
  const setRoleLoading = useSessionStore((state) => state.setRoleLoading);

  // Function to determine user role from database
  const determineUserRole = async (userId: string) => {
    try {
      console.log('Determining user role for:', userId);
      
      // Use a single query to check both tables efficiently
      const [mentorCheck, menteeCheck] = await Promise.allSettled([
        supabasase.from('mentor').select('id').eq('supabaseId', userId).maybeSingle(),
        supabasase.from('mentee').select('id').eq('supabaseId', userId).maybeSingle()
      ]);

      console.log('Role check results:', { mentorCheck, menteeCheck });

      let userRole: 'mentor' | 'mentee' | null = null;

      if (mentorCheck.status === 'fulfilled' && mentorCheck.value.data) {
        console.log('User is a mentor');
        userRole = 'mentor';
      } else if (menteeCheck.status === 'fulfilled' && menteeCheck.value.data) {
        console.log('User is a mentee');
        userRole = 'mentee';
      } else {
        console.log('User has no role yet (new user)');
        userRole = null;
      }

      setUserRole(userRole);
    } catch (error) {
      console.error('Error determining user role:', error);
      setUserRole(null);
    } finally {
      setRoleLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    const initSession = async () => {
      setLoading(true);
      
      try {
        const { data: { session }, error } = await supabasase.auth.getSession();
        
        if (mounted) {
          if (error) {
            console.error('Error', error);
            clearSession();
          } else {
            setSession(session);
            if (session?.user?.id) {
              // Check if we already have a role from persistence
              const currentState = useSessionStore.getState();
              console.log('Current persisted role:', currentState.userRole);
              
              if (currentState.userRole) {
                console.log('Role already exists from persistence, skipping DB check');
                setRoleLoading(false);
              } else {
                console.log('No persisted role, checking database');
                setRoleLoading(true);
                await determineUserRole(session.user.id);
              }
            } else {
              // No session, make sure roleLoading is false
              setRoleLoading(false);
            }
          }
        }
      } catch (error) {
        console.error('Error', error);
        if (mounted) {
          clearSession();
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    const { data: { subscription } } = supabasase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;

        console.log('Auth state changed:', event, session?.user?.email);
        
        switch (event) {
          case 'SIGNED_IN':
          case 'TOKEN_REFRESHED':
            setSession(session);
            if (session?.user?.id) {
              setRoleLoading(true);
              await determineUserRole(session.user.id);
            }
            break;
          case 'SIGNED_OUT':
            clearSession();
            break;
          default:
            break;
        }
      }
    );

    initSession();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [setSession, clearSession, setLoading, setUserRole, setRoleLoading]);
};

export default useAuthInit;
