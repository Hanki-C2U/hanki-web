import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabasase } from "../supabase_creds/supabase";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the current session
        const { data: { session }, error } = await supabasase.auth.getSession();

        if (error) {
          console.error('Error getting session:', error);
          navigate('/login');
          return;
        }

        if (session && session.user) {
          // Check if user already has a profile in our database
          const userId = session.user.id;
          
          // Check both mentor and mentee tables
          const [mentorResult, menteeResult] = await Promise.all([
            supabasase.from('mentor').select('id').eq('supabaseId', userId).single(),
            supabasase.from('mentee').select('id').eq('supabaseId', userId).single()
          ]);

          if (mentorResult.data) {
            // User is a mentor, redirect to mentor dashboard
            navigate('/mentor-dashboard');
          } else if (menteeResult.data) {
            // User is a mentee, redirect to mentee dashboard
            navigate('/mentee-dashboard');
          } else {
            // New user, redirect to onboarding
            navigate('/onboarding');
          }
        } else {
          // No session, redirect to login
          navigate('/login');
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        navigate('/login');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold mb-2">Signing you in...</h2>
        <p className="text-muted-foreground">Please wait while we set up your account.</p>
      </div>
    </div>
  );
};

export default AuthCallback;
