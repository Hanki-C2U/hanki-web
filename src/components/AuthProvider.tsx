import React, { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
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
    initializeAuth
  } = useAuthStore();

  // Debounce role checks to prevent rapid firing
  let roleCheckTimeout: NodeJS.Timeout | null = null;

  const debouncedRoleCheck = (userId: string, immediate = false) => {
    if (roleCheckTimeout) {
      clearTimeout(roleCheckTimeout);
    }
    
    const delay = immediate ? 100 : 1000; // Faster for immediate checks
    
    roleCheckTimeout = setTimeout(async () => {
      console.log('🔍 Fetching user role from database (debounced)...');
      const role = await checkUserRole(userId);
      console.log('✅ Role check complete, result:', role);
      setUserRole(role);
    }, delay);
  };

  useEffect(() => {
    console.log('🔄 AuthProvider: Setting up auth...');
    
    // Always call initializeAuth on mount - it will check if initialization is needed
    initializeAuth();

    // Set up a safety mechanism to clear stuck loading states
    const loadingTimeout = setTimeout(() => {
      const currentState = useAuthStore.getState();
      if (currentState.roleLoading) {
        console.log('⚠️ Role loading has been stuck for 30 seconds, clearing it');
        useAuthStore.getState().setRoleLoading(false);
      }
      if (currentState.isLoading) {
        console.log('⚠️ Auth loading has been stuck for 30 seconds, clearing it');
        useAuthStore.getState().setIsLoading(false);
      }
    }, 30000); // 30 seconds timeout

    // Listen for auth changes
    const { data: { subscription } } = supabasase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔥 Auth state changed:', event, 'User ID:', session?.user?.id);
        console.log('🔥 Full session object:', session);
        console.log('🔥 Event details:', { event, hasSession: !!session, hasUser: !!session?.user });
        
        if (session) {
          console.log('✅ Setting session from auth state change');
          setSession(session);
          
          // Verify session was set
          setTimeout(() => {
            const authState = useAuthStore.getState();
            console.log('🔍 Auth store after setSession:', {
              hasUser: !!authState.user,
              userId: authState.user?.id,
              hasSession: !!authState.session
            });
          }, 100);
          
          // Check user role for sign-ins and token refreshes
          if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
            console.log('🔄 Auth event detected, checking role for user ID:', session.user.id);
            
            // Get current state to check if we need to fetch role
            const currentState = useAuthStore.getState();
            
            // For SIGNED_IN events, always fetch role fresh (don't use cache for new logins)
            if (event === 'SIGNED_IN') {
              console.log('🔍 SIGNED_IN event - fetching fresh role immediately...');
              debouncedRoleCheck(session.user.id, true); // immediate = true
            } else if (event === 'TOKEN_REFRESHED' && currentState.userRole && currentState.lastRoleCheck) {
              const timeSinceLastCheck = Date.now() - currentState.lastRoleCheck;
              if (timeSinceLastCheck < 10 * 60 * 1000) { // 10 minutes
                console.log('✅ Using cached role for token refresh (last checked', Math.floor(timeSinceLastCheck / 1000), 'seconds ago):', currentState.userRole);
                return;
              } else {
                console.log('🔍 Need to fetch role for token refresh, cache is stale...');
                debouncedRoleCheck(session.user.id);
              }
            } else {
              console.log('🔍 Need to fetch role, using debounced check...');
              debouncedRoleCheck(session.user.id);
            }
          }
        } else {
          console.log('🚪 User signed out, clearing session');
          clearSession();
        }
      }
    );

    return () => {
      subscription.unsubscribe();
      clearTimeout(loadingTimeout);
      if (roleCheckTimeout) {
        clearTimeout(roleCheckTimeout);
      }
    };
  }, []); // Remove user dependency to prevent re-initialization

  return <>{children}</>;
};
