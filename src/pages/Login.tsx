import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      // STEP 1: Check if user exists in Supabase Auth first
      console.log('🔍 Checking if user exists in auth system...');
      
      const { data, error } = await supabasase.auth.signInWithPassword({
        email: email,
        password: password
      });

      console.log('📊 Login response:', { data: data?.user?.id, error });

      if (error) {
        console.error('❌ Login error:', error);
        
        // Handle specific authentication errors
        if (error.message === 'Invalid login credentials') {
          // Check if it's because user doesn't exist
          await handleUserNotFound(email);
          return;
        }
        
        // Handle other auth errors
        switch (error.message) {
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

      // STEP 2: If auth successful, verify user exists in our database
      if (data.session && data.user) {
        console.log('✅ Auth successful! User logged in:', data.user.id);
        console.log('📧 User email:', data.user.email);
        
        // DEBUG: Check what's actually in the database
        await debugDatabaseUser(data.user.email!, data.user.id);
        
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

  // Helper function to handle when user doesn't exist in auth
  const handleUserNotFound = async (email: string) => {
    console.log('🔍 Checking if user might not exist...');
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
  };

  // Helper function to verify user exists in our database
  const verifyUserInDatabase = async (userId: string) => {
    try {
      console.log('🔍 Verifying user in database...');
      
      // Check if user exists in either mentor or mentee table
      const [mentorCheck, menteeCheck] = await Promise.all([
        supabasase.from('mentor').select('id').eq('supabaseId', userId).single(),
        supabasase.from('mentee').select('id').eq('supabaseId', userId).single()
      ]);

      const mentorExists = mentorCheck.data && !mentorCheck.error;
      const menteeExists = menteeCheck.data && !menteeCheck.error;

      if (!mentorExists && !menteeExists) {
        console.log('⚠️ User authenticated but not in database - needs onboarding');
        // User is authenticated but hasn't completed onboarding
        // This will be handled by the auth state listener
      } else {
        console.log('✅ User verified in database');
        // User exists in database - login successful
        // Navigation will be handled by useEffect
      }
    } catch (error) {
      console.error('❌ Error verifying user in database:', error);
      // Continue with login flow even if database check fails
    }
  };

  // DEBUG: Detailed database checking
  const debugDatabaseUser = async (email: string, userId: string) => {
    console.log('🔍 DEBUG: Checking database for user:', { email, userId });
    
    try {
      // Check mentor table by email
      const { data: mentorData, error: mentorError } = await supabasase
        .from('mentor')
        .select('*')
        .eq('email', email);
      
      console.log('👨‍🏫 Mentor table check (by email):', { mentorData, mentorError });
      
      // Check mentee table by email
      const { data: menteeData, error: menteeError } = await supabasase
        .from('mentee')
        .select('*')
        .eq('email', email);
        
      console.log('👨‍🎓 Mentee table check (by email):', { menteeData, menteeError });
      
      // Check by supabaseId
      const { data: mentorById, error: mentorByIdError } = await supabasase
        .from('mentor')
        .select('*')
        .eq('supabaseId', userId);
        
      console.log('🆔 Mentor by supabaseId:', { mentorById, mentorByIdError });
      
      const { data: menteeById, error: menteeByIdError } = await supabasase
        .from('mentee')
        .select('*')
        .eq('supabaseId', userId);
        
      console.log('🆔 Mentee by supabaseId:', { menteeById, menteeByIdError });
      
      // Get sample records to see what's in the database
      const { data: sampleMentors } = await supabasase
        .from('mentor')
        .select('id, email, supabaseId, first_name, last_name')
        .limit(3);
        
      const { data: sampleMentees } = await supabasase
        .from('mentee')
        .select('id, email, supabaseId, first_name, last_name')
        .limit(3);
        
      console.log('📋 Sample mentor records:', sampleMentors);
      console.log('📋 Sample mentee records:', sampleMentees);
      
    } catch (error) {
      console.error('💥 Database debug error:', error);
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