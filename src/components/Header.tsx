import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
      isActive ? 'text-emerald-600 font-semibold underline' : ''
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
      isActive ? 'text-emerald-600 font-semibold bg-emerald-50' : ''
    }`;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/">
                <h1 className="text-2xl font-bold text-emerald-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1">
                  SkillsConnect Rwanda
                </h1>
              </NavLink>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/problem" className={navLinkClass}>
                  The Problem
                </NavLink>
              </li>
              <li>
                <NavLink to="/how-it-works" className={navLinkClass}>
                  How It Works
                </NavLink>
              </li>
              <li>
                <NavLink to="/why-rwanda" className={navLinkClass}>
                  Why Rwanda
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink 
              to="/signin" 
              className="text-emerald-600 hover:text-emerald-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sign In
            </NavLink>
            <NavLink 
              to="/get-started" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get Started
            </NavLink>
          </div>

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
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4" role="menu">
              <NavLink
                to="/"
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/problem"
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                The Problem
              </NavLink>
              <NavLink
                to="/how-it-works"
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </NavLink>
              <NavLink
                to="/why-rwanda"
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Why Rwanda
              </NavLink>
              <div className="pt-4 pb-2 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <NavLink 
                    to="/signin" 
                    className="text-emerald-600 hover:text-emerald-700 px-3 py-2 rounded-md text-base font-medium text-left transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </NavLink>
                  <NavLink 
                    to="/get-started" 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
