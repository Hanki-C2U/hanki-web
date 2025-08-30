import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft } from "lucide-react";
import GoogleSignInButton from "../components/ui/GoogleSignInButton";
import { supabasase } from "../supabase_creds/supabase";
import useSessionStore from "../stateStore/useSessionStore";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [googleLoading, setGoogleLoading] = useState(false);
  const { session, isLoading } = useSessionStore();

  // Redirect if already logged in, but not if we're coming from auth callback
  useEffect(() => {
    // Don't auto-redirect if we're in the middle of OAuth flow
    const isFromAuthCallback = location.state?.fromAuthCallback || 
                               document.referrer.includes('/auth/callback');
    
    if (!isLoading && session && !isFromAuthCallback) {
      navigate('/home', { replace: true });
    }
  }, [session, isLoading, navigate, location]);

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const { error } = await supabasase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) {
        console.error('Google Sign-In error:', error);
        throw error;
      }

      // The redirect will be handled by Supabase
      console.log('Google Sign-In initiated successfully');
    } catch (error) {
      console.error('Google Sign-In error:', error);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <Card className="shadow-card gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to your SkillsConnect account with Google
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Google Sign-In Button */}
            <GoogleSignInButton 
              variant="signin"
              onGoogleSignIn={handleGoogleSignIn}
              loading={googleLoading}
            />
            
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline">
                Sign up here
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;