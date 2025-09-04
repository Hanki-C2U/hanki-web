import { useState, useEffect } from "react";
import { Link, useNavigate,useLocation } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/Button";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import GoogleSignInButton from "../components/ui/GoogleSignInButton";
import { supabasase } from "../supabase_creds/supabase";
import { useAuthStore } from "../store/authStore";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, userRole, isLoading, roleLoading, hasHydrated } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [signupError, setSignupError] = useState<string | React.ReactNode | null>(null);

  // Prefill email if redirected from login
  useEffect(() => {
    const state = location.state as { email?: string };
    if (state?.email) {
      setEmail(state.email);
    }
  }, [location.state]);

  // Redirect if already logged in - but allow signup even if session exists without role
  useEffect(() => {
    console.log('🔍 Signup redirect check:', { 
      user: user?.id, 
      userRole, 
      isLoading, 
      roleLoading, 
      hasHydrated 
    });
    
    if (hasHydrated && !isLoading && !roleLoading && user && userRole) {
      // Only redirect if user has a valid role
      if (userRole === 'mentor') {
        console.log('✅ Redirecting to mentor dashboard');
        navigate('/mentor-dashboard', { replace: true });
      } else if (userRole === 'mentee') {
        console.log('✅ Redirecting to mentee dashboard');
        navigate('/mentee-dashboard', { replace: true });
      }
    }
    // If user exists but no role, allow them to stay on signup page to create a new account
  }, [user, userRole, isLoading, roleLoading, hasHydrated, navigate]);

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    try {
      const { error } = await supabasase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) {
        console.error('Google Sign-Up error:', error);
        throw error;
      }

      console.log('Google Sign-Up initiated successfully');
    } catch (error) {
      console.error('Google Sign-Up error:', error);
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear any previous errors
    setSignupError(null);
    
    // Client-side validation
    if (!email || !password || !confirmPassword) {
      setSignupError('Please fill in all fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSignupError('Please enter a valid email address');
      return;
    }

    if (password !== confirmPassword) {
      setSignupError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setSignupError('Password must be at least 6 characters long');
      return;
    }

    setEmailLoading(true);
    
    try {
      const { data, error } = await supabasase.auth.signUp({
        email: email,
        password: password,
        options: {
          // This tells Supabase where to redirect after email confirmation
          // But if email confirmation is disabled in dashboard, this won't be needed
          emailRedirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) {
        // Handle different types of Supabase auth errors
        switch (error.message) {
          case 'User already registered':
            setSignupError(
              <div className="text-sm">
                <p className="font-medium">Account already exists</p>
                <p className="mt-1">An account with this email already exists.</p>
                <button 
                  onClick={() => navigate('/login', { state: { email } })}
                  className="mt-2 text-orange-600 hover:text-orange-700 underline font-medium"
                >
                  Sign in instead →
                </button>
              </div>
            );
            break;
          case 'Invalid email':
            setSignupError('Please enter a valid email address.');
            break;
          case 'Password should be at least 6 characters':
            setSignupError('Password must be at least 6 characters long.');
            break;
          case 'Signup is disabled':
            setSignupError('Account registration is currently disabled. Please try again later.');
            break;
          default:
            setSignupError(error.message || 'An error occurred during sign up. Please try again.');
        }
        return;
      }

      // Successful signup
      if (data.user) {
        console.log('✅ Sign-up successful for user:', data.user.id);
        
        // Check if email confirmation is required
        if (data.session) {
          console.log('✅ User has immediate session, going to onboarding');
          // User has immediate session, can go to onboarding
          navigate('/onboarding', { replace: true });
        } else {
          console.log('📧 Email confirmation required');
          // Email confirmation required
          setSignupError(
            <div className="text-sm">
              <p className="font-medium text-green-600">Account created successfully!</p>
              <p className="mt-1">Please check your email and click the confirmation link to verify your account.</p>
              <p className="mt-2 text-gray-600">After confirmation, you'll be redirected to complete your profile.</p>
            </div>
          );
        }
      }

    } catch (error: any) {
      console.error('Unexpected sign-up error:', error);
      setSignupError('An unexpected error occurred. Please try again.');
    } finally {
      setEmailLoading(false);
    }
  }

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
            <CardTitle className="text-2xl font-bold">Join SkillsConnect</CardTitle>
            <CardDescription>
              Create your account to get started
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Error Display */}
            {signupError && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-red-800 text-sm">{signupError}</p>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleEmailSignUp}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password must be atleast 6 letters"
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

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
                {password && confirmPassword && password !== confirmPassword && (
                  <span className="text-sm text-red-400">Passwords do not match</span>
                )}
              </div>

              

              <Button 
                type="submit" 
                className="w-full"
                disabled={emailLoading}
              >
                {emailLoading ? "Creating Account..." : "Sign Up with Email"}
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