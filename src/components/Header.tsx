import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 
                className="text-2xl font-bold text-emerald-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1" 
                onClick={() => scrollToSection('hero')}
                onKeyDown={(e) => e.key === 'Enter' && scrollToSection('hero')}
                tabIndex={0}
                role="button"
                aria-label="Go to homepage"
              >
                SkillsConnect Rwanda
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
            <ul className="flex items-center space-x-8">
              <li>
                <button
                  onClick={() => scrollToSection('who-its-for')}
                  className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  aria-label="Navigate to Who It's For section"
                >
                  Who It's For
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('mentor-showcase')}
                  className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  aria-label="Navigate to Mentors section"
                >
                  Mentors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  aria-label="Navigate to How It Works section"
                >
                  How it works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  aria-label="Navigate to Success Stories section"
                >
                  Success Stories
                </button>
              </li>
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-emerald-600 hover:text-emerald-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Get Started
            </button>
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
              <button
                onClick={() => scrollToSection('who-its-for')}
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-500"
                role="menuitem"
                aria-label="Navigate to Who It's For section"
              >
                Who It's For
              </button>
              <button
                onClick={() => scrollToSection('mentor-showcase')}
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-500"
                role="menuitem"
                aria-label="Navigate to Mentors section"
              >
                Mentors
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-500"
                role="menuitem"
                aria-label="Navigate to How It Works section"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-500"
                role="menuitem"
                aria-label="Navigate to Success Stories section"
              >
                Success Stories
              </button>
              <div className="pt-4 pb-2 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <button className="text-emerald-600 hover:text-emerald-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 text-left">
                    Sign In
                  </button>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
