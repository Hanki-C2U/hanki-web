import { useEffect } from "react";
import { useNavigate } from "react-router";
import { mockMentees, mockMentors } from "../data/mockData";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the current mock user from localStorage
        const storedUser = localStorage.getItem('mockUser');

        if (storedUser) {
          const mockUser = JSON.parse(storedUser);
          const userId = mockUser.id;

          // Check if this user exists in our mock mentor or mentee data
          const existingMentor = mockMentors.find(mentor => mentor.supabaseId === userId);
          const existingMentee = mockMentees.find(mentee => mentee.supabaseId === userId);

          if (existingMentor) {
            // User is a mentor, redirect to mentor dashboard
            navigate('/mentor-dashboard');
          } else if (existingMentee) {
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
