import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabasase } from "../supabase_creds/supabase";

const AuthCallback = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        console.log('AuthCallback: Processing authentication...');
        
        // Give useAuthInit a moment to process the session
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Get the current session to check if auth was successful
        const { data: { session: currentSession }, error } = await supabasase.auth.getSession();

        if (error) {
          console.error('Error getting session:', error);
          navigate('/login', { replace: true });
          return;
        }

        if (currentSession && currentSession.user) {
          console.log('AuthCallback: Session found, checking user profile...');
          
          // Check if user already has a profile in our database
          const userId = currentSession.user.id;
          
          console.log('AuthCallback: Checking user profile for:', userId);
          
          // Check both mentor and mentee tables
          const [mentorResult, menteeResult] = await Promise.all([
            supabasase.from('mentor').select('id').eq('supabaseId', userId).single(),
            supabasase.from('mentee').select('id').eq('supabaseId', userId).single()
          ]);

          if (mentorResult.data) {
            // User is a mentor, redirect to home
            console.log('AuthCallback: User is mentor, redirecting to /home');
            navigate('/mentor-dashboard', { replace: true });
          } else if (menteeResult.data) {
            // User is a mentee, redirect to home
            console.log('AuthCallback: User is mentee, redirecting to /home');
            navigate('/mentee-dashboard', { replace: true });
          } else {
            // New user, redirect to onboarding
            console.log('AuthCallback: New user, redirecting to /onboarding');
            navigate('/onboarding', { replace: true });
          }
        } else {
          // No session, redirect to login
          console.log('AuthCallback: No session found, redirecting to /login');
          navigate('/login', { replace: true });
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        navigate('/login', { replace: true });
      } finally {
        setIsProcessing(false);
      }
    };

    handleAuthCallback();
  }, [navigate]);

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">Signing you in...</h2>
          <p className="text-muted-foreground">Please wait while we set up your account.</p>
        </div>
      </div>
    );
  }

  return null;
};

export default AuthCallback;
