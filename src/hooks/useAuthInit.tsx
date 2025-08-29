import { useEffect } from 'react';
import { supabasase } from '../supabase_creds/supabase';
import useSessionStore from '../stateStore/useSessionStore';

/**
 * Hook to initialize authentication state from Supabase
 * Should be called once at the app root level
 */
export const useAuthInit = () => {
  const { setSession, clearSession, setLoading } = useSessionStore();

  useEffect(() => {
    let mounted = true;

    // Initialize session on app start
    const initSession = async () => {
      setLoading(true);
      
      try {
        const { data: { session }, error } = await supabasase.auth.getSession();
        
        if (mounted) {
          if (error) {
            console.error('Error getting initial session:', error);
            clearSession();
          } else {
            setSession(session);
          }
        }
      } catch (error) {
        console.error('Error initializing session:', error);
        if (mounted) {
          clearSession();
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    // Listen for auth state changes
    const { data: { subscription } } = supabasase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;

        console.log('Auth state changed:', event, session?.user?.email);
        
        switch (event) {
          case 'SIGNED_IN':
          case 'TOKEN_REFRESHED':
            setSession(session);
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
  }, [setSession, clearSession, setLoading]);
};

export default useAuthInit;
