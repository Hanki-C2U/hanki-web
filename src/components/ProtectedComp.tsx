import React, { useEffect, type PropsWithChildren } from 'react'
import { useNavigate } from 'react-router'
import useSessionStore from '../stateStore/useSessionStore'
function ProtectedComp({children}:PropsWithChildren) {
    const navigate = useNavigate()
    const { session, isLoading, isAuthenticated } = useSessionStore()

    useEffect(() => {
        // Only redirect if we're done loading and user is not authenticated
        if (!isLoading && !isAuthenticated && !session) {
            navigate('/login', { replace: true })
        }
    }, [navigate, session, isLoading, isAuthenticated])

    // Show loading while authentication state is being determined
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-2 text-muted-foreground">Loading...</p>
                </div>
            </div>
        )
    }

    // If not authenticated after loading is complete, don't render children
    // (the useEffect will handle navigation)
    if (!isAuthenticated || !session) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-muted-foreground">Redirecting to login...</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectedComp
