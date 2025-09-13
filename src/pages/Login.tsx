import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/Button";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import GoogleSignInButton from "../components/ui/GoogleSignInButton";
import { supabasase } from "../supabase_creds/supabase";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const navigate = useNavigate();
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | React.ReactNode | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, userRole, isLoading, roleLoading, hasHydrated } = useAuthStore();

  // Show loading if checking authentication
  useEffect(() => {
    console.log('🔍 Login state check:', { 
      user: user?.id, 
      userRole, 
      isLoading, 
      roleLoading, 
      hasHydrated,
      timestamp: new Date().toISOString()
    });
    
    // Only redirect if user is already authenticated and has role (returning user)
    if (hasHydrated && !isLoading && !roleLoading && user && userRole) {
      console.log('🔄 Returning user detected, redirecting...');
      
      if (userRole === 'mentor') {
        console.log('✅ Redirecting returning mentor to dashboard');
        navigate('/mentor-dashboard', { replace: true });
      } else if (userRole === 'mentee') {
        console.log('✅ Redirecting returning mentee to dashboard');
        navigate('/mentee-dashboard', { replace: true });
      }
    }
  }, [user, userRole, isLoading, roleLoading, hasHydrated, navigate]);

  // Show loading if user is already authenticated but we're still checking role
  if (hasHydrated && user && (isLoading || roleLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Signing you in...</p>
          <p className="text-sm text-gray-400 mt-1">
            {isLoading && "Authenticating..."}
            {roleLoading && "Checking your account..."}
          </p>
        </div>
      </div>
    );
  }

  // Helper function to check if user exists in our database
  const checkUserExistsInDatabase = async (email: string): Promise<boolean> => {
    try {
      console.log('🔍 Checking database for user with email:', email);
      
      // Check both mentor and mentee tables
      const [mentorCheck, menteeCheck] = await Promise.all([
        supabasase.from('mentor').select('id').eq('email', email).maybeSingle(),
        supabasase.from('mentee').select('id').eq('email', email).maybeSingle()
      ]);

      console.log('📊 Database check results:', {
        mentorFound: !!mentorCheck.data && !mentorCheck.error,
        menteeFound: !!menteeCheck.data && !menteeCheck.error,
        mentorError: mentorCheck.error?.message,
        menteeError: menteeCheck.error?.message
      });

      const userExists = (mentorCheck.data && !mentorCheck.error) || (menteeCheck.data && !menteeCheck.error);
      console.log(`${userExists ? '✅' : '❌'} User ${userExists ? 'found' : 'not found'} in database`);
      
      return !!userExists;
    } catch (error) {
      console.error('❌ Error checking user in database:', error);
      // In case of error, assume user might exist to avoid blocking legitimate users
      return true;
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const { error: _googleError } = await supabasase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${import.meta.env.VITE_APP_BASE_URL ?? window.location.origin}/auth/callback`
        }
      });

      console.log('Mock Google sign-in successful');

      // Redirect to callback which will then redirect to dashboard
      navigate('/auth/callback');
    } catch (error) {
      console.error('Mock Google Sign-In error:', error);
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🔥 ATTEMPTING LOGIN:', email);
    
    // Clear any previous errors
    setLoginError(null);
    
    // Client-side validation
    if (!email || !password) {
      setLoginError('Please fill in all fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setLoginError('Please enter a valid email address');
      return;
    }

    setEmailLoading(true);
    
    try {
      // STEP 1: First check if user exists in our database tables (mentor or mentee)
      console.log('🔍 Checking if user exists in database...');
      const userExistsInDb = await checkUserExistsInDatabase(email);
      
      if (!userExistsInDb) {
        console.log('❌ User not found in database, redirecting to signup');
        setLoginError(
          <div className="text-sm">
            <p className="font-medium">Account not found</p>
            <p className="mt-1">No account exists with this email address.</p>
            <button 
              onClick={() => navigate('/signup', { state: { email } })}
              className="mt-2 text-orange-600 hover:text-orange-700 underline font-medium"
            >
              Create an account instead →
            </button>
          </div>
        );
        return;
      }

      // STEP 2: If user exists in database, attempt authentication
      console.log('✅ User found in database, attempting authentication...');
      
      const { data, error } = await supabasase.auth.signInWithPassword({
        email: email,
        password: password
      });

      console.log('📊 Login response:', { data: data?.user?.id, error });

      if (error) {
        console.error('❌ Login error:', error);
        
        // Handle specific authentication errors
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
          default:
            setLoginError(error.message || 'An error occurred during sign in. Please try again.');
        }
        return;
      }

      // STEP 3: If auth successful, complete login flow
      if (data.session && data.user) {
        console.log('✅ Auth successful! User logged in:', data.user.id);
        console.log('📧 User email:', data.user.email);
        
        console.log('🎯 Session created, manually setting in auth store...');
        
        // IMPORTANT: Manually set the session in auth store and wait for role check
        const { setSession, setUser, checkUserRole, setUserRole } = useAuthStore.getState();
        setSession(data.session);
        setUser(data.user);
        
        console.log('✅ Session manually set in auth store');
        
        // Immediately check role and wait for result before any redirects
        console.log('🔄 Checking user role immediately...');
        try {
          const userRole = await checkUserRole(data.user.id);
          console.log('✅ Role check completed:', userRole);
          setUserRole(userRole);
          
          // Now redirect based on role
          if (userRole === 'mentor') {
            console.log('✅ Redirecting mentor to dashboard');
            navigate('/mentor-dashboard', { replace: true });
          } else if (userRole === 'mentee') {
            console.log('✅ Redirecting mentee to dashboard');
            navigate('/mentee-dashboard', { replace: true });
          } else {
            console.log('⚠️ No role found, redirecting to onboarding');
            navigate('/onboarding', { replace: true });
          }
        } catch (error) {
          console.error('❌ Role check failed:', error);
          // Fallback to onboarding if role check fails
          navigate('/onboarding', { replace: true });
        }
        
        console.log('⏳ Waiting for auth store to update and redirect...');
        
      } else {
        console.error('❌ No session or user returned from login');
        setLoginError('Login failed. Please try again.');
      }

    } catch (error: any) {
      console.error('❌ Unexpected sign-in error:', error);
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
              Sign in to your ATLAS account with Google
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