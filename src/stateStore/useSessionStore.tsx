import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, Session } from '@supabase/supabase-js';

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
