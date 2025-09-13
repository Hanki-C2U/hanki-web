import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { User, LogOut, Home } from "lucide-react";
import { getProfilePictureUrl } from "../utils/profilePicture";
import { useAuthStore } from "../store/authStore";
import { supabasase } from "../supabase_creds/supabase";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  const { user, userRole, signOut } = useAuthStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>('User');
  const navigate = useNavigate();
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
        // Fetch profile picture from Supabase Storage bucket
        const profilePicUrl = await getProfilePictureUrl(user.id, userRole);
        setProfilePicture(profilePicUrl);
      } catch (error) {
        setUserName(user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User');
        setProfilePicture(null);
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
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E")`,
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1
                className="text-2xl font-bold text-emerald-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1 hover:text-emerald-300 transition-colors"
                onClick={() => scrollToSection('hero')}
                onKeyDown={(e) => e.key === 'Enter' && scrollToSection('hero')}
                tabIndex={0}
                role="button"
                aria-label="Go to homepage"
              >
                ATLAS
              </h1>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
            <ul className="flex items-center space-x-8">
              <li>
                <button
                  onClick={() => scrollToSection('who-its-for')}
                  className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-emerald-400 transition-colors"
                  aria-label="Navigate to Who It's For section"
                >
                  Who It's For
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('mentor-showcase')}
                  className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-emerald-400 transition-colors"
                  aria-label="Navigate to Mentors section"
                >
                  Mentors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-emerald-400 transition-colors"
                  aria-label="Navigate to How It Works section"
                >
                  How it works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-emerald-400 transition-colors"
                  aria-label="Navigate to Success Stories section"
                >
                  Success Stories
                </button>
              </li>
            </ul>
          </nav>

          {/* Profile Dropdown if signed in, else CTA buttons */}
          {user && userRole ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-3 focus:outline-none"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <span className="text-sm font-medium text-gray-200 hidden sm:block">
                  {userName}
                </span>
                <div className="h-8 w-8 rounded-full overflow-hidden bg-emerald-900 flex items-center justify-center">
                  {profilePicture ? (
                    <img
                      src={profilePicture}
                      alt={`${userName}'s profile`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User className="h-5 w-5 text-emerald-400" />
                  )}
                </div>
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 border border-slate-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <div className="py-1" role="none">
                    <button
                      onClick={navigateToDashboard}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-slate-700"
                      role="menuitem"
                    >
                      <Home className="mr-2 h-4 w-4" />
                      Dashboard
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-slate-700"
                      role="menuitem"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link to='login' className="text-emerald-400 hover:text-emerald-300 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Sign In
              </Link>
              <Link to='signup' className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105">
                Get Started
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-emerald-400 focus:outline-none focus:text-emerald-400 focus:ring-2 focus:ring-emerald-500 p-2 rounded-md transition-colors"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-700/50 rounded-lg mb-4 border border-slate-600" role="menu">
              <button
                onClick={() => scrollToSection('who-its-for')}
                className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:text-emerald-400 transition-colors"
                role="menuitem"
                aria-label="Navigate to Who It's For section"
              >
                Who It's For
              </button>
              <button
                onClick={() => scrollToSection('mentor-showcase')}
                className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                role="menuitem"
                aria-label="Navigate to Mentors section"
              >
                Mentors
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                role="menuitem"
                aria-label="Navigate to How It Works section"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                role="menuitem"
                aria-label="Navigate to Success Stories section"
              >
                Success Stories
              </button>
              <div className="pt-4 pb-2 border-t border-slate-600">
                <div className="flex flex-col space-y-2">
                  <Link to='login' className="hover:bg-emerald-600/20 text-emerald-400 hover:text-emerald-300 px-3 py-2 rounded-md text-base font-medium text-left transition-colors">
                    Sign In
                  </Link>
                  <Link to='signup' className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}