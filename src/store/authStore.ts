import { create } from 'zustand';
import type { Session, User } from '@supabase/supabase-js';
import { supabasase } from '../supabase_creds/supabase';

export type UserRole = 'mentor' | 'mentee' | null;

interface AuthState {
  user: User | null;
  session: Session | null;
  userRole: UserRole;
  isLoading: boolean;
  roleLoading: boolean;
  lastRoleCheck: number | null; // Timestamp of last role check
  
  // Actions
  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
  setUserRole: (role: UserRole) => void;
  setIsLoading: (loading: boolean) => void;
  setRoleLoading: (loading: boolean) => void;
  clearSession: () => void;
  signOut: () => Promise<void>;
  initializeAuth: () => Promise<void>;
  checkUserRole: (userId: string) => Promise<UserRole>;
  getDashboardRoute: () => string;
  refreshAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  session: null,
  userRole: null,
  isLoading: true,
  roleLoading: false,
  lastRoleCheck: null,

  setSession: (session) => {
    set({ 
      session, 
      user: session?.user || null 
    });
  },

  setUser: (user) => set({ user }),

  setUserRole: (userRole) => set({ 
    userRole, 
    roleLoading: false,
    lastRoleCheck: Date.now()
  }),

  setIsLoading: (isLoading) => set({ isLoading }),

  setRoleLoading: (roleLoading) => set({ roleLoading }),

  clearSession: () => {
    set({
      user: null,
      session: null,
      userRole: null,
      isLoading: false,
      roleLoading: false,
      lastRoleCheck: null,
    });
  },

  signOut: async () => {
    try {
      const { error } = await supabasase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error);
      }
      // Clear the store
      get().clearSession();
    } catch (error) {
      console.error('Unexpected error during sign out:', error);
    }
  },

  initializeAuth: async () => {
    try {
      console.log('🚀 Initializing auth...');
      set({ isLoading: true });

      const { data: { session }, error } = await supabasase.auth.getSession();
      
      if (error) {
        console.error('❌ Error getting session:', error);
        set({ isLoading: false });
        return;
      }

      if (session?.user) {
        console.log('✅ Found existing session for user:', session.user.id);
        set({ 
          session, 
          user: session.user,
          roleLoading: true 
        });

        // Check user role
        const role = await get().checkUserRole(session.user.id);
        set({ userRole: role, roleLoading: false });
        console.log('✅ Auth initialization complete. User role:', role);
      } else {
        console.log('❌ No existing session found');
      }

      set({ isLoading: false });
    } catch (error) {
      console.error('💥 Error initializing auth:', error);
      set({ 
        isLoading: false,
        roleLoading: false,
        user: null,
        session: null,
        userRole: null 
      });
    }
  },

  checkUserRole: async (userId: string): Promise<UserRole> => {
    try {
      console.log('🔍 checkUserRole: Starting role check for userId:', userId);
      set({ roleLoading: true });

      // Check if user is a mentor
      console.log('🔍 checkUserRole: Checking mentor table...');
      const { data: mentorData, error: mentorError } = await supabasase
        .from('mentor')
        .select('id, first_name, supabaseId')
        .eq('supabaseId', userId)
        .single();

      console.log('🔍 checkUserRole: Mentor query result:', { data: mentorData, error: mentorError });

      if (mentorError && mentorError.code !== 'PGRST116') {
        console.error('❌ Error checking mentor role:', mentorError);
      }

      if (mentorData) {
        console.log('✅ User is a mentor:', mentorData.first_name, 'with supabaseId:', mentorData.supabaseId);
        return 'mentor';
      }

      // Check if user is a mentee
      console.log('🔍 checkUserRole: Checking mentee table...');
      const { data: menteeData, error: menteeError } = await supabasase
        .from('mentee')
        .select('id, first_name, supabaseId')
        .eq('supabaseId', userId)
        .single();

      console.log('🔍 checkUserRole: Mentee query result:', { data: menteeData, error: menteeError });

      if (menteeError && menteeError.code !== 'PGRST116') {
        console.error('❌ Error checking mentee role:', menteeError);
      }

      if (menteeData) {
        console.log('✅ User is a mentee:', menteeData.first_name, 'with supabaseId:', menteeData.supabaseId);
        return 'mentee';
      }

      console.log('⚠️ User has no role assigned yet - needs onboarding');
      return null;
    } catch (error) {
      console.error('💥 Error in checkUserRole:', error);
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
}));
