import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuthStore } from '../store/authStore'
import { supabasase } from '../supabase_creds/supabase'

function HomePage() {
    const { user, session, signOut, userRole, roleLoading } = useAuthStore()
    const navigate = useNavigate()
    const [debugInfo, setDebugInfo] = useState<any>(null)
    const [checking, setChecking] = useState(false)
    
    const handleSignOut = async () => {
        console.log('Logging out')
        await signOut()
        navigate('/login', { replace: true })
    }

    const checkDatabase = async () => {
        if (!user?.id) return;
        
        setChecking(true)
        try {
            console.log('🔍 Manually checking database for user:', user.id)
            
            // Check all mentors
            const { data: allMentors, error: mentorError } = await supabasase
                .from('mentor')
                .select('*')
            
            // Check all mentees  
            const { data: allMentees, error: menteeError } = await supabasase
                .from('mentee')
                .select('*')

            // Check if current user exists in mentor table
            const { data: userMentor, error: userMentorError } = await supabasase
                .from('mentor')
                .select('*')
                .eq('supabaseId', user.id)
                .single()

            // Check if current user exists in mentee table
            const { data: userMentee, error: userMenteeError } = await supabasase
                .from('mentee')
                .select('*')
                .eq('supabaseId', user.id)
                .single()

            setDebugInfo({
                userId: user.id,
                userEmail: user.email,
                allMentors: allMentors || [],
                allMentees: allMentees || [],
                userMentor,
                userMentee,
                mentorError,
                menteeError,
                userMentorError,
                userMenteeError,
                currentUserRole: userRole,
                roleLoading
            })
        } catch (error) {
            console.error('Error checking database:', error)
        } finally {
            setChecking(false)
        }
    }

    useEffect(() => {
        if (user?.id) {
            checkDatabase()
        }
    }, [user?.id])
    
    console.log(session)
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 p-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Welcome to SkillsConnect - DEBUG MODE</h1>
                
                {user && (
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4">Hello, {user.email}!</h2>
                        <p className="text-muted-foreground">You're successfully signed in.</p>
                        <p className="text-sm text-gray-600 mt-2">
                            Current Role: <strong>{userRole || 'null'}</strong> 
                            {roleLoading && ' (loading...)'}
                        </p>
                    </div>
                )}

                {/* Debug Information */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4">🔧 Debug Information</h3>
                    <button 
                        onClick={checkDatabase}
                        disabled={checking}
                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
                    >
                        {checking ? 'Checking...' : 'Refresh Database Check'}
                    </button>
                    
                    {debugInfo && (
                        <div className="bg-white p-4 rounded border max-h-96 overflow-y-auto">
                            <pre className="text-xs">
                                {JSON.stringify(debugInfo, null, 2)}
                            </pre>
                        </div>
                    )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">Find a Mentor</h3>
                        <p className="text-muted-foreground">Connect with experienced professionals in your field.</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">Become a Mentor</h3>
                        <p className="text-muted-foreground">Share your expertise and help others grow.</p>
                    </div>
                </div>
                <button 
                    onClick={handleSignOut}
                    className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default HomePage
