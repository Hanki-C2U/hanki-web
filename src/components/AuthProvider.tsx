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
            const currentUserRole = useAuthStore.getState().userRole;
            if (event === 'TOKEN_REFRESHED' && currentUserRole) {
              console.log('✅ Using existing role for token refresh:', currentUserRole);
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

    return () => {
      subscription.unsubscribe();
    };
  }, []); // Remove dependencies that cause infinite loop

  return <>{children}</>;
};
