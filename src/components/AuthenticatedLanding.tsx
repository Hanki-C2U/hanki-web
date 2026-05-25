import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { User, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { startDemoSession } from "../lib/demoSession";

export default function AuthenticatedLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userType, userName, userImage, signOut } = useAuth();

  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
  };

  const openDemo = () => {
    startDemoSession();
    navigate("/auth/callback");
  };

  const navigateToDashboard = () => {
    navigate(userType === 'mentor' ? '/mentor-dashboard' : '/mentee-dashboard');
  };

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

  return (
    <header className="bg-slate-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                type="button"
                className="text-2xl font-bold text-emerald-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
                onClick={() => scrollToSection('hero')}
                aria-label="Go to homepage"
              >
                ATLAS
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
            <ul className="flex items-center space-x-8">
              <li>
                <button
                  onClick={() => scrollToSection('who-its-for')}
                  className="text-gray-300 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-emerald-600 "
                  aria-label="Navigate to Who It's For section"
                >
                  Who It's For
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('mentor-showcase')}
                  className="text-gray-300 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-emerald-600"
                  aria-label="Navigate to Mentors section"
                >
                  Mentors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-300 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-emerald-600"
                  aria-label="Navigate to How It Works section"
                >
                  How it works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-emerald-600"
                  aria-label="Navigate to Success Stories section"
                >
                  Success Stories
                </button>
              </li>
            </ul>
          </nav>

          {/* CTA Buttons or User Menu */}
          {userType ? (
            <div className="hidden md:flex items-center">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-3 focus:outline-none"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <span className="text-sm font-medium text-gray-300">
                    {userName || 'User'}
                  </span>
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-emerald-100 flex items-center justify-center">
                    {userImage ? (
                      <img
                        src={userImage}
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
          ) : (
            <div className="hidden md:flex items-center">
              <button
                type="button"
                onClick={openDemo}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md text-sm font-medium"
              >
                Explore demo
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none focus:text-emerald-600 focus:ring-2 focus:ring-emerald-500 p-2 rounded-md"
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
          <div className="md:hidden bg-slate-800 border-b border-slate-700" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mb-4 border border-slate-700" role="menu">
              <button
                onClick={() => scrollToSection('who-its-for')}
                className="text-gray-200 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:text-emerald-400"
                role="menuitem"
                aria-label="Navigate to Who It's For section"
              >
                Who It's For
              </button>
              <button
                onClick={() => scrollToSection('mentor-showcase')}
                className="text-gray-200 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-400"
                role="menuitem"
                aria-label="Navigate to Mentors section"
              >
                Mentors
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-200 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-400"
                role="menuitem"
                aria-label="Navigate to How It Works section"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-200 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-400"
                role="menuitem"
                aria-label="Navigate to Success Stories section"
              >
                Success Stories
              </button>

              {userType ? (
                <div className="pt-4 pb-2 border-t border-slate-600">
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={navigateToDashboard}
                      className="hover:bg-emerald-600/20 text-emerald-400 hover:text-emerald-300 px-3 py-2 rounded-md text-base font-medium text-left"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="hover:bg-emerald-600/20 text-emerald-400 hover:text-emerald-300 px-3 py-2 rounded-md text-base font-medium text-left"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="pt-4 pb-2 border-t border-slate-600">
                  <button
                    type="button"
                    onClick={openDemo}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-md text-base font-medium"
                  >
                    Explore demo
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}