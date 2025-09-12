import {type ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredUserType?: 'mentor' | 'mentee';
}

export default function ProtectedRoute({ children, requiredUserType }: ProtectedRouteProps) {
  const { isLoggedIn, userType } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } else if (requiredUserType && userType !== requiredUserType) {
      // If specific user type is required and doesn't match
      navigate('/');
    }
  }, [isLoggedIn, userType, requiredUserType, navigate]);

  // While checking auth status, you could show a loading spinner
  if (!isLoggedIn) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  // If user type is required and doesn't match
  if (requiredUserType && userType !== requiredUserType) {
    return <div className="flex items-center justify-center min-h-screen">
      Unauthorized. Redirecting...
    </div>;
  }

  return <>{children}</>;
}
