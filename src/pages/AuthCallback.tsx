import { useEffect,useState } from "react";
import { useNavigate } from "react-router";
import { supabasase } from "../supabase_creds/supabase";
import { useAuthStore } from "../store/authStore";

const AuthCallback = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(true);
  const { checkUserRole, getDashboardRoute, setUserRole } = useAuthStore();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        console.log('AuthCallback: Processing authentication...');
        
        // Give auth state time to settle
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Get the current session to check if auth was successful
        const { data: { session: currentSession }, error } = await supabasase.auth.getSession();

        if (error) {
          console.error('Error getting session:', error);
          navigate('/login', { replace: true });
          return;
        }

        if (currentSession && currentSession.user) {
          console.log('AuthCallback: Session found, checking user role...');
          
          const userId = currentSession.user.id;
          console.log('AuthCallback: Checking role for user:', userId);
          
          // Use the auth store's role checking method
          const userRole = await checkUserRole(userId);
          
          // Update the auth store with the role
          setUserRole(userRole);
          
          // Get the appropriate dashboard route
          const dashboardRoute = getDashboardRoute();
          console.log('AuthCallback: Redirecting to:', dashboardRoute);
          navigate(dashboardRoute, { replace: true });
        } else {
          console.log('AuthCallback: No session found, redirecting to login');
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
  }, [navigate, checkUserRole, getDashboardRoute, setUserRole]);

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
