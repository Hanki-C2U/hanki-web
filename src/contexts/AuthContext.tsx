import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { supabasase } from '../supabase_creds/supabase';

type UserType = 'mentor' | 'mentee';

interface AuthContextType {
  isLoggedIn: boolean;
  userType: UserType | null;
  userId: string | null;
  userName: string | null;
  userImage: string | null;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      // Simulate getting session data
      const stored = localStorage.getItem('mockUser');

      if (stored) {
        try {
          const user = JSON.parse(stored);

          setIsLoggedIn(true);
          setUserId(user.id);

          // Check if user is a mentor or mentee by querying Supabase
          if (user.userType === 'mentor') {
            try {
              const { data: mentor, error } = await supabasase
                .from('mentor')
                .select('first_name, last_name, profile_picture')
                .eq('supabaseId', user.id)
                .single();

              if (mentor && !error) {
                setUserType('mentor');
                setUserName(`${mentor.first_name} ${mentor.last_name}`);
                setUserImage(mentor.profile_picture);
              }
            } catch (error) {
              console.error('Error fetching mentor data:', error);
            }
          } else {
            try {
              const { data: mentee, error } = await supabasase
                .from('mentee')
                .select('first_name, last_name, profile_picture')
                .eq('supabaseId', user.id)
                .single();

              if (mentee && !error) {
                setUserType('mentee');
                setUserName(`${mentee.first_name} ${mentee.last_name}`);
                setUserImage(mentee.profile_picture);
              }
            } catch (error) {
              console.error('Error fetching mentee data:', error);
            }
          }
        } catch (error) {
          console.error('Error parsing stored user', error);
          // Clear invalid data
          localStorage.removeItem('mockUser');
        }
      } else {
        setIsLoggedIn(false);
        setUserType(null);
        setUserId(null);
        setUserName(null);
        setUserImage(null);
      }
    };

    checkAuth();

    // Listen for storage events to handle auth state changes across tabs
    const handleStorageChange = async (event: StorageEvent) => {
      if (event.key === 'mockUser') {
        if (event.newValue) {
          try {
            const user = JSON.parse(event.newValue);
            setIsLoggedIn(true);
            setUserId(user.id);
            setUserType(user.userType);

            if (user.userType === 'mentor') {
              try {
                const { data: mentor, error } = await supabasase
                  .from('mentor')
                  .select('first_name, last_name, profile_picture')
                  .eq('supabaseId', user.id)
                  .single();

                if (mentor && !error) {
                  setUserName(`${mentor.first_name} ${mentor.last_name}`);
                  setUserImage(mentor.profile_picture);
                }
              } catch (error) {
                console.error('Error fetching mentor data in storage event:', error);
              }
            } else {
              try {
                const { data: mentee, error } = await supabasase
                  .from('mentee')
                  .select('first_name, last_name, profile_picture')
                  .eq('supabaseId', user.id)
                  .single();

                if (mentee && !error) {
                  setUserName(`${mentee.first_name} ${mentee.last_name}`);
                  setUserImage(mentee.profile_picture);
                }
              } catch (error) {
                console.error('Error fetching mentee data in storage event:', error);
              }
            }
          } catch (error) {
            console.error('Error parsing storage event', error);
          }
        } else {
          // User signed out
          setIsLoggedIn(false);
          setUserType(null);
          setUserId(null);
          setUserName(null);
          setUserImage(null);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const signOut = async () => {
    localStorage.removeItem('mockUser');
    setIsLoggedIn(false);
    setUserType(null);
    setUserId(null);
    setUserName(null);
    setUserImage(null);
  };

  const value = {
    isLoggedIn,
    userType,
    userId,
    userName,
    userImage,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
