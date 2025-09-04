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

  const debouncedRoleCheck = (userId: string) => {
    if (roleCheckTimeout) {
      clearTimeout(roleCheckTimeout);
    }
    
    roleCheckTimeout = setTimeout(async () => {
      console.log('🔍 Fetching user role from database (debounced)...');
      const role = await checkUserRole(userId);
      console.log('✅ Role check complete, result:', role);
      setUserRole(role);
    }, 1000); // Wait 1 second before checking role
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
        
        if (session) {
          console.log('✅ Setting session from auth state change');
          setSession(session);
          
          // Check user role for sign-ins and token refreshes
          if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
            console.log('🔄 Auth event detected, checking role for user ID:', session.user.id);
            
            // Get current state to check if we need to fetch role
            const currentState = useAuthStore.getState();
            
            // For token refresh, check if we have a recent role check
            if (event === 'TOKEN_REFRESHED' && currentState.userRole && currentState.lastRoleCheck) {
              const timeSinceLastCheck = Date.now() - currentState.lastRoleCheck;
              if (timeSinceLastCheck < 10 * 60 * 1000) { // 10 minutes
                console.log('✅ Using cached role for token refresh (last checked', Math.floor(timeSinceLastCheck / 1000), 'seconds ago):', currentState.userRole);
                return;
              }
            }
            
            // For SIGNED_IN events, check if we already have a role and it's recent
            if (event === 'SIGNED_IN' && currentState.userRole && currentState.lastRoleCheck) {
              const timeSinceLastCheck = Date.now() - currentState.lastRoleCheck;
              if (timeSinceLastCheck < 5 * 60 * 1000) { // 5 minutes
                console.log('✅ Using cached role for sign-in (last checked', Math.floor(timeSinceLastCheck / 1000), 'seconds ago):', currentState.userRole);
                return;
              }
            }
            
            // Only fetch role if we don't have one or it's stale
            console.log('🔍 Need to fetch role, using debounced check...');
            debouncedRoleCheck(session.user.id);
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
