import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Mon Site
            </Link>
          </div>
          <nav className="flex space-x-8">
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
        </div>
      </div>
    </header>
  );
}
