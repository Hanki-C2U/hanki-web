import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { User, LogOut, Home } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import { supabasase } from "../supabase_creds/supabase";
import { getProfilePictureUrl } from "../utils/profilePicture";

export default function AuthHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>('User');
  const navigate = useNavigate();
  const { userRole, user, signOut } = useAuthStore();

  // Fetch user profile data from database
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user?.id || !userRole) return;

      try {
        if (userRole === 'mentee') {
          const { data: menteeData, error } = await supabasase
            .from('mentee')
            .select('first_name, last_name')
            .eq('supabaseId', user.id)
            .single();

          if (menteeData && !error) {
            setUserName(`${menteeData.first_name} ${menteeData.last_name}`);
          }
        } else if (userRole === 'mentor') {
          const { data: mentorData, error } = await supabasase
            .from('mentor')
            .select('first_name, last_name')
            .eq('supabaseId', user.id)
            .single();

          if (mentorData && !error) {
            setUserName(`${mentorData.first_name} ${mentorData.last_name}`);
          }
        }

        // Fetch profile picture from Supabase Storage
        const profilePicUrl = await getProfilePictureUrl(user.id, userRole);
        setProfilePicture(profilePicUrl);

      } catch (error) {
        console.error('Error fetching user profile for header:', error);
        // Fallback to auth data
        setUserName(user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User');
        setProfilePicture(user?.user_metadata?.picture || null);
      }
    };

    fetchUserProfile();
  }, [user?.id, userRole]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const navigateToDashboard = () => {
    navigate(userRole === 'mentor' ? '/mentor-dashboard' : '/mentee-dashboard');
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              ATLAS
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/discover-mentors" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium">
              Find Mentors
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium">
              Resources
            </Link>
          </nav>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-3 focus:outline-none"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span className="text-sm font-medium text-gray-700 hidden sm:block">
                {userName}
              </span>
              <div className="h-8 w-8 rounded-full overflow-hidden bg-emerald-100 flex items-center justify-center">
                {profilePicture ? (
                  <img
                    src={profilePicture}
                    alt={`${userName}'s profile`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="h-5 w-5 text-emerald-600" />
                )}
              </div>
            </button>

            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <div className="py-1" role="none">
                  <button
                    onClick={navigateToDashboard}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Dashboard
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
