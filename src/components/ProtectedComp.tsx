import { useEffect, type PropsWithChildren } from 'react'
import { useNavigate } from 'react-router'
import { useAuthStore } from '../store/authStore'

interface ProtectedCompProps extends PropsWithChildren {
  allowedRoles?: ('mentor' | 'mentee')[];
}

function ProtectedComp({ children, allowedRoles }: ProtectedCompProps) {
    const navigate = useNavigate()
    const { isLoading, userRole, roleLoading, user } = useAuthStore()
    const isAuthenticated = !!user

    useEffect(() => {
        // Only redirect if we're not loading and there's no session
        if (!isLoading && !isAuthenticated) {
            navigate('/login', { replace: true })
            return;
        }

        // If we have a session but no role (and not loading), redirect to onboarding
        if (isAuthenticated && !roleLoading && userRole === null) {
            console.log('🔄 ProtectedComp: User has session but no role, redirecting to onboarding');
            navigate('/onboarding', { replace: true })
            return;
        }

        // Check role-based access
        if (allowedRoles && userRole && !allowedRoles.includes(userRole)) {
            // Redirect to appropriate dashboard based on user's actual role
            const redirectPath = userRole === 'mentor' ? '/mentor-dashboard' : '/mentee-dashboard';
            console.log('🔄 ProtectedComp: Wrong role for this page, redirecting to:', redirectPath);
            navigate(redirectPath, { replace: true })
            return;
        }
    }, [navigate, isAuthenticated, isLoading, userRole, roleLoading, allowedRoles])

    // Show loading while authentication state is being determined
    if (isLoading || roleLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-2 text-muted-foreground">Loading...</p>
                </div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return null
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectedComp
