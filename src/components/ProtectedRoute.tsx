import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuthStore } from '../store/authStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireRole?: boolean;
  allowedRoles?: ('mentor' | 'mentee')[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireRole = true,
  allowedRoles
}) => {
  const { user, userRole, isLoading, roleLoading } = useAuthStore();
  const location = useLocation();

  // Show loading while checking auth
  if (isLoading || roleLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold">Loading...</h2>
          <p className="text-gray-600">Please wait while we verify your account.</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Redirect to onboarding if role is required but not set
  if (requireRole && !userRole) {
    return <Navigate to="/onboarding" replace />;
  }

  // Check role-based access
  if (allowedRoles && userRole && !allowedRoles.includes(userRole)) {
    // Redirect to appropriate dashboard based on user's actual role
    const redirectPath = userRole === 'mentor' ? '/mentor-dashboard' : '/mentee-dashboard';
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};
