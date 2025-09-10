import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft } from "lucide-react";
import GoogleSignInButton from "../components/ui/GoogleSignInButton";
import { mockUsers } from "../data/mockData";

const Signup = () => {
  const navigate = useNavigate();
  const [googleLoading, setGoogleLoading] = useState(false);

  useEffect(() => {
    // Check for existing session
    const checkForExistingUser = () => {
      const storedUser = localStorage.getItem('mockUser');

      if (storedUser) {
        // User is already logged in, redirect to onboarding
        navigate('/onboarding');
      }
    };

    checkForExistingUser();

    // Listen for storage events to handle auth state changes across tabs
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'mockUser' && event.newValue) {
        navigate('/onboarding');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate]);

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    try {
      // Mock sign-up with Google
      // Store the first user from mockUsers as the logged in user
      const mockUser = mockUsers[0];
      localStorage.setItem('mockUser', JSON.stringify(mockUser));

      console.log('Mock Google sign-up successful');

      // Redirect to callback which will then redirect to onboarding
      navigate('/auth/callback');
    } catch (error) {
      console.error('Mock Google Sign-Up error:', error);
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
            <CardTitle className="text-2xl font-bold">Join ATLAS</CardTitle>
            <CardDescription>
              Create your account with Google to get started
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Google Sign-Up Button */}
            <GoogleSignInButton
              onGoogleSignIn={handleGoogleSignUp}
              loading={googleLoading}
              variant="signup"
            />

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in here
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;