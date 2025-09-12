import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
// Import only what we need to avoid unused warnings
import { mockMentors, mockMentees } from '../data/mockData';

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

          // Check if user is a mentor or mentee
          if (user.userType === 'mentor') {
            const mentor = mockMentors.find(m => m.supabaseId === user.id);
            if (mentor) {
              setUserType('mentor');
              setUserName(`${mentor.firstName} ${mentor.lastName}`);
              setUserImage(mentor.profilePicture);
            }
          } else {
            const mentee = mockMentees.find(m => m.supabaseId === user.id);
            if (mentee) {
              setUserType('mentee');
              setUserName(`${mentee.firstName} ${mentee.lastName}`);
              setUserImage(mentee.profilePicture);
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
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'mockUser') {
        if (event.newValue) {
          try {
            const user = JSON.parse(event.newValue);
            setIsLoggedIn(true);
            setUserId(user.id);
            setUserType(user.userType);

            if (user.userType === 'mentor') {
              const mentor = mockMentors.find(m => m.supabaseId === user.id);
              if (mentor) {
                setUserName(`${mentor.firstName} ${mentor.lastName}`);
                setUserImage(mentor.profilePicture);
              }
            } else {
              const mentee = mockMentees.find(m => m.supabaseId === user.id);
              if (mentee) {
                setUserName(`${mentee.firstName} ${mentee.lastName}`);
                setUserImage(mentee.profilePicture);
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
