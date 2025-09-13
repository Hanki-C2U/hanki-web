import { useEffect, type PropsWithChildren } from 'react'
import { useNavigate } from 'react-router'
import { useAuthStore } from '../store/authStore'

interface ProtectedCompProps extends PropsWithChildren {
  allowedRoles?: ('mentor' | 'mentee')[];
}

function ProtectedComp({ children, allowedRoles }: ProtectedCompProps) {
    const navigate = useNavigate()
    const { isLoading, userRole, roleLoading, user, hasHydrated } = useAuthStore()
    const isAuthenticated = !!user

    useEffect(() => {
        // Only make navigation decisions after hydration is complete
        if (hasHydrated) {
            // Only redirect if we're not loading and there's no session
            if (!isLoading && !isAuthenticated) {
                navigate('/login', { replace: true })
            }
            // If we have a session but no role (and not loading), redirect to onboarding
            else if (isAuthenticated && !roleLoading && userRole === null) {
                console.log('🔄 ProtectedComp: User has session but no role, redirecting to onboarding');
                navigate('/onboarding', { replace: true })
            }
            // Check role-based access
            else if (allowedRoles && userRole && !allowedRoles.includes(userRole)) {
                // Redirect to appropriate dashboard based on user's actual role
                const redirectPath = userRole === 'mentor' ? '/mentor-dashboard' : '/mentee-dashboard';
                console.log('🔄 ProtectedComp: Wrong role for this page, redirecting to:', redirectPath);
                navigate(redirectPath, { replace: true })
            }
        }
    }, [navigate, isAuthenticated, isLoading, userRole, roleLoading, allowedRoles, hasHydrated])

    // Show loading while authentication state is being determined or during hydration
    if (!hasHydrated || isLoading || roleLoading) {
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
