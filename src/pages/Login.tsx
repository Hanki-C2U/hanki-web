import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/Button";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import GoogleSignInButton from "../components/ui/GoogleSignInButton";
import { supabasase } from "../supabase_creds/supabase";
import useSessionStore from "../stateStore/useSessionStore";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { session, isLoading, setSession } = useSessionStore();

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

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear any previous errors
    setLoginError(null);
    
    // Client-side validation
    if (!email || !password) {
      setLoginError('Please fill in all fields');
      return;
    }

    setEmailLoading(true);
    
    try {
      const { data, error } = await supabasase.auth.signInWithPassword({
        email: email,
        password: password
      });

      if (error) {
        // Handle different types of Supabase auth errors
        switch (error.message) {
          case 'Invalid login credentials':
            setLoginError('Invalid email or password. Please check your credentials and try again.');
            break;
          case 'Email not confirmed':
            setLoginError('Please check your email and click the confirmation link to verify your account.');
            break;
          case 'Too many requests':
            setLoginError('Too many login attempts. Please wait a moment before trying again.');
            break;
          case 'User not found':
            setLoginError('No account found with this email. Please sign up first.');
            break;
          default:
            setLoginError(error.message || 'An error occurred during sign in. Please try again.');
        }
        return;
      }

      // Successful login
      if (data.session) {
        setSession(data.session);
        console.log('Sign-in successful!');
        navigate('/home');
      }

    } catch (error: any) {
      console.error('Unexpected sign-in error:', error);
      setLoginError('An unexpected error occurred. Please try again.');
    } finally {
      setEmailLoading(false);
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
              Sign in to your SkillsConnect account
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Error Display */}
            {loginError && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-red-800 text-sm">{loginError}</p>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleEmailSignIn}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={emailLoading}
              >
                {emailLoading ? "Signing In..." : "Sign In with Email"}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

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