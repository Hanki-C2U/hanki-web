import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-emerald-600">
                Skills Connect
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  How it works
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Success Stories
                </a>
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
              className="text-gray-700 hover:text-emerald-600 focus:outline-none focus:text-emerald-600 p-2"
              aria-label="Toggle menu"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                How it works
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Contact
              </a>
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
