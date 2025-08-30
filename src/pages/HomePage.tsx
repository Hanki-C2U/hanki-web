import { useNavigate } from 'react-router-dom'
import useSessionStore from '../stateStore/useSessionStore'

function HomePage() {
    const { user, signOut, session } = useSessionStore()
    const navigate = useNavigate()
    
    const handleSignOut = async () => {
        console.log('Logging out')
        await signOut()
        navigate('/login', { replace: true })
    }
    
    console.log(session)
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 p-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Welcome to SkillsConnect</h1>
                
                {user && (
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4">Hello, { user.email}!</h2>
                        <p className="text-muted-foreground">You're successfully signed in.</p>
                    </div>
                )}
                
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
