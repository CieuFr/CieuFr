"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Home
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/articles"
              activeProps={{ className: "text-blue-600 dark:text-blue-400" }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Articles
            </Link>
            <Link
              to="/projects"
              activeProps={{ className: "text-blue-600 dark:text-blue-400" }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projets
            </Link>
            <Link
              to="/shaders"
              activeProps={{ className: "text-blue-600 dark:text-blue-400" }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Shaders
            </Link>
            <Link
              to="/resume"
              activeProps={{ className: "text-blue-600 dark:text-blue-400" }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Resume
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
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
                  className="block h-6 w-6"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 shadow-lg">
            <Link
              to="/articles"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{
                className:
                  "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Articles
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{
                className:
                  "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Projets
            </Link>
            <Link
              to="/shaders"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{
                className:
                  "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Shaders
            </Link>
            <Link
              to="/resume"
              onClick={() => setIsMenuOpen(false)}
              activeProps={{
                className:
                  "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
