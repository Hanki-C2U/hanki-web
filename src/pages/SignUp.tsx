import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/Button";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import GoogleSignInButton from "../components/ui/GoogleSignInButton";
import { supabasase } from "../supabase_creds/supabase";
import useSessionStore from "../stateStore/useSessionStore";

const Signup = () => {
  const navigate = useNavigate();
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { session, isLoading,setSession } = useSessionStore();
  const [password,setPassword] = useState('')
  const [confirmPassword,setconfirmPassword] = useState('')
  const [showError,setError] = useState(false)
  const [emailLoading, setEmailLoading] = useState(false)
  const [signupError, setSignupError] = useState<string | null>(null)

  // Redirect if already logged in
  useEffect(() => {
    if (!isLoading && session) {
      navigate('/onboarding', { replace: true });
    }
  }, [session, isLoading, navigate]);

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

  const handleEmailSignUp = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    // Clear any previous errors
    setSignupError(null);
    
    // Client-side validation
    if (!email || !password || !confirmPassword) {
      setSignupError('Please fill in all fields');
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
            setSignupError('An account with this email already exists. Try signing in instead.');
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

      // Successful signup - go straight to onboarding
      if (data.user) {
        // Set session if available, otherwise the auth callback will handle it
        if (data.session) {
          setSession(data.session);
        }
        
        console.log('Sign-up successful!');
        navigate('/onboarding');
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

            <form className="space-y-4" action={handleEmailSignUp} method="post">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
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
                  
                  onChange={(e)=>{
                    setconfirmPassword(e.target.value)
                    const newConfirmPassword = e.target.value;
                    if(password && newConfirmPassword) {
                      setError(password !== newConfirmPassword);
                    } else {
                      setError(false);
                    }
                  }}
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
                {showError && <span className="text-sm text-red-400">Passwords do not match</span>}
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