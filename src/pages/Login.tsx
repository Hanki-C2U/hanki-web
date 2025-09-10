import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft } from "lucide-react";
import GoogleSignInButton from "../components/ui/GoogleSignInButton";
import { mockUsers } from "../data/mockData";

const Login = () => {
  const navigate = useNavigate();
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      // Mock sign-in with Google
      // Store the first user as the logged in user
      const mockUser = mockUsers[0];
      localStorage.setItem('mockUser', JSON.stringify(mockUser));

      console.log('Mock Google sign-in successful');

      // Redirect to callback which will then redirect to dashboard
      navigate('/auth/callback');
    } catch (error) {
      console.error('Mock Google Sign-In error:', error);
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
              Sign in to your ATLAS account with Google
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