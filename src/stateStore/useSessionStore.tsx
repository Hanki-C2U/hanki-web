import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, Session } from '@supabase/supabase-js';
import { supabasase } from '../supabase_creds/supabase';

interface SessionState {
  // Session data
  user: User | null;
  session: Session | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  userRole: 'mentor' | 'mentee' | null;
  roleLoading: boolean;
  
  // Actions
  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setUserRole: (role: 'mentor' | 'mentee' | null) => void;
  setRoleLoading: (loading: boolean) => void;
  clearSession: () => void;
  signOut: () => Promise<void>;
  checkUserRole: (userId: string) => Promise<'mentor' | 'mentee' | null>;
  
  // Derived state
  getUserId: () => string | null;
  getUserEmail: () => string | null;
  getUserMetadata: () => any;
  isMentor: () => boolean;
  isMentee: () => boolean;
}

const useSessionStore = create<SessionState>()(
  persist(
    (set, get) => ({
      // Initial state when logged out
      user: null,
      session: null,
      isAuthenticated: false,
      isLoading: true,
      userRole: null,
      roleLoading: false, 
      
      // Setting sesh from 
      setSession: (session) => {
        set({
          session,
          user: session?.user || null,
          isAuthenticated: !!session?.user,
          isLoading: false,
        });
      },
      
      setUser: (user) => {
        set({
          user,
          isAuthenticated: !!user,
          isLoading: false,
        });
      },
      
      setLoading: (loading) => {
        set({ isLoading: loading });
      },
      
      setUserRole: (role) => {
        set({ userRole: role });
      },
      
      setRoleLoading: (loading) => {
        set({ roleLoading: loading });
      },
      
      clearSession: () => {
        set({
          user: null,
          session: null,
          isAuthenticated: false,
          isLoading: false,
          userRole: null,
          roleLoading: false,
        });
      },
      
      signOut: async () => {
        try {
          // Sign out from Supabase
          await supabasase.auth.signOut();
          
          // Wipe out the store 
          set({
            user: null,
            session: null,
            isAuthenticated: false,
            isLoading: false,
            userRole: null,
            roleLoading: false,
          });
        } catch (error) {
          console.error('Error signing out:', error);
          // Still clear the store even if Supabase signout fails
          set({
            user: null,
            session: null,
            isAuthenticated: false,
            isLoading: false,
            userRole: null,
            roleLoading: false,
          });
        }
      },
      
      // role in database
      checkUserRole: async (userId: string) => {
        try {
          set({ roleLoading: true });
          
          // Check both mentor and mentee tables
          const [mentorResult, menteeResult] = await Promise.allSettled([
            supabasase.from('mentor').select('id').eq('supabaseId', userId).maybeSingle(),
            supabasase.from('mentee').select('id').eq('supabaseId', userId).maybeSingle()
          ]);
          
          let role: 'mentor' | 'mentee' | null = null;
          
          if (mentorResult.status === 'fulfilled' && mentorResult.value.data) {
            role = 'mentor';
          } else if (menteeResult.status === 'fulfilled' && menteeResult.value.data) {
            role = 'mentee';
          }
          
          set({ userRole: role, roleLoading: false });
          console.log('User role :', role);
          return role;
        } catch (error) {
          console.error(' Error checking user role:', error);
          set({ userRole: null, roleLoading: false });
          return null;
        }
      },
      
      // Derived state getters
      getUserId: () => {
        const { user } = get();
        return user?.id || null;
      },
      
      getUserEmail: () => {
        const { user } = get();
        return user?.email || null;
      },
      
      getUserMetadata: () => {
        const { user } = get();
        return user?.user_metadata || {};
      },
      
      isMentor: () => {
        const { userRole } = get();
        return userRole === 'mentor';
      },
      
      isMentee: () => {
        const { userRole } = get();
        return userRole === 'mentee';
      },
    }),
    {
      name: 'session-store', 
      partialize: (state) => ({
        user: state.user,
        session: state.session,
        isAuthenticated: state.isAuthenticated,
        userRole: state.userRole,
      }),
    }
  )
);

export default useSessionStore;
