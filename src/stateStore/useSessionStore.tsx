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
  
  // Actions
  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  clearSession: () => void;
  signOut: () => Promise<void>;
  
  // Derived state
  getUserId: () => string | null;
  getUserEmail: () => string | null;
  getUserMetadata: () => any;
}

const useSessionStore = create<SessionState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      session: null,
      isAuthenticated: false,
      isLoading: true,
      
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
      
      clearSession: () => {
        set({
          user: null,
          session: null,
          isAuthenticated: false,
          isLoading: false,
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
          });
        } catch (error) {
          console.error('Error signing out:', error);
          // Still clear the store even if Supabase signout fails
          set({
            user: null,
            session: null,
            isAuthenticated: false,
            isLoading: false,
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
    }),
    {
      name: 'session-store', // Storage key
      partialize: (state) => ({
        user: state.user,
        session: state.session,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useSessionStore;
