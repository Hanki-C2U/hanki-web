import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useSessionStore from '../stateStore/useSessionStore';

/**
 * Component to handle users who have authentication but incomplete onboarding
 * This addresses the case where users have a Supabase session but no database record
 */
const IncompleteOnboardingHandler = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, userRole, roleLoading, isAuthenticated } = useSessionStore();

  useEffect(() => {
    // Only check if we're not already on onboarding or auth-related pages
    const isOnboardingFlow = ['/onboarding', '/auth/callback', '/login', '/signup'].includes(location.pathname);
    
    if (!isOnboardingFlow && isAuthenticated && user && !roleLoading && userRole === null) {
      console.log('IncompleteOnboardingHandler: User has session but no role, redirecting to onboarding');
      navigate('/onboarding', { replace: true });
    }
  }, [user, userRole, roleLoading, isAuthenticated, location.pathname, navigate]);

  return <>{children}</>;
};

export default IncompleteOnboardingHandler;
