import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Session, User } from '@supabase/supabase-js';
import { supabasase } from '../supabase_creds/supabase';

export type UserRole = 'mentor' | 'mentee' | null;

interface AuthState {
  user: User | null;
  session: Session | null;
  userRole: UserRole;
  isLoading: boolean;
  roleLoading: boolean;
  lastRoleCheck: number | null; 
  hasHydrated: boolean; // vals from Lstorage laoded ??
  
  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
  setUserRole: (role: UserRole) => void;
  setIsLoading: (loading: boolean) => void;
  setRoleLoading: (loading: boolean) => void;
  setHasHydrated: (hydrated: boolean) => void;
  clearSession: () => void;
  signOut: () => Promise<void>;
  initializeAuth: () => Promise<void>;
  checkUserRole: (userId: string) => Promise<UserRole>;
  getDashboardRoute: () => string;
  refreshAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      session: null,
      userRole: null,
      isLoading: true,
      roleLoading: false,
      lastRoleCheck: null,
      hasHydrated: false, // Vals loaded from Lstorg

      setSession: (session) => {
        console.log(' Setting session', session?.user?.id);
        set({ 
          session, 
          user: session?.user || null 
        });
        console.log(' Session set successfully');
      },

      setUser: (user) => set({ user }),

      setUserRole: (userRole) => {
        console.log('Setting user role:', userRole);
        set({ 
          userRole, 
          roleLoading: false,
          lastRoleCheck: Date.now()
        });
      },

      setIsLoading: (isLoading) => set({ isLoading }),

      setRoleLoading: (roleLoading) => set({ roleLoading }),

      setHasHydrated: (hasHydrated) => set({ hasHydrated }),

      clearSession: () => {
        set({
          user: null,
          session: null,
          userRole: null,
          isLoading: false,
          roleLoading: false,
          lastRoleCheck: null,
          hasHydrated: true, 
        });
      },

  signOut: async () => {
    try {
      const { error } = await supabasase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error);
      }
      get().clearSession();
    } catch (error) {
      console.error('Unexpected error during sign out:', error);
    }
  },

  initializeAuth: async () => {
    const currentState = get();
    
    console.log('initializeAuth called. Current state:', {
      hasUser: !!currentState.user,
      hasSession: !!currentState.session,
      isLoading: currentState.isLoading,
      hasHydrated: currentState.hasHydrated
    });
    
    // 
    if (currentState.user && currentState.session && !currentState.isLoading && currentState.hasHydrated) {
      return;
    }

    try {
      console.log('� Getting fresh session from Supabase...');
      set({ isLoading: true });

      const { data: { session }, error } = await supabasase.auth.getSession();
      
      if (error) {
        console.error('❌ Error getting session:', error);
        get().clearSession();
        return;
      }

      if (session?.user) {
        console.log('✅ Found valid session for user:', session.user.id);
        set({ 
          session, 
          user: session.user,
          roleLoading: true 
        });

        // Always check role during initialization (don't rely on cache during login)
        console.log('🔄 Checking user role for session...');
        const role = await get().checkUserRole(session.user.id);
        console.log('✅ Auth initialization complete. User role:', role);
        set({ userRole: role, roleLoading: false });
      } else {
        console.log('❌ No valid session found, clearing auth state');
        get().clearSession();
      }

    } catch (error) {
      console.error('💥 Error initializing auth:', error);
      get().clearSession();
    } finally {
      // Always ensure loading is set to false
      set({ isLoading: false });
    }
  },

  checkUserRole: async (userId: string): Promise<UserRole> => {
    try {
      console.log('🔍 checkUserRole: Starting role check for userId:', userId);
      set({ roleLoading: true });

      // Use a simple approach with a shorter timeout
      const timeoutMs = 8000; // 8 seconds
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('Role check timeout')), timeoutMs);
      });

      // Check both tables with detailed logging
      const roleCheckPromise = async (): Promise<UserRole> => {
        console.log('🔍 checkUserRole: Checking both mentor and mentee tables for userId:', userId);
        
        // Check mentor table first
        try {
          console.log('🔍 Querying mentor table...');
          const { data: mentorData, error: mentorError } = await supabasase
            .from('mentor')
            .select('id, first_name, email, supabaseId')
            .eq('supabaseId', userId)
            .maybeSingle();

          console.log('📊 Mentor query result:', { mentorData, mentorError });
          console.log('🔍 Mentor data details:', {
            hasData: !!mentorData,
            dataId: mentorData?.id,
            dataSupabaseId: mentorData?.supabaseId,
            searchingForUserId: userId,
            errorExists: !!mentorError,
            errorMessage: mentorError?.message
          });

          if (mentorData && !mentorError) {
            console.log('✅ User is a mentor:', mentorData.first_name, 'Email:', mentorData.email);
            return 'mentor';
          }
          
          if (mentorError) {
            console.log('ℹ️ Mentor check error:', mentorError.message, mentorError.code);
          } else {
            console.log('ℹ️ No mentor record found for userId:', userId);
          }
        } catch (error) {
          console.error('❌ Mentor table query failed:', error);
        }

        // Check mentee table
        try {
          console.log('🔍 Querying mentee table...');
          const { data: menteeData, error: menteeError } = await supabasase
            .from('mentee')
            .select('id, first_name, email, supabaseId')
            .eq('supabaseId', userId)
            .maybeSingle();

          console.log('📊 Mentee query result:', { menteeData, menteeError });
          console.log('🔍 Mentee data details:', {
            hasData: !!menteeData,
            dataId: menteeData?.id,
            dataSupabaseId: menteeData?.supabaseId,
            searchingForUserId: userId,
            errorExists: !!menteeError,
            errorMessage: menteeError?.message
          });

          if (menteeData && !menteeError) {
            console.log('✅ User is a mentee:', menteeData.first_name, 'Email:', menteeData.email);
            return 'mentee';
          }
          
          if (menteeError) {
            console.log('ℹ️ Mentee check error:', menteeError.message, menteeError.code);
          } else {
            console.log('ℹ️ No mentee record found for userId:', userId);
          }
        } catch (error) {
          console.error('❌ Mentee table query failed:', error);
        }

        console.log('⚠️ User has no role assigned - needs onboarding');
        console.log('⚠️ Checked both mentor and mentee tables for userId:', userId);
        return null;
      };

      // Race against timeout
      const result = await Promise.race([roleCheckPromise(), timeoutPromise]);
      return result;

    } catch (error) {
      console.error('💥 Error in checkUserRole:', error);
      
      // Try to use cached role if available
      const currentState = get();
      if (currentState.userRole && currentState.lastRoleCheck) {
        const timeSinceLastCheck = Date.now() - currentState.lastRoleCheck;
        if (timeSinceLastCheck < 60 * 60 * 1000) { // 1 hour
          console.log('⚡ Using cached role due to error:', currentState.userRole);
          return currentState.userRole;
        }
      }
      
      console.log('❌ No cached role available, returning null');
      return null;
    } finally {
      set({ roleLoading: false });
    }
  },

  getDashboardRoute: () => {
    const { userRole } = get();
    if (userRole === 'mentor') {
      return '/mentor-dashboard';
    } else if (userRole === 'mentee') {
      return '/mentee-dashboard';
    }
    return '/onboarding';
  },

  refreshAuth: async () => {
    try {
      console.log('🔄 Refreshing auth state...');
      
      // Get current session
      const { data: { session }, error } = await supabasase.auth.getSession();
      
      if (error) {
        console.error('❌ Error refreshing session:', error);
        get().clearSession();
        return;
      }
      
      if (session) {
        console.log('✅ Session refreshed successfully');
        get().setSession(session);
        
        // Check if we need to refresh the role (if it's been more than 5 minutes)
        const { lastRoleCheck } = get();
        const fiveMinutesAgo = Date.now() - (5 * 60 * 1000);
        
        if (!lastRoleCheck || lastRoleCheck < fiveMinutesAgo) {
          console.log('🔄 Role cache expired, refreshing role...');
          const role = await get().checkUserRole(session.user.id);
          get().setUserRole(role);
        } else {
          console.log('✅ Role cache still valid');
        }
      } else {
        console.log('❌ No session found during refresh');
        get().clearSession();
      }
    } catch (error) {
      console.error('💥 Error in refreshAuth:', error);
      get().clearSession();
    }
  },
    }),
    {
      name: 'auth-store', // Storage key
      partialize: (state) => ({
        user: state.user,
        session: state.session,
        userRole: state.userRole,
        lastRoleCheck: state.lastRoleCheck,
      }),
      onRehydrateStorage: () => (state) => {
        console.log('🔄 Auth store hydration complete');
        if (state) {
          state.setHasHydrated(true);
        }
      },
    }
  )
);
