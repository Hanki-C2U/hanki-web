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
      // Initial state
      user: null,
      session: null,
      isAuthenticated: false,
      isLoading: true,
      userRole: null,
      roleLoading: false, // Changed back to false as initial state
      
      // Actions
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
          
          // Clear the session store
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
      name: 'session-store', // Storage key
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
