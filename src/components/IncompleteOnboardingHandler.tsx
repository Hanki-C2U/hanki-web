import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

/**
 * Component to handle users who have authentication but incomplete onboarding
 * This addresses the case where users have a Supabase session but no database record
 */
const IncompleteOnboardingHandler = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, userRole, roleLoading, isLoading, hasHydrated } = useAuthStore();
  const isAuthenticated = !!user;

  useEffect(() => {
    // Only check if we're not already on onboarding or auth-related pages
    const isOnboardingFlow = ['/onboarding', '/auth/callback', '/login', '/signup', '/'].includes(location.pathname);
    
    console.log('🔍 IncompleteOnboardingHandler check:', {
      isOnboardingFlow,
      isAuthenticated,
      user: !!user,
      userId: user?.id,
      userRole,
      roleLoading,
      isLoading,
      hasHydrated,
      pathname: location.pathname,
      shouldRedirect: !isOnboardingFlow && hasHydrated && isAuthenticated && user && !isLoading && !roleLoading && userRole === null
    });
    
    // Wait for hydration, auth loading, and role loading to complete before making redirect decisions
    // Only redirect if we're certain the user has no role (not just loading)
    if (!isOnboardingFlow && hasHydrated && isAuthenticated && user && !isLoading && !roleLoading && userRole === null) {
      console.log('🚨 IncompleteOnboardingHandler: User has session but no role (after hydration complete), redirecting to onboarding');
      console.log('🚨 User ID that has no role:', user.id);
      navigate('/onboarding', { replace: true });
    }
  }, [user, userRole, roleLoading, isAuthenticated, isLoading, hasHydrated, location.pathname, navigate]);

  return <>{children}</>;
};

export default IncompleteOnboardingHandler;
