"use client";

import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to add background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-1"
          : "bg-transparent py-3"
      }`}
    >
      <div className="mx-auto px-4">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${scrolled ? "h-10" : "h-14"}`}
        >
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={`font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 ${
                scrolled ? "text-base" : "text-lg"
              }`}
            >
              Mon Site
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/articles"
              activeProps={{
                className: "text-blue-600 dark:text-blue-400 after:scale-x-100",
              }}
              className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${
                scrolled ? "text-xs" : "text-sm"
              }`}
            >
              Articles
            </Link>
            <Link
              to="/projects"
              activeProps={{
                className: "text-blue-600 dark:text-blue-400 after:scale-x-100",
              }}
              className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${
                scrolled ? "text-xs" : "text-sm"
              }`}
            >
              Projets
            </Link>
            <Link
              to="/shaders"
              activeProps={{
                className: "text-blue-600 dark:text-blue-400 after:scale-x-100",
              }}
              className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${
                scrolled ? "text-xs" : "text-sm"
              }`}
            >
              Shaders
            </Link>
            <Link
              to="/resume"
              activeProps={{
                className: "text-blue-600 dark:text-blue-400 after:scale-x-100",
              }}
              className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${
                scrolled ? "text-xs" : "text-sm"
              }`}
            >
              Resume
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                scrolled ? "p-1" : "p-1.5"
              }`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!isMenuOpen ? (
                <svg
                  className={`block transition-all duration-300 ${scrolled ? "h-4 w-4" : "h-5 w-5"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className={`block transition-all duration-300 ${scrolled ? "h-4 w-4" : "h-5 w-5"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg">
            <Link
              to="/articles"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{
                className:
                  "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
              }}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
            >
              Articles
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{
                className:
                  "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
              }}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
            >
              Projets
            </Link>
            <Link
              to="/shaders"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{
                className:
                  "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
              }}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
            >
              Shaders
            </Link>
            <Link
              to="/resume"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{
                className:
                  "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
              }}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
