import { useEffect } from 'react';
import { supabasase } from '../supabase_creds/supabase';
import useSessionStore from '../stateStore/useSessionStore';

/**
 * Hook to initialize authentication state from Supabase
 * Should be called once at the app root level
 */
export const useAuthInit = () => {
  const { setSession, clearSession, setLoading, checkUserRole } = useSessionStore();

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
              } else {
                console.log('No persisted role, checking database');
                await checkUserRole(session.user.id);
              }
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
              await checkUserRole(session.user.id);
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
  }, [setSession, clearSession, setLoading, checkUserRole]);
};

export default useAuthInit;
