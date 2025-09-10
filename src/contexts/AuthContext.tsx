import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabasase as supabase } from '../supabase_creds/supabase';

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
      const { data: sessionData } = await supabase.auth.getSession();

      if (sessionData?.session) {
        setIsLoggedIn(true);
        setUserId(sessionData.session.user.id);

        // In a real app, you would fetch the user profile from your database
        // For now, we'll use a simplified example

        // Check if user exists in mentors table
        const { data: mentorData } = await supabase
          .from('mentor')
          .select('first_name, last_name, profile_picture')
          .eq('supabaseId', sessionData.session.user.id)
          .single();

        if (mentorData) {
          setUserType('mentor');
          setUserName(`${mentorData.first_name} ${mentorData.last_name}`);
          setUserImage(mentorData.profile_picture);
        } else {
          // Check if user exists in mentees table
          const { data: menteeData } = await supabase
            .from('mentee')
            .select('first_name, last_name, profile_picture')
            .eq('supabaseId', sessionData.session.user.id)
            .single();

          if (menteeData) {
            setUserType('mentee');
            setUserName(`${menteeData.first_name} ${menteeData.last_name}`);
            setUserImage(menteeData.profile_picture);
          } else {
            // User not found in either table
            setUserType(null);
            setUserName(sessionData.session.user.email?.split('@')[0] || 'User');
            setUserImage(null);
          }
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

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        setIsLoggedIn(true);
        setUserId(session.user.id);
        // You would fetch user profile data here similar to checkAuth
      } else if (event === 'SIGNED_OUT') {
        setIsLoggedIn(false);
        setUserType(null);
        setUserId(null);
        setUserName(null);
        setUserImage(null);
      }
    });

    return () => {
      if (authListener?.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
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
