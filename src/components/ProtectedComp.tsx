import React, { useEffect, type PropsWithChildren } from 'react'
import { useNavigate } from 'react-router'
import useSessionStore from '../stateStore/useSessionStore'
function ProtectedComp({children}:PropsWithChildren) {
    const navigate = useNavigate()
    const { session, isLoading } = useSessionStore()


    useEffect(()=>{
        // Only redirect if we're not loading and there's no session
        if (!isLoading && !session) {
            navigate('/login', { replace: true })
        }
    },[navigate, session, isLoading])

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

    if (!session) {
        return null
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectedComp
