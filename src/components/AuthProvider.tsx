import React, { useEffect } from 'react';
import useSessionStore from '../stateStore/useSessionStore';
import { supabasase } from '../supabase_creds/supabase';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { 
    setSession, 
    clearSession, 
    checkUserRole, 
    setUserRole, 
    setLoading,
    user,
    userRole 
  } = useSessionStore();

  // Initialize auth and handle session recovery
  const initializeAuth = async () => {
    try {
      setLoading(true);
      const { data: { session }, error } = await supabasase.auth.getSession();
      
      if (error) {
        console.error('Error getting session:', error);
        clearSession();
        return;
      }

      if (session) {
        console.log('🔄 Session found during initialization:', session.user.id);
        setSession(session);
        
        // Check role if we don't have it
        if (!userRole) {
          const role = await checkUserRole(session.user.id);
          setUserRole(role);
        }
      } else {
        console.log('❌ No session found during initialization');
        clearSession();
      }
    } catch (error) {
      console.error('Unexpected error during auth initialization:', error);
      clearSession();
    } finally {
      setLoading(false);
    }
  };

  // Refresh auth state
  const refreshAuth = async () => {
    try {
      const { data: { session }, error } = await supabasase.auth.getSession();
      
      if (error) {
        console.error('Error refreshing session:', error);
        return;
      }

      if (session) {
        console.log('🔄 Session refreshed successfully');
        setSession(session);
        
        // Re-check role if we don't have it
        if (!userRole) {
          const role = await checkUserRole(session.user.id);
          setUserRole(role);
        }
      } else {
        console.log('❌ No session during refresh');
        clearSession();
      }
    } catch (error) {
      console.error('Error refreshing auth:', error);
    }
  };

  useEffect(() => {
    // Initialize auth on mount
    initializeAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabasase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔥 Auth state changed:', event, 'User ID:', session?.user?.id);
        
        if (session) {
          setSession(session);
          
          // Check user role for sign-ins and token refreshes
          if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
            console.log('🔄 Auth event detected, checking role for user ID:', session.user.id);
            
            // For token refresh, check if we need to update role
            if (event === 'TOKEN_REFRESHED' && userRole) {
              console.log('✅ Using existing role for token refresh:', userRole);
              return;
            }
            
            // Fetch role from database
            const role = await checkUserRole(session.user.id);
            console.log('✅ Role check complete, result:', role);
            setUserRole(role);
          }
        } else {
          console.log('🚪 User signed out, clearing session');
          clearSession();
        }
      }
    );

    // Add visibility change listener to handle tab switching
    const handleVisibilityChange = async () => {
      if (!document.hidden && user) {
        console.log('👀 Tab became visible, refreshing auth state...');
        await refreshAuth();
      }
    };

    // Add focus listener for additional session validation
    const handleWindowFocus = async () => {
      if (user) {
        console.log('🎯 Window focused, refreshing auth state...');
        await refreshAuth();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      subscription.unsubscribe();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, [user, userRole]); // Add dependencies

  return <>{children}</>;
};
